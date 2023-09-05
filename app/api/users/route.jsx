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