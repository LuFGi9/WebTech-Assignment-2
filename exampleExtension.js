/*
* Dies ist eine beispielhafte Implementierung einer Erweiterung für das Stock-Modul.
* Es wird das Revealing Module Pattern genutzt und um einen Parameter "m" erweitert, dem das bisherige Stock-Modul übergeben wird.
* Nach dem Implementieren der Erweiterung wird diese als Submodul dem Stock-Modul angehangen und schließlich das erweiterte "m" zurückgegeben.
* Das Einbinden dieses Codes muss NACH dem Einbinden des Codes des Stock-Moduls erfolgen!
*/

var Stock = (function(m){
    
    var _privateVar = 'For internal usage';
    
    var _privateFunction = function(){
        console.log('For internal usage');
    };
    
    var publicFunction1 = function(){
        console.log('One public function.');
    };
    
    var publicFunction2 = function(){
        console.log('Another public function.');
    };
    
    m.ExampleExtension = {
        public1: publicFunction1,
        public2: publicFunction2
    };
    
    return m;
    
})(Stock);

/*
* Es stehen nun zwei weitere Funktionen zu Verfügung:
* 1. Stock.ExampleExtension.public1();
* 2. Stock.ExampleExtension.public2();
*/