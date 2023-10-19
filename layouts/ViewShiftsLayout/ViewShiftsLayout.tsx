import { FunctionComponent, ReactNode } from "react";

export type ViewShiftsLayoutProps = {
  children: ReactNode;
};

export const ViewShiftsLayout: FunctionComponent<ViewShiftsLayoutProps> = ({
  children,
}: ViewShiftsLayoutProps) => {
  return <div>hello{children}</div>;
};
