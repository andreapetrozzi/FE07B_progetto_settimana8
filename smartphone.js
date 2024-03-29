// 3. CLASSE FirstUser implementa Smartphone 
var FirstUser = /** @class */ (function () {
    // Dichiarazione del Costruttore 
    function FirstUser(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    // Implementazione METODO ricarica -> metodo che agisce-> ricarica(number credito, double unaRicarica)
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    // Implementazione METODO chiamata come paramentro i minuti -> credito sarà decrementato 0.20 al minuto -> chiamata(number credito, double minutiDurata)
    FirstUser.prototype.chiamata = function (minutiDurata) {
        var tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    };
    // Implematazione METODO numero 404 (return) ->  restituisce il valore della carica disponibile. 
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    // Implemetazione METODO getNumeroCHiamate (return)
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numerochiamate;
    };
    //Implemetazione METODO azzera Chiamate
    FirstUser.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
    };
    return FirstUser;
}());
// 4. Implemetazione della classe -> Saranno le classi a definire i metodi
//Classe "SecondUser"
var SecondUser = /** @class */ (function () {
    function SecondUser(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    SecondUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    SecondUser.prototype.chiamata = function (minutiDurata) {
        var tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    };
    SecondUser.prototype.numero404 = function () {
        return this.credito;
    };
    SecondUser.prototype.getNumeroChiamate = function () {
        return this.numerochiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
    };
    return SecondUser;
}());
//Classe "ThirdUser"
var ThirdUser = /** @class */ (function () {
    function ThirdUser(_credito, _numerochiamate) {
        this.credito = _credito;
        this.numerochiamate = _numerochiamate;
    }
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.credito += unaRicarica;
    };
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        var tariffa = 0.20;
        this.credito = this.credito - (tariffa * minutiDurata);
        this.numerochiamate++;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numerochiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numerochiamate = 0;
    };
    return ThirdUser;
}());
// 5. Utilizzo dei METODI per effettuare DUE ricariche e DUE chiamate (quanti minuti dura la chiamata)
var smartphone1 = new FirstUser(2, 2);
smartphone1.ricarica(10);
smartphone1.chiamata(5);
var smartphone2 = new SecondUser(2, 2);
smartphone2.ricarica(20);
smartphone2.chiamata(10);
var smartphone3 = new ThirdUser(2, 2);
smartphone3.ricarica(30);
smartphone3.chiamata(15);
// 6. console.log():
//'primo utente'
console.log("---PRIMO UTENTE---");
//'numero chiamate'
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
//'valore carica disponibile: ' -> metodo (per ottenere la carica disponibile) 
console.log("Valore della carica disponibile" + smartphone1.numero404());
//numero chiamate: -> metodo 
console.log("Numero delle chiamate" + smartphone1.getNumeroChiamate());
//'dopo l'azzeramento' 
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone1.azzeraChiamate();
//seconda classe e terza classe sono IDENTICHE alla prima (second user) -> copia/incolla cambiando il nome della classe e il nome della Variabile che implementa la classe
// Secondo utente 
console.log("---SECONDO UTENTE---");
console.log("Numero delle chiamate" + smartphone2.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone2.numero404());
console.log("Numero delle chiamate" + smartphone2.getNumeroChiamate());
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone2.azzeraChiamate();
// Terzo utente 
console.log("---TERZO UTENTE---");
console.log("Numero delle chiamate" + smartphone3.getNumeroChiamate());
console.log("Valore della carica disponibile" + smartphone3.numero404());
console.log("Numero delle chiamate" + smartphone3.getNumeroChiamate());
console.log("Dopo l\'azzeramento delle chiamate:");
smartphone3.azzeraChiamate();


/*
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
