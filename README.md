# angular5_demo

这个项目主要是一个知识点汇总demo，包含：组件、路由、指令、服务、管道、表单等。

Angular5框架 + (NodeJs+Express搭建web服务器)

一、目录结构：

	/static路径下是Angular5前端代码
  
  		在此路径下执行：npm install、npm start

	/server路径下是一个简单的web服务器，模拟后台对接

		在此路径下执行 node build/products_server.js 启动
		用nodemon可以自动刷新执行（npm install -g nodemon、nodemon build/products_server.js）
           
	/server/client是编译合并后的代码
                  
		1、在路径/static下执行 ng build ，生成dist文件夹；
		2、在路径/server下新建client文件夹，将dist文件夹的内容复制到client下即可。
								 
二、在\static\src\app\app.component.html中，可以注释/释放代码，看对应的内容点
