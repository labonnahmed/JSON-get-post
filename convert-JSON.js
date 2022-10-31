const studentInfo= { id: 23, name:"Labonno"}

const convertJSON= JSON.stringify(studentInfo);
console.log(convertJSON);

const convertObject= JSON.parse(convertJSON);
console.log(convertObject);