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
const detailGetAllGoodsId = (sellerId) => {
    let data = {
        choice:5,
        operateCode:5,
        sellerId: sellerId
    };
    return getFetch(data);
};
const detailGetAllGoods = (goodsId) => {
    let data = {
        choice:5,
        operateCode:6,
        goodsId: goodsId.join(',')
    };
    return getFetch(data);
};
const addressGetAddressId = (params) => {
    let data = {
        choice:4,
        operateCode:5,
        userId:params.userId,
        password:params.password
    };
    return getFetch(data);
};
const addressGetAllAddress = (params) => {
    let data = {
        choice:4,
        operateCode:6,
        userId:params.userId,
        password:params.password,
        addrId:params.addrId.join(',')
    };
    return getFetch(data);
};
const addressSetAddress = (params) => {
    let data = {
        choice:4,
        operateCode:3,
        userId:params.userId,
        password:params.password,
        addrId:params.addrId,
        linkman:params.linkman,
        sex:params.sex,
        phone:params.phone,
        province:params.province,
        city:params.city,
        area:params.area,
        specificAddr:params.specificAddr
    };
    return getFetch(data);
};
const addressAddAddress = (params) => {
    let data = {
        choice:4,
        operateCode:1,
        userId:params.userId,
        password:params.password,
        linkman:params.linkman,
        sex:params.sex,
        phone:params.phone,
        province:params.province,
        city:params.city,
        area:params.area,
        specificAddr:params.specificAddr
    };
    return getFetch(data);
};
export default api = {
  loginSubmit,
  registerSubmit,
  homeGetAllSellers,
  homeGetSellersId,
    detailGetAllGoodsId,
    detailGetAllGoods,
    addressGetAddressId,
    addressGetAllAddress,
    addressSetAddress,
    addressAddAddress

};