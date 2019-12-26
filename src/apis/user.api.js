/* eslint-disable no-undef */
// import authHeader from '../helpers/auth-header';
import constantApi from './constants.api';
import history from '../helpers/history';

function handleResponse(response) {
  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      // logout();
      localStorage.clear();
      history.push('/login');
      window.location.reload(true);
      return Promise.reject(response.statusText);
    }
  }

  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };
  console.log('request', requestOptions);

  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/admin/login`, requestOptions)
    .then(handleResponse)
    .then(userInfo => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      return userInfo;
    });
}

function listAllUser(page, token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return fetch(
    `${constantApi.url}/admin/listallUser?page=${page}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => data);
}

function listAllSkill(page, token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return fetch(
    `${constantApi.url}/admin/listAllTag?page=${page}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => data);
}

function listAllComplain(page, token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return fetch(
    `${constantApi.url}/admin/listAllComplain?page=${page}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => data);
}

function getDetailComplain(id, token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return fetch(
    `${constantApi.url}/admin/getDetailComplain?id=${id}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => data);
}
const requestPolicyDetail = (id, token, cb) => {
  let check = true;
  const requestOptions = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };

  // eslint-disable-next-line no-undef
  return fetch(`${constantApi.url}/admin/policy/${id}`, requestOptions)
    .then(response => {
      if (response.status !== 200) {
        check = false;
        return false;
      }
      return response.json();
    })
    .then(response => {
      if (check) {
        cb(response);
      }
    });
};

function getProfit(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return fetch(`${constantApi.url}/admin/getAllProfit`, requestOptions)
    .then(handleResponse)
    .then(data => data);
}

function getTopProfitByTutor(token) {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return fetch(`${constantApi.url}/admin/getTopProfitByTutor`, requestOptions)
    .then(handleResponse)
    .then(data => data);
}

function getAllInfo() {
  const { token } = JSON.parse(localStorage.getItem('userInfo'));
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };
  return fetch(`${constantApi.url}/admin/getAllInfo`, requestOptions)
    .then(handleResponse)
    .then(data => data);
}
const userApis = {
  login,
  listAllUser,
  listAllSkill,
  listAllComplain,
  getDetailComplain,
  requestPolicyDetail,
  getProfit,
  getTopProfitByTutor,
  getAllInfo
};

export default userApis;
