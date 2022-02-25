import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { dataForm, dataAdress } from './models/exo4models';


@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component implements OnInit {
  dataSaved : dataForm[] = [];  
  exoForm : FormGroup;
  adressForm : FormGroup;
  constructor(private _exoFormBuild : FormBuilder, private _adressFormBuild : FormBuilder){
    this.exoForm = this._exoFormBuild.group({
      registre : [null, [Validators.required]],
      nom : [null, [Validators.required]],
      prenom : [null, [Validators.required]],
      genre : ["", Validators.required],
      birthday : [formatDate(new Date(), "yyyy-MM-dd", "fr-BE") , [Validators.required, this.EstMajeur()]],
      compte : [null, [Validators.required, Validators.pattern(/BE[0-9]{14}/gi)]],
      adress : [false],
    })
    this.adressForm = this._adressFormBuild.group({
      rue : [null, [Validators.required]],
      numero : [null, [Validators.required]],
      zip : [null, [Validators.required]],
      ville : [null, [Validators.required]],
    })
  }
  
  ngOnInit(): void {
    
  }
  EstMajeur() : ValidatorFn | null {
    return (control : AbstractControl) => {
      let formDate : number = new Date(control.value).getFullYear();
      let ladate: number  = new Date().getFullYear();
      let majeur: number = ladate - formDate;
      if(majeur < 18){
        return {verifAge : true};
      }else {
        return null;
      }
    } 
  }
  sendData(){
    if(this.exoForm.valid){
      if(this.exoForm.controls['adress'].value === false){
        let demanAAjouter = new dataForm(
          this.exoForm.value['registre'],
          this.exoForm.value['nom'],
          this.exoForm.value['prenom'],
          this.exoForm.value['genre'],
          this.exoForm.value['birthday'],
          this.exoForm.value['compte'],
          );
          this.dataSaved.push(demanAAjouter);
          console.log(this.dataSaved);
        }else if(this.adressForm.valid){
          let adressData = new dataAdress(
            this.adressForm.value['rue'],
            this.adressForm.value['numero'],
            this.adressForm.value['zip'], 
            this.adressForm.value['ville']
            );
            let demanAAjouter = new dataForm(
              this.exoForm.value['registre'],
              this.exoForm.value['nom'],
              this.exoForm.value['prenom'],
              this.exoForm.value['genre'],
              this.exoForm.value['birthday'],
              this.exoForm.value['compte'],
              [adressData],
              );
              this.dataSaved.push(demanAAjouter);
              console.log(this.dataSaved);
            }
          }else {
            
            for(let control in this.exoForm.controls){
              if(!this.exoForm.controls[control].valid){
                this.exoForm.controls[control].markAsTouched();
              }
            }
          }
        }    
      }
      
      
      
      
      
      
      
      
      
      
      