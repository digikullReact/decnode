const readline=require("readline"); //
const {stdin:input,stdout:output}=require("process");
var Spinner = require('cli-spinner').Spinner;


function Input(){
// We will be creating an interface by comnbining both input and output
const rl=readline.createInterface({input,output});

// We can take user input
rl.question("What is your name?? \n",(answer)=>{
    console.log(answer);
    rl.close();
})
}

// solid 
// separation of concern -->single responsibility pro
function CardDetails(cs){
    cs.question("Please enter your 10 digit card details \n",(card)=>{
        if (card.length!=10){
            CardDetails(cs)
           // console.log("Invalid card details");
           // cs.close();
            return ;
        }
        // We will print out the loader --->
        var spinner = new Spinner('processing.. %s\n');
        spinner.setSpinnerString('|/-\\');
        spinner.start();

        setTimeout(()=>{

            spinner.stop();
            console.log("Your order is successful \n")
            cs.close();
            return ;
        },10000)



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
        CardDetails(cs);
      
        // You have to just print out loading -setTimeout
        // --->Out put your order is successful

   



    })




}

Coffeeshop();