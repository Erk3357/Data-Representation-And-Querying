class BMI{
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){
        //Calculate BMI. (** = Power to, * = Multiplication)
        let bmi = this.weight/(this.height**2);

        //return the calculation
        return bmi;
    }
}

//Create new Instance of BMI
let myBMI = new BMI(2, 90);

//Invoke calculateBMI method
let calc = myBMI.calculateBMI();

//show results in console
console.log(calc);

//WRITE JS IN CONSOLE LOG
//console.log('make: ${this,name}');