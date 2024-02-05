// const arr = [4, 6, 1, 8, 7 ]
// arr.sort();
// console.log(arr);

let field = document.querySelector('.test-list')
let li = Array.from(field.children);

let ar = [];

for (let i of li){
    const first = i.firstElementChild;

    const x = Number(first.textContent);
  
    ar.push(x);
}
console.log(ar);
ar.sort();
console.log(ar);

function compareNumbers(a, b){
    return a-b;
}
ar.sort(compareNumbers);
console.log(ar);

function uncompareNumbers(a, b){
    return b-a;
}
ar.sort(uncompareNumbers);
console.log(ar);
li.sort((a,b)=> b-a);