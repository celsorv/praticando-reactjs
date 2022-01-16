/*
    Estilo Global usando styled-components

    Este é importado no App principal e incluído como uma 
    tag (componente) dentro do return.
*/

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    // adicione outras regras que desejar!

`;
