
const prompt = require("prompt-sync")();
const cantidad = Number (prompt("Ingresa la cantidad de números que quieres que se generen!: ")) ;

let nums= Array.from({ length: cantidad })
for(let i=0; i < cantidad; i++){
    nums[i] = i +  1
    if(nums[i]%3===0 && nums[i]%5===0 && nums[i]%7===0 && nums[i]%11===0){
      console.log("FizzBuzzWoofBark")
    }
    else{
      if(nums[i]%3===0 && nums[i]%5===0 && nums[i]%7===0){
          console.log("FizzBuzzWoof");
        } else{
          if(nums[i]%3===0 && nums[i]%5===0){
            console.log("FizzBuzz");
        } else {
          if(nums[i]%3===0){
            console.log("Fizz");
          } 
          else if(nums[i]%5===0){
            console.log("Buzz");
          } else if(nums[i]%7===0){
            console.log("Woof");
          } else if(nums[i]%11===0){
            console.log("Bark");
          }
          else{
          console.log(nums[i]);
        }
        }
        } 
    }
}
