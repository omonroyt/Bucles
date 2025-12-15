let nums= Array.from({ length: 105 })
for(let i=0; i < 105; i++){
    nums[i] = i +  1
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
      }
      else{
      console.log(nums[i]);
    }
    }
    } 
}

