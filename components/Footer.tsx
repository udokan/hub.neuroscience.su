import * as React from 'react'
import * as config from '@/lib/config'

export function FooterImpl() {
  return (
    <footer className='hub-footer'>
      <div className='hub-footer-inner'>
        <p>© {new Date().getFullYear()} {config.author}</p>
        <nav aria-label='Социальные сети и основной сайт'>
          <a href='https://vk.ru/neurosu'>ВКонтакте</a>
          <a href='https://t.me/neurica'>Telegram</a>
          <a href='https://www.neuroscience.su/'>Основной сайт</a>
        </nav>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
