class Timer {
  id;
  constructor(title, delay, stopCount) {
    this.title = title;
    this.delay = delay;
    this.stopCount = stopCount;
    this.start();
  }
  start() {
    console.log(
      `Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`
    );
    this.id = setInterval(() => {
      this.tick();
    }, this.delay);
  }
  tick() {
    this.stopCount--;
    console.log(`Timer ${this.title} Tick!  |  cycles left ${this.stopCount}`);
    if (this.stopCount == 0) {
      this.stop();
    }
  }
  stop() {
    clearInterval(this.id);
    console.log(`Timer ${this.title} stopped`);
  }
}

function runTimer(id, delay, stopCount) {
  new Timer(id, delay, stopCount);
}

runTimer("Bleep", 1000, 5);
