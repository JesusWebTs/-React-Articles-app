import Request from "../abstract";

class Subscription extends Request {
  /* Me di cuenta que era la misma api :D */
  constructor({ url = "", baseURL = "", headers = "" } = {}) {
    super({ url, baseURL, headers });
  }
}
export default Subscription;
