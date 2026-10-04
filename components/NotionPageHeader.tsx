'use client'

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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const headerRef = React.useRef<HTMLElement>(null)
  const menuButtonRef = React.useRef<HTMLButtonElement>(null)
  const navRef = React.useRef<HTMLElement>(null)
  const menuId = React.useId()

  React.useEffect(() => {
    if (!isMenuOpen) return

    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    const onFocusIn = (event: FocusEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onResize = () => {
      if (!window.matchMedia('(max-width: 900px)').matches) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('focusin', onFocusIn)
    document.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('focusin', onFocusIn)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [isMenuOpen])

  const onMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setIsMenuOpen(true)
      window.requestAnimationFrame(() => navRef.current?.querySelector<HTMLAnchorElement>('a')?.focus())
    }
  }

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header
      className='notion-header hub-header'
      ref={headerRef}
      onClickCapture={(event) => {
        if (event.target instanceof Element && event.target.closest('a')) {
          setIsMenuOpen(false)
        }
      }}
    >
      <div className='notion-nav-header hub-header-inner'>
        <components.PageLink href='/' className='hub-brand' aria-label='Префронтальные беседы — главная'>
          Префронтальные беседы
        </components.PageLink>

        <button
          type='button'
          className='hub-menu-toggle'
          ref={menuButtonRef}
          aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((open) => !open)}
          onKeyDown={onMenuKeyDown}
        >
          <svg viewBox='0 0 24 24' width='20' height='20' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' aria-hidden='true' focusable='false'>
            {isMenuOpen ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 6h16M4 12h16M4 18h16' />}
          </svg>
        </button>

        <nav
          className='hub-nav'
          id={menuId}
          ref={navRef}
          data-open={isMenuOpen}
          aria-label='Основная навигация'
        >
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
          {isSearchEnabled && <div className='hub-search' title='Поиск по материалам'><Search block={block} title={null} /></div>}
        </div>
      </div>
    </header>
  )
}
