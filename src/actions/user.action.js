import userApis from "../apis/user.api";
import alertActions from "./alert.action";
import history from "../helpers/history";
import { request, success, failure } from "./login.actions";

function login(username, password) {
  return dispatch => {
    console.log("login---------");
    dispatch(request(username, password));
    console.log("login api ne-------");
    userApis.login(username, password).then(
      () => {
        dispatch(success());
        history.push("/");
        dispatch(alertActions.success("Đăng nhập thành công"));
        window.location.reload();
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

const userActions = {
  login
};

export default userActions;
