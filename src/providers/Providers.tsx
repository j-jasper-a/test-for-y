"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type MainContextType = {
  closeMenus: ({
    except,
  }: {
    except?: "category" | "filter" | "user" | "locale";
  }) => void;
  categoryMenuOpen: boolean;
  setCategoryMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filterMenuOpen: boolean;
  setFilterMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userMenuOpen: boolean;
  setUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  localeMenuOpen: boolean;
  setLocaleMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSearchBarSide: "left" | "right" | "none";
  setActiveSearchBarSide: React.Dispatch<
    React.SetStateAction<"left" | "right" | "none">
  >;
};

type ProvidersProps = {
  children: ReactNode;
};

const MainContext = createContext<MainContextType | undefined>(undefined);

const Providers = ({ children }: ProvidersProps) => {
  const queryClient = new QueryClient();

  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [localeMenuOpen, setLocaleMenuOpen] = useState(false);
  const [activeSearchBarSide, setActiveSearchBarSide] = useState<
    "left" | "right" | "none"
  >("none");

  const closeMenus = ({
    except = undefined,
  }: {
    except?: "category" | "filter" | "user" | "locale";
  }) => {
    if (except !== "category") setCategoryMenuOpen(false);
    if (except !== "filter") setFilterMenuOpen(false);
    if (except !== "user") setUserMenuOpen(false);
    if (except !== "locale") setLocaleMenuOpen(false);

    if (except === undefined) {
      setCategoryMenuOpen(false);
      setFilterMenuOpen(false);
      setUserMenuOpen(false);
      setLocaleMenuOpen(false);
    }

    setActiveSearchBarSide("none");
  };

  const value = useMemo(
    () => ({
      closeMenus,
      categoryMenuOpen,
      setCategoryMenuOpen,
      filterMenuOpen,
      setFilterMenuOpen,
      userMenuOpen,
      setUserMenuOpen,
      localeMenuOpen,
      setLocaleMenuOpen,
      activeSearchBarSide,
      setActiveSearchBarSide,
    }),
    [
      categoryMenuOpen,
      filterMenuOpen,
      userMenuOpen,
      localeMenuOpen,
      activeSearchBarSide,
    ],
  );

  return (
    <MainContext.Provider value={value}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MainContext.Provider>
  );
};

const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error(
      "useMainContext() must be used within the <Providers> component.",
    );
  }
  return context;
};

export { Providers, useMainContext };
