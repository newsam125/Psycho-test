import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../../../styles/MHRSP.module.css'

export default function MHRSP() {
  const [stage, setStage] = useState('intro');
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [currentSection, setCurrentSection] = useState('A');
  const [studentInfo, setStudentInfo] = useState({ 
    grade: '', 
    class: '', 
    studentId: '', 
    name: '', 
    age: '', 
    teacherName: '' 
  });
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    if (teachers.length === 0) {
      fetchTeachers();
    }
  }, [teachers]);

  const fetchTeachers = async () => {
    try {
      const response = await fetch('/api/teachers');
      if (response.ok) {
        const data = await response.json();
        setTeachers(data);
      } else {
        console.error('Failed to fetch teachers');
      }
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const handleChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateScore = () => {
    let scores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
    Object.entries(answers).forEach(([id, value]) => {
      const section = String.fromCharCode(65 + Math.floor((parseInt(id) - 1) / 10));
      if (value === "经常") scores[section] += 2;
      else if (value === "偶尔") scores[section] += 1;
    });
    return scores;
  };

  const getResultDescription = (scores) => {
    let problems = [];
    Object.entries(scores).forEach(([section, score]) => {
      if (score >= 10) {
        problems.push(sectionDescriptions[section]);
      }
    });
    if (problems.length === 0) return "心理健康状况良好";
    return `可能存在以下方面理问题：${problems.join("、")}。建议寻求专业帮助。`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scores = calculateScore();
    const currentDate = new Date().toLocaleString(); // 使用 toLocaleString 来获取更详细的日期和时间
    const resultData = {
      scores: scores,
      description: getResultDescription(scores),
      date: currentDate,
      class: studentInfo.class,
      name: studentInfo.name,
      teacherName: studentInfo.teacherName
    };
    setResult(resultData);
    setStage('result');

    // 保存结果到"数据库"
    saveResult(resultData);
  };

  const simulateTest = () => {
    const simulatedAnswers = {};
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
    const options = ["经常", "偶尔", "没有"];
    
    questions.forEach(question => {
      const randomNum = Math.random();
      let selectedOption;
      if (randomNum < 0.3) {
        selectedOption = "经常";
        scores[String.fromCharCode(65 + Math.floor((question.id - 1) / 10))] += 2;
      } else if (randomNum < 0.7) {
        selectedOption = "偶尔";
        scores[String.fromCharCode(65 + Math.floor((question.id - 1) / 10))] += 1;
      } else {
        selectedOption = "没有";
      }
      simulatedAnswers[question.id] = selectedOption;
    });

    setAnswers(simulatedAnswers);

    // 生成模拟的学生名字
    const randomNames = [
      "张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十",
      "郑十一", "王十二", "刘十三", "陈十四", "杨十五", "黄十六"
    ];
    const randomStudentName = randomNames[Math.floor(Math.random() * randomNames.length)];

    // 从已有的测评老师列表中随机选择一位
    const randomTeacher = teachers[Math.floor(Math.random() * teachers.length)];

    const simulatedStudentInfo = {
      grade: `${Math.floor(Math.random() * 6) + 1}`, // 随机生成1到6的年级
      class: `${Math.floor(Math.random() * 10) + 1}`, // 随机生成1到10的班级
      studentId: `${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`, // 随机生成6位学号
      name: randomStudentName,
      age: `${Math.floor(Math.random() * 6) + 6}`, // 随机生成6到11岁的年龄
      teacherName: randomTeacher ? randomTeacher.username : '未指定'
    };
    setStudentInfo(simulatedStudentInfo);

    const currentDate = new Date().toLocaleString();
    const resultData = {
      scores: scores,
      description: getResultDescription(scores),
      date: currentDate,
      ...simulatedStudentInfo
    };
    setResult(resultData);
    setStage('result');

    // 保存结果到"数据库"
    saveResult(resultData);
  };

  const questions = [
    // A. 学习障碍
    { id: 1, text: "不能正确认识字母或拼读音节" },
    { id: 2, text: "不能正确辨认汉字" },
    { id: 3, text: "不懂得数的大小和序列关系" },
    { id: 4, text: "计算困难" },
    { id: 5, text: "绘画时定位不准，涂色不合规范" },
    { id: 6, text: "图画作品中有前后.左右位置颠倒的现象" },
    { id: 7, text: "一提起学习即心烦意乱" },
    { id: 8, text: "课堂讨论或与家长谈论学习问题时不感兴趣" },
    { id: 9, text: "不能按时交作业或作业质量差" },
    { id: 10, text: "考试不及格" },
    // B. 情绪障碍
    { id: 11, text: "遇到一点小事也担忧" },
    { id: 12, text: "心神不定，坐立不安" },
    { id: 13, text: "食欲不振，心慌气促" },
    { id: 14, text: "头痛.失眠.汗多.尿频" },
    { id: 15, text: "害怕上学，多方逃避" },
    { id: 16, text: "不敢独自出家门" },
    { id: 17, text: "一人独处时恐慌害怕" },
    { id: 18, text: "无缘无故地闷闷不乐" },
    { id: 19, text: "精力下降，活动减少" },
    { id: 20, text: "受到重大刺激不激动.不流泪" },
    // C. 性格缺陷
    { id: 21, text: "心胸狭窄，猜疑" },
    { id: 22, text: "依赖他人" },
    { id: 23, text: "嫉妒他人" },
    { id: 24, text: "胆怯，害羞" },
    { id: 25, text: "自卑，自责" },
    { id: 26, text: "遇事犹豫不决" },
    { id: 27, text: "固执，任性" },
    { id: 28, text: "容易发火" },
    { id: 29, text: "孤僻，不合群" },
    { id: 30, text: "与人对立" },
    // D. 社会适应障碍
    { id: 31, text: "交新朋友困难" },
    { id: 32, text: "在集体场合适应困难" },
    { id: 33, text: "自我中心，不遵守集体规则" },
    { id: 34, text: "不能融洽地与同学相处" },
    { id: 35, text: "与教师或家长发生冲突" },
    { id: 36, text: "被别人误解后耿耿于怀" },
    { id: 37, text: "不能和常人一样地与异性交往" },
    { id: 38, text: "受到挫折后反应过分强烈或压抑" },
    { id: 39, text: "容易闯祸" },
    { id: 40, text: "面对新环境（迁居.转学等）适应困难" },
    // E. 品德缺陷
    { id: 41, text: "骂人" },
    { id: 42, text: "搞恶作剧" },
    { id: 43, text: "起哄，无理取闹" },
    { id: 44, text: "打架斗殴" },
    { id: 45, text: "故意破坏" },
    { id: 46, text: "考试作弊" },
    { id: 47, text: "说谎" },
    { id: 48, text: "偷盗" },
    { id: 49, text: "逃学" },
    { id: 50, text: "离家出走" },
    // F. 不良习惯
    { id: 51, text: "习惯性眨眼" },
    { id: 52, text: "习惯性皱或皱额" },
    { id: 53, text: "习惯性努嘴或嗅鼻" },
    { id: 54, text: "习惯性点头或摇头" },
    { id: 55, text: "习惯性吞咽或打呃" },
    { id: 56, text: "习惯性咳嗽" },
    { id: 57, text: "习惯性耸肩" },
    { id: 58, text: "吸吮手指.嘴嚼衣服或其他物品" },
    { id: 59, text: "咬指甲" },
    { id: 60, text: "吸烟或饮酒" },
    // G. 行为障碍
    { id: 61, text: "反复数课本或其他图书上人物的数目" },
    { id: 62, text: "反复检查作业是否作对了" },
    { id: 63, text: "睡觉前反复检个人的衣服鞋袜是否放整齐了" },
    { id: 64, text: "一天洗手十几次，每次持续十几分钟" },
    { id: 65, text: "注意力不集中，做事有头无尾" },
    { id: 66, text: "上课时小动作多，干扰他人" },
    { id: 67, text: "不合场合，特别好动" },
    { id: 68, text: "做作业时边做边玩" },
    { id: 69, text: "好冲动，行动鲁莽" },
    { id: 70, text: "不知危险，好伤人或自伤" },
    // H. 特种障碍
    { id: 71, text: "尿床" },
    { id: 72, text: "口吃" },
    { id: 73, text: "好沉默不语，甚至长时间一言不发" },
    { id: 74, text: "入睡困难" },
    { id: 75, text: "睡觉不安稳，好讲梦话" },
    { id: 76, text: "睡觉时好磨牙" },
    { id: 77, text: "睡觉中突然哭喊，惊叫" },
    { id: 78, text: "睡觉中突然起床活动，醒后对此无记忆" },
    { id: 79, text: "厌食，偏食或拒食" },
    { id: 80, text: "身体无病却反复呕吐" },
  ];

  const sectionDescriptions = {
    A: "学习障碍",
    B: "情绪障碍",
    C: "性格缺陷",
    D: "社会适应障碍",
    E: "品德缺陷",
    F: "不良习惯",
    G: "行为障碍",
    H: "特种障碍"
  };

  const renderIntro = () => (
    <div className={styles.intro}>
      <h2>量表简介</h2>
      <p>《小学生心理健康评定量表》(MHRSP)是由心理学工作者和小学教师协同研出来的，该量表能够对小学生心理健康状态进行测评,对筛选、诊断小学生的心理健康问题有一定的成效。量表由 8 部分组成，共 80 个题目，每 10 个项目组成一个分量表，它们分别用英文字母 A、B、C、D、E、F、G、H 表示。</p>
      <h2>测量说明</h2>
      <p>心理健康是个体的心理活动处于正常状态，即认知正常，情感协调，意志健全，个性完整和适应良好，能够充分发挥自身的最大潜能，以适应生活、学习、工作和社会环境的发展与变化的需要。小学生心理健康问题主要集中在厌学，与同学、家长、教师关系紧张，情绪波动较大，容易被激怒等。该量表能够对小学生心理健康状态的情况进行测评。</p>
      <h2>测量目的</h2>
      <p>综合评定小学生心理健康，探讨小学生学习适应性、情绪稳定性、社会适应性及行为习惯等方面。</p>
      <button onClick={() => setStage('instructions')} className={styles.nextButton}>下一步</button>
    </div>
  );

  const renderInstructions = () => (
    <div className={styles.instructions}>
      <h2>指导语</h2>
      <ol>
        <li>这是一份有关小学生心理健康状况的评定量表。希望您能同我们密切合作，如实认真地加以评定。</li>
        <li>在您正式评定之前，请将教师用答卷正文前有关学生概况的项目填好，注意不要遗漏。</li>
        <li>请您仔细阅读量表中的每一道题目，然后根据您对学生的日常观察、了解情况，在答卷的相应题号右面，按照"经常、偶尔、没有"三个等级划"√"。</li>
        <li>量表的评定工作完成以后，请您在答卷右上角的相应栏目里填上填表日期和您的姓名。</li>
      </ol>
      <button onClick={() => setStage('test')} className={styles.nextButton}>开始测试</button>
      <button onClick={simulateTest} className={styles.simulateButton}>模拟测试</button>
    </div>
  );

  const renderTest = () => (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="grade">年级</label>
        <input 
          type="text" 
          id="grade" 
          name="grade" 
          required
          onChange={(e) => setStudentInfo({...studentInfo, grade: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="class">班级</label>
        <input 
          type="text" 
          id="class" 
          name="class" 
          required
          onChange={(e) => setStudentInfo({...studentInfo, class: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="studentId">学号</label>
        <input 
          type="text" 
          id="studentId" 
          name="studentId" 
          required
          onChange={(e) => setStudentInfo({...studentInfo, studentId: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="name">学生姓名</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          onChange={(e) => setStudentInfo({...studentInfo, name: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="age">年龄</label>
        <input 
          type="number" 
          id="age" 
          name="age" 
          required
          onChange={(e) => setStudentInfo({...studentInfo, age: e.target.value})}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="teacherName">评估老师</label>
        <select 
          id="teacherName" 
          name="teacherName" 
          required
          onChange={(e) => setStudentInfo({...studentInfo, teacherName: e.target.value})}
        >
          <option value="">请选择评估老师</option>
          {teachers.length > 0 ? (
            teachers.map((teacher) => (
              <option key={teacher._id} value={teacher.username}>
                {teacher.username}
              </option>
            ))
          ) : (
            <option value="" disabled>暂无可用的评估老师</option>
          )}
        </select>
      </div>

      <div className={styles.progress}>
        {Object.keys(sectionDescriptions).map(section => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className={currentSection === section ? styles.activeSection : ''}
          >
            {section}
          </button>
        ))}
      </div>

      <div className={styles.section}>
        <h3>{currentSection}. {sectionDescriptions[currentSection]}</h3>
        {questions
          .filter(q => Math.floor((q.id - 1) / 10) === currentSection.charCodeAt(0) - 65)
          .map(question => (
            <div key={question.id} className={styles.question}>
              <p>{question.id}. {question.text}</p>
              <div className={styles.options}>
                {["经常", "偶尔", "没有"].map(option => (
                  <label key={option}>
                    <input
                      type="radio"
                      name={`question${question.id}`}
                      value={option}
                      onChange={() => handleChange(question.id, option)}
                      required
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
      </div>

      <div className={styles.navigation}>
        {currentSection !== 'A' && (
          <button type="button" onClick={() => setCurrentSection(String.fromCharCode(currentSection.charCodeAt(0) - 1))}>
            上一部分
          </button>
        )}
        {currentSection !== 'H' ? (
          <button type="button" onClick={() => setCurrentSection(String.fromCharCode(currentSection.charCodeAt(0) + 1))}>
            下一部分
          </button>
        ) : (
          <button type="submit" className={styles.submitButton}>提交</button>
        )}
      </div>
    </form>
  );

  const renderResult = () => (
    <div className={styles.result}>
      <h2>测评结果</h2>
      <p>年级：{result.grade}</p>
      <p>班级：{result.class}</p>
      <p>学号：{result.studentId}</p>
      <p>学生姓名：{result.name}</p>
      <p>年龄：{result.age}</p>
      <p>评估老师：{result.teacherName}</p>
      <p>评估时间：{result.date}</p>
      {Object.entries(result.scores).map(([section, score]) => (
        <p key={section}>{sectionDescriptions[section]}: {score}分</p>
      ))}
      <p>结果说明：{result.description}</p>
      <button onClick={() => {setStage('intro'); setAnswers({}); setResult(null); setStudentInfo({ grade: '', class: '', studentId: '', name: '', age: '', teacherName: '' });}} className={styles.retakeButton}>再做一份</button>
    </div>
  );

  // 添加这个函数来模拟保存结果
  const saveResult = async (result) => {
    try {
      const response = await fetch('/api/saveResult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result),
      });
      if (!response.ok) {
        throw new Error('Failed to save result');
      }
    } catch (error) {
      console.error('Error saving result:', error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>小学生心理健康评定量表 (MHRSP)</title>
        <meta name="description" content="小学生心理健康评定量表 (MHRSP)" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>小学生心理健康评定量表 (MHRSP)</h1>

        {stage === 'intro' && renderIntro()}
        {stage === 'instructions' && renderInstructions()}
        {stage === 'test' && renderTest()}
        {stage === 'result' && renderResult()}
      </main>
    </div>
  )
}
