import userApis from '../apis/user.api';
import alertActions from './alert.action';
import history from '../helpers/history';
import { request, success, failure } from './login.actions';
import userConstants from '../constants/user.constants';

function login(username, password) {
  return dispatch => {
    dispatch(request(username, password));
    userApis.login(username, password).then(
      () => {
        dispatch(success());
        history.push('/');
        dispatch(alertActions.success('Đăng nhập thành công'));
        window.location.reload();
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

const listAllUserAction = data => {
  return { type: userConstants.LIST_USER_SUCCESS, data };
};
function listAllUser(page) {
  return dispatch => {
    userApis.listAllUser(page).then(data => {
      dispatch(listAllUserAction(data));
    });
  };
}

const listAllSkillAction = data => {
  return { type: userConstants.LIST_SKILL_SUCCESS, data };
};
function listAllSkill(page) {
  return dispatch => {
    userApis.listAllSkill(page).then(data => {
      dispatch(listAllSkillAction(data));
    });
  };
}

const listAllComplainAction = data => {
  return { type: userConstants.LIST_ALL_COMPLAIN, data };
};

function listAllComplaint(page) {
  return dispatch => {
    userApis.listAllComplain(page).then(data => {
      dispatch(listAllComplainAction(data));
    });
  };
}

const getDetailComplainAction = data => {
  return { type: userConstants.GET_DETAIL_COMPLAIN, data };
};
function getDetailComplain(id) {
  return dispatch => {
    userApis.getDetailComplain(id).then(data => {
      dispatch(getDetailComplainAction(data));
    });
  };
}
const userActions = {
  login,
  listAllUser,
  listAllSkill,
  listAllComplaint,
  getDetailComplain
};

export default userActions;
