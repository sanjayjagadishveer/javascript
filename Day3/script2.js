/*let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };
  ladder.up().up().down().showStep().up().showStep()*/

  function calculator()
  {
   
    this.num1=0,
    this.num2=0,
    this.read=function()
    {
        this.num1=+prompt('enter num1');
        this.num2=+prompt('enter num2');
    },
    this.add=function()
    {
        let result=this.num1+this.num2;
       console.log(result);
    },
    this.multiply=function()
    {
        let result=this.num1*this.num2;
        console.log(result);
    }

  }
  let calc = new calculator()
  calc.read();
  calc.add();
  calc.multiply();


