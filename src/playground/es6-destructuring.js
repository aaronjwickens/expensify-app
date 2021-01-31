// const person = {
//     name: 'Aaron',
//     age: 26,
//     location: {
//         city: 'Whitby',
//         temp: -1
//     }
// };

// // const name = person.name;
// // const age = person.age;
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature}C in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const address = ['25 Vanier Street', 'Whitby', 'Ontario', 'L1R 3G8'];

// const [ , city, province = 'British Columbia', postalCode ] = address;

// console.log(`You are in ${city} ${province}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [ itemName, , priceMedium ] = item;

console.log(`A medium ${itemName} costs ${priceMedium}.`);