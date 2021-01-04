class EntityBase {
    #name
    #gender
    #age
    constructor({ name, age, gender }) {

        this.#gender = gender
        this.#age = age
        this.#name = name
    }

    get name() {
        const preffix = this.#gender === "male" ? "Mr." : "Ms."
        return `${preffix} ${this.#name}`
    }

    get birthYear() {
        if (!this.#age) throw new Error('you must define age first!')

        return new Date().getFullYear() - this.#age
    }

    set age(value) {
        this.#age = value
    }

}

module.exports = EntityBase