// import {name} from './test1'
// console.log("Your name" + name);



// console.log('Hello'); setTimeout(() => { console.log('World!'); }, 5000)
// const name = "Oleh"
// setTimeout(()=>{console.log(name)}, 2000)

class Animal {

    static type = "Mammal"

    constructor(options){
        this.name = options.name
        this.color = options.color
        this.hastail = options.hastail
        this.age = options.age
    }
    voice(){
        console.log("I am an animal!")
    }

    get AgeInfo(){
       return this.age * 7;
    }
}


class Dog extends Animal{

    constructor(options){
        super(options)
        this.breed = options.breed
    }
    voice(){
        console.log("Bark!")
    }

}
const jack = new Dog({
    name: "dog",
    color: "black",
    hastail: true, 
    breed: "corgi",
    age: 5
})

class Cat extends Dog {
    constructor(options){
        super(options)
        this.claws = options.claws

    }
    voice(){
        console.log("Meow!")
    }
}

const susi = new Cat({
    name: "Susi",
    color: "grey",
    hastail: true, 
    breed: "British",
    claws: true,
    age: 6,
})




// console.log(jack)







// const number = 12;
// localStorage.setItem('number', number.toString())
// console.log(localStorage.getItem('number'))

// const userForm = document.getElementById('contact-form')

// const FormData = {};
// userForm.addEventListener('input', function (event){
//     FormData[event.target.name] = event.target.value;
//     localStorage.setItem('userData', JSON.stringify(FormData));
// })
// const object = JSON.parse(localStorage.getItem('userData'))
// console.log(object);





// const user = {
//     name: 'Igor',
//     age: 21,
//     country: 'Denmark'
// }

// localStorage.setItem('user', JSON.stringify(user))
// const raw = localStorage.getItem('user')
// const object = JSON.parse(localStorage.getItem('user'));
// console.log(object);
// object.name = userName.value;
// object.age = prompt("enter your age");
// object.country = prompt("enter your country");
// console.log(object);



// localStorage.setItem('name', 'Kristina');



// const txtItem = document.querySelector('.textarea__item');
// let limit = txtItem.getAttribute('maxlength')
// // console.log(limit)
// let counter = document.querySelector('.area_counter span');

// counter.innerHTML = limit;

// txtItem.addEventListener('keydown', setCounter)


// function setCounter(){
// const result = limit - txtItem.value.length;
// counter.innerHTML = result;
// }


// function openh1(){
//     square.innerHTML = 'ttterer';
  
    
// }


// function removeel(){
//     txtarea_div.toggleAttribute('hidden');
// }
// submit.addEventListener('click', openh1)
// submit.addEventListener('keydown', removeel)






// button.addEventListener ('mouseover', func);

//!!!
// body.addEventListener('click', function (ev){
//     if(ev.target.closest('.button')){
//         func();
//     }
// })

// submit.addEventListener('click', function(event){
//     console.log('ttterer')
//     event.preventDefault();
// })