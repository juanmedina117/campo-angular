import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setStorage( nombre:string, data:string ){

    localStorage.setItem(nombre,data)
    
  }


  public getStorage( nombre:string ):any{

    return localStorage.getItem(nombre)

  }

}
