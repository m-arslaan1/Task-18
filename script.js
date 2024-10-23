//    Question-1 
// ------------------------------------------------------------------
//     const arrays = [1, 3, 4, 77, 16, 20];

//     const squareNumbers = arrays.map(array => {
//         return array**2;
//     })
//     console.log(squareNumbers);
// -------------------------------------------------------------------







//    Question-2
// --------------------------------------------------------------------
//    function studentMarks(marks){
//        return marks >= 90 ? "A":
//              marks >= 70 ? "B":
//              marks >= 50 ? "C":
//              marks >= 30 ? "D":
//               "F";
//       }

// console.log(studentMarks("fill any number"));
// --------------------------------------------------------------------






//  Question-3
// --------------------------------------------------------------------
    // const carDetails = {
    //     companyName : "Mercedes",
    //     model : "McLaren",
    //     year : 2010
    //     }

    // function yearChange(object, changedYear) {
    // object.year = changedYear;
    // }
    // yearChange(carDetails, 2009);

    // const { model, year } = carDetails;
    // console.log(`Model of car is: ${model} and Year of manufacture is: ${year}`)
// ----------------------------------------------------------------------------------------------






//    Question-4
// ----------------------------------------------------------------------

// const arrNumbers = [13, 44, 6, 7, 10, 21, 23, 30, 111, 2, 3, 5, 7];

// const filteredNumber = arrNumbers.filter(arrnumber => {
//     if (arrnumber <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(arrnumber); i++) {
//         if (arrnumber % i === 0) return false;
//     }
//     return true;
// })
// console.log(filteredNumber);
// --------------------------------------------------------------------------





//   Question-5
// ------------------------------------------------------------------------

// 1) Different use case of Map method:

// I--> const numbers = [1, 4, 5, 16, 12];
// let addition = numbers.map(num => num + num);
// console.log(addition);

// II--> const names = ["Arslaan", "Jonathan", "Buttowski"];
// const uppercasedWords = names.map(name => name.toUpperCase());
// console.log(uppercasedWords)


//   2) Different use cases of Filter method:

// I--> const studentMarks = [90, 77, 60, 84, 92, 100, 33, 54];
// const highMarks = studentMarks.filter(marks => {
//     return marks > 80;
// })
// console.log(highMarks)

// II--> const people = [
//     {name : "Arslaan", Age : 22, isEmployed : true},
//     {name : "Jonathan", Age : 21, isEmployed : false},
//     {name : "Robert", Age : 30, isEmployed : true},
// ]

// const employedPeople = people.filter (person => person.isEmployed);
// console.log(employedPeople);

//  3) Different use cases of Reduce method:

// I--> const numbers = [4, 6, 10, 40];
// const totalNumber = numbers.reduce((acc, num) => acc + num, 12); 
// console.log(totalNumber);

// II--> const fruits = ['apple', 'banana', 'apple', 'orange'];
// const fruitCount = fruits.reduce((acc, fruit) => {
//     acc[fruit] = (acc[fruit] || 0) + 1;
//     return acc;
// }, {}); 

// console.log(fruitCount);

// -------------------------------------------------------------------------------------------------------



//    Question-6
// ---------------------------------------------------------------------
// async function fetchData() {
//     const url = 'https://jsonplaceholder.typicode.com/posts';

//     try {
//         const response = await fetch(url)

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     }catch(error) {
//         console.error('Error fetching data: ', error);
//     }
// }

// fetchData();
// ---------------------------------------------------------------------------





//   Question-7
// -----------------------------------------------------------------------

// const person = {
//     name: 'John Doe',
//     address: {
//         street: '123 Main St',
//         city: 'Anytown',
//         state: 'CA'
//     },
//     contact: {
//         email: 'john.doe@example.com'
//     }
// };

// const phoneNumber = person.contact?.phone;

// if (phoneNumber) {
//     console.log(`Phone Number: ${phoneNumber}`);
// } else {
//     console.error('Phone Number: Not available');
// }

// ------------------------------------------------------------------------



