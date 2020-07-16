import { MongoClient } from "../imports.ts";

// Create client and connect to mongodb
const client = new MongoClient();
client.connectWithUri("mongodb://localhost:33333");

// Specify database name
const dbname: string = "meal_planner_db";

// Create the database
export const db = client.database(dbname);

// Define user login collection schema
export interface UserLoginSchema {
  _id: { $oid: string };
  username: string;
  password: string;
}

// Create the user login collection
export const UserLogin = db.collection<UserLoginSchema>("user_login");

// Prefill with admin user
const insertId = await UserLogin.insertOne({
  username: "admin",
  password: "admin",
});
