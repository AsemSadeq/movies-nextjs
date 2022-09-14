import { ParsedUrlQuery } from 'querystring'

export const isEmptyObject = (obj: Object): boolean => {
  return Object.keys(obj).length === 0
}

export const getParamFormQuery = (query: ParsedUrlQuery, key: string, defaultVal: string): string => {
  if (typeof query[key] === 'string') {
    return query[key] as string
  }

  return defaultVal
}

export const setIsDarkTheme = (): void => {
  localStorage.setItem('isDark', 'true')
}

export const unsetIsDarkTheme = (): void => {
  localStorage.removeItem('isDark')
}

export const getIsDarkTheme = (): string | null => {
  return typeof window != 'undefined' ? localStorage.getItem('isDark') : null
}