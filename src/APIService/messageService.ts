import Message from "../types/message";
import Runner from "./runner";

class MessageService {
  runner;
  constructor() {
    this.runner = new Runner();
  }
  async postMessage(message: Message) {
    const data = await this.runner.performPOST(
      `https://portfolio-messager-default-rtdb.firebaseio.com/messages.json`,
      message
    );
    return data;
  }
  async getMessage(message: Message) {
    const data = await this.runner.performGET(
      `https://portfolio-messager-default-rtdb.firebaseio.com/messages.json`,
      message
    );
    return data;
  }
}
export default MessageService;