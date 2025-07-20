import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-landing',
  imports: [RouterLink, CommonModule, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  productList:any[] = []
  categoryList:any[] = []
  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.getAllProducts()
    this.getCategories()
  }
  getAllProducts(){
    this.productService.getProducts().subscribe((res:any)=> {
      this.productList = res.data
    })
  }
  getCategories(){
    this.productService.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data
    })
  }

}
