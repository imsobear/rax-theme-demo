/** 封装成一个 npm 包，在各种地方都可以调用 useTheme */
import { createElement, useContext, createContext, useState } from 'rax';

const ThemeContext = createContext(['default', (theme) => { return theme; }]);

const useTheme = () => useContext(ThemeContext);

function ThemeProvider(props) {
  const { children, defaultTheme } = props;
  const [theme, setTheme] = useState(defaultTheme || 'default');

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

export {
  useTheme,
  ThemeProvider,
};
