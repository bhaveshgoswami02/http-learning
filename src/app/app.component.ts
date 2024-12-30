import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http-learning';
  products:any;
  searchValue:any;

  constructor(public http: HttpClient) { 
    this.getProducts()
  }

  getProducts() {
    this.http.get("https://dummyjson.com/products").subscribe((res:any)=>{
      console.log(res.products)
      this.products = res.products
    })
  }

  searchProducts() {
    console.log(this.searchValue)
    this.http.get("https://dummyjson.com/products/search?q=" + this.searchValue).subscribe((res:any)=>{
      console.log("search data response",res)
      this.products = res.products
    })
  }

  addProduct() {
    let data = {
      title: 'BMW Pencil',
    }
    this.http.post("https://dummyjson.com/products/add",data).subscribe((res:any)=>{
      console.log("add res",res)
    })
  }

  updateProduct(id:any) {
    let data = {
      title: 'BMW Pencil',
    }
    this.http.put("https://dummyjson.com/products/"+id,data).subscribe((res:any)=>{
      console.log("update res",res)
    })
  }

  delete(id:any) {
    this.http.delete("https://dummyjson.com/products/"+id).subscribe(res=>{
      console.log("delete res",res)
    })
  }

}
