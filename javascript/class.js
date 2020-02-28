class Car { 

  #engineNo = "ABE222";
  _chasisNo = "dsdds";

  constructor(color) {
	this.color = color;
  }

 
  
  getColor() {
    console.log(`Base Car's color is ${this.color}.`);
	return this.color;
  }
}

Car.prototype.gear=4;
Car.prototype.getGear=function(){ console.log(` Number of Gears loaded ${this.gear}`); return this.gear;}
Car.prototype.setGear=function(gear){this.gear=gear;}

class Ford extends Car {
	
  constructor(color,gear){
	super();
    this.color = color;
	this.gear = gear;
  }	  
  getColor() {
    super.getColor();
    console.log(`Ford car's color is ${this.color} `);
	return this.color;
  }
  
}

