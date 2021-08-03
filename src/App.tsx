import React, { Fragment } from "react";
import './i18n'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalStyles } from './styles';

import { InfinitePeople, InfiniteSpecies } from './components'


const queryClient = new QueryClient();
const APP_TITLE = 'INFINITE SWAPI';

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <div className="App">
        <h3>{APP_TITLE}</h3>
        <InfinitePeople />
        {/* <InfiniteSpecies/> */}
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  )

}

export default App;
