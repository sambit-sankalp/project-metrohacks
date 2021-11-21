import React, { createContext, useEffect, useState } from 'react';

// libraries
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { auth, provider } from '../../config/firebase';

// Context Created
export const AuthContext = createContext();

//Context Provider
const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, () => {
      setLogin(!login);
    });
  }, [login]);

  const googleSignIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // ...
        //saving data to mongodb
        console.log(user.displayName);
        console.log(user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        //sending user info to mongodb
        console.log(user.displayName);
        console.log(user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <AuthContext.Provider value={{ googleSignIn, createUser, signin, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
