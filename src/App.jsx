import { useState, useEffect } from "react";
import { Admin, Resource } from "react-admin";
import { createTrailbaseProvider } from "./admin/ra-trailbase";
import { createMockProvider } from "./offline/mock-provider";

// Toggle between exam API and offline mode
const USE_MOCK = false;

const TRAILBASE_URL =
  "https://special-capybara-jj4p5jgrxp4q35p6x-4000.app.github.dev/";

function App() {
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    async function load() {
      let dp, ap;

      if (USE_MOCK) {
        ({ dataProvider: dp, authProvider: ap } = createMockProvider());
      } else {
        ({ dataProvider: dp, authProvider: ap } =
          await createTrailbaseProvider(TRAILBASE_URL));
      }

      setProvider({ dataProvider: dp, authProvider: ap });
    }

    load();
  }, []);

  if (!provider) return <p>Loading...</p>;

  return (
    <Admin
      dataProvider={provider.dataProvider}
      authProvider={provider.authProvider}
    >
      <Resource name="user" />
      <Resource name="book" />
      <Resource name="genre" />
    </Admin>
  );
}

export default App;
