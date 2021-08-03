import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";
import Person from "./Person";

const INITIAL_URL = "https://swapi.dev/api/people/";
const PEOPLE_QUERY_KEY = 'sw-people';
const INITIAL_PAGE_PARAM = INITIAL_URL;

function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError, error } = useInfiniteQuery(
    PEOPLE_QUERY_KEY,
    ({ pageParam = INITIAL_PAGE_PARAM }) => fetchUrl(pageParam),
    { getNextPageParam: (lastPage) => lastPage.next || undefined }
  )

  const fetchUrl = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  if (isLoading) return <div>{'Loading...'}</div>
  if (isError) return <div>{`Error! ${error}`}</div>

  return (
    <>
      {!!isFetching && <div className={'fetching'}>{'Fetching...'}</div>}
      <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
        <div>
          {data?.pages.map(({ results }) => {
            return results.map((person: any) => {
              return <Person key={person.name} name={person.name} hairColor={person.hair_color} eyeColor={person.eye_color} />
            })
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default InfinitePeople;