import Mock from "mockjs";
// 获取订单列表
export function allEvent() {
  return {
    isOpen: true,
    url: "/event/allEvent/",
    type: "get",
    data: Mock.mock({
      "data|10": [
        {
          id: 1,
          eventNo: "001",
          eventTag: null,
          eventName: "测试",
          eventContent: "<p>1.jpg</p><p>测试数据</p>",
          entryOpenTime: "2019-01-31 11:36:03",
          entryCloseTime: "2019-01-31 11:36:08",
          qrCode: null,
          eventStartTime: "2019-01-31 11:36:14",
          eventEndTime: "2019-01-31 11:36:15",
          eventNumber: 100,
          eventAddress: "成都市高新区天府大道1480号拉·德方斯大厦东楼7楼",
          status: 2,
          statusName: "报名中",
          keyWord: null,
          longitude: null,
          latitude: null,
          environment: null,
          platCode: "001",
          signStartTime: "2019-01-27 10:23:10",
          signEndTime: "2019-02-04 10:23:16",
          upperShelfTime: null,
          lowerShelfTime: null
        }
      ]
    }).data
  };
}
