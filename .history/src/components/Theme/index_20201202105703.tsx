/** 封装成一个 npm 包，在各种地方都可以调用 useTheme */
import { createElement, useContext, createContext } from 'rax';

const ThemeContext = createContext('default');

function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}

function ThemeProvider(props) {
  const { children, theme } = props;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export {
  useTheme,
  ThemeProvider,
};
