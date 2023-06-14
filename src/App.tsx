import { ThemeProvider } from "styled-components"

import theme from './theme';
import { Header } from "./components/Header";


import GlobalStyle from './theme/global.ts';
import { CartContextProvider } from "./contexts/CartContext.tsx";
import { Router } from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <Header />
        <Router />
      </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
