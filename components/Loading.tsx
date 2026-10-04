import { LoadingIcon } from './LoadingIcon'
import styles from './styles.module.css'

export function Loading() {
  return (
    <div className={styles.container} role='status' aria-label='Загрузка страницы'>
      <LoadingIcon />
    </div>
  )
}
