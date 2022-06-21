let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
//Ask for and calculate weekly expenses
for(let expenseQuestion = 0; expenseQuestion < weeklyExpenseQuestions.length; expenseQuestion++) {
let answer = parseFloat(window.prompt(weeklyExpenseQuestions[expenseQuestion]));
console.log(answer);
weeklyExpenses = weeklyExpenses + answer
}

//Ask for and calculate monthly expenses
for(let expenseQuestion = 0; expenseQuestion < monthlyExpenseQuestions.length; expenseQuestion++) {
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[expenseQuestion]));
    console.log(answer);
    monthlyExpenses = monthlyExpenses + answer
}


//Ask for and calculate annual expenses
for(let expenseQuestion = 0; expenseQuestion < annualExpenseQuestions.length; expenseQuestion++) {
        let answer = parseFloat(window.prompt(annualExpenseQuestions[expenseQuestion]));
        console.log(answer);
        annualExpenses = annualExpenses + answer
}