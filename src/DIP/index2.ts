/**
 * Una clase de mas alto nivel (ShoppingBasket) está dependiendo de otras de alto nivel (SqlDatabase y CreditCard)
 * ¿Que pasaría si quieres añadir otras formas de métodos de pago o
 * enviar la informacióna a un servidor en vez de guardarla en una base de datos?
 */

interface Persistence{
    save(shopping: Shopping): void;
}

interface PaymentMethod{
    pay(shopping: Shopping): void;
}

class SqlDatabase2 implements Persistence{
    save(shopping: Shopping): void {}    
}

class CreditCard2 implements PaymentMethod{
    pay(shopping: Shopping): void {}
}

/**
 * Ahora ya no dependemos de la implementación particular que decidamos.
 * Tenemos que invertir las dependencias
 */

class ShoppingBasket2{
    persistence : Persistence;
    paymentMethod: PaymentMethod;

    constructor(persistence: Persistence, paymentMethod: PaymentMethod){
        this.persistence = persistence;
        this.paymentMethod = paymentMethod;
    }

    buy(shopping: Shopping): void {
        this.persistence.save(shopping);
        this.paymentMethod.pay(shopping);
    }
}

/**
 * ¿Y si queremos pagar por Paypal y guardarlo en un servidor?
 */

class Server implements Persistence{
    save(shopping: Shopping): void {
        
    }
}

class Paypal implements PaymentMethod{
    pay(shopping: Shopping): void {    

    }
    
}

/**
 * Este principio otorga mucha flexibilidad
 */