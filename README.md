<div align="center">
  <h1>
    <a href="https://github.com/jungeer/h5-template">H5项目模板</a>
  </h1>
</div>

## 开发前须知

请认真阅读，了解对应开发规范

## 简介

H5 初始化项目模板

## 如何运行

```bash
yarn   #依赖安装
yarn dev   #开发编译
yarn preview #生产编译预览
yarn build   #生产编译
```

## 项目技术栈

- [Vite](https://cn.vitejs.dev/)
- [Vant-4](http://vant-contrib.gitee.io/vant/#/zh-CN/home)
- [Vue3.0](https://cn.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Typescript](https://www.tslang.cn/docs/home.html)
- [Vueuse](https://vueuse.org/)
- [Lodash](https://www.lodashjs.com/)
- [Dayjs](https://dayjs.fenxianglu.cn/)

## 代码规范工具

- [eslint](https://eslint.bootcss.com/docs/rules/)
- [stylelint](https://www.npmjs.com/package/stylelint-config-standard)
- [commitlint](https://commitlint.js.org/#/?id=getting-started)

```bash
- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
```

- prettier
- editorconfig

## 命名规范

[遵守团队命名规范]

## 项目目录说明

```bash
├── src   #程序主目录
│   ├── App.vue
│   ├── main.ts   #主入口文件
│   ├── api   #api相关
│   │   ├── axios.ts
│   │   └── modules   #api模块化管理，存放对应功能/业务模块api文件 ex.login.ts, auth.ts
│   │       └── login.ts
│   ├── assets   #静态文件存放目录，图片/JS静态文件/CSS静态文件等
│   │   ├── css
│   │   ├── images
│   │   │   └── icons
│   │   │       └── batar.png
│   │   └── js
│   ├── components   #组件目录，放业务组件与通用组件，通用组件以 base-xxx 命名
│   │   └── base-welcome
│   │       └── index.vue
│   ├── constants   #常量文件存放目录
│   │   └── index.ts
│   ├── hooks   #存放hook文件
│   │   └── index.ts
│   ├── pages   #页面（路由文件）主目录
│   │   ├── about-view
│   │   │   └── index.vue
│   │   └── home-view
│   │       └── index.vue
│   ├── router   #路由目录，分模块管理
│   │   └── index.ts
│   ├── store   #pinia状态管理
│   │   ├── index.ts
│   │   └── modules   #pinia状态管理模块化
│   │       └── counter.ts
│   └── utils   #工具类封装
│       └── index.ts
├── types   #type类型定义
│   └── vue.d.ts
├── README.md
├── tsconfig.config.json
├── tsconfig.json
├── commitlint.config.js
├── components.d.ts
├── env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── vite.config.ts
└── yarn.lock
├── .editorconfig
├── .eslintrc
├── .prettierr.js
├── .stylelintrc.json
├── .env.development   #环境变量-开发环境
├── .env.production   #环境变量-生产环境
```
