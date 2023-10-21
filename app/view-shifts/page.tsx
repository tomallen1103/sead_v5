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
    const collection = (await client.connect())
      .db("Sead")
      .collection("worker_types");
    const cursor = await collection.find().toArray();
    console.log(cursor);
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
