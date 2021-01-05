class Util {
    static #defaultFormat = new Intl.NumberFormat("pt-br", { currency: 'BRL', style: "currency" })
    static formatCurrency(value) {
        return this.#defaultFormat.format(value)
    }

    static unFormatCurrency(value) {
        
        const onlyValues = Number(value.replace(/\D/g, '')) / 100
        
        return onlyValues
    }
}

module.exports = Util