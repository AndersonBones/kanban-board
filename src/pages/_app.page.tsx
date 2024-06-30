import {RootLayout} from "@/components/Layout";
import { KanbanContextProvider } from "@/contexts/kanban";
import { globalStyles } from "@/styles/globals";

import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Theme } from '@radix-ui/themes';

globalStyles()

import { SessionProvider } from "next-auth/react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" })
export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (

    <SessionProvider session={session}>
        <KanbanContextProvider>
        <RootLayout>
          <Theme>
            <title>Kanban Board</title>
            <Component className={roboto.className} {...pageProps} />
          </Theme>
          

        </RootLayout>
      </KanbanContextProvider>
    </SessionProvider>
    


  )


}
