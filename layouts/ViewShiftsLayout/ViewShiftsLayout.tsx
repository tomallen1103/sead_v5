"use client";
import { SidebarContainer } from "Components/Sidebar/SidebarContainer";
import { FunctionComponent, ReactNode } from "react";

export type ViewShiftsLayoutProps = {
  children: ReactNode;
};

export const ViewShiftsLayout: FunctionComponent<ViewShiftsLayoutProps> = ({
  children,
}: ViewShiftsLayoutProps) => {
  return (
    <div className="flex w-full">
      <SidebarContainer />
      {children}
    </div>
  );
};
