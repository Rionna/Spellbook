console.log('testing')
const button = document.querySelector('button')

function changeHeading (){
  document.querySelector('h1').textContent = 'This Spellbook Holds All Secrets'
}

button.addEventListener('click', changeHeading)

function changeSecond(){
    document.getElementById('secondHeader').innerHTML = "The Benefits Will Hurt Someone Else"
}

function form(){
    document.getElementById('submit').innerText = 'header'
}

document.getElementById('Submit').onkeydown = function(e){
    if(e.keyCode == 13){}
}

