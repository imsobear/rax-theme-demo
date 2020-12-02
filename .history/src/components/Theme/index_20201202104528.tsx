import { createElement, useContext, createContext } from 'rax';

const ThemeContext = createContext('light');

function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}

function ThemeProvider(props) {
  const { children, theme: localTheme } = props;
  const outerTheme = useTheme();

  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(
        [
          'Material-UI: You are providing a theme function prop to the ThemeProvider component:',
          '<ThemeProvider theme={outerTheme => outerTheme} />',
          '',
          'However, no outer theme is present.',
          'Make sure a theme is already injected higher in the React tree ' +
            'or provide a theme object.',
        ].join('\n'),
      );
    }
  }

  const theme = React.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

function useTheme() {

}