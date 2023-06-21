/**
 * Ninguna clase debería depender de métodos que no usa
 * Es importante estar seguros de que todas las clases que implementen interfaces
 * vayan a necesitar y ser capaces de agregar comportamientos a todos los métodos.
 * En caso contrario, es mejor TENER VARIAS INTERFACES PEQUEÑAS
 * Las interfaces nos ayudan a desacoplar modulos entres sí.
 */

interface Product{
    getName(): string;
    getStock(): number;
    getNumberOfDisks(): number;
    getReleaseDate(): Date;

    //nuevo método implementado
    getRecommendedAge(): number;
    
}

class CD implements Product{
    getName(): string {}
    getStock(): number {}
    getNumberOfDisks(): number {}
    getReleaseDate(): Date {}

    //nuevo método implementado
    getRecommendedAge(): number {
        throw new Error("Method not implemented.");
    }
}

// Ahora quiero vender DVDs, necesito implementar el método getRecommendedAge

class DVD implements Product{
    getName(): string {}
    getStock(): number {}
    getNumberOfDisks(): number {}
    getReleaseDate(): Date {}

    //nuevo método implementado
    getRecommendedAge(): number {

    }
}

/**
 * Cada vez que necesitemos una nueva caracteristica a Product,
 * las clases que lo implementan deben implementar el nuevo método
 * y si no es necesario, la clasé tendrá que arrojar un error.
 */