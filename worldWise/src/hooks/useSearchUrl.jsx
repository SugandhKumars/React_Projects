import { useSearchParams } from "react-router-dom";

function useSearchUrl() {
  const [search, setSarch] = useSearchParams();

  let lat = search.get("lat");
  let lang = search.get("lang");
  return [lat, lang];
}

export default useSearchUrl;
