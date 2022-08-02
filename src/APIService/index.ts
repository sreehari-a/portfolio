import AuthService from "./authService";
import MessageService from "./messageService";

class APIServiceInstances {
  AuthServiceRunner!: AuthService;
  MessageServiceRunner!: MessageService;

  getAuthRunner() {
    if (!this.AuthServiceRunner) {
      this.AuthServiceRunner = new AuthService();
    }
    return this.AuthServiceRunner;
  }
  getMessageRunner() {
    if (!this.MessageServiceRunner) {
      this.MessageServiceRunner = new MessageService();
    }
    return this.MessageServiceRunner;
  }
}

const APIService = new APIServiceInstances();

export default APIService;
