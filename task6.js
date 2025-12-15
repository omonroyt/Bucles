const prompt = require("prompt-sync")();
const cantidad = Number (prompt("Ingresa la cantidad de números que quieres que se generen!: ")) ;
let arraynuevo = Array.from({ length: cantidad })
let nums= Array.from({})
for(let i=0; i < cantidad; i++){
    nums[i] = i +  1
    if(nums[i]%3===0 && nums[i]%5===0 && nums[i]%7===0){
      console.log("FizzBuzzWoof");
      arraynuevo.push("FizzBuzzWoof")
    } else{
      if(nums[i]%3===0 && nums[i]%5===0){
        console.log("FizzBuzz");
        arraynuevo.push("FizzBuzz")
    } else {
      if(nums[i]%3===0){
        console.log("Fizz");
        arraynuevo.push("Fizz")
      } 
      else if(nums[i]%5===0){
        console.log("Buzz");
        arraynuevo.push("Buzz")
      } else if(nums[i]%7===0){
        console.log("Woof");
        arraynuevo.push("Woof")
      }
      else{
      console.log(nums[i]);
      arraynuevo.push(i)
    }
    }
    } 
}