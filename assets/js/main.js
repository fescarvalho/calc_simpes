//CRIANDO A FUNÇAO CONSTRUTORA
function criaCalculadora() {
  return {
    //---ATRIBUTOS--//
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),

   
   
   //---METODOS--//
    inicia() {//METODO QUE CHAMA A CALCULADORA
      this.cliqueBotoes();
      //SEMPRE QUE EU FOR REFERENCIAR UMA CHAVE DO MEU OBJETO,D ENTRO DO OBJETO PRECISO DO this.
    },

  
    btnParaDisplay(valor) { //LANÇANDO O VALOR DO BOTAO NO DISPLAY
      this.display.value += valor;
    },

    clearDisplay() { //FUNCIONALIDADE DO BOTAO CLEAR
      this.display.value = '';
      this.display.classList.remove('negative');

    },
   
    apagaUm() { //FUNCIONALIDADE DO BOTAO APAGAR
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() { //FUNCIONALIDADE DO BOTAO APAGAR
      let conta = this.display.value;

      //VERIFICANDO O ERRO NA CONTA
      try {
        conta = eval(conta);
        
        if(typeof conta !== 'number'|| Number.isNaN(conta)) { //SE A CONTA FOR false(valor invalido)
           alert('Conta Ivalida'); //MOSTRA ISSO
           return;
        } 

        this.display.value = conta; //SE NAO DER ERRO FAZ A CONTA
      } catch (e) {
         alert('Conta Ivalida');
         return;
      }

      if(conta < 0) {
       this.display.classList.add('negative');
       return
      }
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
           this.realizaConta();
        }
      });
    },

    cliqueBotoes() { //METODO PARA PEGAR OS CLIQUES
      //this -> calculadora
      document.addEventListener('click', event => {//ARROW NAO PERMITE A MUNDANÇA DE COMPORTAMENTO DO this
        const el = event.target; //VARIAVEL PARA ARMAZENAR QUAL BOTAO ESTA SENDO CLICADO
        
        if(el.classList.contains('btn-num')) { //VERIFICANDO SE O ELEMENTO CLICADO TEM A CLASSE 
          this.btnParaDisplay(el.innerText);//LINK PARA OQ ESTA NO BOTAO PARA O DISPLAY
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }



        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }

        this.display.focus();

      })
    }

  
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();//INCIANDO O METODO DA CALCULADORA