import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid input." });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a4ct4.mongodb.net/my-site?retryWrites=true&w=majority`
      );
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Could not connect to database." });
    }

    try {
      const db = client.db();
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      return res.status(500).json({ message: "Storing message failed!" });
    }

    client.close();

    return res.status(201).json({ message: newMessage });
  }
}
