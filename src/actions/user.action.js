import userApis from '../apis/user.api';
import alertActions from './alert.action';
import history from '../helpers/history';
import { request, success, failure } from './login.actions';

function login(username, password) {
  return dispatch => {
    dispatch(request(username, password));
    userApis.login(username, password).then(
      () => {
        dispatch(success());

        dispatch(alertActions.success('Đăng nhập thành công'));
        setInterval(() => {
          history.push('/');
          window.location.reload();
        }, 4000);
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
