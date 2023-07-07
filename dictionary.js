const axios = require('axios');

function Dictionary(){
  let words=[
    {
        "name":"cat",
        "definition":"A feline animal"
    },
    {
        "name":"dog",
        "definition":"A family animal"
    },


  ]

  return words;

}

function ApiSearch(word){

  return   axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)

}

function FindWord(){
    let word=process.argv[2];


return Dictionary().filter((ele)=>{
    return ele.name==word

})

}


// Findword from api

function FindWordApi(){
    let word=process.argv[2];

    ApiSearch(word).then(data=>{
        console.log(data.data)
    })

}



//console.log(FindWord()[0].definition);
FindWordApi()



// You have to publish you own npm package 
// node-english-dictinoary 
// npm i node-english-dictinoary 

