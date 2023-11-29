//Get value of selects input and button
let SelectConvertFrom = document.getElementById("SelectConvertFrom");
let SelectConvertTo = document.getElementById("SelectConvertTo");
let flagsFrom = document.getElementById("flagsFrom");
let flagsTo = document.getElementById("flagsTo");
let nameFrom = document.getElementById("nameFrom");
let nameTo = document.getElementById("nameTo");
let convertedValueFrom = document.getElementById("convertedValueFrom");
let ConvertedValueTo = document.getElementById("ConvertedValueTo");

function random_arrow() {
  let lbl_de = document.getElementById("lbl_de");
  let lbl_para = document.getElementById("lbl_para");

  let img_arrow = document.querySelector(".img_arrow");
  let graus = -360;
  img_arrow.style.transform = "rotate(" + graus + "deg)";

  lbl_de.innerHTML = "Converter de:";
  lbl_para.innerHTML = "Converter para:";
}

//Select from convertion
SelectConvertFrom.addEventListener("change", function () {
  if (SelectConvertFrom.value == "real") {
    nameFrom.innerHTML = "R$ Real Brasileiro";
    flagsFrom.src = "./img/flag_brazil.png";
  }

  if (SelectConvertFrom.value == "dolar") {
    nameFrom.innerHTML = "U$ Dolar Americano";
    flagsFrom.src = "./img/flag_usa.png";
  }

  if (SelectConvertFrom.value == "euro") {
    nameFrom.innerHTML = "€$ Euro";
    flagsFrom.src = "./img/flag_euro.png";
  }

  if (SelectConvertFrom.value == "bitcoin") {
    nameFrom.innerHTML = "BTC$ Bitcoin";
    flagsFrom.src = "./img/flag_bitcoin.png";
  }

  if (SelectConvertFrom.value == "libra") {
    nameFrom.innerHTML = "£$ Libra";
    flagsFrom.src = "./img/flag_libra.png";
  }
});

//Propieties Convert-To
SelectConvertTo.addEventListener("change", function () {
  if (SelectConvertTo.value == "real") {
    nameTo.innerHTML = "R$ Real Brasileiro";
    flagsTo.src = "./img/flag_brazil.png";
  }

  if (SelectConvertTo.value == "dolar") {
    nameTo.innerHTML = "US$ Dolar Américano";
    flagsTo.src = "./img/flag_usa.png";
  }

  if (SelectConvertTo.value == "euro") {
    nameTo.innerHTML = "€$ Euro";
    flagsTo.src = "./img/flag_euro.png";
  }

  if (SelectConvertTo.value == "bitcoin") {
    nameTo.innerHTML = "BTC$ Bitcoin";
    flagsTo.src = "./img/flag_bitcoin.png";
  }

  if (SelectConvertTo.value == "libra") {
    nameTo.innerHTML = "£$ Libra";
    flagsTo.src = "./img/flag_libra.png";
  }

  random_arrow();
});

//FUNCTION FOR CONVERTER FROM FOR THE TO
function convertMoney() {
  let realToday = 1.0;
  let dolarToday = 4.85;
  let euroToday = 5.36;
  let bitcoinToday = 132.192;
  let libraToday = 6.19;
  let inputValue = document.getElementById("inputValue").value;

  //AQUI A CONVERSAO DO REAL PARA OUTRAS MOEDAS
  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "real") {

    Swal.fire({
      title: 'ATENÇÃO! VOCE NÃO PODE CONVERTER PARA MESMA MOEDA',
      icon: 'warning',
      confirmButtonText: 'OK ENTENDI',
      confirmButtonColor: '#ff0000'

    })

  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "dolar") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = inputValue / dolarToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "euro") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = inputValue / euroToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "bitcoin") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = inputValue / bitcoinToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "real" && SelectConvertTo.value == "libra") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = inputValue / libraToday;
    ConvertedValueTo.innerHTML = ConvertedValueTo.innerHTML =
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP",
      }).format(conversao);
  }
  //FIM DO REAL PARA OUTRAS MOEDAS

  //AQUI O DOLAR PARA OUTRAS MOEDAS
  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "real") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * dolarToday) / realToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "euro") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * dolarToday) / euroToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "bitcoin") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue = dolarToday / bitcoinToday);
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "libra") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * dolarToday) / libraToday;
    ConvertedValueTo.innerHTML = ConvertedValueTo.innerHTML =
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP",
      }).format(conversao);
  }

  if (SelectConvertFrom.value == "dolar" && SelectConvertTo.value == "dolar") {
    Swal.fire({
      title: 'ATENÇÃO! VOCE NÃO PODE CONVERTER PARA MESMA MOEDA',
      icon: 'warning',
      confirmButtonText: 'OK ENTENDI',
      confirmButtonColor: '#ff0000'

    })
  }
  //FIM DOLAR PARA OUTRAS MOEDAS

  //AQUI EURO PARA OUTRAS MOEDAS
  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "real") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * euroToday) / realToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "dolar") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * euroToday) / dolarToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "euro") {
    Swal.fire({
      title: 'ATENÇÃO! VOCE NÃO PODE CONVERTER PARA MESMA MOEDA',
      icon: 'warning',
      confirmButtonText: 'OK ENTENDI',
      confirmButtonColor: '#ff0000'

    })
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "bitcoin") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * euroToday) / bitcoinToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "euro" && SelectConvertTo.value == "libra") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * euroToday) / libraToday;
    ConvertedValueTo.innerHTML = ConvertedValueTo.innerHTML =
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP",
      }).format(conversao);
  }
  //FIM EURO PARA OUTRAS MOEDAS

  //AQUI BITCOIN PARA OUTRAS MOEDAS
  if (SelectConvertFrom.value == "bitcoin" && SelectConvertTo.value == "real") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue = bitcoinToday / realToday);
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "bitcoin" && SelectConvertTo.value == "dolar") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue = bitcoinToday / dolarToday);
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "bitcoin" && SelectConvertTo.value == "euro") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue = bitcoinToday / euroToday);
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao)
  }

  if (SelectConvertFrom.value == "bitcoin" && SelectConvertTo.value == "bitcoin") {
    Swal.fire({
      title: 'ATENÇÃO! VOCE NÃO PODE CONVERTER PARA MESMA MOEDA',
      icon: 'warning',
      confirmButtonText: 'OK ENTENDI',
      confirmButtonColor: '#ff0000'

    })
  }

  if (SelectConvertFrom.value == "bitcoin" && SelectConvertTo.value == "libra") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue = bitcoinToday / libraToday);
    ConvertedValueTo.innerHTML = ConvertedValueTo.innerHTML =
      new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP",
      }).format(conversao);
  }
  // FIM BITCOIN PARA OUTRAS MOEDAS

  //AQUI LIBRA PARA OUTRAS MOEDAS
  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "real") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * libraToday) / realToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "dolar") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * libraToday) / dolarToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
    }).format(conversao);

  }

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "euro") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * libraToday) / euroToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "bitcoin") {
    convertedValueFrom.innerHTML = inputValue;
    let conversao = (inputValue * libraToday) / bitcoinToday;
    ConvertedValueTo.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format(conversao);
  }

  if (SelectConvertFrom.value == "libra" && SelectConvertTo.value == "libra") {
    Swal.fire({
      title: 'ATENÇÃO! VOCE NÃO PODE CONVERTER PARA MESMA MOEDA',
      icon: 'warning',
      confirmButtonText: 'OK ENTENDI',
      confirmButtonColor: '#ff0000'

    })
  }
  //FIM DA LIBRA PRA OUTRAS MOEDAS
}
