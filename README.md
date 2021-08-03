# client-starter

-- npm install --save --legacy-peer-deps => react-infinite-scroller does not support React 17

##### useInfiniteQuery

-- useInfiniteQuery returns:

- fetchNextPage - function to call if user needs more data;
- hasNextPage - getNextPageParam, undefined;
- isFetchingNextPage - for displaying a loader spinner;

##### TypeScript

- GENERIC

  - function identity<T>(value: T): T {
    return value
    }

    // 🚨 no need to provide the generic
    let result = identity<number>(23)

    // ⚠️ or to annotate the result
    let result: number = identity(23)

    // 😎 infers correctly to `string`
    let result = identity('react-query')
