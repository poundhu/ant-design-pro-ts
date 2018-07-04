
## 写在前面

Ant Design Pro 是一个企业级中后台前端/设计解决方案，秉承 [Ant Design](http://ant.design/) 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

## 前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[React](http://facebook.github.io/react/)、[dva](http://github.com/dvajs/dva)、
(ant)
和 [antd](https://ant.design/docs/react/introduce-cn)，提前了解和学习这些知识会非常有帮助。

## 安装

有两种方式进行安装：

### 直接 clone git 仓库

```bash
$ git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project
$ cd my-project
$ npm  i  // 安装
$ npm run start  // 运行开发环境
$ npm run build  // 打包构建
$
```

## 目录结构

我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── mock                     # 本地模拟数据
├── dist                     # 打包过后部署到服务器上的静态资源
├── public
│   └── favicon.ico          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── common               # 应用公用配置，如导航信息
│   ├── components           # 业务通用组件
│   ├── layouts              # 通用布局
│   ├── models               # dva model
│   ├── pages                # 业务页面入口和常用模板(所有的业务页面)
│   ├── services             # 全局后台接口服务
│   ├── utils                # 工具库
│   ├── theme.js             # 主题配置
│   ├── index.ejs            # HTML 入口模板
│   ├── dva.ts               # dva全局配置文件
│   ├── global.less          # 全局样式
├── README.md
└── package.json
```

## 本地开发

安装依赖。

```bash
$ npm install
```

> 如果网络状况不佳，可以使用 [cnpm](https://cnpmjs.org/) 进行加速。

```bash
$ npm start
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/DaIsSQRbNkwOXbMDhqEx.png" width="700" />

启动完成后会自动打开浏览器访问 [http://localhost:8000](http://localhost:8000)，你看到下面的页面就代表成功了。

<img src="https://gw.alipayobjects.com/zos/rmsportal/psqyFTiRoXQeaNZdjppA.png" width="700" alt="首页截图" />

接下来你可以修改代码进行业务开发了，我们内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、国际化、全局路由等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。

## 路由约定


# 资料

## 基础语言
  es6 
  https://dvajs.com/knowledgemap
## react教程
  react
## dva 教程
  https://github.com/kenberkeley/redux-simple-tutorial

