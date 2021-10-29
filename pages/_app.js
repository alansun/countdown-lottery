import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "redux/store";

import "public/normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>倒數抽獎</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
