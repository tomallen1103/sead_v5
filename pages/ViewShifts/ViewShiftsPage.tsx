"use client";
import { Card } from "flowbite-react";
import { FunctionComponent } from "react";

const ViewShiftsPage: FunctionComponent = () => {
  return (
    <div className="w-full p-5 flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-black">Available Shifts</h1>
      <Card className="w-full"></Card>
    </div>
  );
};

export default ViewShiftsPage;
