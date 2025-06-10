import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./server/config.env" }); // Make sure the path is correct

// eslint-disable-next-line no-undef
const uri = process.env.MONGO_URI; // ✅ should now be defined
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");

    const database = client.db("DB_MY_my_site");
    const collection = database.collection("users");

    const newUser = {
      name: "Saif",
      email: "saif@example.com",
      password: "123456",
    };
    const insertResult = await collection.insertOne(newUser);
    console.log("📥 Inserted user with ID:", insertResult.insertedId);
  } catch (err) {
    console.error("❌ Connection error:", err);
  } finally {
    await client.close();
  }
}

run();
