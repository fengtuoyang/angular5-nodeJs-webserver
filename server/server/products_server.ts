import * as express from 'express';
import {Server} from 'ws';
import * as path from 'path';

const app = express();

export class Product{

    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public categories:Array<string>
    ){}

}

export class Comment {

    constructor(
        public id:number,
        public productId:number,
        public timestamp:string,
        public user:string,
        public rating:number,
        public content:string
    ){}

}

const products:Product[] = [
    new Product(1,'第一个商品',1.99,3.3,'这是第一个商品',['电子商品','硬件设备']),
    new Product(2,'第二个商品',2.99,3.2,'这是第二个商品',['图书']),
    new Product(3,'第三个商品',3.99,1.6,'这是第三个商品',['电子商品']),
    new Product(4,'第四个商品',4.99,3.7,'这是第四个商品',['硬件设备']),
    new Product(5,'第五个商品',5.99,4.1,'这是第五个商品',['电子商品','硬件设备']),
    new Product(6,'第六个商品',6.99,2.8,'这是第六个商品',['图书']),
    new Product(7,'第七个商品',6.99,2.5,'这是第七个商品',['图书']),
];

const comments: Comment[] = [
    new Comment(1,1,'2017-02-02 22:22:22','张三',3,'东西不错'),
    new Comment(2,1,'2017-03-12 22:12:22','李四',5,'东西完美'),
    new Comment(3,1,'2017-04-22 15:22:22','王五',1,'东西不行'),
    new Comment(4,2,'2017-05-02 16:22:22','赵六',2,'东西不错'),
    new Comment(5,2,'2017-06-02 10:22:22','张三',4,'东西不错'),
];

app.use('/',express.static(path.join(__dirname, '..', 'client')));

app.get('/ngDemo/products', (req, res) => {
    let result = products;
    let params = req.query;//传过来的查询参数

    //判断传过来的三个参数有没有值
    if(params.title){
        result = result.filter(p => p.title.indexOf(params.title) != -1);
        console.log(result);
    }
    if(params.price && result.length > 0){
        console.log(result[0].price <= parseFloat(params.price));
        console.log(result[0].price);
        console.log(parseFloat(params.price));
        result = result.filter(p => p.price == parseFloat(params.price));
        console.log(result);
    }
    if(params.category && params.category != "-1" && result.length > 0){
        result = result.filter(p => p.categories.indexOf(params.category) != -1);
        console.log(result);
    }

    res.json(result);
});

app.get('/ngDemo/product/:id', (req, res) => {
   res.json(products.find(product => product.id == req.params.id));
});

app.get('/ngDemo/product/:id/comments', (req, res) => {
   res.json(comments.filter(comment => comment.productId == req.params.id));
});

const server = app.listen(9000, 'localhost',() => {
   console.log('服务器已启动，地址是：http://localhost:9000');
});



//定义一个集合，用来放商品id
// const subscriptions = new Map<any, number[]>();
//
// const wsServer = new Server({port: 9002});
// wsServer.on("connection", websocket => {
//     websocket.send("这个消息是服务器主动推送的");
//     websocket.on('message', message => {
//         let messageObj = JSON.parse(message);
//         let productIds = subscriptions.get(websocket) || [];
//         subscriptions.set(websocket, [...productIds, messageObj.productId]);
//     });
// });

//新的报价
// const currentBids = new Map<number, number>();
// //每两秒钟自动生成新价格
// setInterval(() => {
//     products.forEach(p => {
//        let currentBid = currentBids.get(p.id) || p.price;
//        let newBid = currentBid + Math.random()*5;
//         currentBids.set(p.id, newBid);
//     });
//
//     subscriptions.forEach((productIds: number[], ws) => {
//         let newBids = productIds.map(pid => ({
//             productId: pid,
//             bid: currentBids.get(pid)
//         }));
//         console.log(newBids)
//         ws.send(JSON.stringify(newBids));
//     });
//
// }, 2000);

