const EntityBase = require("./entityBase")
const Util = require("./util")

class Employee extends EntityBase {
    static #TAXES_PERCENTUAL = 0.2
    #grossPay = 5000.40

    get grossPay() {
        return Util.formatCurrency(this.#grossPay)
    }

    get netPay() {
        return Util.formatCurrency(this.#grossPay - (this.#grossPay * Employee.#TAXES_PERCENTUAL))
    }

}

module.exports = Employee