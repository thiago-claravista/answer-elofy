const { base_url } = require("./config.json");

exports.POST_LOGIN = () => {
  return {
    url: `${base_url}/logar`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };
};

exports.POST_SENTIMENT = (session) => {
  return {
    url: `${base_url}/addSentimento`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: `ci_session=${session}`,
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  };
};
