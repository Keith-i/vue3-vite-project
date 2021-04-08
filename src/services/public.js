import request from "/@/utils/request";

export const getHomePageBannerList = () => {
  return request("/mfcard/home/getHomePageBannerList", {
    method: "get",
  });
};
