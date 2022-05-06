import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#f7f7f7",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};
export const GlobalStyles = createGlobalStyle`body {
    background-color: ${(props) => props.theme.body};
}`;
