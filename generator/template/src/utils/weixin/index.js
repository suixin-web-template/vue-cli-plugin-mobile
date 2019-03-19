/**
 * Created by liubingwen on 2017/7/28.
 */
import wx from "weixin-js-sdk";
import { Notify } from "vant";
let ready = null;
const readyFn = (() => new Promise(resolve => (ready = resolve)))();

export async function chooseWXPay(options) {
  await readyFn;
  return new Promise((resolve, reject) => {
    wx.chooseWXPay({
      ...options,
      success: res => {
        resolve(res);
      },
      fail: res => {
        console.log(res);
        Notify("调取支付失败了！");
        reject(res);
      },
      cancel: res => {
        console.log(res);
        Notify("支付已取消！");
        reject(res);
      }
    });
  });
}
let url = null;
export default async ({ dispatch }) => {
  const newUrl = window.location.href.split("#")[0];
  if (newUrl !== url) {
    url = newUrl;
    try {
      const data = await dispatch("wx/register", url);
      wx.config({
        debug: false,
        jsApiList: Object.keys(wx),
        ...data
      });

      wx.error(e => {
        console.log("wx sdk errors:", e);
      });
      wx.ready(() => {
        ready();
      });
    } catch (e) {
      console.log(e);
    }
  }
  return true;
};
