import React from "react";
import AuthService from "../APIService/authService";

const AuthContext = React.createContext({});

export function useAuth() {
  const [authed, setAuthed] = React.useState(false);
  const [authService] = React.useState(new AuthService());
  return {
    authed,
    login(data: {email: string, password: string}) {
      setAuthed(true);
      authService.signUser({email: data.email, password: data.password, returnSecureToken: true})
    },
    logout() {
      authService.logout();
    },
  };
}

export function AuthProvider({ children }: {children: any}) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>
  {children}
  </AuthContext.Provider>;
}

export default function AuthConsumer() {
  return React.useContext(AuthContext);
}