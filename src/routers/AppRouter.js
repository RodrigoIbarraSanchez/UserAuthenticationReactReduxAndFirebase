import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { AuthRouter } from "./AuthRouter";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { login } from "../actions/auth";
import { LoadingScreen } from "../components/ui/LoadingScreen";
import { PublicRoute } from "./PrivateRoute";
import { PrivateRoute } from "./PublicRoute";
import { AppScreen } from "../components/App/AppScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <LoadingScreen />;
    // return <h1>Cargando...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuth={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute isAuth={isLoggedIn}>
              <AppScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
