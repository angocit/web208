import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    constructor(private productService: ProductService){}
    products:IProduct[] = []
    ngOnInit() {
        //Gọi service lấy danh sách sản phẩm
        this.productService.GetAllProduct().subscribe(
          data=>{
            this.products = data
          }
          ,err=>{
            console.log(err);
            
          }
        )
    }
    DeleteProduct =(id:any)=>{
      if (confirm("Bạn muốn xóa sản phẩm này?")){
        this.productService.DeleteProduct(id).subscribe(
          data=>{
              alert("Xóa thành công")
              this.products = this.products.filter(product=>product.id!==id)
          },
          error =>{
            console.log(error);
            
          }
        )
      }
    }
}
