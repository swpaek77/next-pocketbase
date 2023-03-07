import "@/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { pb } from "@/lib/pocketbase";

const queryClient = new QueryClient();
pb.admins.authWithPassword("swpaek77@gmail.com", "Qodtmd13279!");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
