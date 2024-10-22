import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/SelfAssessment.module.css'

export default function SelfAssessment() {
  return (
    <div className={styles.container}>
      <Head>
        <title>自我评估 - 点亮者校园</title>
        <meta name="description" content="点亮者校园自我评估页面" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          自我评估
        </h1>

        <p className={styles.description}>
          选择一个评估量表开始测试
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>小学生心理健康评估</h2>
            <div className={styles.subGrid}>
              <Link href="/assessment/primary/mhrsp">
                <a className={styles.subCard}>
                  <h3>小学生心理健康评定量表 (MHRSP) &rarr;</h3>
                  <p>评估小学生的心理健康状况</p>
                </a>
              </Link>
              <Link href="/assessment/primary/mht">
                <a className={styles.subCard}>
                  <h3>心理健康量表 (MHT) &rarr;</h3>
                  <p>评估小学生的整体心理健康状况</p>
                </a>
              </Link>
            </div>
          </div>

          <Link href="/assessment/middle-school">
            <a className={styles.card}>
              <h2>中学生心理健康评估 &rarr;</h2>
              <p>专门针对中学生的心理健康评估</p>
            </a>
          </Link>

          <Link href="/assessment/adult">
            <a className={styles.card}>
              <h2>成年人心理健康评估 &rarr;</h2>
              <p>适用于成年人的心理健康评估</p>
            </a>
          </Link>

          {/* 可以根据需要添加更多的评估选项 */}
        </div>
      </main>
    </div>
  )
}
