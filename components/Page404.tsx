'use client'

import Link from 'next/link'
import styles from './styles.module.css'

export function Page404() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Страница не найдена</h1>
        <p>Возможно, ссылка изменилась или материал пока недоступен.</p>
        <Link href='/'>Вернуться на главную</Link>
      </main>
    </div>
  )
}
