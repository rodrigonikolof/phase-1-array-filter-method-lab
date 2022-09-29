// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name) {

    let passedName = name.toUpperCase();

    const filtered = drivers.filter(driver => driver.toUpperCase() == passedName);

    return filtered;
}


// console.log(findMatching(drivers, 'Bobby'));



function fuzzyMatch(drivers, name){
    let passedName = name;

    const filtered = drivers.filter(driver => driver.substring(0,1) == passedName.substring(0,1));

    return filtered;
}




// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' },
//     {
//       name: 'Sammy',
//       hometown: 'New York' } ,
//     {
//       name: 'Sally',
//       hometown: 'Cleveland' },
//     {
//       name: 'Annette',
//       hometown: 'Los Angeles' },
//     {
//       name: 'Bobby',
//       hometown: 'Tampa Bay' }
//   ];


function matchName(drivers, names) {
    let passedName = names;
        
    const filtered = drivers.filter(driver => driver.name == passedName);

    return filtered;
}

// console.log (matchName(drivers, 'Bobby'));