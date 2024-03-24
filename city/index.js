
const button = document.querySelector("button");
button.addEventListener('click',stats);


function stats(){
    const input = document.getElementById("selection");
    const city = input.options[input.selectedIndex].value
    let population = 0 ;
    let literacy = 0;
    let language = ' Tamil';

    switch(city){
        case 'Bengaluru':
            population=8443675;
            literacy=88.75;
            language =`Kannada`
            break;

        case 'chennai':
            population=4646732;
            literacy=90.20;
            language =`Tamil`
            break;

        case 'kolkata':
            population=12442373;
            literacy=89.73;
            language =`Hindi`
            break;
    
        case 'delhi':
            population=123675;
            literacy=86.20;
            language =`Hindi`
            break;
    }
    let text = `The Indian city of ${city} has a population of ${population} . Language spoken is ${language} and literacy rate is ${literacy}`

    let resultDiv = document.createElement('div');
    resultDiv.id = "result";
    document.getElementById('wrapper').appendChild(resultDiv)
    document.getElementById('result').innerHTML = text;
}

