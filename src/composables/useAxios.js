import ApiResource from "@/api/api";

export function useAxios(path) {
  const apiResource = new ApiResource(path);

  let storedData = fetch();

  function fetch() {
    return apiResource.list();
  }

  return storedData;
}
