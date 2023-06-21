enum VehicleType {
    CAT,
    MOTORBIKE,
    TRUCK
}

class Vehicle3 {

    constructor(private type: VehicleType) { 

    }
    
    public getType(): VehicleType {
        return this.type;
    }

    public drawCar() { }

    public drawMotorbike() { }

    public drawTruck() { }

    public draw(vehicle: Vehicle3) {
        switch (vehicle.getType()) {
            case VehicleType.CAT:
                this.drawCar();
                break;
            case VehicleType.MOTORBIKE:
                this.drawMotorbike();
                break;
        }
    }
}