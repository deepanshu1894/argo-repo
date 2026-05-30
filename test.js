const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://org_TIcXSBBCk0KlPvv4-readWriteUser:5jdScbLLog31wos6@mt-sg-5.x487jn.mongodb.net/org_TIcXSBBCk0KlPvv4";

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected successfully!");
    await client.close();
  } catch (err) {
    console.error("Connection failed:", err);
  }
}

run();
