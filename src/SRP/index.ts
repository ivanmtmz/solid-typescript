class Vehicle {
    public getWheelCount(){
        return 4;
    }
    public getMaxSpeed(){
        return 200;
    }
    public toString(){
        return `wheelCount: ${this.getWheelCount()}, maxSpeed: ${this.getMaxSpeed()}`
    }
    public print(){
        console.log(this.toString());
    }
}

const v = new Vehicle();