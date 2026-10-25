const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getCost(type) {
  let cost = 0;
  switch (type) {
    case '1': 
      cost = 300; 
      break;
    case '2': 
      cost = 500; 
      break;
    case '3': 
      cost = 900; 
      break;
  }
  return cost;
}

function calcTickets(money, ticketPrice) {
  let amount = 0;
  while (money >= ticketPrice) {
    money = money - ticketPrice;
    amount = amount + 1;
  }
  return amount;
}

function taskOne(type, money) {
  const cost = getCost(type);
  if (cost === 0) {
    console.log('неизвестная категория');
  } else {
    let total = calcTickets(Number(money), cost);
    console.log('Категория ' + type + ', билет ' + cost + ' руб., бюджет ' + money + ' руб.: можно купить ' + total + ' шт.');
  }
}

function getDeliveryCost(km, sum) {
  if (sum >= 3000 || km <= 3) {
    return 0;
  } else if (km > 3 && km <= 10) {
    return 200;
  } else {
    return 200 + ((km - 10) * 25);
  }
}

function taskTwo(km, sum) {
  let delivery = getDeliveryCost(Number(km), Number(sum));
  console.log('Расстояние ' + km + ' км, заказ ' + sum + ' руб.: доставка ' + delivery + ' руб.');
}

function taskThree(steps) {
  let count = 0;
  for (let k = 1; k <= steps; k++) {
    if (k === 4) {
      continue;
    }
    if (k > 10) {
      console.log('Дальше лестница не построена');
      break;
    }
    console.log('Ступень ' + k);
    count = count + 1;
  }
  console.log('Всего построено: ' + count);
}

console.log('Выберите задачу:\n1 — билетная касса\n2 — доставка заказа\n3 — лестница');

rl.question('Ваш выбор: ', function (ans) {
  if (ans === '1') {
    rl.question('Категория билета: ', function (t) {
      rl.question('Бюджет: ', function (m) {
        taskOne(t, m);
        rl.close();
      });
    });
  } else if (ans === '2') {
    rl.question('Расстояние: ', function (d) {
      rl.question('Сумма заказа: ', function (s) {
        taskTwo(d, s);
        rl.close();
      });
    });
  } else if (ans === '3') {
    rl.question('Высота лестницы: ', function (h) {
      taskThree(Number(h));
      rl.close();
    });
  } else {
    console.log('такой задачи нет');
    rl.close();
  }
});