import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.colorBaseBackground};
        font: ${props => props.theme.fontTextMr};
        color: ${props => props.theme.colorBaseText};
    }

    input {
        all: unset;
        background-color: ${props => props.theme.colorBaseInput};
        font: ${props => props.theme.fontTextMr};
        color: ${props => props.theme.colorBaseText};

        &::placeholder {
            color: ${props => props.theme.colorBaseLabel};
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }
`