import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

#root {
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, button, input {
  border: 0;
  outline: 0;

  font-family: 'Roboto', sans-serif;
}
`;
