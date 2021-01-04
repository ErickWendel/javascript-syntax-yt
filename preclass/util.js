class Util {
    static #defaultFormat = new Intl.NumberFormat("pt-br", { currency: 'BRL', style: "currency" })
    static formatCurrency(value) {
        return this.#defaultFormat.format(value)
    }

    static unFormatCurrency(value) {
        
        const onlyValues = value.replace(/^R\$\s(\d+).(\d+),(\d+)$/, '$1$2.$3')
        
        return parseFloat(onlyValues)
    }
}

module.exports = Util