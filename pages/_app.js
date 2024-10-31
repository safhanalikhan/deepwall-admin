import '@/styles/globals.css';
import { SessionProvider } from "next-auth/react";
import { createTheme, MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </SessionProvider>
  )
}
