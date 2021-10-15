const discounts = require("./2-codes-availables")

const applyDiscount = (discount, product) => {
    if ( i = discounts.find((e)=> e.code === discount) ) {
        return product.value * (100 - parseInt(i.discount)) / 100
    }
    return product.value
}

module.exports = applyDiscount