import Cookies from "js-cookie";

const LoginRoute = (props) => {
  if (Cookies.get("token") !== undefined) {
    window.location = "/";
  } else if (Cookies.get("token") === undefined) {
    // eslint-disable-next-line react/prop-types
    return props.children;
  }
};
export default LoginRoute;
