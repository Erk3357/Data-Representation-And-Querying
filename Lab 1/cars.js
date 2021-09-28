class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        //log variables to the console
        console.log(`Make: ${this.make}`);
        console.log(`Make: ${this.model}`);
        console.log(`Make: ${this.year}`);
    }
}

//pass the arguments to the parent (Extends Vehicle)
class Cars extends Vehicle{
    constructor(make, model, year, doors){
        //Access Parent constructor
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        //Access Parent method from Vehicle
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

//Create new Instance of Cars, Pass 4 arguments with usage of Parent (extend)
let myCar = new Cars('Toyota', 'Yaris', 2000, 2);

//Invoke Information method
myCar.Information();