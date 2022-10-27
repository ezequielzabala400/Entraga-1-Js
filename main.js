


const Pizzas = [
    {
        id: 1,
        nombre: 'Pizza margarita',
        ingredientes: ['Queso', ' Salsa de tomate', ' Albahaca', ' Orégano'],
        precio: 875
    },
    {
        id: 2,
        nombre: 'Pizza cuatro quesos',
        ingredientes: ['Mozzarella', ' Gorgonzola', ' Parmesano', ' Fontina'],
        precio: 1500
    },{
        id: 3,
        nombre: 'Pizza Hawaiana',
        ingredientes: ['Ananá', ' Mozzarrella', ' Jamón', ' Tomate'],
        precio: 2100
    },{
        id: 4,
        nombre: 'Pizza Napolitana',
        ingredientes: ['Salsa de tomate', ' Queso mozzarella', ' Anchoas', ' Orégano', ' Alcaparras', ' Aceite de oliva'],
        precio: 570
    },{
        id: 5,
        nombre: 'Pizza Carbonara',
        ingredientes: ['Huevo', ' Queso Parmesano',' Sal', ' Pimienta', ' Cebolla', ' Bacón', ' Queso Rallado'],
        precio: 450
    },{
        id: 6,
        nombre: 'Pizza Barbacoa',
        ingredientes: ['Salsa Barbacoa', ' cebolla', ' Morrón', ' Carne Picada', ' Bacón', ' Mozzarella', ' Parmesano'],
        precio: 900
    }
]

// Punto A
const idImpar = Pizzas.filter((pizza) => {
    if (pizza.id % 2 !== 0){
        console.log(`la pizza ${pizza.nombre} tiene un ID impar`)
    }
})

console.log('')
//Punto B
const pizzaMenosDe600 = Pizzas.some((pizza) =>{
    if(pizza.precio < 600){
        console.log(`Hay 1 o más pizzas que valen menos de 600`)
    }
})

console.log('')
//Punto C
const nombreDePizzasYPrecio = Pizzas.forEach((pizza) =>{
    console.log(`La ${pizza.nombre} vale ${pizza.precio}`)
})

console.log('')
//Punto D

const ingredientesDePizzas = Pizzas.forEach((pizza) => {
    console.log(`La ${pizza.nombre} tiene los siguientes ingredientes: ${pizza.ingredientes}`)
})