# Repositorio Modulo 2.

En este repositorio, se guardaran los archivos realizados durante las clases. 
Para tener acceso, ejecuta el siguiente comando en una consola.

````
git clone https://github.com/castromaciel/Modulo2.git
````
---
## Comandos básicos de git: 

## $ git clone
Git clone es un comando para descargarte el código fuente existente desde un repositorio remoto (como Github, por ejemplo). En otras palabras, Git clone básicamente realiza una copia idéntica de la última versión de un proyecto en un repositorio y la guarda en tu pc.

Hay un par de formas de descargar el código fuente, pero principalmente yo prefiero clonar de la forma con https:

````
git clone <https://link-con-nombre-del-repositorio>
````

## $ git status
El comando de git status nos da toda la información necesaria sobre la rama actual.

Podemos encontrar información como:

* Si la rama actual está actualizada
* Si hay algo para confirmar, enviar o recibir (pull).
* Si hay archivos en preparación (staged), sin preparación(unstaged) o que no están recibiendo seguimiento (untracked)
* Si hay archivos creados, modificados o eliminados

## $ git add 
Cuando creamos, modificamos o eliminamos un archivo, estos cambios suceden en local y no se incluirán en el siguiente commit (a menos que cambiemos la configuración).

Necesitamos usar el comando git add para incluir los cambios del o de los archivos en tu siguiente commit.

Podemos añadir un único archivo:

````
git add <archivo>
````

O añadir todo de una vez:

````
git add .
````
## $ git commit
Una vez que se llega a cierto punto en el desarrollo, queremos guardar nuestros cambios (después de una tarea o asunto específico).  

Git commit es como establecer un punto de control en el proceso de desarrollo, al cual puedes volver más tarde si es necesario.

También necesitamos escribir un mensaje corto para explicar qué hemos desarrollado o modificado en el código fuente.
````
git commit -m "mensaje de confirmación"
````
## $ git push
Después de haber confirmado tus cambios, el siguiente paso que quieres dar es enviar tus cambios al servidor remoto. Git push envía tus commits al repositorio remoto.

````
git push <nombre-remoto> <nombre-de-tu-rama>
````
De todas formas, si tu rama ha sido creada recientemente, puede que tengas que cargar y subir tu rama con el siguiente comando:

````
git push --set-upstream <nombre-remoto> <nombre-de-tu-rama>
````
O si no
````
git push -u origin <nombre-de-tu-rama>
````
**Importante: Git push solamente carga los cambios que han sido confirmados.**

## $ git pull
El comando git pull se utiliza para recibir/descargar actualizaciones del repositorio remoto. Este comando es una combinación del git fetch y del git merge lo cual significa que cundo usemos el git pull recogeremos actualizaciones del repositorio remoto (git fetch) e inmediatamente aplicamos estos últimos cambios en local (git merge).

````
git pull <nombre-remoto>
````
**Esta operación puede generar conflictos que tengamos que resolver manualmente.**

## $ git branch
Las ramas (branch) son altamente importantes en el mundo de Git. Usando ramas, varios desarrolladores pueden trabajar en paralelo en el mismo proyecto simultáneamente. Podemos usar el comando git branch para crearlas, listarlas y eliminarlas.

Creando una nueva rama:
````
git branch <nombre-de-la-rama>
````

Visualización de ramas:
````
git branch
````

Borrar una rama:
````
git branch -d <nombre-de-la-rama>
````

## $ git checkout
Para trabajar en una rama, primero tienes que cambiarte a ella. Usaremos git checkout principalmente para cambiarte de una rama a otra. También lo podemos usar para chequear archivos y commits.

````
git checkout <nombre-de-la-rama>
````
Hay algunos pasos que debes seguir para cambiarte exitosamente entre ramas:

* Los cambios en tu rama actual tienen que ser confirmados o almacenados en el guardado rápido (stash) antes de que cambies de rama.
* La rama a la que te quieras cambiar debe existir en local.

Hay también un comando de acceso directo que te permite crear y cambiarte a esa rama al mismo tiempo:
````
git checkout -b <nombre-de-tu-rama>
````
Este comando crea una nueva rama en local (-b viene de rama (branch)) y te cambia a la rama que acabas de crear.