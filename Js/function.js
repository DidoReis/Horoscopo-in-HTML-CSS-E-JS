let signo = "";

function signoResult() {
  let dia = document.getElementById("inputNas").value;
  let mes = document.getElementById("inputMes").value;
  let img = new Image();

  let parametro = document.getElementById("caracteristicas");
  let title = document.getElementById("signo");
  let color = document.getElementById("color");
  dia = parseInt(dia);
  mes = parseInt(mes);

  if (dia < 1 || dia > 31) {
    document.getElementById("caracteristicas").innerHTML =
      "Informe um dia válido";
  } else if (mes < 1 || mes > 12) {
    document.getElementById("caracteristicas").innerHTML =
      "Informe um mês válido";
  }
  if (
    document.getElementById("inputNas").value == "" ||
    document.getElementById("inputMes").value == ""
  ) {
    document.getElementById("caracteristicas").innerHTML =
      "Por favor preencha os campos";
  }
  if (dia >= 1 && dia <= 31 && mes >= 1 && mes <= 12) {
    if (mes == 4) {
      if (dia >= 1 && dia <= 20) {
        img.src = "img/aries.png";
        parametro.style.display = "block";
        title.innerText = "Áries";
        color.innerText = colors[0];
        parametro.innerText = caracteristicas[0];
        parametro.appendChild(img);
      } else if (dia >= 21 && dia <= 30) {
        img.src = "img/touro.png";
        parametro.style.display = "block";
        title.innerText = "Touro";
        color.innerText = colors[1];
        parametro.innerText = caracteristicas[1];
        parametro.appendChild(img);
      }
    }
    if (mes == 5) {
      if (dia >= 1 && dia <= 20) {
        img.src = "img/touro.png";
        parametro.style.display = "block";
        title.innerText = "Touro";
        color.innerText = colors[1];
        parametro.innerText = caracteristicas[1];
        parametro.appendChild(img);
      } else if (dia >= 21 && dia <= 31) {
        img.src = "img/gemeos.png";
        parametro.style.display = "block";
        title.innerText = "Gêmeos";
        color.innerText = colors[2];
        parametro.innerText = caracteristicas[2];
        parametro.appendChild(img);
      }
    }
    if (mes == 6) {
      if (dia >= 1 && dia <= 20) {
        img.src = "img/gemeos.png";
        parametro.style.display = "block";
        title.innerText = "Gêmeos";
        color.innerText = colors[2];
        parametro.innerText = caracteristicas[2];
        parametro.appendChild(img);
      } else if (dia >= 21 && dia <= 30) {
        img.src = "img/cancer.png";
        parametro.style.display = "block";
        title.innerText = "Câncer";
        color.innerText = colors[3];
        parametro.innerText = caracteristicas[3];
        parametro.appendChild(img);
      }
    }
    if (mes == 7) {
      if (dia >= 1 && dia <= 20) {
        img.src = "img/cancer.png";
        parametro.style.display = "block";
        title.innerText = "Câncer";
        color.innerText = colors[3];
        parametro.innerText = caracteristicas[3];
        parametro.appendChild(img);
      } else if (dia >= 22 && dia <= 31) {
        img.src = "img/leao.png";
        parametro.style.display = "block";
        title.innerText = "Leão";
        color.innerText = colors[4];
        parametro.innerText = caracteristicas[4];
        parametro.appendChild(img);
      }
    }
    if (mes == 8) {
      if (dia >= 1 && dia <= 22) {
        img.src = "img/leao.png";
        parametro.style.display = "block";
        title.innerText = "Leão";
        color.innerText = colors[4];
        parametro.innerText = caracteristicas[4];
        parametro.appendChild(img);
      } else if (dia >= 23 && dia <= 31) {
        img.src = "img/virgem.png";
        parametro.style.display = "block";
        title.innerText = "Virgem";
        color.innerText = colors[5];
        parametro.innerText = caracteristicas[5];
        parametro.appendChild(img);
      }
    }
    if (mes == 9) {
      if (dia >= 1 && dia <= 22) {
        img.src = "img/virgem.png";
        parametro.style.display = "block";
        title.innerText = "Virgem";
        color.innerText = colors[5];
        parametro.innerText = caracteristicas[5];
        parametro.appendChild(img);
      } else if (dia >= 23 && dia <= 30) {
        img.src = "img/libra.png";
        parametro.style.display = "block";
        title.innerText = "Libra";
        color.innerText = colors[6];
        parametro.innerText = caracteristicas[6];
        parametro.appendChild(img);
      }
    }
    if (mes == 10) {
      if (dia >= 1 && dia <= 22) {
        img.src = "img/libra.png";
        parametro.style.display = "block";
        title.innerText = "Libra";
        color.innerText = colors[6];
        parametro.innerText = caracteristicas[6];
        parametro.appendChild(img);
      } else if (dia >= 23 && dia <= 31) {
        img.src = "img/escorpiao.png";
        parametro.style.display = "block";
        title.innerText = "Escorpião";
        color.innerText = colors[7];
        parametro.innerText = caracteristicas[7];
        parametro.appendChild(img);
      }
    }
    if (mes == 11) {
      if (dia >= 1 && dia <= 21) {
        img.src = "img/escorpiao.png";
        parametro.style.display = "block";
        title.innerText = "Escorpião";
        color.innerText = colors[7];
        parametro.innerText = caracteristicas[7];
        parametro.appendChild(img);
      } else if (dia >= 22 && dia <= 30) {
        img.src = "img/sagitario.png";
        parametro.style.display = "block";
        title.innerText = "Sagitário";
        color.innerText = colors[8];
        parametro.innerText = caracteristicas[8];
        parametro.appendChild(img);
      }
    }
    if (mes == 12) {
      if (dia >= 1 && dia <= 21) {
        img.src = "img/sagitario.png";
        parametro.style.display = "block";
        title.innerText = "Sagitário";
        color.innerText = colors[8];
        parametro.innerText = caracteristicas[8];
        parametro.appendChild(img);
      } else if (dia >= 22 && dia <= 31) {
        img.src = "img/capricornio.png";
        parametro.style.display = "block";
        title.innerText = "Capricórnio";
        color.innerText = colors[9];
        parametro.innerText = caracteristicas[9];
        parametro.appendChild(img);
      }
    }
    if (mes == 1) {
      if (dia >= 1 && dia <= 20) {
        img.src = "img/capricornio.png";
        parametro.style.display = "block";
        title.innerText = "Capricórnio";
        color.innerText = colors[9];
        parametro.innerText = caracteristicas[9];
        parametro.appendChild(img);
      } else if (dia >= 21 || dia <= 31) {
        img.src = "img/aquario.png";
        parametro.style.display = "block";
        title.innerText = "Aquário";
        color.innerText = colors[10];
        parametro.innerText = caracteristicas[10];
        parametro.appendChild(img);
      }
    }
    if (mes == 2) {
      if (dia >= 1 && dia <= 19) {
        img.src = "img/aquario.png";
        parametro.style.display = "block";
        title.innerText = "Aquário";
        color.innerText = colors[10];
        parametro.innerText = caracteristicas[10];
        parametro.appendChild(img);
      } else if (dia >= 20 && dia <= 28) {
        img.src = "img/peixes.png";
        parametro.style.display = "block";
        title.innerText = "Peixes";
        color.innerText = colors[11];
        parametro.innerText = caracteristicas[11];
        parametro.appendChild(img);
      }
    }
    if (mes == 3) {
      if (dia >= 1 && dia <= 20) {
        img.src = "img/peixes.png";
        parametro.style.display = "block";
        title.innerText = "Peixes";
        color.innerText = colors[11];
        parametro.innerText = caracteristicas[11];
        parametro.appendChild(img);
      } else if (dia >= 21 && dia <= 31) {
        img.src = "img/aries.png";
        parametro.style.display = "block";
        title.innerText = "Áries";
        color.innerText = colors[0];
        parametro.innerText = caracteristicas[0];
        parametro.appendChild(img);
      }
    }
  }
}

document.getElementById("caracteristicas").innerHTML = signo;
