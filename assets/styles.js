import {css, Global} from "@emotion/core";
import React from "react";

const red = "#f9352b";

export const globalStyles =
    <Global
        styles={css`
html{
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: 1.4;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
a{
  color: grey;
  transition: color .2s;
  &:hover{
    color: ${red};
    }
}  

`}/>
;


