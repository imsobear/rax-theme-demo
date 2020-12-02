# rax-materials-basic-app

核心代码：

- 封装一个 theme 的 npm 包：[code](./src/components/Theme/index.tsx)
- 项目包装一个 ThemeProvider：[code](./src/app.tsx)
- 其他地方通过 `useTheme` 读取 theme：[code](./src/pages/Home/index.tsx)

## Getting Started

### `npm run start`

Runs the app in development mode.

Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.
