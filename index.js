const person = {};
person.name = "Ariful Islam"
person.email="arifulislam@gmail.com"
// console.log(person);

class Person {

    constructor(name, email){
        this._name = name
        this._email = email

        
    }
    get name(){
        console.log('This is a function call')
        return this._name.toUpperCase()
    }

    set name(value){
        if(value.toLowerCase() === 'stack learner') return;
        this._name = value
    }
    

    print(){
        console.log(this)
    }
}


const p1 = new Person("Ariful Islam", "ariful@gmail")
const p2 = new Person("Abdullah Al Zarif", "zarif@gmail.com")
const p3 = new Person("Assadullah Al Labib", "labib@gmail.com")

p1.name = 'Stack Learner'
p1.print()

