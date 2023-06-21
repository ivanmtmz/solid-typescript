/**
 * Definición formal
 * A. Las clases de alto nivel no deberían depender de las clases de bajo nivel. Ambas deberían depender de las abstracciones.
 * B. Las abstracciones no deberían depender de los detalles. Los detalles deberían depender de las abstracciones.
 */

/**
 * Gracias a este principio podemos hacer que el código que es el núcleo de nuestra app no depende
 * delos detalles de implementación como puede ser el framework que utilicemos, la base de datos o la forma en que
 * te conectas al servidor.
 */

/**
 * Cuando un módulo depende de otro, se crea una nueva instancia y la utiliza sin mas complicaciones.
 * Esta forma parece la mas sencilla pero nos va a traer bastante problemas posteriormente:
 * 
 * La parte genérica de nuestro código (dominio o lógica de negocio) dependerá por todas partes de 
 * DETALLES DE IMPLEMENTACIÓN, es decir, dependerá de el framework, de la forma de persistir los datos.
 * 
 * No quedan claras las dependencias: si las instancias se crean dentro del módulo que las usa,
 * es más difícil detectar de que depende nuestro módulo. 
 * 
 * Es complicado hacer tests.
*/

/**¬
 * CUALQUIER INSTANCIACIÓN DE CLASES COMPLEJAS O MÓDULOS ES UNA VIOLACIÓN A ESTE PRINCIPIO
 */

class Shopping{}

class SqlDatabase {
    public save(shopping: Shopping): void {
        // Saves data in SQL database
    }
}
class CreditCard {
    public pay(shopping: Shopping): void {
        // Performs payment using a credit card
    }
}

class ShoppingBasket {
    public buy(shopping: Shopping): void {
        const db: SqlDatabase = new SqlDatabase();
        db.save(shopping);

        const creditCard: CreditCard = new CreditCard();
        creditCard.pay(shopping);
    }
}