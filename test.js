let people = [
    {name: "Joel",
    age: "38",
    price: "$45"
    },
    {name: "Marcela",
    age: "50",
    price: "$50"
    },
    {name: "Test",
    age: "33",
    price: "$33"
    }
]

console.log("=================================");

for(let i = 0; i < people.length; i++) {
    if(people[i].name == "Marcela"){
        console.log('Found it!!!');
        break;
    } else {
        console.log("Sorry not found! ");
    }
}

