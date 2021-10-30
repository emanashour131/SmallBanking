import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isAdmin =false
  public userData :any= null
  public isAuthed = false
  public isAuthAdmin = false
  apiMainUrl = "http://localhost:3001/"
  constructor(private _http:HttpClient) { }
  
  registerUser(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}user/register`, user)
  }

  login(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}user/login`, user)
  }

  profile():Observable<any>{
    return this._http.get(`${this.apiMainUrl}user/profile`)
  }

  deposite(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}userActions/deposite`, user)
  }

  withdraw(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}userActions/withdraw`, user)
  }

  transaction():Observable<any>{
    return this._http.get(`${this.apiMainUrl}userActions/transaction`)
  }
  
  registerAdmin(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}admin/registerAdmin`, user)
  }

  loginAdmin(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}admin/loginAdmin`, user)
  }

  profileAdmin():Observable<any>{
    return this._http.get(`${this.apiMainUrl}admin/profile`)
  }

  addUser(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}userAccount/add`, user)
  }

  showall():Observable<any>{
    return this._http.get(`${this.apiMainUrl}userAccount/showall`)
  }

  showUser(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}userAccount/showone`,user)
  }

  details(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}userAccount/accountDetails`,user)
  }

  logout():Observable<any>{
    return this._http.get(`${this.apiMainUrl}user/logout`)
  }

  logoutAdmin():Observable<any>{
    return this._http.get(`${this.apiMainUrl}admin/logoutAdmin`)
  }

  delete(user:any):Observable<any>{
    return this._http.post(`${this.apiMainUrl}userAccount/delete`,user)
  }
}