import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F54B01",
      light: "#F5F5F7",
    },
    secondary: {
      main: "#FFCC46",
    },
  },
});

const CustomTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  );
};

export default CustomTheme;
