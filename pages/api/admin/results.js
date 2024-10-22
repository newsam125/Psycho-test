import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db("psycho-test");
      const results = await db.collection("results").find({}).toArray();
      res.status(200).json(results);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error fetching results' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      const client = await clientPromise;
      const db = client.db("psycho-test");
      const result = await db.collection("results").deleteOne({ _id: ObjectId(id) });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Result deleted successfully' });
      } else {
        res.status(404).json({ message: 'Result not found' });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error deleting result' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
