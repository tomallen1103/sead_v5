import { ReactNode } from "react";
import { ViewShiftsLayout } from "Layouts/ViewShiftsLayout/ViewShiftsLayout";

const ViewShiftsRouteLayout = ({ children }: { children: ReactNode }) => {
  return <ViewShiftsLayout>{children}</ViewShiftsLayout>;
};

export default ViewShiftsRouteLayout;
