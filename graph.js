var fs = require('fs');
const airports = JSON.parse(fs.readFileSync('./airports.json', 'utf8'));

const routes = [
    ['BRU', 'CDG'],
    ['BRU', 'CPH'],
    ['BRU', 'LHR'],
    ['BRU', 'MUC'],
    ['BRU', 'BCN'],
    ['BCN', 'LHR'],
    ['BCN', 'VIE'],
    ['BCN', 'CPH'],
    ['BCN', 'AMS'],
    ['DUS', 'FCO'],
    ['CDG', 'ZHR'],
]

console.log(airports[0].code);