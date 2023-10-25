"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { CustomFlowbiteTheme, Flowbite, Sidebar } from "flowbite-react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const inter = Inter({ subsets: ["latin"] });

// Create a client
const queryClient = new QueryClient();

// export const metadata: Metadata = {
//   title: "Sead - Healthcare Staffing",
//   description:
//     "Sead providing staffing so that healthcare can be delivered anywhere.",
// };

const customTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      // inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800"
      inner: "bg-cyan",
    },
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Flowbite theme={{ theme: customTheme }}>{children}</Flowbite>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
