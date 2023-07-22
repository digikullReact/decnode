const Db=[

]


const saveData=(data)=>{
    Db.push(data);

}

const getData=(data)=>{

    return Db;

}




module.exports={
    saveData,
    getData
    
}