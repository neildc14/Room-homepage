import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    dark_grey: "hsl(0, 0%, 63%)",
    white: "hsl(0, 0%, 100%)",
    very_dark_grey: "hsl(0, 0%, 27%)",
  },
  fonts: {
    heading: `'League Spartan', sans-serif`,
    body: `'League Spartan', sans-serif`,
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
