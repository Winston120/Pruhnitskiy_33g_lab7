function pizza() {
  this.tomato = 0;
  this.capisium = 0;
  this.mushroom = 0;
  this.cheese = 0;
  this.onion = 0;
  this.chilly = 0;
  this.paneer = 0;
  this.corn = 0;
  this.rec = 0;
  this.sum = 0;
  this.nomer = 6;
   this.panee = function(paneer) {
    this.paneer += paneer;
    document.getElementById("pa").innerHTML=this.paneer;
  }; 
    this.panee1 = function(paneer) {
    this.paneer -= paneer;
    if(this.paneer < 0){
        this.paneer = 0;
      }
    document.getElementById("pa").innerHTML=this.paneer;
  };
 this.cor = function(corn) {
    this.corn += corn;
    document.getElementById("co").innerHTML=this.corn;
  };
  this.cor1 = function(corn) {
    this.corn -= corn;
    if(this.corn < 0){
        this.corn = 0;
      }
    document.getElementById("co").innerHTML=this.corn;
  };
  this.tomat = function(tomato) {
    this.tomato += tomato;
    document.getElementById("c").innerHTML=this.tomato;
  };
  this.tomat1 = function(tomato) {
    this.tomato -= tomato;
    if(this.tomato < 0){
        this.tomato = 0;
      }
    document.getElementById("c").innerHTML=this.tomato;
  };
  this.capisiu = function(capisium) {
    this.capisium += capisium;
    
    document.getElementById("d").innerHTML=this.capisium;
  };
  this.capisiu1 = function(capisium) {
    this.capisium -= capisium;
    if(this.capisium < 0){
        this.capisium = 0;
      }
    document.getElementById("d").innerHTML=this.capisium;
  };
  this.mushroo = function(mushroom) {
    this.mushroom += mushroom;
    document.getElementById("m").innerHTML=this.mushroom;
  };
  this.mushroo1 = function(mushroom) {
    this.mushroom -= mushroom;
    if(this.mushroom < 0){
        this.mushroom = 0;
      }
    document.getElementById("m").innerHTML=this.mushroom;
  };
  this.chees = function(cheese) {
    this.cheese += cheese;
    document.getElementById("ch").innerHTML=this.cheese;
  };
  this.chees1 = function(cheese) {
    this.cheese -= cheese;
    if(this.cheese < 0){
        this.cheese = 0;
      }
    document.getElementById("ch").innerHTML=this.cheese;
  };
  this.onio = function(onion) {
    this.onion += onion;
    document.getElementById("o").innerHTML=this.onion;
  };
  this.onio1 = function(onion) {
    this.onion -= onion;
    if(this.onion < 0){
        this.onion = 0;
      }
    document.getElementById("o").innerHTML=this.onion;
  };
 this.chill = function(chilly) {
    this.chilly += chilly;
    document.getElementById("chi").innerHTML=this.chilly;
  };
  this.chill1 = function(chilly) {
    this.chilly -= chilly;
    if(this.chilly < 0){
        this.chilly = 0;
      }
    document.getElementById("chi").innerHTML=this.chilly;
  };


  this.reco = function(rec){
  	this.rec = (this.tomato*0.25)+(this.capisium*0.15)+(this.mushroom*0.15)+(this.cheese*0.15)+(this.onion*0.15)+(this.corn*0.15)+(this.chilly*0.15)+(this.paneer*0.15);
    if(this.rec < 0){
        this.rec = 0;
         }
      this.rec =this.rec.toFixed(2);

  	document.getElementById("b").innerHTML=this.rec;
  };
  this.summ=function(sum){
     Number(this.sum =Number(this.rec)+this.nomer);
      document.getElementById("doun").innerHTML=this.sum;

    };
};

var pizza = new pizza(),p=0;
