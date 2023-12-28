import Cookies from "js-cookie";

const AuthRoute = (props) => {

  if (Cookies.get("token") === undefined) {
    window.location = "/not-access";
  } else {
    // eslint-disable-next-line react/prop-types
    return props.children;
  }
};

export default AuthRoute;
