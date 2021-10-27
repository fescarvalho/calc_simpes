pressionaEnter() {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
         this.realizaConta();
      }
    });
  },

  cliqueBotoes() { 
    
    document.addEventListener('click', event => {
      const el = event.target; 
      
      if(el.classList.contains('btn-num')) { 
        this.btnParaDisplay(el.innerText);
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

      this.display.focus() ;

    })
  };


};

