import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components"; // themes를 사용하기 위해 ThemeProvider를 import

// theme 정의 #2.7
const darkTheme = {
  textColor: "white",
  backgroundColor: "black",
};
const lightTheme = {
  textColor: "black",
  backgroundColor: "white",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
/*
19. styled-components의 ThemeProvider를 활용하여 Themes 설정하기 #2.7
*/
