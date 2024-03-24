import React from "react";
import { AppContent, AppSidebar, AppHeader } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Slices/loginSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../Store";

const DefaultLayout = () => {
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token: any = localStorage.getItem("token");
  let name: any = localStorage.getItem("name");
  let role_id: any = localStorage.getItem("role_id");
  let userId: any = localStorage.getItem("userId");
  React.useEffect(() => {
    if (userInfo) {
      let userinfo: any = {
        token: token,
        name: name,
        userId: userId,
        role_id: role_id,
      };
      dispatch(login(userinfo));
    } else {
      navigate("/");
    }
  }, [token]);
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
