let selectie = document.getElementById("beschrijving");
selectie.insertAdjacentHTML("afterbegin", `<button onclick="window.print()">Ontwerp uitprinten</button><br>`)

let instructie = document.getElementById("instructie");
instructie.insertAdjacentHTML("beforeend", `<br><button id="copy">Copy</button><br>`)