import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  
  products$:Observable<any>
  isLoading:boolean = true
  constructor(private productService:ProductService){
    this.products$ = this.productService.getCategory().pipe(
      map((item:any)=> {
        this.isLoading = false  // Set loading false setelah data diterima
        return item.data
      })
    )
  }

}
