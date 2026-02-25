// ------------------------------> Chapter 1 <-----------------------------------------
// Q1
// alert("WELCOM TO MY WEBSITE")

// Q2
// alert("Error! Please enter a valid password.")

// Q3
// alert("Welcome to JS Land... \nHappy Coding")

// Q4
// alert("Welcome to JS Land...")
// alert("Happy Coding")

// Q4
// Tried on console

// Q5
// Tried on existing projects

// Q6
// Tried placing script element in differet sections
document.write("<h2>Chapter 1 ✔</h2>")

// -----------------------------> Chapter 2 <------------------------------------------
// Q1
// let username

// Q2
// let myName = "Umair Ali Malik"

// Q3
// let message
// message = "Hello World!"
// alert(message)

// Q4
// let name = "Umair Ali"
// let age = 23
// let occupation = "UI/UX Designer"
// alert(name)
// alert(age)
// alert(occupation)

// Q5
// let food = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(food)

// Q6
// let email = "umairalimalik78@gmail.com"
// alert("My email address is " + email)

// Q7
// let book
// book = "A SMARTER WAY TO LEARN JAVASCRIPT."
// alert("I am trying to learn from the book " + book)

// Q8
// Not learned yet

// Q9
// let design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert(design)
document.write("<h2>Chapter 2 ✔</h2>")

// -------------------------------------> Chapter 3 <-------------------------------------------
// Q1
// let age
// age = 23
// alert("I am " + age + " year old")

// Q2
// let visit_count
// visit_count = 14
// alert("You have visited this site " + visit_count + " times")

// Q3
let birthYear
birthYear = 2002
document.write("My birth year is " + birthYear)
document.write("<br> Data type of my declared variable is " + typeof (birthYear))

// Q4
let site = "umairalimalik.com"
let visitorName = "Umair Ali"
let productTitle = "PS5"
let Quantity = 2
document.write(visitorName + " ordered " + Quantity + " " + productTitle + " on " + site)
document.write("<h2>Chapter 3 ✔</h2>")

// -------------------------------------> Chapter 4 <-------------------------------------------
// Q1
let name = "Umair", age = 23, height = 5.6

// Q2
// Legal variable name
let myName
let $price
let _current_user
let myName1
let UPPERCASE

// Illegal variable name
// let 1stName
// let my-name
// let var
// let user name
// let alert!

// Q3
// Done in HTML
document.write("<h2>Chapter 4 ✔</h2>")

// -------------------------------------> Chapter 5 <-------------------------------------------
// Q1
// Addition
let a = 5, b = 8
let c = a + b
document.write("Sum of " + a + " and " + b + " is " + c)

// Q2
// Subtraction
let d = 23, e = 7
let f = d - e
document.write("<br><br>" + "Subtraction of " + d + " and " + e + " is " + f)

// Multiplication
let g = 11, h = 8
let i = g * h
document.write("<br>" + "Multiplication of " + g + " and " + h + " is " + i)

// Division
let j = 40, k = 10
let l = j / k
document.write("<br>" + "Division of " + j + " and " + k + " is " + l)

// Modulus operator
let m = 10, n = 5
let o = m % n
document.write("<br>" + "Reminder of " + m + " / " + n + " is " + o)

// Q3
let value
document.write("<br><br>" + "Value after variable declaration is " + value)

value = 11
document.write("<br>" + "Initial value: " + value)

value = value + 1
document.write("<br>" + "Value after variable increment is " + value)

value = value + 7
document.write("<br>" + "Value after addition is " + value)

value = value - 1
document.write("<br>" + "Value after variable decrement is " + value)

value = value % 3
document.write("<br>" + "The reminder after dividing with 3 is " + value)

// Q4
let ticketPrice = 600
document.write("<br><br>" + "Total cost to buy 5 tickets of a movie is " + ticketPrice * 5 + "PKR")

// Q5
let tableNumber = 9
document.write("<br><br> <b>Table of 9</b>")
document.write("<br>" + tableNumber + " x 1 = " + tableNumber * 1)
document.write("<br>" + tableNumber + " x 2 = " + tableNumber * 2)
document.write("<br>" + tableNumber + " x 3 = " + tableNumber * 3)
document.write("<br>" + tableNumber + " x 4 = " + tableNumber * 4)
document.write("<br>" + tableNumber + " x 5 = " + tableNumber * 5)
document.write("<br>" + tableNumber + " x 6 = " + tableNumber * 6)
document.write("<br>" + tableNumber + " x 7 = " + tableNumber * 7)
document.write("<br>" + tableNumber + " x 8 = " + tableNumber * 8)
document.write("<br>" + tableNumber + " x 9 = " + tableNumber * 9)
document.write("<br>" + tableNumber + " x 10 = " + tableNumber * 10)

// Q6
document.write("<br><br> <b>The Temperature Converter:</b>")
let celsiusTemp = 36
document.write("<br>" + celsiusTemp + "℃ is " + ((celsiusTemp * 9 / 5) + 32) + "℉")

let fahrenheitTemp = 86
document.write("<br>" + fahrenheitTemp + "℉ is " + ((fahrenheitTemp - 32) * 5 / 9) + "℃")

// Q7
let item1Price = 980, item2Price = 440, item1Quantity = 3, item2Quantity = 4, shippingCharges = 100
document.write("<br><br> <b>Shopping Cart:</b>")
document.write("<br> Price of item 1 is " + item1Price)
document.write("<br> Quantity of item 1 is " + item1Quantity)
document.write("<br> Price of item 2 is " + item2Price)
document.write("<br> Quantity of item 2 is " + item2Quantity)
document.write("<br> Shipping Charges " + shippingCharges)

document.write("<br><br> Total cost of your order is " + ((item1Price * item1Quantity) + (item2Price * item2Quantity) + (shippingCharges)))

// Q8
let totalMarks = 1100, obtainedMarks = 850
document.write("<br><br> <b>Marks Sheet</b>")
document.write("<br> Total Marks: " + totalMarks)
document.write("<br> Obtained Marks: " + obtainedMarks)
document.write("<br> Percentage: " + (obtainedMarks / totalMarks) * 100 + "%")

// Q9
document.write("<br><br> <b>Currency in PKR</b>")
let totalPKR = (10 * 300) + (25 * 70)
document.write("<br> Total Currency in PKR: " + totalPKR)

// Q10
let someValue = 23
console.log("Total is: " + ((someValue + 5) * 10) / 2)

// Q11
let currentYear = 2026
let yearOfBirth = 1998
let currentAge = currentYear - birthYear

document.write("<br><br> <b>Age Calculator</b>");
document.write("<br> Current Year: " + currentYear);
document.write("<br> Birth Year: " + birthYear);
document.write("<br> Your Age is: " + currentAge);

// Q12
let radius = 11

document.write("<br><br> <b>The Geometrizer</b>");
document.write("<br> Radius of circle is: " + radius);
document.write("<br> The circumference is: " + 2 * 3.142 * radius);
document.write("<br> The area is: " + 3.142 * (radius * radius));

// Q13
let favSnack = "IceCream", ageNow = 23, maxAge = 70, snacksPerDay = 3
let totalSnacksNeed = (maxAge - ageNow) * 365 * snacksPerDay

document.write("<br><br> <b>The Lifetime Supply Calculator</b>");
document.write("<br> Favourite Snack: " + favSnack);
document.write("<br> Current Age: " + ageNow);
document.write("<br> Estimated Maximum Age: " + maxAge);
document.write("<br> Amount of snacks per day: " + snacksPerDay);
document.write("<br> You will need " + totalSnacksNeed + " chocolate chip to last you until the ripe old age of " + maxAge);

document.write("<h2>Chapter 5 ✔</h2>")

// -------------------------------------> Chapter 6-9 <-------------------------------------------
// Q1
// let currentValue = prompt("Enter a number", 10)
// document.write("Result: ")
// document.write("<br> The value of a is: " + currentValue)
// document.write("<br> .............................")
// document.write("<br> The value of ++a is: " + (++currentValue))
// document.write("<br> Now the value of a is: " + currentValue)
// document.write("<br><br> The value of a++ is: " + (currentValue++))
// document.write("<br> Now the value of a is: " + currentValue)
// document.write("<br><br> The value of --a is: " + (--currentValue))
// document.write("<br> Now the value of a is: " + currentValue)
// document.write("<br><br> The value of a-- is: " + (currentValue--))
// document.write("<br> Now the value of a is: " + currentValue)

// Q2
// let a = 2, b = 1
// let result = --a - --b + ++b + b--
// document.write("a is: " + a)
// document.write("<br> b is: " + b)
// document.write("<br> result is: " + result)

// Q3
// let userName = prompt("Enter your name", "Umair")
// alert("Hello " + userName + "\nwelcome to our website")

// Q5
// let tableNum = prompt("Enter a number to show its multiplication table", 5)
// document.write("<br><br> <b>Table of " + tableNum + "</b>")
// document.write("<br>" + tableNum + " x 1 = " + tableNum * 1)
// document.write("<br>" + tableNum + " x 2 = " + tableNum * 2)
// document.write("<br>" + tableNum + " x 3 = " + tableNum * 3)
// document.write("<br>" + tableNum + " x 4 = " + tableNum * 4)
// document.write("<br>" + tableNum + " x 5 = " + tableNum * 5)
// document.write("<br>" + tableNum + " x 6 = " + tableNum * 6)
// document.write("<br>" + tableNum + " x 7 = " + tableNum * 7)
// document.write("<br>" + tableNum + " x 8 = " + tableNum * 8)
// document.write("<br>" + tableNum + " x 9 = " + tableNum * 9)
// document.write("<br>" + tableNum + " x 10 = " + tableNum * 10)

// Q6
// Not learned yet
document.write("<h2>Chapter 6 ✔</h2>")
document.write("<h2>Chapter 7 ✔</h2>")
document.write("<h2>Chapter 8 ✔</h2>")

// ----------------------------------> Chapter 9-11 <-------------------------------------------
// Q1
// let city = prompt("Enter a city name", "Karachi")
// if (city == "Karachi") {
//     alert("Welcome to the city of lights")
// }

// Q2
// let gender = prompt("Enter your gender")
// if (gender == "male") {
//     alert("Good Morning Sir")
// }
// if (gender == "female") {
//     alert("Good Morning Ma'am")
// }

// Q3
// let trafficSignal = prompt("Enter traffic signal color")
// if (trafficSignal == "red") {
//     alert("Must Stop")
// }
// if (trafficSignal == "yellow") {
//     alert("Ready to Move")
// }
// if (trafficSignal == "green") {
//     alert("Move Now")
// }

// Q4
// let fuel = prompt("Enter remaining fuel in car (in litres)")
// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car")
// }

// Q5
// let p = 4
// if (++p === 5) {
//     alert("given condition for variable p is true")
// }

// let q = 82
// if (q++ === 83) {
//     alert("given condition for variable q is true")
// }

// let r = 12
// if (r++ === 13) {
//     alert("condition 1 is true")
// }
// if (r === 13) {
//     alert("condition 2 is true")
// }
// if (++r < 14) {
//     alert("condition 3 is true")
// }
// if (r === 14) {
//     alert("condition 4 is true")
// }

// let materialCost = 20000
// let laborCost = 2000
// let totalCost = materialCost + laborCost
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals")
// }

// if (true) {
//     alert("True")
// }
// if (false) {
//     alert("False")
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat")
// }

// Q6
// let MathobtainedMarks = prompt("Enter obtained marks in Maths", 88)
// let PhysicsobtainedMarks = prompt("Enter obtained marks in Physics", 90)
// let ChemistryobtainedMarks = prompt("Enter obtained marks in Chemistry", 85)
// let yourTotalMarks = 300
// let yourObtainedMarks = (+MathobtainedMarks) + (+PhysicsobtainedMarks) + (+ChemistryobtainedMarks)
// let percentage = (yourObtainedMarks / yourTotalMarks) * 100
// document.write("<b>Marks Sheet</b>")
// document.write("<br><br> Total Marks: " + yourTotalMarks)
// document.write("<br> Marks Obtained: " + yourObtainedMarks)
// document.write("<br> Percentage: " + percentage + "%")
// if (percentage >= 80) {
//     document.write("<br> Grade: A-one")
//     document.write("<br> Remarks: Excellent")
// }
// else if (percentage >= 70) {
//     document.write("<br> Grade: A")
//     document.write("<br> Remarks: Good")
// }
// else if (percentage >= 60) {
//     document.write("<br> Grade: B")
//     document.write("<br> Remarks: You need to improve")
// }
// else {
//     document.write("<br> Grade: Fail")
//     document.write("<br> Remarks: Sorry")
// }

// Q7
// let secretNumber = 7
// let userGuess = +prompt("Guess the secret number (between 1 and 10)")
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer")
// }
// else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     alert("Close enough to the correct answer")
// }

// Q8
// let number = +prompt("Enter a number to check if it is divisible by 3 or not", 15)
// if (number % 3 === 0) {
//     alert(number + " is divisible by 3")
// }
// else {
//     alert(number + " is not divisible by 3")
// }

// Q9
// let number = +prompt("Enter a number to check if it is even or odd", 10)
// if (number % 2 === 0) {
//     alert(number + " is an even number")
// }else {
//     alert(number + " is an odd number")
// }

// Q10
// let T = +prompt("Enter temperature to check weather", 30)
// if (T > 40) {
//     alert("It is too hot outside.")
// }
// else if (T > 30) {
//     alert("The Weather today is Normal.")
// }
// else if (T > 20) {
//     alert("Today’s Weather is cool.")
// }
// else if (T > 10) {
//     alert("OMG! Today’s weather is so Cool.")
// }

// Q11
// let firstNumber = +prompt("Enter first number", 10)
// let secondNumber = +prompt("Enter second number", 20)
// let operator = prompt("Enter operation to perform (+, -, *, /, %)", "+")
// let result
// if (operator === "+") {
//     result = firstNumber + secondNumber
// }
// else if (operator === "-") {
//     result = firstNumber - secondNumber
// }
// else if (operator === "*") {
//     result = firstNumber * secondNumber
// }
// else if (operator === "/") {
//     result = firstNumber / secondNumber
// }
// else if (operator === "%") {
//     result = firstNumber % secondNumber
// }
// alert("Result: " + result)

document.write("<h2>Chapter 9 ✔</h2>")
document.write("<h2>Chapter 10 ✔</h2>")
document.write("<h2>Chapter 11 ✔</h2>")