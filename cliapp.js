const readline=require("readline");
const {stdin:input,stdout:output}=require("process");
function Input(){
// We will be creating an interface by comnbining both input and output
const rl=readline.createInterface({input,output});

// We can take user input
rl.question("What is your name?? \n",(answer)=>{
    console.log(answer);
    rl.close();
})
}


// we will be building  a  coffee shop --->

function Coffeeshop(){
    const coffees=[
        {
            "productid":1,
            "name":"Mocha"
        },
        {
            "productid":2,
            "name":"Latte"
        },
        {
            "productid":3,
            "name":"Cold Coffee"
        }
  
    ]

    const cs=readline.createInterface({input,output});
    console.table(coffees)
    cs.question("Please Select your Order ,Enter the product Id \n",(order)=>{

        // We can filter out the name --
        const selectedCoffee=coffees.find(ele=>ele.productid==order)
        console.log("You selected",selectedCoffee.name);

        // You have to ask for payment  ,ask for 10 digits card
        // You have to just print out loading -setTimeout
        // --->Out put your order is successful

        cs.close();



    })




}

Coffeeshop();