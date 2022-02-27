import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

#root {
  height: 100vh;

  background: linear-gradient(270deg, #13eeb6, #136fee);
    background-size: 400% 400%;

    -webkit-animation: AnimationName 7s ease infinite;
    -moz-animation: AnimationName 7s ease infinite;
    animation: AnimationName 7s ease infinite;
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

.App {
  display: grid;

  justify-content: center;

  padding-top: 8rem;
  
}

@-webkit-keyframes AnimationName {
    0%{background-position:13% 0%}
    50%{background-position:88% 100%}
    100%{background-position:13% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:13% 0%}
    50%{background-position:88% 100%}
    100%{background-position:13% 0%}
}
@keyframes AnimationName {
    0%{background-position:13% 0%}
    50%{background-position:88% 100%}
    100%{background-position:13% 0%}
}
`;
