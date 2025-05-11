import { MongoClient } from "mongodb";
import "dotenv/config";
// import process from "process";

const { DB_USER, DB_PASS } = process.env;

const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ehaswcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(URI);
export const db = client.db("spotify");
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
