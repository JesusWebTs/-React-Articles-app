import ArticlesApi from "./Apis/Articles";
import SubsCriptionApi from "./Apis/SubsCription";

const headers = {
  "Content-Type": "application/json",
};

const articlesApi = new ArticlesApi({
  baseURL: "https://5eed24da4cbc340016330f0d.mockapi.io",
  url: "/api",
  headers,
});
const subsCription = new SubsCriptionApi({
  baseURL: "https://5eed24da4cbc340016330f0d.mockapi.io",
  url: "/api",
  headers,
});

export { articlesApi, subsCription };
