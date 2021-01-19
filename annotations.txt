EntityBase 
    all
Employee 
     return Intl.NumberFormat("pt-br",
            { currency: 'BRL', style: "currency" }
    ).format(this.#grossPay)

index.js 
    import Employee
 s   const employee = new Employee({
        name: 'test',
    })
    console.log('grossPay', employee.grossPay)

util.js
    formatCurrency
Employee
    change grossPay
    add netPay
index.js
    console.log('netPay', employee.netPay)
test 
    all employee

manager.js 
    all 
util 
    unFormat 
manager.js 
    add unFormat

index.js 
    all manager 






https://stackoverflow.com/a/65568607/4087199