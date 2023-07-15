import { UserProvider } from '@/context/authContext'
import '@/styles/globals.css'
UserProvider

export default function App({ Component, pageProps }) {
  return( 
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
  );
}
