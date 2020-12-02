import { createElement, useEffect, useState } from 'rax';
import { ThemeProvider } from '../Theme';

export default function CustomThemeProvider(props) {
  const { children } = props;
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {

  }, []);

  return <ThemeProvider value={theme}>{children}</ThemeProvider>;
}
