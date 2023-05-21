import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: #fff;
  -webkit-font-smoothing: antialiased;
}

body, a, input, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none;

}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}

/*
.box {
  width: 100px;
  height: 100px;
  background-color: blue;
  transition: width 2s;
}

.box:hover {
  width: 300px;
}
*/
`;
