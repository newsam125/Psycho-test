import Link from 'next/link'
import styles from '../styles/Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <a>点亮者校园</a>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/self-assessment"><a className={styles.link}>自我评估</a></Link>
        <Link href="/counseling"><a className={styles.link}>心理咨询</a></Link>
        <Link href="/resources"><a className={styles.link}>心理资源</a></Link>
        <Link href="/teacher/login"><a className={styles.link}>评估老师登录</a></Link>
        <Link href="/about"><a className={styles.link}>关于我们</a></Link>
        <Link href="/admin/login"><a className={styles.link}>管理员</a></Link>
      </div>
    </nav>
  )
}
