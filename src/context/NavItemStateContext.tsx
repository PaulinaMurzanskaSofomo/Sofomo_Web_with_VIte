import React, { useState, createContext, FC, ReactNode, SetStateAction, useContext } from "react";

interface Props {
  children?: ReactNode;
}

type NavItemContextState = {
  navItemActive: boolean;
  setNavItemActive: React.Dispatch<SetStateAction<boolean>>;
};

const contextValues: NavItemContextState = {
  navItemActive: false,
  setNavItemActive: () => {},
};

export const NavItemStateCtx = createContext<NavItemContextState>(contextValues);

export const useNavItemStateContext = () => {
  const context = useContext(NavItemStateCtx);

  if (context === undefined) {
    throw new Error("usage of useNavItemStateContext not wrapped in `NavItemStateContext`.");
  }

  return context;
};

const NavItemStateContext = ({ children }: Props) => {
  const [navItemActive, setNavItemActive] = useState(contextValues.navItemActive);
  return (
    <NavItemStateCtx.Provider
      value={{
        navItemActive,
        setNavItemActive,
      }}
    >
      {children}
    </NavItemStateCtx.Provider>
  );
};
export default NavItemStateContext;
