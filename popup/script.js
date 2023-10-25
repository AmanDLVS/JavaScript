document.addEventListener("click", ventana);


function mayoredad() {
  if (pregunta.resp.value == "") {

    alert("porfavor rellene el campo");

  } else if (pregunta.resp.value < 18) {

    if (pregunta.resp.value == 17) {
      alert("Lo siento pero,");
    }

    alert("Eres menor de edad, toma un bocadillo");
    let ventana_menor = window.open("", "Ventana menor", "width=600,height=600");
    let html_ventana_menor = `
  <html>
    <head>
      <title>coche</title>
    </head>
    <body>
      <img src="descarga.jpg" alt="car" width="600" height="600">
    </body>
  </html>
`;

    ventana_menor.document.write(html_ventana_menor);
  } else {

    if (pregunta.resp.value == 18) {

      alert("Por poco pero,");

    }
    alert("Eres mayor de edad.");
    let ventana_mayor = window.open("", "Ventana mayor", "width=600,height=600");
    let html_ventana_mayor = `
  <html>
    <head>
      <title>coche</title>
    </head>
    <body>
      <img src="coche.jpg" alt="car" width="600" height="600">
    </body>
  </html>
`;

    ventana_mayor.document.write(html_ventana_mayor);

  }

}

function ventana() {
  let r = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  if (r == 2) {
    let ventana_publi = window.open("", "Ventana publi", "width=400,height=400");
    let html_ventana_publi = `
    <html>
      <head>
        <title>publicidad</title>
      </head>
      <body>
        <img src="publi2.png" alt="publi" width="400" height="400">
      </body>
    </html>
  `;

    ventana_publi.document.write(html_ventana_publi);

  }
}