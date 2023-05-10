import { createContext, useState } from "react";

const AuthContext = createContext("");

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;