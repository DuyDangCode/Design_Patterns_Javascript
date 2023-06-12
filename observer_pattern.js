class Observer {
  constructor(name) {
    this.name = name;
  }

  updateStatusFromSubject(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`:::: Pinggg :::: ${this.name} is going to ${location}`);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(Observer) {
    this.observerList.push(Observer);
  }

  sayHelp(location) {
    this.observerList.forEach((observer) =>
      observer.updateStatusFromSubject(location)
    );
  }
}

let soraka = new Subject();
let yasua = new Observer("yasua");
let zed = new Observer("zed");

soraka.addObserver(yasua);
soraka.addObserver(zed);

soraka.sayHelp("Khang baron");
