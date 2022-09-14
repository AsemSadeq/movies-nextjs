import { getIsDarkTheme, getParamFormQuery, isEmptyObject, setIsDarkTheme, unsetIsDarkTheme } from './helpers'

describe('helpers', () => {
  describe('isEmptyObject', () => {
    it('returns false when object contains key', () => {
      expect(isEmptyObject({ test: 'test' })).toBeFalsy()
    })

    it('returns true when object is empty', () => {
      expect(isEmptyObject({})).toBeTruthy()
    })
  })

  describe('getParamFormQuery', () => {
    it('returns default value when key is not a string', () => {
      const defaultVal = 'default'
      expect(getParamFormQuery({ name: [] }, 'name', defaultVal)).toBe(defaultVal)
    })

    it('returns value of key when key is a string', () => {
      const keyValue = 'value'
      expect(getParamFormQuery({ name: keyValue }, 'name', 'default')).toBe(keyValue)
    })
  })

  describe('setIsDarkTheme', () => {
    it('sets `isDark` item to local storage', () => {
      setIsDarkTheme()
      expect(getIsDarkTheme()).not.toBeNull()
    })
    unsetIsDarkTheme()
  })

  describe('unsetIsDarkTheme', () => {
    it('unset `isDark` item from local storage', () => {
      setIsDarkTheme()
      unsetIsDarkTheme()
      expect(getIsDarkTheme()).toBeNull()
    })
  })

  describe('getIsDarkTheme', () => {
    it('gets `isDark` item from local storage', () => {
      setIsDarkTheme()
      expect(getIsDarkTheme()).not.toBeNull()
      unsetIsDarkTheme()
    })
  })
})
