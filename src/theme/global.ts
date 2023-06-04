import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }
`;