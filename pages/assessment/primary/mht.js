import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../../../styles/MHT.module.css'

export default function MHT() {
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
      if (value === "是") scores[section] += 1;
    });
    return scores;
  };

  const getResultDescription = (scores) => {
    let problems = [];
    Object.entries(scores).forEach(([section, score]) => {
      if (score >= 8) {
        problems.push(sectionDescriptions[section]);
      }
    });
    if (problems.length === 0) return "心理健康状况良好";
    return `可能存在以下方面的问题：${problems.join("、")}。建议寻求专业帮助。`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scores = calculateScore();
    const currentDate = new Date().toLocaleString();
    const resultData = {
      scores: scores,
      description: getResultDescription(scores),
      date: currentDate,
      ...studentInfo
    };
    setResult(resultData);
    setStage('result');

    // 保存结果到"数据库"
    saveResult(resultData);
  };

  const simulateTest = () => {
    const simulatedAnswers = {};
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
    
    questions.forEach(question => {
      const randomNum = Math.random();
      let selectedOption = randomNum < 0.5 ? "是" : "否";
      simulatedAnswers[question.id] = selectedOption;
      if (selectedOption === "是") {
        scores[String.fromCharCode(65 + Math.floor((question.id - 1) / 10))] += 1;
      }
    });

    setAnswers(simulatedAnswers);

    const randomNames = [
      "张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十",
      "郑十一", "王十二", "刘十三", "陈十四", "杨十五", "黄十六"
    ];
    const randomStudentName = randomNames[Math.floor(Math.random() * randomNames.length)];
    const randomTeacher = teachers[Math.floor(Math.random() * teachers.length)];

    const simulatedStudentInfo = {
      grade: `${Math.floor(Math.random() * 6) + 1}`,
      class: `${Math.floor(Math.random() * 10) + 1}`,
      studentId: `${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
      name: randomStudentName,
      age: `${Math.floor(Math.random() * 6) + 6}`,
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
    { id: 1, text: "你晚上要睡觉时，是否总想着明天的功课?" },
    { id: 2, text: "老师向全班提问时，你是否会觉得是在问自己而感到不安?" },
    { id: 3, text: "你是否一听说'要考试'心里就紧张?" },
    { id: 4, text: "你考试成绩不好时，心里是否感到很不快?" },
    { id: 5, text: "你学习成绩不好时，是否总是提心吊胆?" },
    { id: 6, text: "你考试时，想不起原先掌握的知识时，是否会感到紧张不安?" },
    { id: 7, text: "你考试后，在没有知道成绩之前，是否总是放心不下?" },
    { id: 8, text: "你是否一遇到考试，就担心会考坏?" },
    { id: 9, text: "你是否希望每次考试都能顺利?" },
    { id: 10, text: "你在没有完成任务之前，是否总担心完不成任务？" },
    { id: 11, text: "你当着大家面朗读课文时，是否总是怕读错?" },
    { id: 12, text: "你是否认为学校里得到的学习成绩总是不大可靠?" },
    { id: 13, text: "你是否认为你比别人更担心学习?" },
    { id: 14, text: "你是否做过考试考坏了的梦?" },
    { id: 15, text: "你是否做过学习成绩不好时，受到爸爸妈妈或老师训斥的梦?" },
    { id: 16, text: "你是否经常觉得有同学在背后说你的坏话?" },
    { id: 17, text: "你受到父母批评后，是否总是想不开，放在心上?" },
    { id: 18, text: "你在游戏或与别人的竞争中输给了对方，是否就不想再干了？" },
    { id: 19, text: "人家在背后议论你，你是否感到讨厌?" },
    { id: 20, text: "你在大家面前或被老师提问时，是否会脸红?" },
    { id: 21, text: "你是否很担心叫你担任班级工作?" },
    { id: 22, text: "你是否总是觉得好像有人在注意你?" },
    { id: 23, text: "你在工作或学习时，如果有人在注意你，你心里是否会紧张?" },
    { id: 24, text: "你受到批评时，心情是否不愉快？" },
    { id: 25, text: "你受到老师批评时，心里是否总是不安?" },
    { id: 26, text: "同学们在笑时，你是否也不大会笑?" },
    { id: 27, text: "你是否觉得到同学家里去玩时不如在自己家里玩?" },
    { id: 28, text: "你和大家在一起时，是否也觉得自己是孤单的一个人？" },
    { id: 29, text: "你是否觉得和同学一起玩，不如自己一个人玩?" },
    { id: 30, text: "同学们在交谈时，你是否不想加入?" },
    { id: 31, text: "你和大家在一起时，是否觉得自己是多余的人?" },
    { id: 32, text: "你是否讨厌参加运动会和文艺演出?" },
    { id: 33, text: "你的朋友是否很少?" },
    { id: 34, text: "你是否不喜欢同别人谈话？" },
    { id: 35, text: "在人多的地方，你是否觉得很怕?" },
    { id: 36, text: "你在参加排球、篮球等集体比赛输了时，心里是否一直认为自己没做好?" },
    { id: 37, text: "你受到批评后，是否总认为是自己不好?" },
    { id: 38, text: "别人笑你的时候，你是否会认为是自己做错了什么事?" },
    { id: 39, text: "你学习成绩不好时，是否总是认为是自己不用功的缘故？" },
    { id: 40, text: "你做事失败的时候，是否总是认为是自己的责任?" },
    { id: 41, text: "大家受到责备时，你是否认为主要是自己的过错?" },
    { id: 42, text: "你参加乒乓球、羽毛球、广播操等体育比赛时，是否一出错就特别留神?" },
    { id: 43, text: "碰到为难的事情时，你是否认为自己难以应付?" },
    { id: 44, text: "你是否有时会后悔：\"那件事不做就好了\"?" },
    { id: 45, text: "你和同学吵架以后，是��总是认为是自己的错?" },
    { id: 46, text: "你心里是否总想为班级做点好事?" },
    { id: 47, text: "你学习的时候，思想是否经常开小差?" },
    { id: 48, text: "你把东西借给别人时，是否担心别人会把东西弄坏?" },
    { id: 49, text: "碰到不顺利的事情时，你心里是否很烦躁?" },
    { id: 50, text: "你是否非常担心家里有人生病或死去?" },
    { id: 51, text: "你是否在梦里见到过死去的人？" },
    { id: 52, text: "你对收音机和汽车的声音是否特别敏感?" },
    { id: 53, text: "你心里是否总觉得好像有什么事没有做好?" },
    { id: 54, text: "你是否总担心会发生什么意外的事？" },
    { id: 55, text: "你在决定要做什么事时，是否总是犹豫不决?" },
    { id: 56, text: "你手上是否经常出汗?" },
    { id: 57, text: "你害羞时是否会脸红?" },
    { id: 58, text: "你是否经常头痛?" },
    { id: 59, text: "你被老师提问时，心里是否总是很紧张?" },
    { id: 60, text: "你没有参加运动，心脏是否经常扑腾扑腾地跳?" },
    { id: 61, text: "你是否很容易疲劳?" },
    { id: 62, text: "你是否很不愿吃药?" },
    { id: 63, text: "夜里你是否很难入睡?" },
    { id: 64, text: "你是否总觉得身体好像有什么毛病?" },
    { id: 65, text: "你是否经常认为自己的体型和面孔比别人难看?" },
    { id: 66, text: "你是否经常觉得肠胃不好?" },
    { id: 67, text: "你是否经常咬指甲?" },
    { id: 68, text: "你是否经常舔手指头?" },
    { id: 69, text: "你是否经常感到呼吸困难?" },
    { id: 70, text: "你去厕所的次数是否比别人多?" },
    { id: 71, text: "你是否很怕到高的地方去?" },
    { id: 72, text: "你是否害怕很多东西?" },
    { id: 73, text: "你是否经常做噩梦?" },
    { id: 74, text: "你胆子是否很小？" },
    { id: 75, text: "夜里，你是否很怕一个人在房间里睡觉?" },
    { id: 76, text: "你乘车穿过隧道或路过高桥时，是否很怕?" },
    { id: 77, text: "你是否喜欢整夜开着灯睡觉?" },
    { id: 78, text: "你听到打雷声是否非常害怕?" },
    { id: 79, text: "你是否非常害怕黑暗?" },
    { id: 80, text: "你是否经常感到后面有人跟着你?" },
    { id: 81, text: "你是否经常生气?" },
    { id: 82, text: "你是否不想得到好的成绩?" },
    { id: 83, text: "你是否经常会突然想哭?" },
    { id: 84, text: "你以前是否说过谎话?" },
    { id: 85, text: "你有时是否会觉得，还是死了好？" },
    { id: 86, text: "你是否一次也没有失约过?" },
    { id: 87, text: "你是否经常想大声喊叫?" },
    { id: 88, text: "你是否能保密别人不让说的事?" },
    { id: 89, text: "你有时是否想过自己一个人到远的地方去?" },
    { id: 90, text: "你是否总是很有礼貌?" },
    { id: 91, text: "你被人说了坏话，是否想立即采取报复行动?" },
    { id: 92, text: "老师或父母说的话，你是否都照办?" },
    { id: 93, text: "你心里不开心，是否会乱丢、乱砸东西？" },
    { id: 94, text: "你是否发过怒?" },
    { id: 95, text: "你想要的东西，是否就一定要拿到手?" },
    { id: 96, text: "你不喜欢的功课老师提前下课，你是否会感到特别高兴？" },
    { id: 97, text: "你是否经常想从高的地方跳下来?" },
    { id: 98, text: "你是否无论对谁都很亲热?" },
    { id: 99, text: "你是否会经常急躁得坐立不安?" },
    { id: 100, text: "对不认识的人，你是否会都喜欢?" }
  ];

  const sectionDescriptions = {
    A: "学习焦虑",
    B: "对人焦虑",
    C: "孤独倾向",
    D: "自责倾向",
    E: "过敏倾向",
    F: "身体症状",
    G: "恐怖倾向",
    H: "冲动倾向"
  };

  const renderIntro = () => (
    <div className={styles.intro}>
      <h2>量表简介</h2>
      <p>《心理健康诊断测验(MHT)》是华东师范大学心理系周步成对日本铃木清等人编制的"不安倾向诊断测验"修订而成的,包含了中国常模。该测验由学习焦虑、对人焦虑、孤独倾向、自责倾向、过敏倾向、身体症状、恐怖倾向和冲动倾向8个内容量表构成,测题量适中,覆盖面广,筛选率高,具有较高的信度和效度。</p>
      <h2>测量说明</h2>
      <p>该测验共有100个项目，八个内容量表和一个效度量表（即测慌量表），内容量表的总分表示个人焦虑的一般倾向,得分越高表明心理健康状况越不好。</p>
      <h2>测量目的</h2>
      <p>评估小学生的整体心理健康状况，包括学习焦虑、对人焦虑、孤独倾向等多个方面。</p>
      <button onClick={() => setStage('instructions')} className={styles.nextButton}>下一步</button>
    </div>
  );

  const renderInstructions = () => (
    <div className={styles.instructions}>
      <h2>指导语</h2>
      <ol>
        <li>这个测验是调查你的心情和感受的，不是测验智力和学习能力，与学习成绩无关，答案也没有好坏之分。</li>
        <li>请按照你平常所想的如实回答。</li>
        <li>每一问题都要回答，但只能选择一个答案，难以决定时，请选与你最接近的答案。</li>
        <li>有不明白的地方可以举手问老师。</li>
        <li>回答时间没有限制，但不要过分考虑，请写出你最初想到的答案。</li>
      </ol>
      <button onClick={() => setStage('test')} className={styles.nextButton}>开始测试</button>
      <button onClick={simulateTest} className={styles.simulateButton}>模拟测试</button>
    </div>
  );

  const renderTest = () => (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* 学生信息输入部分 */}
      <div className={styles.formGroup}>
        <label htmlFor="grade">年级</label>
        <input 
          type="text" 
          id="grade" 
          name="grade" 
          value={studentInfo.grade}
          onChange={(e) => setStudentInfo({...studentInfo, grade: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="class">班级</label>
        <input 
          type="text" 
          id="class" 
          name="class" 
          value={studentInfo.class}
          onChange={(e) => setStudentInfo({...studentInfo, class: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="studentId">学号</label>
        <input 
          type="text" 
          id="studentId" 
          name="studentId" 
          value={studentInfo.studentId}
          onChange={(e) => setStudentInfo({...studentInfo, studentId: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="name">姓名</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={studentInfo.name}
          onChange={(e) => setStudentInfo({...studentInfo, name: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="age">年龄</label>
        <input 
          type="number" 
          id="age" 
          name="age" 
          value={studentInfo.age}
          onChange={(e) => setStudentInfo({...studentInfo, age: e.target.value})}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="teacherName">评估老师</label>
        <select 
          id="teacherName" 
          name="teacherName" 
          value={studentInfo.teacherName}
          onChange={(e) => setStudentInfo({...studentInfo, teacherName: e.target.value})}
          required
        >
          <option value="">请选择评估老师</option>
          {teachers.map((teacher) => (
            <option key={teacher._id} value={teacher.username}>
              {teacher.username}
            </option>
          ))}
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
                {["是", "否"].map(option => (
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
        <title>心理健康量表 (MHT)</title>
        <meta name="description" content="心理健康量表 (MHT)" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>心理健康量表 (MHT)</h1>

        {stage === 'intro' && renderIntro()}
        {stage === 'instructions' && renderInstructions()}
        {stage === 'test' && renderTest()}
        {stage === 'result' && renderResult()}
      </main>
    </div>
  )
}
