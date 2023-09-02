import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
   try {
       const client = await clientPromise;
       const db = client.db("fureverDB");

       const users = await db
           .collection("Users")
           .find({})
           .limit(2)
           .toArray();

       res.json(users);
   } catch (e) {
       console.error(e);
   }
};