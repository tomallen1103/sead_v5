import { MongoClient, ServerApiVersion } from "mongodb";

interface MongoConfig {
  uri: string;
  serverApi: {
    version: ServerApiVersion;
    strict: boolean;
    deprecationErrors: boolean;
  };
}

export class MongoDatabase {
  private static instance: MongoDatabase | null = null;
  private config: MongoConfig;
  private client: MongoClient;
  private connection: MongoClient | null = null;

  private constructor() {
    this.config = {
      uri: process.env.CONNECTION_URL!,
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    };
    this.client = new MongoClient(this.config.uri, {
      serverApi: this.config.serverApi,
    });
  }

  public static getInstance(): MongoDatabase {
    if (!this.instance) {
      this.instance = new MongoDatabase();
    }

    return this.instance;
  }

  public async connect(): Promise<MongoClient | null> {
    if (!this.connection) {
      try {
        this.connection = await this.client.connect();
        console.log("Connected to MongoDB");
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    return this.connection;
  }
}
