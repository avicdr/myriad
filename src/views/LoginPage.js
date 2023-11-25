import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import TextField from "../components/TextField/TextField";
import Wrapper from "../hoc/Wrapper";
import { getCookie, setCookie } from "../utils/cookie"; 
import { startLoader, stopLoader } from "../utils/functions";
import axios from "axios";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = getCookie("token/");
    if (token) {
      history.push("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!username) {
      setError("Email field is missing!");
    } else if (!password) {
      setError("Password field is missing!");
    } else {
      setError("");
      startLoader();
      setLoading(true);
      try {
        const response = await axios.post("https://api-twitter.digitemtech.com/api/token/", { 
            username, 
            password 
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status === 200) {
          const result = response.data;
          localStorage.setItem("refreshToken", `${result.refresh}`);
          localStorage.setItem("token", `Bearer ${result.access}`);
          localStorage.setItem("isAuthenticated", true);
          history.push("/");
          window.location.reload()
        } else {
          throw response;
        }
      } catch (err) {
        console.log("err", err);
        setError(err?.message);
      }
      setLoading(false);
      stopLoader();
    }
  };

  const handleClickRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <Wrapper auth={false}>
      <div className="home">
        <div id="page-body" className="page-body w-100">
          <form
            className="h-100 d-flex align-items-center"
            onSubmit={handleSubmit}
          >
            <div className="inputDetailsDiv login-card m-auto">
              <div className="text-center">
                {/* <h3 className="bold">Welcome Back!</h3> */}
                <img src="/icon.jpg" alt="logo" height={"auto"} width="100px" />
                <h1 className="mt-3 fntSz24 bold">
                  Log in to your Myraid account
                </h1>
                <br />
              </div>
              <div className="w-90">
                <TextField
                  // placeholder="Email"
                  type="text"
                  name="email"
                  id="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={""}
                  required={true}
                  formSubmitted={formSubmitted}
                  label={"Email address"}
                  lang={""}
                />{" "}
              </div>
              <div className="w-90">
                <TextField
                  // placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={""}
                  required={true}
                  formSubmitted={formSubmitted}
                  label={"Password"}
                  lang={""}
                />
              </div>
              <div className="w-90 p-0 container d-flex justify-content-between forgot-pwd-txt-cont">
                <div className="my-2 d-flex">
                  <input
                    onChange={handleClickRememberMe}
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={rememberMe}
                  />
                  <label htmlFor="rememberMe" className="ml-1 mb-0">
                    {" "}
                    Remember Me?
                  </label>
                </div>
                <Link to="#">
                  <span className=" my-2forgot-password-link cursor_pointer">
                    Forgot password?
                  </span>
                </Link>
              </div>
              {error ? (
                <p className="text-danger mb-0 text-start w-90">{error}</p>
              ) : (
                <></>
              )}
              <button
                disabled={!username || !password || loading}
                type="submit"
                onClick={handleSubmit}
                className={" btnColoured mt-0 w-90"}
              >
                {loading ? "loading...." : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <section className="footer" id="footer"></section>
    </Wrapper>
  );
};
export default LoginPage;
