# Cow Admin

Cow Admin是一个基于Vue3 + TSX + arco-design的中后台管理系统，使用简单方便，可用于工作也可用于学习。

## 特性

- 最新的技术栈：基于Vue3 + TSX + Pinia
- 国际化：内置完善的国际化方案
- 主题：支持动态切换主题
- 权限：支持动态路由的权限控制
- 组件：丰富的组件，满足日常开发需求
- 示例：提供完整的示例代码，方便学习
- 易用：开箱即用，上手简单

## 目录
```bash
./
├── .husky husky # 脚本 
├── .vscode vscode # 配置
├── public
│ └── favicon.ico # 网站图标
├── src
│ ├── api # Api ajax 等
│ ├── assets # 本地静态资源
│ ├── config # 项目全局设置
│ ├── components # 通用组件
│ ├── layout # 布局
│ ├── directives # 自定义指令
│ ├── hooks # 全局hooks
│ ├── locale # 国际化
│ ├── router # Vue-Router
│ ├── store # Pinia
│ ├── typings # .d.ts 描述文件
│ ├── utils # 工具库
│ ├── pages # 业务页面入口和常用模板
│ └── App.vue # Vue 模板入口
│ └── env.d.ts # 环境变量定义文件
│ └── main.ts # Vue 入口 ts
│ └── permission.ts # 路由守卫(路由权限控制)
└── .env # 环境变量
└── .env.development # 开发环境变量
└── .env.production # 生产环境变量
└── .eslintrc.json # eslint 配置
└── .prettierrc.json # prettier 配置
└── deploy.sh # 部署脚本
└── index.html # Vue 入口模板
└── README.md
└── package.json
└── tsconfig.json
└── tsconfig.node.json
└── vite.config.ts
```

