// Refer to Task 2 in your Instructions to complete this task
let nums= Array.from({ length: 105 })
for(let i=0; i < 105; i++){
    nums[i] = i +  1
    if(nums[i]%3===0){
        console.log("Fizz");
    } 
    else{
      console.log(nums[i]);
    }
}

