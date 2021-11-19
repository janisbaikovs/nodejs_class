class Animal {
    speak() {
        console.log(this);
    }
    static eat() {
        console.log(this);
    }
  }
  
  let obj = new Animal();
  obj.speak(); // the Animal object
  let speak = obj.speak.bind(obj);
  speak(); // undefined
  
  Animal.eat() // class Animal
  let eat = Animal.eat;
  eat(); // undefined