vue-cli-preset-mobile

vue-cli-preset-mobile 是一个 web 前端项目骨架，用于配合 Vue.js 开发标准工具 [Vue CLI 4](https://cli.vuejs.org/zh/) 在创建新项目时使用。

## 准备工作
确认计算机已安装 [nodejs v10.0.0+](https://nodejs.org/en/download/) 与 npm

## 快速开始

```bash
# 安装 vue-cli
npm install -g @vue/cli

# 根据远程 preset 创建项目 
vue create --preset suixin-web-template/vue-cli-preset-mobile preset-mobile-demo

# 本地预览
cd preset-seed-demo && yarn serve

# 构建部署版本
yarn build

# 代码提交
git-cz
```

## 项目结构
标识：
** 根据需要可选的目录或者文件

```bash
├── dist                            # 输出目录
└── src                             # 源代码
    ├── assets                      # 项目级公共资产文件
    ├── components                  # 项目级公共组件
    ├── config                      # 项目级配置文件
    ├── layouts                     # 页面layout
    ├── mock                        # 接口mock
    ├── pages                       # 页面文件夹
    ├── plugins                     # vue插件
    ├── store                       # 项目级公共 store，提供生成 store 函数
    │   └── modules                 # 项目级公共 store 子模块
    ├── styles                      # 项目级公共样式
    ├── utils                       # 项目级公共方法
    ├── App.vue                     # 项目入口vue文件
    ├── main.js                     # 项目入口JS文件
    ├── permission.js               # 路由权限控制文件
    └── router.js                   # 自动路由配置文件
```
