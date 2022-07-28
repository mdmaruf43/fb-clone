import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import "../styles/sass/style.scss";
import {SSRProvider} from "react-bootstrap";

const MyApp = ({ Component, pageProps }: AppProps) => {
  	return <Component {...pageProps} />
}

export default MyApp;
