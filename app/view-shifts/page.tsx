import { FunctionComponent } from "react";
import ViewShiftsPage from "Pages/ViewShifts/ViewShiftsPage";

import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.CONNECTION_URL;
const client = new MongoClient(uri!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const getWorkerTypes = async () => {
  try {
    await client.connect();
    await client.db("sead").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

const ViewShiftsRoute: FunctionComponent = async () => {
  await getWorkerTypes();
  return <ViewShiftsPage />;
};

export default ViewShiftsRoute;
