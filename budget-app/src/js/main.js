let beginButton = document.getElementById('#start'),
    budgetVal = document.getElementsByClassName('budget-value')[0],
    dayBudgetVal = document.getElementsByClassName('daybadget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesVal = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesVal = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeVal = document.getElementsByClassName('income-value')[0],
    monthSavingsVal = document.getElementsByClassName('monthsavings-value')[0].
    yearSavingsVal = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesButton = document.getElementsByTagName('button')[0],
    optionalExpensesButton = document.getElementsByTagName('button')[1],
    countButton = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelector('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumVal = document.querySelector('.choose-sum'),
    percentVal = document.querySelector('.choose-persent'),
    yearVal = document.querySelector('.year-value'),
    monthVal = document.querySelector('.month-value'),
    dayVal = document.querySelector('.day-value');

    let money, time;

function start() {
         money = +prompt('Ваш бюджет на месяц?', '');
         time = prompt('Введите дату в формате YYYY-MM-DD', '');

         while(isNaN(money)||money == ''||money == null) {
            money = +prompt('Ваш бюджет на месяц?', '');
         }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (var i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
                
            if ((typeof(a)) === 'string'&&(typeof(a)) != null&&(typeof(b)) != null &&a != ''&&b != ''&&a.length < 50) {
                    console.log('done');
                    appData.expenses[a] = b;
                } else {
                    i = i - 1;
            }
            
    }
    },
    detectDayBudget: function() {
        appData.moneyPerDay =  (appData.budget / 30).toFixed();
        alert('Ваш бюджет на 1 день' + appData.moneyPerDay);
        },
    detectLevel: function() {
            if (appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("Произошла ошибка");
            }
            },
             checkSavings: function() {
                if (appData.savings == true) {
                    let save = +prompt('Какова сумма накоплений?', ''),
                        persent = +prompt('Под какой процент?');
            
                        appData.monthIncome = save/100/12*persent;
                        alert('Доход в месяц с Вашего депозита: ' + appData.monthIncome);
                }
            },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    } ,
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();
    }      


}
