import { createGlobalStyle } from "styled-components";
import LTSuperiorRegular from "../../shared/assets/LTSuperior-Regular.woff2";
import LTSuperiorMedium from "../../shared/assets/LTSuperior-Medium.woff2";
import LTSuperiorBold from "../../shared/assets/LTSuperior-Bold.woff2";
import LTSuperiorSemiBold from "../../shared/assets/LTSuperior-Semi-bold.woff2";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'LTSuperior';
        src: url(${LTSuperiorRegular}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'LTSuperior';
        src: url(${LTSuperiorMedium}) format('woff2');
        font-weight: 500;
        font-style: normal;
    }   
    @font-face {
        font-family: 'LTSuperior';
        src: url(${LTSuperiorSemiBold}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }   
    @font-face {
        font-family: 'LTSuperior';
        src: url(${LTSuperiorBold}) format('woff2');
        font-weight: 900;
        font-style: normal;
    }   

    body {
        font-family: 'LTSuperior-regular', sans-serif;
    }
`;
