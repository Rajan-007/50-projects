
try{
    let input = prompt('enter your prompt');
    if(input == ""){
        throw 'enter the input string'
    }
    if(isNaN(input)){
        throw `enter numbers only`
    }
}
catch(error){
    console.log(error)
}