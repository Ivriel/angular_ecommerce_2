import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private productService:ProductService){}
  
  CategoryList:any[] = []
  isSidePanelVisible:boolean = false;
  productList:any[]=[]
  productObj:any = {
  "productId": 0,
  "productSku": "",
  "productName": "",
  "productPrice": 0,
  "productShortName": "",
  "productDescription": "",
  "createdDate": new Date(),
  "deliveryTimeSpan": "",
  "categoryId": 0,
  "productImageUrl": "",
  }

  ngOnInit(): void {
    this.getProducts()
    this.getAllCategory()
  }

  getAllCategory(){
    this.productService.getCategory().subscribe((res:any)=> {
      this.CategoryList = res.data
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe((res:any)=> {
      this.productList = res.data
    })
  }

  onSave(){
    this.productService.saveProduct(this.productObj).subscribe((res:any)=> {
      if(res.result){
        alert("Product Created")
        this.getProducts()
      } else {
        alert(res.message)
      }
    })
  }

  onUpdate(){
    this.productService.updateProduct(this.productObj).subscribe((res:any)=> {
      if(res.result){
        alert("Product Updated")
        this.getProducts()
      } else {
        alert(res.message)
      }
    })
  }

  onEdit(item:any){
    this.productObj = {...item} // buat salinannya biar enggak keupdate langsung sebelum tekan tombol update
    this.isSidePanelVisible = true
  }

  onDelete(item:any){
    const isDelete = confirm("Are you sure wanna to delete?")
    if(isDelete) {
      this.productService.deleteProduct(item.productId).subscribe((res:any)=> {
        if(res.result){
          alert("Product Deleted")
          this.getProducts()
        } else {
          alert(res.message)
        }
      })
    }
  }

}
