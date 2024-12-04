import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;

