import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <h1><FontAwesomeIcon icon={faGithub} /> Olá Mundo</h1>
      <input placeholder="Digite algo" />
    </ThemeProvider>
  )
}
