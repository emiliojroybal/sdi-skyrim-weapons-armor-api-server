
/*
fetch("http://localhost:8081/armor", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: "Test Gauntlets",
        armor: 50,
        encumbrance: 20,
        gold: 4000,
        upgrade: "Steel Ingot",
        perk: "Steel",
        type_armor: "Gauntlets Heavy Armor"
    })
})
.then(response => response.json())
.then(jsonResponse => console.log(jsonResponse));
*/
fetch("http://localhost:8081/armor/2756", {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    },
})
.then(response => response.json())
.then(jsonResponse => console.log(jsonResponse));