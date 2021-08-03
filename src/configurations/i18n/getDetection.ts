import { DETECTION } from "../../constants/translations";

const {
  LOOKUP_QUERY_STRING,
  LOOKUP_COOKIE,
  LOOKUP_LOCAL_STORAGE,
  LOOKUP_FROM_PATH_INDEX,
  LOOKUP_FROM_SUBDOMAIN_INDEX,
  CACHES,
  ORDER,
} = DETECTION;

const getDetection = {
  lookupQuerystring: LOOKUP_QUERY_STRING,
  lookupCookie: LOOKUP_COOKIE,
  lookupLocalStorage: LOOKUP_LOCAL_STORAGE,
  lookupFromPathIndex: LOOKUP_FROM_PATH_INDEX,
  lookupFromSubdomainIndex: LOOKUP_FROM_SUBDOMAIN_INDEX,
  caches: CACHES,
  order: ORDER,
};

export default getDetection;
