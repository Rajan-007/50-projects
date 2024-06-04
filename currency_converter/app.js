let select = document.querySelectorAll('.currency')
let input = document.getElementById('#input')
let btn = document.getElementById('btn')

fetch('https://api.frankfurter.app/currencies').then(res => res.json())
.then(res => displayDropdown(res))


function displayDropdown(res){
    let curr = Object.entries(res)
    for(i=0;i<curr.length;i++){
       select[0].innerHTML += `<option value=${curr[i][0]}>${curr[i][0]}</option>`
       select[1].innerHTML += `<option value=${curr[i][0]}>${curr[i][0]}</option>`
    }
}

btn.addEventListener('click',()=> {
    curr1 = select[0].value;
    curr2 = select[1].value;
    inputVal = document.getElementById('input').value
    convert(curr1,curr2,inputVal)
})

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    (fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`))
    .then(resp => resp.json())
    .then((data) => {
        document.getElementById('result').value = Object.values(data.rates)[0]
    });

}