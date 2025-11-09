import React, { useState, useEffect } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import { createTrailbaseProvider } from "./admin/ra-trailbase";

// ✅ import your new list components
import { DriverList } from "./drivers";
import { RaceList } from "./races";
import { ScoreList } from "./scores";
import { FlagBearerList } from "./flag_bearers";

const TRAILBASE_URL =
  "https://legendary-robot-jj4p75495wjwhqpqj-4000.app.github.dev";



function App() {
  const [dataProvider, setDataProvider] = useState(null);
  const [authProvider, setAuthProvider] = useState(null);

  useEffect(() => {
    async function load() {
      const providers = await createTrailbaseProvider(TRAILBASE_URL);
      setDataProvider(providers.dataProvider);
      setAuthProvider(providers.authProvider);
    }
    load();
  }, []);

  if (!dataProvider || !authProvider) return <div>Loading…</div>;

  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name="drivers" list={DriverList} />
      <Resource name="races" list={RaceList} />
      <Resource name="scores" list={ScoreList} />
      <Resource name="flag_bearers" list={FlagBearerList} />
    </Admin>
  );
}

export default App;
