import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment, Product, ProductService } from '../../../shared/product.service';
import { WebSocketService } from "../../../shared/web-socket.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  comments: Comment[];

  commentsLength: number;

  newRating: number = 5;

  newComment: string = "";

  isCommentHidden: boolean = true;

  sum: number = 0;

  isFocus: boolean;

  currentBid: number;

  constructor(private routeInfo: ActivatedRoute,
    private productService: ProductService,
    private ws: WebSocketService) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];

    this.productService.getProduct(productId).
      subscribe(
        product => {
          this.product = product;
          this.currentBid = product.price;
          this.isFocus = product.status == 1 ? true : false;
        }
      );

    this.productService.getCommentsForProductId(productId).
      subscribe(
        comments => {
          this.comments = comments;
          this.commentsLength = comments.length;
        }
      );

  }

  addComment() {
    if (this.newComment != "") {
      //实际开发中，这里调接口获取json数据重新渲染评论区即可，不需要手动插入评论、评分、条数
      let comment = new Comment(this.commentsLength, this.product.id, new Date().toISOString(), "someone", this.newRating, this.newComment);
      this.comments.unshift(comment);

      this.sum = 0;
      this.comments.forEach(it => {
        this.sum += it.rating;
      });
      this.product.rating = this.sum / this.comments.length;
      /**实际开发中执行：
       * this.productService.getCommentsForProductId(productId).subscribe(
            comments => {
              this.comments = comments;
              this.commentsLength = comments.length;
            }
          );
       */

      this.newComment = "";
      this.newRating = 5;
      this.isCommentHidden = true;

    }
  }

  //'关注'状态修改
  setFocusStatus(){
    let newStatus = this.isFocus ? 0 : 1;
    this.productService.setFocusStatus(newStatus);
    // this.isFocus = !this.isFocus;
    //   this.ws.createObservableSocket('ws://localhost:9002', this.product.id)
    //     .subscribe(
    //       products => {
    //         let product = products.find(p => {p.productId === this.product.id});
    //         console.log(products)
    //         // this.currentBid = product.bid;
    //       }
    //     );
    // }
  }

}
