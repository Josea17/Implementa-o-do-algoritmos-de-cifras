var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let linesTamanho = lines.length;
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
let fraseFormatacao = lines.shift();
let frase = fraseFormatacao.toLowerCase();
let casas = 3;

/* se o tamanho for >= 2, quer dizer que foi fornecido a quantidade de casas a serem puladas
caso não seja, executa com o padrão de 3 casas puladas.
*/
if (linesTamanho >= 2) {

  casas = lines.shift();

  if (casas % 26 != 0) {

    casas = casas % 26;

  }

  let caracteresFrase = [];
  let caracteresFraseCifrada = [];

  for (let i = 0; i < frase.length; i++) {

    caracteresFrase.push(frase.charAt(i));

  }

  for (let i = 0; i < frase.length; i++) {

    if (alfabeto.includes(caracteresFrase[i])) {

      let indice = alfabeto.indexOf(caracteresFrase[i]) + casas;

      if (indice >= alfabeto.length) {

        indice = indice - alfabeto.length;

      }

      caracteresFraseCifrada.push(alfabeto.charAt(indice));

    } else {

      caracteresFraseCifrada.push(frase.charAt(i));

    }
  }

  let fraseCifrada = "";

  for (let i = 0; i < caracteresFraseCifrada.length; i++) {

    if (caracteresFrase[i].toUpperCase() == fraseFormatacao.charAt(i)) {

      fraseCifrada += caracteresFraseCifrada[i].toUpperCase();

    } else {

      fraseCifrada += caracteresFraseCifrada[i];

    }
  }
  console.log(fraseCifrada);

} else {
  let caracteresFrase = [];
  let caracteresFraseCifrada = [];

  for (let i = 0; i < frase.length; i++) {

    caracteresFrase.push(frase.charAt(i));

  }

  for (let i = 0; i < frase.length; i++) {

    if (alfabeto.includes(caracteresFrase[i])) {

      let indice = alfabeto.indexOf(caracteresFrase[i]) + casas;

      if (indice >= alfabeto.length) {

        indice = indice - alfabeto.length;
      }

      caracteresFraseCifrada.push(alfabeto.charAt(indice));

    } else {

      caracteresFraseCifrada.push(frase.charAt(i));

    }
  }

  let fraseCifrada = "";

  for (let i = 0; i < caracteresFraseCifrada.length; i++) {

    if (caracteresFrase[i].toUpperCase() == fraseFormatacao.charAt(i)) {
      
      fraseCifrada += caracteresFraseCifrada[i].toUpperCase();

    } else {

      fraseCifrada += caracteresFraseCifrada[i];
      
    }
  }
  console.log(fraseCifrada);
}
