import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-web-products',
  imports: [CommonModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent implements OnInit{
  productList:any[] = []
  isLoading:boolean = true
  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts(){
    this.productService.getProducts().subscribe((res:any)=> {
      this.productList = res.data
      if(this.productList.length > 0) {
        this.isLoading = false
      }
    })
  }

}
