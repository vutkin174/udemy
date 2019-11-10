"use strict";

var money = prompt('Ваш бюджет на месяц?');
var time = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
    budget: money,
    timeData: time,
    expenses: {
        articelMonth: prompt('Введите обязательную статью расходов в этом месяце', ''),
        howMatch: prompt('Во сколько обойдется?', '')
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
//console.log(budget);
var budgetDay = 'Ваш бюджет на 1 день' + money / 30;
alert(budgetDay);