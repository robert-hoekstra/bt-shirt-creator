console.log("Execute Render!")

if (document.getElementById("beschrijving")) {
  let selectie = document.getElementById("beschrijving");
  selectie.insertAdjacentHTML(
    "afterbegin",
    `<button onclick="window.print()">Ontwerp uitprinten</button><br>`
  );
}

if (document.getElementById("instructie")) {
  let instructie = document.getElementById("instructie");
  instructie.insertAdjacentHTML(
    "beforeend",
    `<br><button id="copy">Copy</button><br>`
  );
}

if (document.getElementById("preview")) {
    if (document.getElementById("installBanner")){
        console.log("Already written to the DOM")
    } else {
        let preview = document.getElementById("preview");
        console.log("Write to the dom!")
        preview.insertAdjacentHTML(
          "beforebegin",
          `<section id="installBanner" class="banner">
          <h2>Web-applicatie gedetecteerd!</h2>
          <p>We hebben gedetecteerd dat jij deze website kan opslaan als web-applicatie. Druk op onderstaande knop om de applicatie te installeren!</p><button id="installBtn">Installeren</button></section>`
        );
    }
}

if (navigator.onLine) {
  console.log("You are online, yeah!");
} else {
  console.log("You are offline, Nay!");
  let offlinemessage = document.getElementById("app");
  offlinemessage.insertAdjacentHTML(
    "afterbegin",
    `
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h2>Je bent offine!</h2>
    </div>
    <div class="modal-body">
      <p>Het lijkt erop dat je een geen verbinding hebt met het internet.</p>
      <p>Hou er rekening mee dat niet alle onderdelen van de applicatie goed werken!</p>
    </div>
    <div class="modal-footer">
      <h3>Klik ergens op het scherm om dit bericht te verwijderen</h3>
    </div>
  </div>

</div>`
  );
}

if (document.getElementById("colorOption")) {
  document.getElementById("colorOption").onchange = function() {
    readColor();
  };
}

if (document.getElementById("imageOption")) {
  document.getElementById("imageOption").onchange = function() {
    readImage();
  };
}

function readColor() {
  let option = document.getElementById("colorOption");
  let value = option.options[option.selectedIndex].value;
  let text = option.options[option.selectedIndex].text;

  displayColor(option, value);

  console.log(option, value, text);
}

function displayColor(par1, par2) {
  let node = par1;
  let value = par2;

  if (document.getElementById("shirtView")) {
    let preview = document.getElementById("shirtView");
    preview.remove();
  }

  node.insertAdjacentHTML(
    "afterend",
    `<img id="shirtView" src=/images/${value}.png alt="een shirt in de kleur ${value}">`
  );
}

function readImage() {
  let option = document.getElementById("imageOption");
  let value = option.options[option.selectedIndex].value;
  let text = option.options[option.selectedIndex].text;

  displayImage(option, value);

  console.log(option, value, text);
}

function displayImage(par1, par2) {
  let node = par1;
  let value = par2;

  if (document.getElementById("imageView")) {
    let preview = document.getElementById("imageView");
    preview.remove();
  }

  node.insertAdjacentHTML(
    "afterend",
    `<img id="imageView" src=/images/${value}.png alt="een shirt in de kleur ${value}">`
  );
}
if (document.getElementsByClassName("custom-select")) {
  let colorOption = document.getElementsByClassName("custom-select");
  colorOption = colorOption[0];
}

if (document.getElementById("fontcontroller")){
    console.log('Fontcontroller already enabled')
} else {
    let node = document.getElementById("applicationDescription")
    node.insertAdjacentHTML("afterend", `<section id="fontcontroller">
    <h6>Lettertype te klein?</h6>
    <button type="button" onclick="smallerFont()">Normaal</button>
    <button type="button" onclick="biggerFont()">Groter</button>
  </section>`
    )
}