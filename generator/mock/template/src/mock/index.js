import Mock from "mockjs";
import { BASE_URL } from "@/config";

const modulesFiles = require.context("./modules", false, /\.js$/);
modulesFiles.keys().forEach(item => {
  const value = modulesFiles(item);
  fnCreate(value, false);
});
Mock.setup({
  timeout: "500-2000"
});
/**
 * 创建mock模拟数据
 * @param {*} mod 模块
 * @param {*} isOpen 是否开启?
 */
function fnCreate(mod, isOpen = true) {
  if (isOpen) {
    for (let key in mod) {
      (res => {
        if (res.isOpen !== false) {
          Mock.mock(new RegExp(BASE_URL + res.url), res.type, opts => {
            opts["data"] = opts.body ? JSON.parse(opts.body) : null;
            delete opts.body;
            console.log("\n");
            console.log("%cmock拦截, 请求: ", "color:blue", opts);
            const response = resData(res.data);
            console.log("%cmock拦截, 响应: ", "color:blue", response);
            if (res.ajax !== false) {
              return response;
            } else {
              return res.data;
            }
          });
        }
      })(mod[key]() || {});
    }
  }
}

function resData(data) {
  return {
    code: 0,
    data,
    msg: "请求成功！"
  };
}
