const LOOKUP_QUERY_STRING = "lng";
const LOOKUP_COOKIE = "i18next";
const LOOKUP_LOCAL_STORAGE = "i18nextLng";
const LOOKUP_FROM_PATH_INDEX = 0;
const LOOKUP_FROM_SUBDOMAIN_INDEX = 0;
const CACHES = ["localStorage", "cookie"];
const ORDER = ["querystring", "cookie", "localStorage", "navigator", "htmlTag", "path", "subdomain"];

export {
  LOOKUP_QUERY_STRING,
  LOOKUP_COOKIE,
  LOOKUP_LOCAL_STORAGE,
  LOOKUP_FROM_PATH_INDEX,
  LOOKUP_FROM_SUBDOMAIN_INDEX,
  CACHES,
  ORDER,
};
