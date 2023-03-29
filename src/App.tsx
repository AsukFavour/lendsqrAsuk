import LoginForm from "./components/login";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserDetails from "./components/UserDetails/UserDetails";
import Users from "./components/Users/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/dashboard/users"
          element={
            <Layout>
              <Users />
            </Layout>
          }
        />
        <Route
          path="/dashboard/userdetails"
          element={
            <Layout>
              <UserDetails />
            </Layout>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <Layout>
              <div
                style={{
                  background: "inherit",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <p style={{ background: "transparent" }}>Page not available</p>
              </div>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
