/* eslint-disable import/prefer-default-export */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const global = css`
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  //   box {
  //     -ms-overflow-style: none; /* IE and Edge */
  //     scrollbar-width: none; /* Firefox */
  // }
  // .box::-webkit-scrollbar {
  //     display: none; /* Chrome, Safari, Opera*/
  // }
`;
