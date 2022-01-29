// let i = 0
// while(i < 10) {
//     i++;
//     console.log(i);
// }

// let i = 1,
//      fact = 1,
//      nun = 5;

// while(i <= nun) {
//     fact = fact * i;
//     console.log(fact);
//     i++
// }

// console.log(fact);

// const person = new Object()

// person.firstName = 'Hayk'
// person.lastName = 'Sardaryan'
// person.age = 18

// console.log(person);

// const person = {
//     firstName: 'Hayk',
//     lastName: 'Sardaryan',
//     age: 18
// }

// console.log(person);

// const Language = Spain

// let masssage;
// if(Language === 'English') {
//     masssage = 'Hello'
// }else if (Language === 'Russian') {
//     masssage = 'privet'

// }else if (Language === 'Spain') {
//     masssage = 'hola'
// }

// console.log();




// const LanguaageData1 = {
//     English: 'Hello',
//     Spain: 'hola',
//     x: 10,
//     y: 20
// } 

// const LanguaageData2 = {...LanguaageData1}

// LanguaageData2.Rusian = 'privet'

// console.log(LanguaageData1, 'LanguaageData1');
// console.log(LanguaageData2, 'LanguaageData2');



// const array = [false, 1, 'Hallo', NaN, null, 7, true, 'JavaScript'];

// const nmb = [];
// const str = [];
// const boo = [];

// for(let i = 0; i < array.length; i++) {
//     if(typeof array[i] === 'string') {
//          str.push(array[i])
//     }else if(typeof array[i] === 'boolean') {
//         boo.push(array[i])
//     }else if(typeof array[i] === 'number' && !isNaN(array[i])) {
//         nmb.push(array[i])

//     }
// }
 

// const array = [7, 2, 9, 4, 5, 7, 1, 2, 5, 9, 4,];
// const arr = []
// for(let i=0; i < array.length; i++) {
//     console.log();
//     if(!arr.includes(array[i])) {
//         arr.push(array[i])
//     }
// }


// function calc(opearnd1, opearnd2, operator) {
//     let result;
//     switch(operator) {
//         case '+': result = opearnd1 + opearnd2;break;
//         case '-': result = opearnd1 - opearnd2;break;
//         case '/': result = opearnd1 / opearnd2;break;
//         case '*': result = opearnd1 * opearnd2;break;
//     }
//     console.log(`${opearnd1} ${operator} ${opearnd2} = ${result}`);
// }

// calc(10, 20, '+')



// const arr = [4, 2, 1, 6, 7, 9, 10, 3, 5, 8];

// function mySort(array) {
//     let count = 0;
//     for(let i = 0; i < array.length; i++) {
//         let minIndex = i;
//         for(let j =i + 1; j < array.length; j++) {

//         }
//     }

// }

// mySort(arr)




// function greenCart(resolve, refect) {
//     console.log('Pading....');
//     const randomNumber = Math.round(Math.random() *10)

//     setTimeout(function (params) {
//         if(randomNumber <= 5) {
//             resolve(';)')
//         }else {
//             refect(':(')
//         }

//     }, 3000)

// }

// greenCart(
//     function(resp) {
//         alert(`by tikets ${resp}`)
//     },
//     function(resp) {
//         alert(`try Again ${resp}`)
//     }

// ) 


// console.log('1');
// setTimeout(function (params) {
//     console.log('2');
// }, 3000)
// console.log('3');

//---------------------------

// const arr = [54, 65, 21, 786, -1];
// const result =[];
// for(let i = 0; i < arr.length; i++) {
//     result.push(arr[i] + 20)
// }
    
// console.log(result);


const user = [{
    firstName: 'Davit',
    lastName: 'Sargsyan' ,
    age:22
}, {
    firstName: 'Araik',
    lastName: 'Sargsyan' ,
    age:65
}, {
    firstName: 'Hayk',
    lastName: 'Sardaryan' ,
    age:19
}, {
    firstName: 'Anna',
    lastName: 'Abrahamyan' ,
    age:30
}, {
    firstName: 'Andranik',
    lastName: 'Manucharyan' ,
    age:48
}
];

// const result = user.filter(function(item) {
//     const firstName = item.firstName.tolowerCase();
//     const lastName = item.lastName.tolowerCase(); 
//     if(firstName.includes)
// })

const result = user.filter(function(item) {
    const firstName = item.firstName.tolowerCase();
    const lastName = item.lastName.tolowerCase(); 
    if(firstName.includes(key) || lastName.includes(key)) {
        return item
    }
    
});

console.log(result, 'result');