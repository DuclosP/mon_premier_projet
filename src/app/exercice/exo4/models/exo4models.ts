export class dataForm{
    registre : number
    nom : string;
    prenom : string;
    genre : string;
    birthday : Date;
    compte : string;
    adress? : dataAdress[];
    constructor(registre:number,nom:string,prenom:string,genre:string,birthday:Date, compte:string, adress?:dataAdress[]){
        this.registre = registre
        this.nom = nom;
        this.prenom = prenom;
        this.birthday = birthday;
        this.genre = genre;
        this.compte = compte;
        this.adress = adress;
    }
}
export class dataAdress {
    rue? :string;
    numero? : number;
    zipp? : number;
    ville? : string;
    constructor(rue?:string, numero?:number, zipp?:number, ville?:string){
        this.rue = rue;
        this.numero = numero;
        this.zipp = zipp;
        this.ville = ville
    }
}