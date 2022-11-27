# Clase 28

## Alcance de la clase:
  - Repaso de objetos
  - POO
  - Clases y métodos
  - Setters y getters

---

### Repaso de objetos: 

Los objetos, junto a las funciones, constituyen las bases de javascript.

La característica común de los objetos es que contienen dos tipos de elementos: 
 - funciones (como `Date.getDay()`)
 - datos representados por variables o constantes (como `Math.PI`, que retorna el número girego pi)

Adoptando la terminología de los lenguajes orientados a objetos, las funciones dentro de un objeto también se denominan **_métodos_**, mientras que los datos definidos como un par `clave: valor`, se denominan **_propiedades_**.

Podemos crear objetos utilizando llaves `{...}` con una lista opcional de propiedades, o se puede crear con `new Object()`.

Se puede crear un objeto vacío utilizando una de estas dos sintaxis:

```javascript
const user = new Object() // sintaxis de "constructor de objetos"
const user = {}  // sintaxis de "objeto literal"
```

También podemos poner inmediatamente algunas propiedades dentro de {...} como pares “clave:valor”:

```javascript
const user = {     // un objeto
  name: "Maciel", // En la clave "name" se almacena el valor "Maciel"
  age: 22        // En la clave "age" se almacena el valor 22
}
```

Una propiedad tiene una clave (también conocida como “nombre” o “identificador”) antes de los dos puntos `":"` y un valor a la derecha.

En el objeto `user` hay dos propiedades:

1. La primera propiedad tiene la clave "name" y el valor "Maciel".
2. La segunda tienen la clave "age" y el valor 22.

Podemos agregar, eliminar y leer archivos de él en cualquier momento.

Se puede acceder a los valores de las propiedades utilizando la notación de punto:

```javascript
console.log( user.name )
console.log( user.age )
```


### El bucle "for..in"

Para recorrer todas las claves de un objeto existe una forma especial de bucle: `for..in`.

```javascript
const user = {
  name: "Maciel",
  age: 22,
  isAdmin: true
}

for (const key in user) {
  // claves
  console.log( key )  // name, age, isAdmin
  // valores de las claves
  console.log( user[key] ) // Maciel, 22, true
}
```

---

### Referencia de objetos y copia:

Una de las diferencias fundamentales entre objetos y primitivos es que los **objetos** son almacenados y copiados “por referencia”, en cambio los **primitivos**: `strings`, `number`, `boolean`, etc. son asignados y copiados “como un valor completo”.

```javascript
const message = "Hello!"
const phrase = message
```

![Copia de una variable](./assets/variable-copy-value.svg)

Como resultado tenemos dos variables independientes, cada una almacenando la cadena `"Hello!"`.

Bueno, en el caso de los objetos **Las cosas no son así**.

**_Una Variable no almacena el objeto mismo, si no su `"dirección en memoria"`. En otras palabras `"una referencia a él"`._**

Veamos un ejemplo de tal variable:

```javascript
const user = {
  name: 'Maciel'
}
```

![Variable almacenada en un objeto](./assets/variable-contains-reference.svg)

El objeto es almacenado en algún lugar de la memoria (a la derecha de la imagen), mientras que la variable user (a la izquierda) tiene una “referencia” a él.

**_Cuando una variable de objeto es copiada, se copia solo la referencia._**

**_`¡EL OBJETO NO ES DUPLICADO!`_**


```javascript
const user = { name: 'Maciel' }
const admin = user // Copia la referencia
```

![Copia de una objeto](./assets/variable-copy-reference.svg)

Ahora tenemos dos variables apuntando con una referencia al mismo objeto.

Como podemos ver, aún hay **un** objeto, ahora con dos variables haciendo referencia a él.

Podemos usar cualquiera de las variables para acceder al objeto y modificar su contenido:

```javascript
const user = { name: 'Maciel' }
const admin = user // Copiamos la referencia

admin.name = 'Pamela' // cambiado por la referencia "admin"
console.log(user.name) // 'Pamela', los cambios se ven desde la referencia 'user'
```

---

### Comparación por referencia:

Dos objetos son iguales solamente si ellos son el mismo objeto. Es decir, si ambas variables tienen referencia al mismo objeto.

```javascript
const a = {}
const b = a

console.log(a == b) // true, Ambas variables hacen referencia al mismo objeto
console.log(a === b) // true
```
Aquí dos objetos independientes no son iguales.
```javascript
const a = {}
const b = {}

console.log(a === b) // false, no hacen referencia al mismo objeto.
```

**_`Aclaración importante: `_** Puede parecer que si hacemos lo siguiente: 
```javascript
const user = {
  name: 'Maciel'
}

user.name = 'Leandro'

console.log(user.name) // Leandro
```
causaría algún error, pero esto no es así. El valor de `user` es constante, este valor debe **_`siempre hacer referencia al mismo objeto`_**, pero las propiedades de dicho objeto **_`si pueden cambiar`_**.

En otras palabras `const user` solo da un error solamente si tratamos asignar `user = ...` como un todo.

---

### Métodos del objeto:

Los objetos son creados usualmente para representar entidades en el mundo real, como usuario, órdenes, etc.

Y en el mundo real, un usario puede *actuar*: seleccionar algo del carrito de compras, hacer login, logout, etc...

Las acciones son representadas por funciones en las propiedades.

```javascript
const user = {
  name: 'Maciel',
  age: 30
  sayHi: function() {
    console.log('¡Hola!');
  }
}

user.sayHi() // ¡Hola!
```

Una función que es la propiedad de un objeto es denominada su *método*

Existe una sintaxis más corta para los metodos en objetos literales: 

```javascript
const user = {
  sayHi() {
    console.log('¡Hola!')
  }
}
```

---

### Sintaxis báscia de Class:

**_`En informática, una clase es un molde para la creación de objetos de datos según un modelo predefinido.
Cada clase es un modelo que define un conjunto de variables, y métodos apropiados para operar con dichos datos.`_**


La sintaxis básica es:

```javascript
class MyClass {
  // métodos de clase
  constructor() {
    ... 
  }
  method1() {
    ... 
  }
  method2() {
    ... 
  }
  ...
}
```

El método `constructor()` es donde inicializamos nuestro objeto, por ejemplo:

```javascript
class User {
  constructor(name){
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

const user = new User('Leandro')
user.sayHi()
```

Cuando se llama a `new User('Leandro')`:

  1. Un objeto nuevo es creado.
  2. El `constructor` se ejecuta con el argumento dado y lo asigna a `this.name`.

Entonces podemos llamar a sus métodos, como `user.sayHi()`

> **No va una coma entre métodos de clase**
>
> Un tropiezo común en desarrolladores principiantes es poner una coma entre los métodos de clase, lo que resulta en un error de sintaxis.
>
> La notación aquí no debe ser confundida con la sintaxis de objeto literal. **Dentro de la clase no se requieren comas.**
