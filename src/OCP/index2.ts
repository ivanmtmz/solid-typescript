abstract class Vehicle4 {
    abstract draw(): void;
}

class Car extends Vehicle4{
    draw(): void {
        
    }
}

class Motorbike extends Vehicle4{
    draw(): void {
        
    }   
}

class VehicleDrawer {
    public draw(vehicle: Vehicle4) {
        vehicle.draw();
    }
}

class Truck extends Vehicle4{
    draw(): void {
        
    }
}

/**
 * ¿Como detectar que estamos violando este principio?
 * Detectar que clases modificamos más a menudo
 * Cada ves que hay un requisito o requerimiento las mismas clases se ven afectadas 
 */

/**
 * Intentar hacer un código 100% Open/Closed es prácticamente imposible, y puede hacer que sea ilegible 
 * e incluso más difícil de mantener. No me cansaré de repetir que las reglas SOLID son ideas muy potentes,
 *  pero hay que aplicarlas donde corresponda y sin obsesionarnos con cumplirlas en cada punto del desarrollo.
 *  Casi siempre es más sencillo limitarse a usarlas cuando nos haya surgido la necesidad real.
 */