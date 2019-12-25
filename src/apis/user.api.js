/* eslint-disable no-undef */
// import authHeader from '../helpers/auth-header';
import constantApi from './constants.api';

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(`aaaaaaaaaaaaaaaaaaa${data}`);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        window.location.reload(true);
      }

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

function listAllUser(page) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch(
    `${constantApi.url}/admin/listallUser?page=${page}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => data);
}

function listAllSkill(page) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch(
    `${constantApi.url}/admin/listAllTag?page=${page}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => data);
}

function listAllComplain(page) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  return fetch(
    `${constantApi.url}/admin/listAllComplain?page=${page}`,
    requestOptions
  )
    .then(handleResponse)
    .then(data => data);
}

function getDetailComplain(id) {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
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

const userApis = {
  login,
  listAllUser,
  listAllSkill,
  listAllComplain,
  getDetailComplain,
  requestPolicyDetail
};

export default userApis;
