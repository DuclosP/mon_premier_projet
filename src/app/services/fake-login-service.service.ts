import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLoginServiceService {
  isConnected : boolean = false;
  constructor() { }

  connect() : boolean{
    this.isConnected = true
    return this.isConnected;
  }

  disconnect() : boolean {
    this.isConnected = false
    return this.isConnected;
  }
  // getAll() : Product[] {
  //   //requete vers API qui renvoie la liste des produits
  //   //création d'une liste de produits en parcourant le JSON reçu
  //   //Renvoie la liste
  //   return listeProduits;
  // }

  //getbyID
  //gitbyCategory

  //insert
  //update
  //delete
}
