import { Notify } from "vant";
import { BASE_URL } from "@/api/instance";
/**
 * @export
 * @returns {number}
 */
export function getClientHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight;
}

export function isWeixin() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes("micromessenger");
}
export function resData(response, show = true) {
  return new Promise((resolve, reject) => {
    const { code, message } = response;
    if (code === 0) {
      resolve(response);
    } else if (code === 302) {
      const { url } = response.data;
      window.location.href = decodeURI(url).replace(
        "{url}",
        encodeURIComponent(window.location.href)
      );
    } else {
      if (show) Notify(message);
      reject(response);
    }
  });
}
export function generateUUID() {
  let d = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x7) | 0x8).toString(16);
  });
}
export function getUrl(url) {
  return BASE_URL + url;
}
export function upperCaseFirst(str) {
  if (!str) return "";
  str = String(str);
  return str.charAt(0).toLocaleUpperCase() + str.substr(1);
}
// export function formatStr(text, frontLen = 4, endLen = 4) {
//   const end = text.length - endLen;
//   const len = end - frontLen;
//   let asterisk = "";
//   for (let i = 0; i < len; i++) {
//     asterisk += "*";
//   }
//   return text.substring(0, frontLen) + asterisk + text.substring(end);
// }
