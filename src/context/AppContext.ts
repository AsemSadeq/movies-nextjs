import { createContext } from 'react'
import { Genres } from 'shared'

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

interface AppContextIR {
    theme: Theme
    setTheme: (theme: Theme) => void
    allGenres: Genres
}

export const AppCtx = createContext<AppContextIR>({
  theme: Theme.LIGHT,
  setTheme: () => {},
  allGenres: [{ id: 0, name: 'name' }],
})
