import { createGlobalStyle } from "styled-components";
import cocogoose from "./fonts/cocogoose.ttf";
import cocogooseBold from "./fonts/cocogoose-bold.ttf";
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'cocogoose';
  src: url(${cocogoose}) format('truetype'),url(${cocogooseBold}) format('truetype');
  font-weight: 300;
  font-style: normal;
}
`;

export default FontStyles;