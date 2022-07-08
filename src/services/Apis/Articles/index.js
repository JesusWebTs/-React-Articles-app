import Request from "../abstract";

class Articles extends Request {
  constructor({ url = "", baseURL = "", headers = "" } = {}) {
    super({ url, baseURL, headers });
  }

  getAllArticles() {
    return this.get({ endPoint: "/articles" });
  }
  getArticleFiltered({ type = "Productos" }) {
    return this.getAllFiltered({
      query: `?filter=${type}`,
      endPoint: "/articles",
    });
  }
}
export default Articles;
