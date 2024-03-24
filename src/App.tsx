import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import React, { Suspense } from "react";
import { login } from "./Slices/loginSlice.js";
import Login from "./views/pages/login/Login.js";
import Dashboard from "./views/dashboard/Dashboard.js";
import "./scss/style.scss";
import DefaultLayout from "./layout/DefaultLayout.js";
import Page404 from "./views/pages/page404/Page404.js";
import Page500 from "./views/pages/page500/Page500.js";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  const dispatch = useDispatch();
  let token: any = localStorage.getItem("token");
  let name: any = localStorage.getItem("name");
  let role_id: any = localStorage.getItem("role_id");
  let userId: any = localStorage.getItem("userId");
  React.useEffect(() => {
    if (token) {
      let userinfo: any = {
        token: token,
        name: name,
        role_id: role_id,
        userId: userId,
      };
      dispatch(login(userinfo));
    } else {
    }
  }, [token]);

  return (
    <Suspense fallback={loading}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="*" index element={<DefaultLayout />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
