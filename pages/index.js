import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>点亮者校园 - 校园心理健康服务平台</title>
        <meta name="description" content="点亮者校园是一个专业的校园心理健康服务平台，为学生提供心理评估、咨询和资源支持。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          欢迎来到点亮者校园
        </h1>

        <p className={styles.description}>
          专业的校园心理健康服务平台
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>自我评估</h2>
            <p>通过专业量表了解自己的心理状态，及时发现潜在问题。</p>
          </div>

          <div className={styles.card}>
            <h2>心理咨询</h2>
            <p>提供线上和线下的专业心理咨询服务，帮助你解决心理困扰。</p>
          </div>

          <div className={styles.card}>
            <h2>心理资源</h2>
            <p>提供丰富的心理健康教育资料，助你提升心理素质。</p>
          </div>

          <div className={styles.card}>
            <h2>校园活动</h2>
            <p>组织各种心理健康主题活动，营造积极向上的校园氛围。</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>©版权声明: 网站内容版权属于点亮者校园，并受法律保护。如遇紧急情况，请立即拨打校园心理援助热线。</p>
      </footer>
    </div>
  )
}
