import * as React from "react";

type PageContextType = {
  location: string; // Current page path
};

export const PageContext = React.createContext<PageContextType>({
  location: "/",
});
