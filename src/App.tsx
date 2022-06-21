import React from "react";
import GlobalStyles from "./themes/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { theme } from "./themes/MainTheme";
import PageOverlayContext from "./context/PageOverlayContext";
import { ContactFormContext, NavItemStateContext } from "./context";
import { PageTemplate } from "./templates/PageTemplate";
import { ROUTE } from "./routes";
import { OutsourcePage } from "./pages/OutsourcePage";
import { HomePage } from "./pages/HomePage";
// import { AndroidPage } from "./pages/AndroidPage";

function App() {
  return (
    <ContactFormContext>
      <NavItemStateContext>
        <PageOverlayContext>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <GlobalStyles />
              <PageTemplate>
                <Routes>
                  <Route path={ROUTE.HOME_PAGE} element={<HomePage />} />
                  <Route path={ROUTE.OUTSOURCE} element={<OutsourcePage />} />
                  {/* <Route path={ANDROID} element={<AndroidPage />} /> */}
                </Routes>
              </PageTemplate>
            </BrowserRouter>
          </ThemeProvider>
        </PageOverlayContext>
      </NavItemStateContext>
    </ContactFormContext>
  );
}

export default App;
