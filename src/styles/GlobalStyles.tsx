import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing:border-box
  }
  #root {
    width: 100%;
    height: 100%;
  }
  .App {
    width: 100%;
    height: 100%;
  }

  .ant-layout {
    height: 100%;
  }
  .fetching {
    position: fixed;
    top: 0;
    right: 0;
  }
`;

export default GlobalStyles;
