import React, { useEffect, useState, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { getCookie, writeCookie, deleteCookie } from "./utils/cookies";

import Layout from "./pages/page-layout/Layout";
import HomePage from "./pages/Home";
import AllUsersPage from "./pages/AllUsers";
import Spinner from "./Components/UI/Spinner/Spinner";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const MessagesPage = React.lazy(() => import("./pages/Messages"));
const NotificationsPage = React.lazy(() => import("./pages/Notifications"));
const ProfilePage = React.lazy(() => import("./pages/Profile"));
const EditProfilePage = React.lazy(() => import("./pages/EditProfile"));

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    const cookie = getCookie("jwt_token");

    if (cookie) {
      // console.log(cookie);
      //autologin
    }
  }, []);

  const onLogin = (user, token) => {
    setIsLoggedIn(true);
    setLoggedInUser(user);
    writeCookie("jwt_token", token, 7);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser();
    deleteCookie();
  };

  return (
    <Layout
      isLoggedIn={isLoggedIn}
      loggedInUser={loggedInUser}
      onLogin={onLogin}
      onLogout={onLogout}>
      <Suspense
        fallback={
          <div className="p-5">
            <Spinner />
          </div>
        }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<AllUsersPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route
            path="/users/:id"
            element={
              <ProfilePage
                isLoggedIn={isLoggedIn}
                loggedInUser={loggedInUser}
              />
            }
          />

          {isLoggedIn && (
            <Route
              path="/editprofile"
              element={<EditProfilePage loggedInUser={loggedInUser} />}
            />
          )}

          {!isLoggedIn && (
            <Route path="/editprofile" element={<Navigate replace to="/" />} />
          )}

          <Route path="/notfound" element={<NotFound />} />

          <Route path="*" element={<Navigate replace to="/notfound" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
