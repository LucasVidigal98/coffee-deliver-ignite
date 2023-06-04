import { ThemeProvider } from "styled-components"

import theme from './theme';
import { Home } from "./pages/Home";
import { Header } from "./components/Header";


import GlobalStyle from './theme/global.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
