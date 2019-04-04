const HOST = 'http://106.12.196.243:8080/hungry?';

const getFetch=(params) =>{
  let url = HOST+Object.entries(params).reduce((before, current) => `${before}&${current[0]}=${current[1]}`, '?');
  console.log(url);
  return fetch(url, { method: 'GET' }).then(res => res.json());
}

const postFetch = (params) =>{
  return fetch(HOST, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json'
    },
  }).then(res => res.json());
}

const loginSubmit = (params) => {
  let data = {
    choice : 1,
    operateCode : 2 ,
    phone : params.phone,
    password : params.password
}
  console.log(data);
  return getFetch(data);
};

const registerSubmit = (params) => {
  let data = {
    choice: 1,
    operateCode: 1,
    phone: params.phone,
    password: params.password,
    nickName: params.name,
    imageURL: 'qazwsxedc'
  }
  return postFetch(data);
}
const homeGetSellersId = () => {
  let data = {choice:2,operateCode:5};
  return getFetch(data);
};
const homeGetAllSellers = (data) => {
  return getFetch(data);
};
export default api = {
  loginSubmit,
  registerSubmit,
  homeGetAllSellers,
  homeGetSellersId
};