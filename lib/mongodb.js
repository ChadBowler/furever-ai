import { MongoClient, ServerApiVersion } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {}

let client = new MongoClient(uri, options)
let clientPromise



async function run() {
  try {
    if (process.env.NODE_ENV === 'development') {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      let globalWithMongo = global;
    
      if (!globalWithMongo._mongoClientPromise) {
        globalWithMongo._mongoClientPromise = client.connect()
      }
      clientPromise = globalWithMongo._mongoClientPromise
    } else {
      // In production mode, it's best to not use a global variable.
      clientPromise = client.connect()
    }
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return clientPromise
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default run
