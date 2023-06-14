class Boss {
  sendReply(propose) {
    console.log(`Good propose:: ${propose}`);
  }
}

class Secretary {
  constructor() {
    this.boss = new Boss();
  }
  sendProposeToBoss(propose) {
    this.boss.sendReply(propose);
  }
}

class Developer {
  constructor(propose) {
    this.propose = propose;
  }
  sendPropose(target) {
    target.sendProposeToBoss(this.propose);
  }
}

let secretary = new Secretary();
let propose = "Code follow design pattern";
let developer = new Developer(propose);
developer.sendPropose(secretary);
