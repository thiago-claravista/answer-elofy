const addSentiment = require("./elofy/addSentiment");
const login = require("./elofy/login");
const schedule = require("node-schedule");

const init = async () => {
  const session = await login();

  if (session) {
    const added = await addSentiment(session);
    if (added) {
      console.log(`Sentimento adicionado com sucesso!`);
    } else {
      console.log(`Não foi possível adicionar o sentimento!`);
    }
  }
};

init();

schedule.scheduleJob("0 10 * * 1-5", init);
