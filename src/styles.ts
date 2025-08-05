import { createGlobalStyle } from 'styled-components'

const cores = {
  rosa: '#E66767',
  rosaClaro: '#FFF8F2',
  cinzaEscuro: '#333333',
  bege: '#FFEBD9'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.rosaClaro};
    color: ${cores.rosa};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

`
export { GlobalCss, cores }
