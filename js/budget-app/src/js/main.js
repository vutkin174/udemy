let beginButton = document.querySelector('#start'),
    budgetVal = document.getElementsByClassName('budget-value')[0],
    dayBudgetVal = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesVal = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesVal = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeVal = document.getElementsByClassName('income-value')[0],
    monthSavingsVal = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsVal = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesButton = document.getElementsByTagName('button')[0],
    optionalExpensesButton = document.getElementsByTagName('button')[1],
    countButton = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumVal = document.querySelector('.choose-sum'),
    percentVal = document.querySelector('.choose-percent'),
    yearVal = document.querySelector('.year-value'),
    monthVal = document.querySelector('.month-value'),
    dayVal = document.querySelector('.day-value');
    //console.log(monthSavingsVal);

let money, time;


beginButton.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetVal.textContent = money;

    yearVal.value = new Date(Date.parse(time)).getFullYear();
    
    monthVal.value = new Date(Date.parse(time)).getMonth() + 1;
    dayVal.value = new Date(Date.parse(time)).getDate();

});
expensesButton.addEventListener('click', function () {
    let sum = 0;
    for (var i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesVal.textContent = sum;
});

optionalExpensesButton.addEventListener('click', function() {
    for (var i = 0; i < optionalExpensesItem.length; i++) {
        var opt = optionalExpensesItem[i].value;
    
        appData.optionalExpenses[i] = opt;
        
        optionalExpensesVal.textContent += +appData.optionalExpenses[i] + ' ';
        
        }
    
});

countButton.addEventListener('click', function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    
    dayBudgetVal.textContent = appData.moneyPerDay;


    if (appData.moneyPerDay < 100) {
        levelValue.textContent =  "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
        levelValue.textContent = "Высокий уровень достатка";
    
    } else {
        dayBudgetVal.textContent = "Произошла ошибка";
    }
   
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeVal.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
   if (appData.savings == true) {
       appData.savings = false;
   } else {
       appData.savings = true;
   }
});
sumVal.addEventListener('input', function() {
    if (appData.savings == true) {
     let sum = +sumVal.value,
         percent = +percentVal.value;

    appData.monthIncome = ((sum / 100) / 12) * percent;
    
    appData.yearIncome = sum / 100 * percent;
    monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
    yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
   }
   
});

percentVal.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumVal.value,
            percent = +percentVal.value;

    appData.monthIncome = ((sum / 100) / 12) * percent;
    appData.yearIncome = sum / 100 * percent;
    monthSavingsVal.textContent = appData.monthIncome.toFixed(1);
    yearSavingsVal.textContent = appData.yearIncome.toFixed(1);
 
    }
    
 });

var appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false

    
}

//console.log(appData);
