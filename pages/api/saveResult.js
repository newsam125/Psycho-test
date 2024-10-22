import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db("psycho-test");
      const result = req.body;
      // 确保所有需要的字段都存在
      const requiredFields = ['grade', 'class', 'studentId', 'name', 'age', 'teacherName', 'date', 'scores', 'description'];
      for (let field of requiredFields) {
        if (!(field in result)) {
          return res.status(400).json({ message: `Missing required field: ${field}` });
        }
      }
      await db.collection("results").insertOne(result);
      res.status(200).json({ message: 'Result saved successfully' });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error saving result' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
