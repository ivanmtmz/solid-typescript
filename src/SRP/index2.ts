class Vehicle2 {
    public getWheelCount(){
        return 4;
    }
    public getMaxSpeed(){
        return 200;
    }
    public toString(){
        return `wheelCount: ${this.getWheelCount()}, maxSpeed: ${this.getMaxSpeed()}`
    }
}
class VehiculePrinter{
    public print(v: Vehicle2){
        console.log(v.toString());
    }
    public printHTML (v: Vehicle2){
        return "<text>" + v.toString() + "</text>";
    }
}
const v2 = new Vehicle();
const vp = new VehiculePrinter();
vp.print(v2);

/**
 * Como detectar que no cumplimos la Responsabilidad Única
 * En una misma clase estan involucradas dos capas de la arquitectura
 * El número de métodos públicos
 * Los métodos que ocupan cada uno de los campos de esa clase 
 * El número de imports
 * Nos cuesta testear la clase
 * Cada ves que escribes una nueva funcionalidad esa clase se ve afectada
 * Por el número de líneas
 */