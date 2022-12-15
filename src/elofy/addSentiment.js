const { default: axios } = require("axios");
const { POST_SENTIMENT } = require("../api");

const addSentiment = async (session) => {
  const { url, headers } = POST_SENTIMENT(session);
  const payload = {
    sentimento: 1,
    score: 5,
    descricao: "#GreatPlaceToWork",
  };
  const data = new URLSearchParams(payload).toString();

  try {
    const response = await axios({ url, headers, data, method: "post" });
    return !isNaN(response.data);
  } catch (error) {
    console.log(`Falha na requisição de inserção de sentimento:`);
    console.log(error?.response?.data || error?.response || error);
    return false;
  }
};

module.exports = addSentiment;
