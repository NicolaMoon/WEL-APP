const HOST = 'http://192.168.43.144:8080';
// const HOST = 'http://127.0.0.1:3000';

const getFetch = (url) => {
  return fetch(`${HOST}${url}`).then((res) => res.json());
}

export const loginSubmit = (params) => {
  return getFetch(`/servlet/FirstServlet?operateCode=2&phone=${params.phone}&password=${params.password}`);
};
