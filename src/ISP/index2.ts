/**
 * Posible solución
 */

interface Product2{
    getName(): string;
    getStock(): number;
    getNumberOfDisks(): number;
    getReleaseDate(): Date;
}


interface DVD extends Product2{
    getRecommendedAge(): number;
}

interface Age extends DVD{
    
}

class CD3 implements Product2{
    getName(): string {
        throw new Error("Method not implemented.");
    }
    getStock(): number {
        throw new Error("Method not implemented.");
    }
    getNumberOfDisks(): number {
        throw new Error("Method not implemented.");
    }
    getReleaseDate(): Date {
        throw new Error("Method not implemented.");
    }
}

/**
 * ¿Que pasaría si otro producto necesita categorización por edades?
 * Necesitaríamos repetir parte de esta inteface en otra interface
*/

/**
 * Segregar: Separar una cosa de otra de la que forma parte para que siga existiendo con independencia.
*/

interface AgeAware{
    getRecommendedAge(): number;
}

class CD2 implements Product2{
    getName(): string {
        throw new Error("Method not implemented.");
    }
    getStock(): number {
        throw new Error("Method not implemented.");
    }
    getNumberOfDisks(): number {
        throw new Error("Method not implemented.");
    }
    getReleaseDate(): Date {
        throw new Error("Method not implemented.");
    }
}

class DVD2 implements Product2, AgeAware{
    getName(): string {
        throw new Error("Method not implemented.");
    }
    getStock(): number {
        throw new Error("Method not implemented.");
    }
    getNumberOfDisks(): number {
        throw new Error("Method not implemented.");
    }
    getReleaseDate(): Date {
        throw new Error("Method not implemented.");
    }
    getRecommendedAge(): number {
        throw new Error("Method not implemented.");
    }
}

/**
 * Si ya se tienen fat interfaces (interfaces que intentan definir mas cosas de las debidas),
 * La solución es utilizar el patrón de diseño "Adapter", para convertir interfaces en otras.
 */

/**
 * El principio de segregación de interfaces nos ayuda a no obligar a una clase a implementar
 * métodos que no utiliza.
 */

interface C{
    a() : void;
}

interface D{
    b() : void;
}

abstract class A2{
    prop1: string = "";
    prop2: string = "";
    prop3: string = "";
}

class A implements C, D{
    b(): void {
        throw new Error("Method not implemented.");
    }
    a(): void {
        throw new Error("Method not implemented.");
    }
}

class B extends A2 implements C{
    a(): void {
        throw new Error("Method not implemented.");
    }
}