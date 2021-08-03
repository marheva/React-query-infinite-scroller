import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import Species from "./Species";

const INITIAL_URL = "https://swapi.dev/api/species/";

const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

function InfiniteSpecies() {
  // TODO: get data for InfiniteScroll via React Query
  return <InfiniteScroll loadMore={() => { }} />;
}

export default InfiniteSpecies;
