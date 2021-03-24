const prompt = require('prompt-sync')()
 
let start=100
let end=999
    let Number = []
    let first=Number[0]
    let second=Number[0]
    for(i=0;i<=9;i++)
    {
      
       Number[i]=Math.floor(Math.random() *(end - start + 1) + start)
        console.log(`Number Store in array is : ${Number[i]}`)
    }

    
    console.log(Number)

    Number.sort()
    console.log(Number)

   console.log("Second Largest element is " +Number[9])
   console.log("Second smallest number is " +Number[2])