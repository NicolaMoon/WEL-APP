const HOST = 'http://106.12.196.243:8080/hungry?';

const getFetch = (url) => {
  return fetch(`${HOST}${url}`).then((res) => res.json());
}

const loginSubmit = (params) => {
  return getFetch(`choice=1&operateCode=2&phone=${params.phone}&password=${params.password}`);
};

const registerSubmit = (params) => {
  return getFetch(`choice=1&operateCode=1&phone=${params.phone}&password=${params.password}&nickName=${params.name}&imageURL=qazwsxedc`);
};

export default api = {
  loginSubmit,
  registerSubmit,
};