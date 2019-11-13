import { css } from '@emotion/core';
import fontImports from './fontImports';

export default css`
    ${fontImports}

    * {
        box-sizing: border-box;
        color: currentColor;
    }

    html {
        -webkit-font-smoothing: antialiased;
        height: 100%;
        overflow-x: hidden;
    }

    body {
        margin: 0;
    }

    svg {
        width: auto;
        height: auto;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    figure,
    p,
    pre {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: inherit;
        font-weight: inherit;
    }

    ol,
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
        display: block;
    }

    *,
    *::before,
    *::after {
        border-width: 0;
        border-style: solid;
        border-color: inherit;
    }
`;
