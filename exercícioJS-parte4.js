function contar() {
      //pegar do html para dentro do JS
  var inicio = document.getElementById('inicio')
  var fim = document.getElementById('fim')
  var passo = document.getElementById('passo')
  var resp = document.getElementById('resp')

        if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0) {
          //window.alert('[ERRO], Faltam dados')
          resp.innerHTML = 'Impossível contar!'
        }else {
          resp.innerHTML = 'Contando: '
          //fazer o JS ler o que já pegou como número e, depois...
          let i = Number(inicio.value)
          let f = Number(fim.value)
          let p = Number(passo.value)
          if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo 1')
            p = 1
          }
          //...jogar na condição
          //contagem crescente
          if (i < f) {
            for (let c = i; c < f; c += p) {
              resp.innerHTML += `${c} `
            }
         }else {
           //contagem decrescente
           for (let c = i; c > f; c -= p) {
             resp.innerHTML += `${c} `
           }
         }
          
        }

        // if (inicio.value < fim.value) {
        //   for (var i = inicio.value; i < fim.value; i += passo)
        //   window.alert()
        // }else {
        //   for (var i = inicio.value; i > fim.value; i -= passo)
          
        }
        
  
