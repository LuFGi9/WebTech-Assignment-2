var testDisplay = function () {
    /*
     * Basistest
     */
    var expectedString1 =
        "<table><tr><td>20 kg</td><td>Schokolade</td></tr><tr><td>10 kg</td><td>Gummibärchen</td></tr></table>";
    console.log(
        "======================Submodule vorhanden?======================"
    );
    if (Stock.Display == undefined) {
        console.log("Das Stock Modul hat kein Submodul >>Display<<");
        return "Test zu Aufgabe 1 fehlgeschalgen";
    }
    console.log(
        "=====================Initialer Lagerbestand====================="
    );
    if (Stock.Display.displayStockVolume == undefined) {
        console.log("Eine Funktion fehlt.");
        return "Test zu Aufgabe 1 fehlgeschlagen";
    }
    var receivedString = Stock.Display.displayStockVolume();
    if (receivedString !== expectedString1) {
        console.log(
            "Die Abfrage der initialen Werte des Stock-Moduls ist fehlgeschlagen."
        );
        console.log("Laden Sie die Seite neu und führen Sie den Test erneut aus.");
        console.log("Andernfalls prüfen Sie Ihre Funktion auf Fehler.");
        console.log("Aktuell im Lager: " + receivedString);
        return "Test zu Aufgabe 1 fehlgeschlagen";
    }
    console.log("Aktuell im Lager: " + receivedString);
    console.log("Basistest bestanden.");
    console.log(
        "================================================================"
    );
    /*
     * Hinzufügen
     */
    Stock.storeInStock("Kuchen", 50, "Stück");
    var expectedString2 =
        "<table><tr><td>20 kg</td><td>Schokolade</td></tr><tr><td>10 kg</td><td>Gummibärchen</td></tr><tr><td>50</td><td>Kuchen</td></tr></table>";
    console.log(
        "===============50 Stück Kuchen ins Lager bringen================"
    );
    if (Stock.Display.displayStockVolume() !== expectedString2) {
        console.log("Aktuell im Lager: " + Stock.Display.displayStockVolume());
        console.log(
            "Nach dem Hinzufügen von Zutaten stimmt der Rückgabewert der Funktion nicht mit dem tatsächlichen Inhalt überein."
        );
        return "Test zu Aufgabe 1 fehlgeschlagen";
    }
    console.log("Aktuell im Lager: " + Stock.Display.displayStockVolume());
    console.log("Test nach Hinzufügen bestanden.");
    console.log(
        "================================================================"
    );
    /*
     * Entnehmen von Zutaten
     */
    Stock.removeFromStock("Schokolade", 5, "kg");
    Stock.removeFromStock("Kuchen", 23, "Stück");
    var expectedString3 =
        "<table><tr><td>15 kg</td><td>Schokolade</td></tr><tr><td>10 kg</td><td>Gummibärchen</td></tr><tr><td>27</td><td>Kuchen</td></tr></table>";
    console.log(
        "==========5 kg Schokolade und 23 Stück Kuchen aufessen=========="
    );
    if (Stock.Display.displayStockVolume() !== expectedString3) {
        console.log("Aktuell im Lager: " + Stock.Display.displayStockVolume());
        console.log(
            "Nach dem Löschen von Zutaten stimmt der Rückgabewert der Funktion nicht mit dem tatsächlichen Inhalt überein."
        );
        return "Test zu Aufgabe 1 fehlgeschlagen";
    }
    console.log("Aktuell im Lager: " + Stock.Display.displayStockVolume());
    console.log("Test nach Löschen bestanden");
    console.log(
        "================================================================"
    );
    //Stelle Ausgangszustand wieder her
    //Stock.removeFromStock('Salz', 5, 'kg');
    return "Alle Tests erfolgreich bestanden.";
};
