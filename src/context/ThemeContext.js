import React from 'react'

const ThemeContext = React.createContext({
  theme: false,
  changeTheme: () => {},
  saveList: [],
  saveVideoList: () => {},
})

export default ThemeContext
