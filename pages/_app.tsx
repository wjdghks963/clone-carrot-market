import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import useUser from "@libs/client/useUser";

function IsLoggedIn() {
  const { user } = useUser();
  return null;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      <div className="mx-auto w-full max-w-xl">
        <IsLoggedIn />
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}

export default MyApp;
