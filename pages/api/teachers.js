import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db("psycho-test");
      const teachers = await db.collection("teachers").find({}).toArray();
      res.status(200).json(teachers);
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error fetching teachers' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
