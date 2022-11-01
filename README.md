# ElectroMundo

Es un proyecto para el curso de React para la plataforma Coderhouse.

---

### ¿De que se trata el proyecto?

El Proyecto es un ecommerce en donde se venden productos electronicos. En el sitio, habra 5 categorias de productos (Computadoras, Celulares, Consolas, Televisores, Audio)

El usuario podra añadir productos a un carrito para posteriormente adquirirlo. Tambien podra modificar sus datos de usuario (Nombre, Apellido, Domicilio, Telefono, Email) para simular el envio del pedido. 

Se toma como inspiracion los sitios de Fravega, Garbarino, Compumundo y MercadoLibre

----

### Mock & Base de Datos

Podremos encontrar una carpeta llamada mock dentro del proyecto.

Esa misma carpeta y los .json que la contienen, se las utilizaba en versiones anteriores del proyecto para una lectura de los datos de los productos y categorias correspondientes.

Actualmente utilizamos el cloud de Firebase de Google y generemos una base de datos en Firestore.

Dentro de la base de datos presentamos 3 colecciones:

- **Collection productos**
Cada elemento de la coleccion presenta la siguiente estructura:
    - *categoria*
    Contiene el nombre de la categoria correspondiente

    - *descripcion*
    Texto descriptivo del producto

    - *image_url*
    Url de la Imagen principal del producto

    - *image_url2*
    Url de la Imagen secundaria del producto 

    - *name*
    Nombre del producto

    - *price*
    Precio del producto

    - *specs_detalle*
    Contiene un array de 3 elementos en donde cada elemento contiene una breve caracteristica que presenta cada producto.

    - *specs_name*
    Contiene un array de 3 elementos en donde cada elemento contiene el nombre de la caracteristica que presenta cada producto. El indice del elemento esta asociado a *specs_detalle* por lo tanto deben contener el mismo tamaño

    - *stock*
    Cantidad de stock disponible del producto

- **Collection usuarios**
Solo contiene un elemento y es el principal. Se lo utiliza por si el usuario desea modificar sus datos. Presenta la siguiente estructura: 
    - *apellido*
    Apellido completo del usuario

    - *nombre*
    Nombre completo del usuario

    - *mail*
    Correo electronico del usuario

    - *domicilio*
    Domicilio completo del usuario

    - *telefono*
    Telefono personal o celular del usuario

- **Collection ventas**
Pueden contener varios elementos. Aqui se almacenan todas las ventas registradas por el usuario. Presenta la siguiente estructura: 
    - *comprador*
    Es un map del Datos del comprador

    - *date*
    Fecha del compra

    - *items*
    Informacion de productos adquiridos

    - *total*
    Precio total de la venta

---

### Componentes


#### CartWidget
Se encarga de renderizar el icono del carrito dentro del navbar y ademas muestra la cantidad de productos actuales que hay dentro del carrito.

#### Navbar
Tiene cargadas las categorias de los productos. Renderiza el navbar y se encarga de dar funciones a los botones para ver las distintas rutas. 

#### CartView
Muestra la pantalla del carrito. Visualizamos una tabla con los productos del carrito. En caso de que no haya productos, mostrara una pantalla de carrito vacio. Luego si finalizamos la compra, nos mostrara un pantalla de compra exitosa. 

#### DataUser
Muestra la pantalla de los datos del usuario. Alli el usuario puede modificar sus datos de usuario y luego se genera una actualizacion en la coleccion Usuarios dentro de la base de datos de Firestore. 

#### Item
Muestra la vista minimizada de un item para la pantalla de una categoria. La misma contiene una imagen del producto, titulo, precio y ademas unos breves detalles en caso de que el usuario quiera ver. 

#### ItemCount
Este componente se encarga de renderizar una interfaz con botones, el cual nos permite añadir al carrito una cierta cantidad de un producto. Se controla el stock antes de añadir productos de mas. 

#### ItemDetail
Muestra una pantalla unicamente con informacion de un producto, su detalle y una descripcion detallada

#### ItemDetailContainer
Trae la informacion de un producto desde la base de datos y la muestra por ItemDetail. 

#### ItemList
Trae los datos de unos productos desde la base de datos y la muestra por Item. La misma se almacena en un array y luego la renderiza para mostrarla en forma de lista.


#### ItemListContainer
Renderiza la pantalla de categoria o bien puede mostrar la pantalla principal junto con un saludo.

---
## Context

#### CartContext
Se lo utiliza para la funcionalidad del carrito. Tiene funciones de manipulacion del carrito
Podemos añadir un producto al carrito, borrar un producto especifico o bien limpiar el carrito. Tambien podemos controlar si el producto esta dentro del carrito

#### UserContext

Se lo utiliza para dar efecto de actualizacion en el nombre del usuario dentro del navbar. Al cambiar el nombre desde la pantalla user, el mismo cambio se deberia reflejarse en el navbar. 

----
## Arbol de Componentes

### App.js

:arrow_right: Navbar
:arrow_right: :arrow_right: CartWidget
:arrow_right: ItemListContainer
:arrow_right: ItemDetailContainer
:arrow_right: Cart
:arrow_right: DataUser


### ItemListContainer
:arrow_right: ItemList
:arrow_right: :arrow_right: Item

### ItemDetailContainer
:arrow_right: ItemDetail
:arrow_right: :arrow_right: ItemCount

----
## Deploy
Se realizo el deploy en Netlify
Puede acceder a la app a traves de este link 
https://inspiring-kitsune-6371af.netlify.app/



