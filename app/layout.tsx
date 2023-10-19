"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { CustomFlowbiteTheme, Flowbite, Sidebar } from "flowbite-react";
import { SidebarContainer } from "Components/Sidebar/SidebarContainer";

const inter = Inter({ subsets: ["latin"] });

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
        <Flowbite theme={{ theme: customTheme }}>
          <SidebarContainer />
          {children}
        </Flowbite>
      </body>
    </html>
  );
};

export default RootLayout;
