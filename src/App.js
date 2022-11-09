import React, { Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import Layout from "./pages/page-layout/Layout";
import HomePage from "./pages/Home";
import AllUsersPage from "./pages/AllUsers";
import Spinner from "./Components/UI/Spinner/Spinner";

const NotFound = React.lazy(() => import("./pages/NotFound"));
const MessagesPage = React.lazy(() => import("./pages/Messages"));
const NotificationsPage = React.lazy(() => import("./pages/Notifications"));
const ProfilePage = React.lazy(() => import("./pages/Profile"));

const App = () => {
  return (
    <Layout>
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
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/notfound" element={<NotFound />} />

          <Route path="*" element={<Navigate replace to="/notfound" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
