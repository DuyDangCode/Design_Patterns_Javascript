class BotAI {
  constructor(name) {
    if (BotAI.instance) {
      return BotAI.instance;
    }
    this.name = name;
    BotAI.instance = this;
  }

  speech() {
    console.log("Hello every one!!!");
    console.log(`I am ${this.name}`);
  }
}

let bot = new BotAI("Oggy");
bot.speech();

let bot2 = new BotAI("Jack");
bot2.speech();
