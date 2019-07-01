module.exports = [
  {
    name: "routerHistoryMode",
    message: `使用路由的history模式? (Requires proper server setup for index fallback in production) `,
    type: `confirm`,
    default: true
  },
  {
    name: "mock",
    message: `开发环境使用mock模拟数据?`,
    type: `confirm`,
    default: true
  },
  {
    name: "vant",
    message: `是否使用vant?`,
    type: `confirm`,
    default: true
  }
];
