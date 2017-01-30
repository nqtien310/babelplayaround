class Main {
  constructor(appName){
    this.appName = appName;
  }

  introduce() {
    alert(`
      Hello,
      My name is ${this.appName}
    `);
  }
}
