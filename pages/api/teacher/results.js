import { withIronSession } from "next-iron-session";
import { connectToDatabase } from '../../../utils/mongodb';

async function handler(req, res) {
  try {
    const teacher = req.session.get("teacher");
    if (!teacher) {
      return res.status(401).json({ error: '未授权' });
    }

    const { db } = await connectToDatabase();
    const results = await db.collection('results').find({ teacherId: teacher.id }).toArray();

    console.log('原始结果:', JSON.stringify(results, null, 2));

    // 确保所有模块的数据都被正确处理
    const processedResults = results.map(result => {
      if (!result.mhtResults) {
        console.log('警告: 结果缺少 mhtResults:', result);
        result.mhtResults = [];
      }

      const processedMhtResults = result.mhtResults.map(module => {
        if (typeof module.score === 'undefined') {
          console.log('警告: 模块缺少分数:', module);
        }
        return {
          ...module,
          name: module.name || '未命名模块',
          score: module.score || 0,
        };
      });

      // 确保有 10 个模块
      while (processedMhtResults.length < 10) {
        processedMhtResults.push({ name: `模块 ${processedMhtResults.length + 1}`, score: 0 });
      }

      return {
        ...result,
        mhtResults: processedMhtResults,
      };
    });

    console.log('处理后的结果:', JSON.stringify(processedResults, null, 2));

    res.status(200).json(processedResults);
  } catch (error) {
    console.error('API 错误:', error);
    res.status(500).json({ error: '服务器错误', details: error.message });
  }
}

if (!process.env.SESSION_PASSWORD) {
  console.error('SESSION_PASSWORD 未设置');
  throw new Error('SESSION_PASSWORD 必须在环境变量中设置');
}

export default withIronSession(handler, {
  password: process.env.SESSION_PASSWORD,
  cookieName: "teacher_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
