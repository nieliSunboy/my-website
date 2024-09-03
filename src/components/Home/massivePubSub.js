
 
 class Subscribe {
  constructor() {
    this.handlers = {};
  }

  subscribe(event, handler) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(handler);
  }

  publish(event, data) {
    if (this.handlers[event]) {
      this.handlers[event].forEach((handler) => handler(data));
    }
  }
}

export default Subscribe;

 