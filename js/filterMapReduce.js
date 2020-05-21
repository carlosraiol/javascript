//var newArray = arr.filter(callback,[thisArg])

const pets = [
    {
        name: 'rex',
        type:'dog',
        age: 10,
        weight: 20
    },
    {
        name: 'miau',
        type:'cat',
        age: 2,
        weight: 2
    },
    {
        name: 'gulp',
        type:'fish',
        age: 1, 
        weight: 1
    },
    {
        name: 'bolinha',
        type:'dog',
        age: 4,
        weight: 5
    },
    {
        name: 'mingal',
        type:'cat',
        age: 6,
        weight: 1
    },
    {
        name: 'pé de pano',
        type:'horse',
        age: 1, 
        weight: 1
    }
]

const eMenor = (numero) => {
    return numero < 5;
}

const newPets = pets.filter(({ age }) => eMenor(age))
console.log(pets);
console.log(newPets);

//Map
//var newArray = arr.map(callback, [thisArg])

const namesBichos = (name) => {
    return name
}

const petNames = pets.map(({ name }) => namesBichos(name))
console.log(petNames);

//Reduce

const totalWeightPet = pets.reduce((total, pet) => {
    if(pet.type !== 'dog') return total
    return total + pet.weight
}, 0)
//console.log(totalWeightPet);

const totalWeightDogs = pets
    .filter((pet) => {
        return pet.type === 'dog';
    })
    .reduce((total, pet) => {
        return total + pet.weight;
    }, 0)

console.log(totalWeightDogs);