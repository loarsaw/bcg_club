import React, { FC } from "react";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { useLanguage } from "@/hooks/useLanguage";
import Head from "next/head";
import Header from "../header";
import { Provider } from "react-redux";
import store from "@/store";
const Layout: FC<{ children?: React.ReactNode }> = ({ children }) => {
  const { locale } = useLanguage();

  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Head>
          <title>Gamerzzzzz</title>
        </Head>
        <NextNProgress height={7} />
        <Header />
        <main className="flex-grow md:mt-40">{children}</main>
      </ThemeProvider>
    </Provider>
  );
};
export default Layout;
