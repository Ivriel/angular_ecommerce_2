import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl:string = ""
  constructor(private http:HttpClient) { }

  getCategory(){
    return this.http.get(Constant.API_END_Point + Constant.METHODS.GET_ALL_CATEGORY)
  }

  getProducts(){
    return this.http.get(Constant.API_END_Point + Constant.METHODS.GET_ALL_PRODUCT)
  }

  saveProduct(productObj:any){
    return this.http.post(Constant.API_END_Point + Constant.METHODS.CREATE_PRODUCT,productObj)
  }

  updateProduct(productObj:any){
    return this.http.put(Constant.API_END_Point + Constant.METHODS.UPDATE_PRODUCT,productObj)
  }

  deleteProduct(id:any){
    return this.http.get(Constant.API_END_Point + Constant.METHODS.DELETE_PRODUCT + id)
  }
}
