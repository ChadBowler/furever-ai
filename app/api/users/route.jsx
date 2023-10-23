import { NextResponse } from "next/server";
import run from "../../../lib/mongodb";

export async function GET() {
   try {
       const client = await run();
       const db = client.db("fureverDB");

       const users = await db
           .collection("Users")
           .find({})
           .limit(2)
           .toArray();
        const data = await users.json();
        return NextResponse.json({ data });
   } catch (e) {
       console.error(e);
   }
};
export async function POST(req) {
    try {
        const client = await run();
        const db = client.db("fureverDB");
 
        const { body } = req;
        const collection = db.collection("Users");
 
        // Insert the user's data into the collection
        const result = await collection.insertOne(body);
 
        return NextResponse.json({ message: "User data added successfully", data: result });
    } catch (e) {
        console.error(e);
        return NextResponse.error({ message: "Failed to add user data" });
    }
 };