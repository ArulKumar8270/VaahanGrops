import { useNavigate } from "react-router-dom";
import "../../../scss/login.scss";
import { Controller, useForm } from "react-hook-form";
import { CAlert, CFormInput } from "@coreui/react";
import { useLoginUsersMutation } from "../../../Services/user";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Slices/loginSlice";
import { RootState } from "../../../Store";
import React from "react";
const Login = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state: RootState) => state.loginState.userInfo);
  const [loginApi] = useLoginUsersMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const formData = watch();
  const dispatch = useDispatch();
  console.log(formData, "324532", userInfo);

  React.useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [userInfo]);

  const onSubmit = async (data) => {
    try {
      const result = await loginApi(data);
      console.log(result, "sadfasd", result?.["data"]?.access_token);
      if (result?.["data"]?.success) {
        localStorage.setItem("token", result?.["data"]?.data?.access_token);
        localStorage.setItem("name", result?.["data"]?.data?.user?.name);
        localStorage.setItem("role_id", result?.["data"]?.data?.user?.role_id);
        localStorage.setItem("userId", result?.["data"]?.data?.user?.id);
        let userinfo: any = {
          token: result?.["data"]?.data?.access_token,
          name: result?.["data"]?.data?.user?.name,
          userId: result?.["data"]?.data?.user?.id,
          role_id: result?.["data"]?.data?.user?.role_id,
        };
        dispatch(login(userinfo));
      } else {
        alert(result?.["error"]?.["data"]?.data?.error);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="mainLogin">
      <div className="wrapperlogin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div className="input-box">
            <Controller
              name="username"
              control={control}
              rules={{ required: "User name is required" }}
              defaultValue=""
              render={({ field }) => (
                <CFormInput
                  className="border"
                  {...field}
                  type="text"
                  placeholder="Name"
                />
              )}
            />
            {errors.email && (
              <div className="text-danger">{"Field is required"}</div>
            )}
          </div>
          <div className="input-box">
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              defaultValue=""
              render={({ field }) => (
                <CFormInput
                  className="border"
                  {...field}
                  type="text"
                  placeholder="Password"
                />
              )}
            />
            {errors.password && (
              <div className="text-danger">{"Field is required"}</div>
            )}
            <i className="bx bxs-lock-alt" />
          </div>
          {/* <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#"> Forgot Password?</a>
          </div> */}
          <button type="submit" className="btn">
            Login
          </button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Contact Admin</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
