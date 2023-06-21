/**
 * El principio de Liskov nos ayuda a utilizar la herencia de forma correcta, y a tener mucho más cuidado a la hora de extender clases.
 */

// posible solución
interface IRectangle{
    getWidth(): number;
    getHeight(): number;
    calculateArea(): number;
}

class Rectangle2 implements IRectangle{}

class SQuare2 implements IRectangle{}

// mejor solución
class Rectangle3{
    public width: number = 0;
    public height: number = 0;

    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
}

class Square2 extends Rectangle3{
    constructor(side: number){
        super(side, side);
    }
}