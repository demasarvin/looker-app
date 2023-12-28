import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import JobVacancy from "./pages/JobVacancy.jsx/JobVacancy";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import AuthRoute from "./components/AuthRoute";
import LoginRoute from "./components/LoginRoute";
import Layout from "./components/Layout/Layout";
import LayoutDashboard from "./components/Layout/LayoutDashboard";
import ListJobsVacancy from "./pages/Dashboard/ListJobsVacancy";
import CreateJob from "./pages/Dashboard/CreateJob";
import UpdateJob from "./pages/Dashboard/UpdateJob";
import Profile from "./pages/Dashboard/Profile";
import ChangePassword from "./pages/Dashboard/ChangePassword";
import NotAccess from "./pages/NotAccess";
import Detail from "./pages/JobVacancy.jsx/Detail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/job-vacancy"
          element={
            <Layout>
              <JobVacancy />
            </Layout>
          }
        />
        <Route
          path="/job-vacancy/:id"
          element={
            <Layout>
              <Detail />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <LoginRoute>
                <Register />
              </LoginRoute>
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginRoute>
                <Login />
              </LoginRoute>
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <LayoutDashboard>
                <Dashboard />
              </LayoutDashboard>
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard/list-job-vacancy"
          element={
            <AuthRoute>
              <LayoutDashboard>
                <ListJobsVacancy />
              </LayoutDashboard>
            </AuthRoute>
          }
        />
        <Route
          path="/dashboard/list-job-vacancy/form"
          element={
            <AuthRoute>
              <LayoutDashboard>
                <CreateJob />
              </LayoutDashboard>
            </AuthRoute>
          }
        />

        <Route
          path="/dashboard/list-job-vacancy/edit/:id"
          element={
            <AuthRoute>
              <LayoutDashboard>
                <UpdateJob />
              </LayoutDashboard>
            </AuthRoute>
          }
        />

        <Route
          path="/dashboard/profile"
          element={
            <AuthRoute>
              <LayoutDashboard>
                <Profile />
              </LayoutDashboard>
            </AuthRoute>
          }
        />

        <Route
          path="/dashboard/change-password"
          element={
            <AuthRoute>
              <LayoutDashboard>
                <ChangePassword />
              </LayoutDashboard>
            </AuthRoute>
          }
        />
        <Route
          path="/not-access"
          element={
            <Layout>
              <NotAccess />
            </Layout>
          }
        />

        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
