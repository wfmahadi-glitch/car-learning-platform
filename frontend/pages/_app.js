import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize app
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
