import React, { useState, createContext, SetStateAction, ReactNode, useContext } from "react";

interface Props {
  children?: ReactNode;
}

type PageOverlayContextState = {
  pageOverlayActive: boolean;
  setPageOverlayActive: React.Dispatch<SetStateAction<boolean>>;
};

const contextValues: PageOverlayContextState = {
  pageOverlayActive: false,
  setPageOverlayActive: () => {},
};

export const PageOverlayCtx = createContext<PageOverlayContextState>(contextValues);

export const usePageOverlayContext = () => {
  const context = useContext(PageOverlayCtx);

  if (context === undefined) {
    throw new Error("usage of usePageOverlayContext not wrapped in `PageOverlayContext`.");
  }

  return context;
};
const PageOverlayContext = ({ children }: Props) => {
  const [pageOverlayActive, setPageOverlayActive] = useState(contextValues.pageOverlayActive);
  return (
    <PageOverlayCtx.Provider value={{ pageOverlayActive, setPageOverlayActive }}>
      {children}
    </PageOverlayCtx.Provider>
  );
};
export default PageOverlayContext;
