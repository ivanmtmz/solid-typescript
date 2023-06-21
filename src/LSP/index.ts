/**
 * Seguro que te has encontrado con esta situación muchas veces: creas una clase que extiende de otra, pero de repente uno de los métodos te sobra, y no sabes que hacer con él. Las opciones más rápidas son bien dejarlo vacío, bien lanzar una excepción cuando se use, asegurándote de que nadie llama incorrectamente a un método que no se puede utilizar.
 Si un método sobrescrito no hace nada o lanza una excepción, es muy probable que estés violando el principio de sustitución de Liskov. 
 */

class Rectangle{
    private width: number = 0;
    private height: number = 0;

    public getWidth(){
        return this.width;
    }

    public getHeight(){
        return this.height;
    }

    public setWidth(width: number){
        this.width = width;
    }

    public setHeight(height: number){
        this.height = height;
    }

    public calculateArea(){
        return this.width * this.height;
    }


}

//tests
class RectangleTester{
    public testArea(){
        const r = new Rectangle();
        r.setWidth(5);
        r.setHeight(4);
        r.calculateArea(); // 20
    }
}

// Square class?
class Square extends Rectangle{
    public setWidth(width: number): void {
        super.setWidth(width);
        super.setHeight(width);
    }
    public setHeight(height: number): void {
        super.setHeight(height);
        super.setWidth(height);
    }

}

//tests
class SquareTester{
    public testArea(){
        const s = new Square();
        s.setWidth(5); // 25
        s.setHeight(4); // 16
        s.calculateArea(); // 16
    }
}