/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global object binding - when in global scope this will be the whole window / console object
 * 2. Implicit - calling a function from an object, accessing this inside that object
 * 3. New binding - creates an object, this either sets a hard coded this or accepts input
 * 4. Explicit - Using call or apply methods and this is automatically applied
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function sayAge(age) {
    console.log(this)
    return age
}
console.log(sayAge(29))

// Principle 2
// code example for Implicit Binding
let person = {
    name: 'Andrew',
    city: 'Phoenix',
    greeting() {
        return `Hi I'm ${this.name} from ${this.city}!`
    }
}
console.log(person.greeting())

// Principle 3
// code example for New Binding
function TeslaBuilder(model, price) {
    this.model = model
    this.price = price
    this.summary = function () {
        console.log(`The Tesla ${model} costs: $${price}`)
    }
}
const modelS = new TeslaBuilder('Model S', 68750)
const model3 = new TeslaBuilder('Model 3', 31450)
const modelX = new TeslaBuilder('Model X', 73950)
const modelY = new TeslaBuilder('Model Y', 43700)
modelS.summary()
model3.summary()
modelX.summary()
modelY.summary()

// Principle 4
// code example for Explicit Binding
function Employee(attributes) {
    this.name = attributes.name
    this.id = attributes.id
    this.department = attributes.department
    this.details = function () {
        return `Employee: ${this.name} ID: ${this.id} Works in: ${this.department}`
    }
}
const andrew = new Employee({
    name: 'Andrew',
    id: 18356,
    department: 'Accounting'
})

const ruby = new Employee({
    name: 'Ruby',
    id: 20463,
    department: 'Engineering'
})

console.log(andrew.details())
// when using call "this" is explicitly defined
console.log(andrew.details.call(ruby))