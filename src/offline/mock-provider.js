import snapshot from "./snapshot.json";

export function createMockProvider() {
  const db = JSON.parse(JSON.stringify(snapshot)); // clone

  const dataProvider = {
    getList: async (resource) => {
      const data = db[resource] || [];
      return { data, total: data.length };
    },

    getOne: async (resource, params) => {
      const item = (db[resource] || []).find((d) => d.id == params.id);
      return { data: item };
    },

    create: async (resource, params) => {
      const newItem = { id: Date.now(), ...params.data };
      db[resource].push(newItem);
      return { data: newItem };
    },

    update: async (resource, params) => {
      return { data: params.data };
    },

    delete: async (resource, params) => {
      return { data: params.previousData };
    },
  };

  const authProvider = {
    login: async () => Promise.resolve(),
    logout: async () => Promise.resolve(),
    checkAuth: async () => Promise.resolve(),
    getPermissions: async () => Promise.resolve("admin"),
  };

  return { dataProvider, authProvider };
}
