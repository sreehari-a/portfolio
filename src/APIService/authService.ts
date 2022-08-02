import Runner from "./runner";
import User from "../common/models/user";

type AuthResponse = {
  email: string;
  userId: string;
  token: string;
  expiresIn: number;
};

type Credentials = {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

class AuthService {
  runner;
  API_KEY;
  tokenExpirationTimer: any;
  constructor() {
    this.runner = new Runner();
    this.API_KEY = "AIzaSyBe-tqyAEnQsSTX7CDV0AUB1FPeIvOXE2g";
  }
  async signUser(credentials: Credentials,isSignUp?: boolean) {
    const data: AuthResponse = await this.runner.performPOST(
      `https://identitytoolkit.googleapis.com/v1/accounts:${
        (isSignUp && "signUp") || "signInWithPassword"
      }?key=${this.API_KEY}`,
      credentials,
    );
    const { email, userId, token, expiresIn } = data;
    this.handleAuth(email, userId, token, expiresIn);
    return data;
  }
  async signUp(credentials: Credentials) {
    const data = await this.signUser(credentials, true);
    return data;
  }
  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(sessionStorage.getItem("userData") || "");
    if (userData) {
      const user = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate)
      );
      if (user.token) {
        const expireDuration =
          new Date(userData._tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogout(expireDuration);
        // this.user.next(user);
      }
    }
  }
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
  logout() {
    // this.user.next(null);
    // this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
  }
  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirydate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirydate);
    // this.user.next(user);
    // this.autoLogout(expiresIn * 1000);
    sessionStorage.setItem("userData", JSON.stringify(user));
  }
}

export default AuthService;