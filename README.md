# ElectroMundo

Proyecto sobre un ecommerce de productos electronicos estilo Fravega, Garbarino, etc

El sitio se dedicara a exhibir 5 categorias de productos (Computadoras, Celulares, Consolas, Televisores, Audio)

## Componentes

### CartWidget
Su unica funcion por el momento es renderizar el icono del carrito

### Navbar
Tiene cargadas las categorias de los productos. Renderiza el navbar y se encarga de dar funciones a los botones para ver las distintas rutas. 

### CartView
Mostraria la pantalla del carrito. Por el momento muestra un cartel de carrito vacio. Todavia no tiene funcionalidad

### Item
Muestra la vista de un item para una pantalla categoria. La misma contiene una imagen del producto, titulo, precio y ademas unos breves detalles en caso de que el usuario quiera ver. 

### ItemCount
Este componente se encarga de mostrar una pequeña interfaz de botonoes para agregar un producto al carrito, ademas validar de añadir productos en funcion del stock disponible

### ItemDetail
Muestra una pantalla unicamente con informacion de un producto, su detalle, su descripcion detallada y unas caracteristicas tecnicas.

### ItemDetailContainer
Carga la informacion de un productos desde el mock y la muestra por ItemDetail. Pero antes de mostrar la informacion nos muestra un loader de 2 segundos. Simulando un delay de servidor

### ItemList
Toma un array de productos y muestra cada informacion del producto en forma de card utilizando Item

### ItemListContainer
Carga informacion de todos los productos desde el mock. En base a la categoria que el usuario maneja desde navbar. Mostrara la informacion filtrada y luego procedera a renderizarla por ItemList. Pero antes de mostrar la informacion nos muestra un loader de 2 segundos. Simulando un delay de servidor

## Arbol de Componentes

App.js
    -> ItenListContainer
        -> ItemList
            -> Item
    -> ItemDetailContainer
        -> ItemDetail
    -> Navbar
        -> CartView