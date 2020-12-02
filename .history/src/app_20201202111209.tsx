import { createContext } from 'rax';
import { runApp } from 'rax-app';
import { ThemeProvider } from '@/components/Theme';

runApp({
  app: {
    // 可选，自定义添加 Provider(小程序编译时不支持)
    addProvider: ({ children }) => {
      return (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      );
    },
  },
});
