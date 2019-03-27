每个页面都需要参数

operateCode



User.jsp

//操作码及其操作说明如果
	//1 新增用户           参数(nickName,phone,imageURL,password)
	//2 登录              参数(phone,password)
	//3 获取用户全部信息    参数(phone,password)
	//4 获取用户昵称       参数(userId,password)
	//5 获取用户头像地址    参数(userId,password)
	//6 更新用户昵称       参数(userId,password,nickName)
	//7 更新用户头像       参数(userId,password,imageURL)





Seller.jsp

//操作码及其操作说明如果
	//1 新增卖家信息       参数(sellerName,sellerImageURL,intro,address,phone,password)
	//2 修改卖家信息       参数(sellerId,password,sellerImageURL,intro,address,phone)
	//3 修改卖家商品列表    参数(sellerId,password,goodsList)
	//4 获取卖家信息       参数(sellerId)
	//5 获取所有卖家ID     参数()



PassowordKeeper.jsp

//操作码及其操作说明如果
	//1 更新用户密码           参数(userId,password,newPassword)
	//2 更新卖家密码           参数(sellerId,password,newPassword)



Address.jsp

//操作码及其操作说明如果
	//1 新建地址           参数(userId,password,linkman,sex,phone,province,city,area,specificAddr)
	//2 删除地址           参数(userId,password,addrId)
	//3 修改地址           参数(userId,password,addrId,linkman,sex,phone,province,city,area,specificAddr)
	//4 查询地址信息        参数(userId,password,addrId)
	//5 获取用户全部地址ID  参数(userId,password)



Goods.jsp

//操作码及其操作说明如果
	//1 新建商品                   参数(sellerId,password,salesVolume,price,goodsName,intro,stock)
	//2 修改商品信息                参数(sellerId,password,goodsId,salesVolume,price,goodsName,intro,stock)
	//3 根据商品ID获取商品信息        参数(goodsId)
	//4 获取全部商品ID              参数()
	//5 根据卖家ID获取其所有商品ID    参数(sellerId)



Orders.jsp

//操作码及其操作说明如果
	//1 创建订单                            参数(userId,password,addrId,totalPrice,state,content)
	//2 修改订单内容(只允许修改地址和订单状态)   参数(userId,password,ordersId,addrId,state)
	//3 根据订单ID查询订单内容                参数(userId,password,ordersId)
	//4 查询用户的全部订单                    参数(userId,password)



Appraise.jsp

//操作码及其操作说明如果
	//1 新增评价                  参数(userId,password,orderId,goodsId,content,level)
	//2 根据评价Id查询评价内容       参数(appraiseId)
	//3 根据订单Id查询评价ID        参数(orderId)
	//4 根据商品ID获取全部评价ID     参数(goodsId)