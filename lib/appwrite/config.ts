//Config.ts
//DO NOT CHANGE
import { Account, Client, Databases, Storage } from "appwrite";

export const appwriteConfig = {
  endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT as string,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string,
  database: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
};

if (appwriteConfig.projectId === null || appwriteConfig.endpoint === null) {
  console.log("Couldn't find appwrite env var.");
}

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
