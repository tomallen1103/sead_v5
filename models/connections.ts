import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.CONNECTION_URL;
const client = new MongoClient(uri!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connect = async (): Promise<MongoClient | null> => {
  let connection = null;
  try {
    connection = await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
  return connection;
};

export default connect;
