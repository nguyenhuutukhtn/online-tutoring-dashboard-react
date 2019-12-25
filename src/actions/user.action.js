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

const listAllUserAction = data => {
  return { type: userConstants.LIST_USER_SUCCESS, data };
};
function listAllUser(page, token) {
  return dispatch => {
    userApis.listAllUser(page, token).then(data => {
      dispatch(listAllUserAction(data));
    });
  };
}

const listAllSkillAction = data => {
  return { type: userConstants.LIST_SKILL_SUCCESS, data };
};
function listAllSkill(page, token) {
  return dispatch => {
    userApis.listAllSkill(page, token).then(data => {
      dispatch(listAllSkillAction(data));
    });
  };
}

const listAllComplainAction = data => {
  return { type: userConstants.LIST_ALL_COMPLAIN, data };
};

function listAllComplaint(page, token) {
  return dispatch => {
    userApis.listAllComplain(page, token).then(data => {
      dispatch(listAllComplainAction(data));
    });
  };
}

const getDetailComplainAction = data => {
  return { type: userConstants.GET_DETAIL_COMPLAIN, data };
};
function getDetailComplain(id, token) {
  return dispatch => {
    userApis.getDetailComplain(id, token).then(data => {
      dispatch(getDetailComplainAction(data));
    });
  };
}
export const requestPolicyOfStudent = (page, token, cb) => {
  let check = true;
  let url = 'http://localhost:3200/admin/policy';
  const params = {
    p: page
  };
  if (Object.keys(params)) {
    url = url.concat('?');
  }

  Object.keys(params).forEach(key => {
    if (params[key]) {
      url = url.concat(`${key}=${params[key]}&`);
    }
  });

  url = url.slice(0, url.length - 1);

  return () => {
    // eslint-disable-next-line no-undef
    fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.status !== 200) {
          check = false;
        }
        return response.json();
      })
      .then(response => {
        if (check) {
          cb(response);
        }
        return null;
      });
  };
};

const requestPolicyDetail = (id, token, cb) => {
  return () => {
    userApis.requestPolicyDetail(id, token, cb);
  };
};

const getProfitAction = data => {
  return { type: userConstants.GET_PROFIT, data };
};
function getProfit(token) {
  return dispatch => {
    userApis.getProfit(token).then(data => {
      dispatch(getProfitAction(data));
    });
  };
}

const getTopProfitByTutorAction = data => {
  return { type: userConstants.GET_PROFIT_TUTOR, data };
};
function getTopProfitByTutor(token) {
  return dispatch => {
    userApis.getTopProfitByTutor(token).then(data => {
      dispatch(getTopProfitByTutorAction(data));
    });
  };
}

const userActions = {
  login,
  listAllUser,
  listAllSkill,
  listAllComplaint,
  getDetailComplain,
  requestPolicyDetail,
  getProfit,
  getTopProfitByTutor
};

export default userActions;
