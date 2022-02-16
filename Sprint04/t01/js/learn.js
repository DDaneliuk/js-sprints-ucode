// const Animal = function(optins){
//     this.name = optins.name
//     this.color = optins.color
//     // this.voice = function(){         //{constructor: ƒ}
//     //     console.log('Base', this.name)
//     // }
// }

// Animal.prototype.voice = function(){  // {voice: ƒ, constructor: ƒ}
//     console.log('Name', this.name)
// }

// // console.log(Animal.prototype) 

// const dog = new Animal({name: "Rex", color: '#fff'})

// // dog.voice()

// const Cat = function(options){
//     Animal.apply(this, arguments)
//     this.tail = options.tail
//     this.type = 'cat'
// }

// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat

// Animal.prototype.voice = function(){  // {voice: ƒ, constructor: ƒ}
//     console.log('Name is', this.name)
// }

// const cat = new Cat({name: "Shitch", color:'#000', tail:true})
// console.log(cat)
