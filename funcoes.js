// parâmetros/argumentos
// retorno

function exibeInfosEstudante(nome, nota) {
    return `o nome é ${nome} e a nota é ${nota}`;
  }
  
  console.log(exibeInfosEstudante('Caroline', 10));
  console.log(exibeInfosEstudante('Ana', 7));

  const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
      return true;
    } else {
      return false;
    }
  }