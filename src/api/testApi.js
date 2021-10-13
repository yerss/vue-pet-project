import api from "@/api/api";

const URLs = {
  testUrl: "",
};

export const fetchTest = () => {
  return api.get(URLs.testUrl);
};

// const addService = obj => {
//   return api.post(URLS.serviceUrl, obj, {});
// };
//
// const editService = obj => {
//   return api.put(URLS.serviceUrl + "/" + obj.id, obj, {});
// };
//
// const deleteService = id => {
//   return api.delete(URLS.serviceUrl + "/" + id, { id: id }, {});
// };
