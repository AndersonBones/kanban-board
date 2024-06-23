import {RootLayout} from "@/components/Layout";
import { KanbanContextProvider } from "@/contexts/kanban";
import { globalStyles } from "@/styles/globals";

import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { Theme } from '@radix-ui/themes';

globalStyles()



const roboto = Roboto({ subsets: ["latin"], weight: "400" })
export default function App({ Component, pageProps }: AppProps) {
  return (

    <KanbanContextProvider>
      <RootLayout>
        <Theme>
          <title>Kanban Board</title>
          <Component className={roboto.className} {...pageProps} />
        </Theme>
        

      </RootLayout>
    </KanbanContextProvider>


  )


}
