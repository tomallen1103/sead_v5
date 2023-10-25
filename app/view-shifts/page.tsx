import { FunctionComponent } from "react";
import ViewShiftsPage from "Pages/ViewShifts/ViewShiftsPage";
import { useQuery } from "react-query";
import { getWorkerTypes } from "Models/workers/getWorkerTypes";

const ViewShiftsRoute: FunctionComponent = async () => {
  const query = useQuery("getWorkerTypes", async () => await getWorkerTypes());
  console.log(query);

  return <ViewShiftsPage />;
};

export default ViewShiftsRoute;
