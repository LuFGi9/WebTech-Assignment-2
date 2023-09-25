var Stock = (function(){
    //Das gesamte Lager
    var _stock = {
        'Schokolade': {
            'unit': 'kg',
            'amount': 20
        },
        'Gummibärchen': {
            'unit': 'kg',
            'amount': 10
        }
    };
    
    var getStock = function(){
        return _stock;
    };
    
    var store = function(ingredient, amount, unit){
        if(amount < 0){
            alert('Es kann keine negative Menge eingelagert werden');
        }
        //Prüfe, ob bereits etwas vorhanden ist
        if(_stock[ingredient] === undefined){
            //Wenn nicht, dann anlegen:
            _stock[ingredient] = {
                'unit': unit,
                'amount': amount
            };
        }
        else{
            //Stimmen die Einheiten überein?
            if(_stock[ingredient]['unit'] === unit){
                _stock[ingredient]['amount'] = _stock[ingredient]['amount'] + amount;
            }
            else{
                //Einheiten stimmen nicht überein
                alert('Die eingegebene Einheit wird nicht verwendet. Nutzen Sie stattdessen \"' + _stock[ingredient]['unit'] + '\".');
            }
        }
    };
    
    var remove = function(ingredient, amount, unit){
        if(amount < 0){
            alert('Es kann keine negative Menge dem Lager entnommen werden');
        }
        //Prüfe, ob 'was' überhaupt vorhanden ist
        if(_stock[ingredient] === undefined){
            alert('Die Zutat ist nicht im Lager.')
        }
        else{
            //Stimmen die Einheiten überein?
            if(_stock[ingredient]['unit'] === unit){
                //Genug vorhanden?
                if(_stock[ingredient]['amount'] >= amount){
                    //Wird alles entnommen?
                    if(_stock[ingredient]['amount'] === amount){
                        delete _stock[ingredient];
                    }
                    else{
                        _stock[ingredient]['amount'] = _stock[ingredient]['amount'] - amount;
                    }
                }
                else{
                    return false;
                }
            }
            else{
                //Einheiten stimmen nicht überein
                alert('Die eingegebene Einheit wird nicht verwendet. Nutzen Sie stattdessen \"' + _stock[ingredient]['unit'] + '\".');
            }
        }
    };
    
    return {
        getStockVolume: getStock,
        storeInStock: store,
        removeFromStock: remove
    };
    
})();