const HOST = 'http://192.168.43.144:8080';
// const HOST = 'http://127.0.0.1:3000';

const getFetch = (url) => {
  return fetch(`${HOST}${url}`).then((res) => res.json());
}

const loginSubmit = (params) => {
  return getFetch(`/hungry?choice=1&operateCode=2&phone=${params.phone}&password=${params.password}`);
};

const registerSubmit = (params) => {
  return getFetch(`/hungry?choice=1&operateCode=1&phone=${params.phone}&password=${params.password}&nickName=${params.name}&imageURL=qazwsxedc`);
};

export default api = {
  loginSubmit,
  registerSubmit,
};