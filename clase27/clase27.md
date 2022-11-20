# Clase 27

## Alcance de la clase
  - Funciones anónimas.
  - Funciones flechas
  - Métodos (map, find, includes, indexOf)
  - Introducción a objetos

---

### Funciones anónimas:

Ejemplo de una función anónima: 

```javascript
const sum = function (a, b) {
  return a+b
}

console.log( sum(3,5) ) // 8
```

Esto es posible porque en JavaScript, `function` es un tipo que se puede almacenar en una variable.

Al utilizar la variable, podemos especificar entre sus paréntesis los argumentos que deseamos utilizar.

Una diferencia entre una función anónima y una con nombre, es que en caso de que ocurra un error, no verás el nombre de la función en la traza que se muestre.

---
### Funciones flechas:

Otra sintaxis simple  y concisa para crear funciones, se llaman las funciones flecha.

Ejemplo de función flecha: 

```javascript
const sum = (a, b) => a + b;

console.log( sum(3,5) ) // 8
```
Esto crea una función `sum` que acepta los parámetros `a, b`, luego evalúa la expression del lado derecho mediante su uso y devuelve su resultado.

Si solo tenemos un argumento, se pueden omitir paréntesis alrededor de los parámetros, lo que lo hace aún más corto.

```javascript
const double = n => n * 2;

console.log( double(3) ) // 6
```

Las funciones de flecha son útiles para acciones simples, especialmente las de una sola línea. Vienen en dos variantes

- Sin llaves: `(...args) => expression` – el lado derecho es una expresión: la función la evalúa y devuelve el resultado. Pueden omitirse los paréntesis si solo hay un argumento, por ejemplo n => n*2.
- Con llaves: `(...args) => { body }` – las llaves nos permiten escribir varias declaraciones dentro de la función, pero necesitamos un return explícito para devolver algo.

---

### Más metodos...

#### **.forEach**

El método arr.forEach permite ejecutar una función a cada elemento del array.

```javascript
arr.forEach(function(item, index, array) {
  // ... hacer algo con el elemento
})
```
Por ejemplo, el siguiente código muestra cada elemento del array:

```javascript
// para cada elemento ejecuta alert
["Comisión", "26", "2022"].forEach(alert);
```
---
#### **.map**

Paradigma funcional: Es una forma de programar, consiste aplicar funciones a nuestros valores iniciales, sin modificarlos directamente. Sin realizar **_Mutaciones_**. 

Cambiando el valor principal:
```javascript
let number = 3;
number = number * 2 
```
Sin cambiarlo, es decir sin mutarlo:
```javascript
const number = 3
const double = number * 2
```
Un poco más acerca del [Paradigma funcional](https://medium.com/elblogdejavascript/programaci%C3%B3n-funcional-5da872a080fe)...

Ejemplo:

```javascript
const numbers = [10, 20, 30]

for (let i = 0 ; i < numbers.length ; i++) {
  numbers[i] = numbers[i] * 2
}
console.log(numbers) // [20, 40, 60]
```

En el paradigma funcional, es obtener un nuevo valor llamando un método, en este caso el método **.map**

Sintáxis del método **.map**

`Transforma cada número multiplicando por 2.`
```javascript
const array = [10, 20, 30]
const newArray = array.map( function (item, index, array ){
  // devuelve el nuevo valor en lugar de item
})
```
La función es llamada para cada elemento del array, uno después del otro:

- `item` es el elemento.
- `index` es su índice.
- array es el array mismo.

Ejemplo: 
```javascript
const numbers = [10, 20, 30]
const doubles = numbers.map(number => number * 2)

console.log(numbers) // [10, 20, 30]
console.log(doubles) // [20, 40, 60]
```
---

#### **.indexOF** / **.includes**
Los métodos arr.indexOf y arr.includes tienen una sintaxis similar:

  - `arr.indexOf(item, from)` busca un `item` comenzando desde el index `from`, y devuelve el index donde fue encontrado. Si no encontró nada, entonces devuelve `-1`.
  - `arr.includes(item, from)` – busca `item` comenzando desde el índice `from`, devuelve `true` en caso de ser encontrado.

Usualmente estos métodos se usan con un solo argumento: el item a buscar.

Ejemplos:
```javascript
const arr = [1, 10, 100, 2, 200, false]

console.log(arr.indexOf(100)) // 2
console.log(arr.indexOf(false)) // 5
console.log(arr.indexOf('People')) // -1

console.log(arr.includes(1)) // true
console.log(arr.includes('1')) // false
```
Tener en cuenta que el método usa la comparación estricta (===).

Si queremos comprobar si un elemento existe en el array, pero no necesitamos saber su ubicación exacta, es preferible usar arr.includes.

---
#### **.find**
El método find busca un único elemento (el primero) que haga a la función devolver true.

Sintaxis: 
```javascript
const result = arr.find((item, index, array) => {
  // si true es devuelto aquí, find devuelve el ítem y la iteración se detiene
  // para el caso en que sea false, devuelve undefined
})
```

Ejemplos:
```javascript
const arr = ['🍎','🍉','🍋']
const apple = arr.find(item => item === '🍎')

console.log(apple) // '🍎'
```

Nota: Si existieran varios elementos que cumplen la condición, podemos usar arr.filter(fn).
---
#### **.filter**
La sintaxis es similar a find, pero filter devuelve un array con todos los elementos encontrados:

```javascript
const results = arr.filter((item, index, array) => {
  // si devuelve true, el elemento es ingresado al array y la iteración continua
  // si nada es encontrado, devuelve un array vacío
})
```

Ejemplos

```javascript
const users = ['Maciel', 'Maciel','José', 'Facundo', 'Castro']

// devuelve un array con los dos primeros usuarios
const someUsers = users.filter(item => item === 'Maciel')

console.log(someUsers) // ['Maciel', 'Maciel']
console.log(someUsers.length) // 2
```

```javascript
const arr = ['🥩','🥓','🥗']
const meat = arr.filter(item => item !== '🥗')

console.log(meat) // ['🥩','🥓']
```
---