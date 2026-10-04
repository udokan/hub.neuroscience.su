import styles from './styles.module.css'

export function ErrorPage({
  statusCode,
  onRetry
}: {
  statusCode: number
  onRetry?: () => void
}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Не удалось загрузить страницу</h1>

        {statusCode && <p>Код ошибки: {statusCode}</p>}

        {onRetry && (
          <button type='button' onClick={onRetry}>
            Повторить попытку
          </button>
        )}

        <img src='/error.png' alt='Ошибка загрузки' className={styles.errorImage} />
      </main>
    </div>
  )
}
