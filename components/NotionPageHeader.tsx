import type * as types from 'notion-types'
import * as React from 'react'
import { Header, Search, useNotionContext } from 'react-notion-x'

import { isSearchEnabled, navigationLinks, navigationStyle } from '@/lib/config'
import { MoonIcon } from '@/lib/icons/moon'
import { SunIcon } from '@/lib/icons/sun'
import { useDarkMode } from '@/lib/use-dark-mode'

function ToggleThemeButton() {
  const { hasMounted, isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <button
      type='button'
      className='hub-theme-button'
      onClick={toggleDarkMode}
      disabled={!hasMounted}
      aria-label={isDarkMode ? 'Включить светлую тему' : 'Включить темную тему'}
      title={isDarkMode ? 'Светлая тема' : 'Темная тема'}
    >
      {hasMounted && isDarkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}

export function NotionPageHeader({
  block
}: {
  block: types.CollectionViewPageBlock | types.PageBlock
}) {
  const { components, mapPageUrl } = useNotionContext()

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header className='notion-header hub-header'>
      <div className='notion-nav-header hub-header-inner'>
        <components.PageLink href='/' className='hub-brand' aria-label='Префронтальные беседы — главная'>
          Префронтальные беседы
        </components.PageLink>

        <nav className='hub-nav' aria-label='Основная навигация'>
          {navigationLinks?.map((link, index) => {
            if (!link?.pageId && !link?.url) return null
            return link.pageId ? (
              <components.PageLink href={mapPageUrl(link.pageId)} key={index} className='hub-nav-link'>
                {link.title}
              </components.PageLink>
            ) : (
              <components.Link href={link.url} key={index} className='hub-nav-link'>
                {link.title}
              </components.Link>
            )
          })}
        </nav>

        <div className='hub-header-tools'>
          <ToggleThemeButton />
          {isSearchEnabled && <Search block={block} title='Поиск' />}
        </div>
      </div>
    </header>
  )
}
