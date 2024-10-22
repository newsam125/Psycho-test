import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("psycho-test");

  if (req.method === 'GET') {
    try {
      const teachers = await db.collection("teachers").find({}).toArray();
      res.status(200).json(teachers);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error fetching teachers' });
    }
  } else if (req.method === 'POST') {
    try {
      const { username, password } = req.body;
      const result = await db.collection("teachers").insertOne({ username, password });
      res.status(201).json({ message: 'Teacher added successfully', id: result.insertedId });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error adding teacher' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      const result = await db.collection("teachers").deleteOne({ _id: ObjectId(id) });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: 'Teacher deleted successfully' });
      } else {
        res.status(404).json({ message: 'Teacher not found' });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error deleting teacher' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
