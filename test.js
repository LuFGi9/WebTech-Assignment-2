function assert(label, assertion) {
    let success = false
    try {
        success = assertion()
    } catch(err) {
        console.error(err)
    }
    document.body.insertAdjacentHTML("beforeend", `<div class="assert"><b>${success? "ERFÜLLT": "NICHT ERFÜLLT"}</b> ${label}</div>`)
    return success
}

function clearAsserts() {
    document.querySelectorAll(".assert").forEach(el => el.remove())
}

export function testWarehouse(Warehouse) {
    clearAsserts()
    // Aufgabe a: Speicherung
    const w = new Warehouse()
    let a1 = assert(
        "A: Private Property '_stock' für Lagerbestand vorhanden",
        () => "_stock" in w
    )
    let a2 = assert(
        "A: Lagerbestand als Objekt initialisiert",
        () => typeof w._stock === "object" && w !== null
    )
    let a3 = assert(
        "A: Lagerbestand enthält 20kg Schokolade",
        () => w._stock["Schokolade"].unit === "kg" && w._stock["Schokolade"].amount === 20
    )
    let a4 = assert(
        "A: Getter 'stock' vorhanden",
        () => "stock" in w
    )
    let a5 = assert(
        "A: Getter 'stock' gibt Wert der Private Property '_stock' zurück",
        () => w.stock && w.stock === w._stock
    )
    if(!(a1 && a2 && a3 && a4 && a5)) {
        return
    }

    // Aufgabe b: Hinzufügen
    let b1 = assert(
        "B: Neues Item wird mit korrektem Key, Unit und Amount hinzugefügt",
        () => {
            const w = new Warehouse()
            w.store("Salzstangen", 10, "Packungen")
            const item = w.stock["Salzstangen"]
            return item && item.amount === 10 && item.unit === "Packungen"
        }
    )
    let b2 = assert(
        "B: Hinzufügen zu bestehendem Item mit korrektem Unit und Amount",
        () => {
            const w = new Warehouse()
            w.store("Schokolade", 5, "kg")
            const item = w.stock["Schokolade"]
            return item && item.amount === 25 && item.unit === "kg"
        }
    )
    let b3 = assert(
        "B: Negatives Hinzufügen wirft einen Fehler",
        () => {
            const w = new Warehouse()
            try {
                w.store("Schokolade", -10, "kg")
                return false
            }
            catch(err) {
                return true
            }
        }
    )
    let b4 = assert(
        "B: Nicht übereinstimmende Einheit wirft einen Fehler",
        () => {
            const w = new Warehouse()
            try {
                w.store("Schokolade", 10, "Pfund")
                return false
            }
            catch(err) {
                return true
            }
        }
    )
    if(!(b1 && b2 && b3 && b4)) {
        return
    }
    // Aufgabe c: Entfernen
    let c1 = assert(
        "C: Teilweises Entfernen von Item",
        () => {
            const w = new Warehouse()
            w.remove("Schokolade", 5, "kg")
            const item = w.stock["Schokolade"]
            return item && item.amount === 15 && item.unit === "kg"
        }
    )
    let c2 = assert(
        "C: Vollständiges Entfernen von Item",
        () => {
            const w = new Warehouse()
            w.remove("Schokolade", 20, "kg")
            const item = w.stock["Schokolade"]
            return !item
        }
    )
    let c3 = assert(
        "C: Negative Entnahme wirft einen Fehler",
        () => {
            const w = new Warehouse()
            try {
                w.remove("Schokolade", -10, "kg")
                return false
            }
            catch(err) {
                return true
            }
        }
    )
    let c4 = assert(
        "C: Entnahme von nicht vorhandenem Item wirft einen Fehler",
        () => {
            const w = new Warehouse()
            try {
                w.remove("Salzstangen", 10, "kg")
                return false
            }
            catch(err) {
                return true
            }
        }
    )
    if(c1 && c2 && c3 && c4) {
        document.body.insertAdjacentHTML("beforeend", `<div class="assert"><marquee><h1>Geschafft!</h1></marquee></div>`)
    }
}