const applyDiscount = require('./1-intro')

const code_1 = "522468"
const code_2 = "oster10"
const code_3 = "cyberentel"
const code_4 = "estenoexsite"
const producto = {
    'value': '27000',
    'name': 'Atención Psicológica'
}

console.log(`El producto ${producto.name} tiene un valor de $${producto.value}.
    Al aplicar el descuento, el valor final es de $${applyDiscount(code_1, producto)}
`)
console.log(`El producto ${producto.name} tiene un valor de $${producto.value}.
    Al aplicar el descuento, el valor final es de $${applyDiscount(code_2, producto)}
`)
console.log(`El producto ${producto.name} tiene un valor de $${producto.value}.
    Al aplicar el descuento, el valor final es de $${applyDiscount(code_3, producto)}
`)
console.log(`El producto ${producto.name} tiene un valor de $${producto.value}.
    Al aplicar el descuento, el valor final es de $${applyDiscount(code_4, producto)}
`)