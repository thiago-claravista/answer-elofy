const { default: axios } = require("axios");
const { POST_LOGIN } = require("../api");
const { email, password } = require("../config.json");
require("dotenv").config();

const login = async () => {
  const { url, headers } = POST_LOGIN();
  const user = {
    data_u: process.env.EMAIL || email,
    data_p: process.env.PASSWORD || password,
  };
  const data = new URLSearchParams(user).toString();

  try {
    const response = await axios({ url, headers, data, method: "post" });
    const sessions = response.headers["set-cookie"];
    const [session] = sessions.pop().match(/(?<=ci_session=)[^;]+/);

    return session;
  } catch (error) {
    console.log(`Falha na requisição de login:`);
    console.log(error?.response?.data || error?.response || error);
  }
};

module.exports = login;
