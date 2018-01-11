import { create } from 'apisauce';
import config from '../config/app';

const api = create({
  baseURL: config.apiUrl,
  headers: { Accept: 'application/json' }
});

function get (endpoint,UserToken) {
  return new Promise((resolve, reject) => {
    console.log('calling url', `${config.apiUrl}${endpoint}`);
    fetch(`${config.apiUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'UserToken':UserToken
      }
    }).then(async (res) => {
      let response = await res.json();
      if (!res.ok) {
        return reject(response);
      }
      return resolve(response);

    }).catch(reject);
  });
}

function post (endpoint, data, UserToken) {
  return new Promise((resolve, reject) => {
    fetch(`${config.apiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'UserToken':UserToken
      },
      body: JSON.stringify(data)
    }).then(async (res) => {
      let response = await res.json();
      if (!res.ok) {
        return reject(response);
      }
      return resolve(response);

    }).catch(reject);
  });
}

module.exports = {
  post,
  get
};
