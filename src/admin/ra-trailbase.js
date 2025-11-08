import { fetchUtils } from "react-admin";

export async function createTrailbaseProvider(apiUrl) {
  const httpClient = fetchUtils.fetchJson;

  const dataProvider = {
    getList: (resource, params) =>
      httpClient(`${apiUrl}/${resource}`).then(({ json }) => ({
        data: json,
        total: json.length,
      })),

    getOne: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
        data: json,
      })),

    create: (resource, params) =>
      httpClient(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: json,
      })),

    update: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: json,
      })),

    delete: (resource, params) =>
      httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: "DELETE",
      }).then(() => ({
        data: params.previousData,
      })),
  };

  const authProvider = {
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
  };

  return { dataProvider, authProvider };
}
