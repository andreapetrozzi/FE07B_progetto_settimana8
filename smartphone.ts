// Interfaccia smartphone
interface Smartphone {

   // 1. Inserire proprietà interfaccia
    credito: number;
    numerochiamate: number;

    // 2. Dichiarare i metodi
    ricarica(credito: number, unaRicarica: number): void;
    chiamata(credito: number, minutiRicarica: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate():void;
}


// 3. CLASSE FirstUser implementa Smartphone 
class FirstUser implements Smartphone {

    // Modificatori di accesso sulle proprietà - > ridichiarare le proprietà dell'interfaccia (definendo le pubblic)
    public numerochiamate: number;
    public credito: number;

    // Dichiarazione del Costruttore 
    constructor(_credito: number, _numerochiamate:  number) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    } 



    // Implementazione METODO ricarica -> metodo che agisce-> ricarica(number credito, double unaRicarica)
    public ricarica( unaRicarica: number):void {
        this.credito += unaRicarica;
    }

    // Implementazione METODO chiamata come paramentro i minuti -> credito sarà decrementato 0.20 al minuto -> chiamata(number credito, double minutiDurata)
    public chiamata( minutiDurata: number):void {
        let tariffa = 0.20;
        this.credito= this.credito-(tariffa * minutiDurata);
        this.numerochiamate++;
    }

    // Implematazione METODO numero 404 (return) ->  restituisce il valore della carica disponibile. 
    public numero404():number{
        return this.credito;
    }

    // Implemetazione METODO getNumeroCHiamate (return)
    public getNumeroChiamate():number{
        return this.numerochiamate;
    }

    //Implemetazione METODO azzera Chiamate
    public azzeraChiamate():void{
        this.numerochiamate=0;
    }
}


// 4. Implemetazione della classe -> Saranno le classi a definire i metodi

//Classe "SecondUser"
class SecondUser implements Smartphone {
    credito: number;
    numerochiamate: number;
    constructor(_credito: number, _numerochiamate: number){
        this.credito=_credito;
        this.numerochiamate=_numerochiamate;
    }

    public ricarica( unaRicarica: number):void {
        this.credito += unaRicarica;
    }
    public chiamata( minutiDurata: number):void {
        let tariffa = 0.20;
        this.credito= this.credito-(tariffa * minutiDurata);
        this.numerochiamate++;
    }
    public numero404():number{
        return this.credito;
    }
    public getNumeroChiamate():number{
        return this.numerochiamate;
    }
    public azzeraChiamate():void{
        this.numerochiamate = 0;
    }
}


//Classe "ThirdUser"
class ThirdUser implements Smartphone {
    credito: number;
    numerochiamate: number;
    constructor(_credito: number, _numerochiamate:  number){
        this.credito=_credito;
        this.numerochiamate=_numerochiamate;
    }


    public ricarica( unaRicarica: number):void {
        this.credito += unaRicarica;
    }
    public chiamata( minutiDurata: number):void {
        let tariffa = 0.20;
        this.credito= this.credito-(tariffa * minutiDurata);
        this.numerochiamate++;
    }
    public numero404():number{
        return this.credito;
    }
    public getNumeroChiamate():number{
        return this.numerochiamate;
    }
    public azzeraChiamate():void{
        this.numerochiamate=0;
    }
}



// 5. Utilizzo dei METODI per effettuare DUE ricariche e DUE chiamate (quanti minuti dura la chiamata)
let smartphone1 = new FirstUser(2, 2);
smartphone1.ricarica(10);
smartphone1.chiamata(5);

let smartphone2 = new SecondUser(2, 2);
smartphone2.ricarica(20);
smartphone2.chiamata(10);

let smartphone3 = new ThirdUser(2, 2);
smartphone3.ricarica(30);
smartphone3.chiamata(15);



// 6. console.log():

    //'primo utente'
    console.log("---PRIMO UTENTE---")

    //'numero chiamate'
    console.log("Numero delle chiamate"+smartphone1.getNumeroChiamate());
    //'valore carica disponibile: ' -> metodo (per ottenere la carica disponibile) 
    console.log("Valore della carica disponibile"+smartphone1.numero404());
    //numero chiamate: -> metodo 
    console.log("Numero delle chiamate"+smartphone1.getNumeroChiamate());
    //'dopo l'azzeramento' 
    console.log("Dopo l\'azzeramento delle chiamate:");

    smartphone1.azzeraChiamate();



    //seconda classe e terza classe sono IDENTICHE alla prima (second user) -> copia/incolla cambiando il nome della classe e il nome della Variabile che implementa la classe

    // Secondo utente 
    console.log("---SECONDO UTENTE---")

    console.log("Numero delle chiamate"+smartphone2.getNumeroChiamate());
    console.log("Valore della carica disponibile"+smartphone2.numero404());
    console.log("Numero delle chiamate"+smartphone2.getNumeroChiamate());

    console.log("Dopo l\'azzeramento delle chiamate:");
    smartphone2.azzeraChiamate();

    // Terzo utente 
    console.log("---TERZO UTENTE---")


    console.log("Numero delle chiamate"+smartphone3.getNumeroChiamate());
    console.log("Valore della carica disponibile"+smartphone3.numero404());
    console.log("Numero delle chiamate"+smartphone3.getNumeroChiamate());

    console.log("Dopo l\'azzeramento delle chiamate:");
    smartphone3.azzeraChiamate();















    /*
            DESCRIZIONE 

            Progettare un interfaccia di nome "Smartphone", 
            per rappresentare un telefono cellulare con "contratto" a "ricarica".


            Tale interfaccia prevede "due variabili d'istanza". 

                La prima variabile d'istanza e' definita come "number -> carica", 
                e rappresenta il quantitativo di euro disponibile per le chiamate. 
             
                La seconda variabile d'istanza e' definita come "number -> numeroChiamate", 
                e rappresenta il numero di chiamate effettuate con il cellulare.
                
            

            Le classi "FirstUser-SecondUser-ThirdUser" devono implementare l'interfaccia con i seguenti metodi: 
            
                un metodo definito come "public void ricarica(double(number) unaRicarica), 
                che ricarica il telefonino. 
                
                Un metodo definito come public void chiamata(double minutiDurata), 
                che effettua una chiamata di durata in minuti specificata dal parametro esplicito.


            Tale metodo dovra' 
            
            aggiornare la carica disponibile, 
            ed "incrementare" la variabile contenente il numero di chiamate effettuate dal telefonino 
            (si assuma un costo di 0.20 euro per ogni minuto di chiamata),

            *********
            METODI:
            ricarica(number credito, double unaRicarica)
            chiamata(number credito, double minutiDurata)
            numero404()
            getNumeroChiamate()
            azzeraChiamate()

            un metodo public number numero404(),
            che restituisce il valore della carica disponibile. 
            
            Un metodo public number getNumeroChiamate(), 
            che restituisce il valore della variabile d'istanza numeroChiamate. 
            
            Infine, un metodo public void azzeraChiamate(), 
            che azzera la variabile contenente il numero di chiamate effettuate dal telefonino.

            *********
            Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.









            CONSOLE.LOG
            --- PRIMO UTENTE ---
            Valore della carica disponibile: 75
            Numero chiamate: 2
            dopo l'azzeramento delle chiamate:
            Numero chiamate: 0
            
            --- SECONDO UTENTE ---
            Valore della carica disponibile: 67.2
            Numero chiamate: 2
            dopo l'azzeramento delle chiamate:
            Numero chiamate: 0
            
            --- TERZO UTENTE ---
            Valore della carica disponibile: 69.2
            Numero chiamate: 2
            dopo l'azzeramento delle chiamate:
            Numero chiamate: 0
                    

    */






































