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
