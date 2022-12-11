import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  isActive: '',
  changeSection: () => {},
  savedList: [],
  updateSavedList: () => {},
})

export default ThemeContext
