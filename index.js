const form = document.querySelector('form')

const handleSumbit = function(ev) {
  ev.preventDefault()

  const f = ev.target
  const spellName = f.spellName.value

  const spellsDiv = document.querySelector('#spells')

  var textColor = document.getElementById('spellColor').value;

  //spellsDiv.innerHTML += `<li>${spellName}</li>`

  var item = document.createElement("LI");
  var t = document.createTextNode(spellName);
  t.se
  item.appendChild(t);
  item.style.color = textColor;
  document.getElementById("spells").appendChild(item);
  
  f.reset()
}

form.addEventListener('submit', handleSumbit)