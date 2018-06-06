const form = document.querySelector('form')

const changeHeading = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value

  const spellsDiv = document.querySelector('#spells')

  var textColor = document.getElementById('spellColor').value;

  //spellsDiv.innerHTML += `<li>${spellName}</li>`

  var x = document.createElement("LI");
  var t = document.createTextNode(spellName);
  t.se
  x.appendChild(t);
  x.style.color = textColor;
  document.getElementById("spells").appendChild(x);
  
  f.reset()
}

form.addEventListener('submit', changeHeading)