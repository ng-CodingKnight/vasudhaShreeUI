import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Montserrat', sans-serif;
}

 html, body {
     overflow-x: hidden;
 }

 a:hover{
     text-decoration : none;
     color: #fff;
 }
`;

export default GlobalStyles;