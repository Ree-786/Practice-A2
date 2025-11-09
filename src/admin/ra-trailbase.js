export const createTrailbaseProvider = (url) => {
  const api = `${url}/_/api/table`;

  return {
    getList: async (resource, params) => {
      const res = await fetch(`${api}/${resource}`);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      return { data, total: data.length };
    },

    getOne: async (resource, params) => {
      const res = await fetch(`${api}/${resource}/${params.id}`);
      const data = await res.json();
      return { data };
    },

    create: async (resource, params) => {
      const res = await fetch(`${api}/${resource}`, {
        method: "POST",
        body: JSON.stringify(params.data),
      });
      const data = await res.json();
      return { data };
    },

    delete: async (resource, params) => {
      await fetch(`${api}/${resource}/${params.id}`, {
        method: "DELETE",
      });
      return { data: { id: params.id } };
    },
  };
};
