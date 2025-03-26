import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db("portfolio");
    const collection = db.collection("votes");

    if (req.method === 'GET') {
        const votes = await collection.find({}).toArray();
        res.status(200).json(votes);
    } else if (req.method === 'POST') {
        const { tech } = req.body;
        if (!tech) {
            return res.status(400).json({ message: "Tech is required" });
        }

        await collection.updateOne(
            { tech },
            { $inc: { votes: 1 } },
            { upsert: true }
        );

        res.status(200).json({ message: "Vote recorded" });
    } else {
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    // Close the database connection if needed (optional)
}