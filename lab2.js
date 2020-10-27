function calculateCost()
{
    //determine how many books were taken
    var book = parseInt(prompt("How many books did you take out?"));
    //how many days were books out for
    var bookDays = parseInt(prompt("For how long (in days) have you had the books?"));
    //determine how many DVDs were taken
    var dvd = parseInt(prompt("How many DVDs did you take out?"));
    // how many days were DVDs out for
    var dvdDays = parseInt(prompt("For how long (in days) have you had the books?"));

    //books cost $0.25 per day
    //determine the total cost of the books by multiplying the price of books by the days taken out, and then multiplying by amount of books
    var bookCost = (0.25 * bookDays) * book;
    //DVDs cost $0.50 per day
    //determine the total cost of the DVDs by multiplying the price of dvds by the days taken out, and then multiplying by amount of books
    var dvdCost = (0.50 * dvdDays) * dvd;
    //add both previous amounts to find grand total
    var gTotal = bookCost + dvdCost;

    //output total cost of books and DVDs
    alert(`The total cost of your Books and DVDs is $${gTotal.toFixed(2)}`);
}

function calculatePizza()
{
    //determine how many topping you and your coworkers want on the pizza
    var topAmt = parseInt(prompt("How many toppings are on the pizza?"));
    //determine how many people are splitting the cost of the pizza
    var ppl = parseInt(prompt("How many people will the price be split between?"));

    //initial price of pizza is 15.00 and each topping is $1.25 each
    //determine the total cost of the pizza + the toppings
    var pizzaPrice = 15.00 + (topAmt * 1.25);
    //divide pizzaPrice by the amount of people paying
    var splitPrice = pizzaPrice / ppl;

    //output the cost each person will have to pay for the pizza
    alert(`The total cost of the pizza for each person will be $${splitPrice.toFixed(2)}`);
}