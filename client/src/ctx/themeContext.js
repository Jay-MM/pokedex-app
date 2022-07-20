import { createContext, useContext, useState, useEffect } from 'react'

const defaultContext = 'light'

export const ThemeContext = createContext(defaultContext)

export const ThemeContextProvider = props => {
  const [theme, setTheme] = useState(defaultContext)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

