"use strict";

// TODO - write your code here.

const randomDamage = () => Math.floor(Math.random() * 10 + 1);

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum ? opt2 : opt1;
};

console.log(chooseOption(1, 0));

const attackPlayer = (health) => health - randomDamage();

const logHealth = (player, health) =>
  console.log(`${player} health: ${health}`);

const logDeath = (winner, loser) => console.log(`${winner} defeated ${loser}`);

const isDead = (health) => health <= 0;

const fight = (player1, player2, player1health, player2health) => {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      // remember the difference between = and ===!!!
      player2health = attackPlayer(player2health);
      logHealth(player2, player2health);
      if (isDead(player2health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1health = attackPlayer(player1health);
      logHealth(player1, player1health);
      if (isDead(player1health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
};

fight("Jake", "Dusan", 100, 100);

//extended #1
let getGrade = (number) => {
  if (number >= 90) {
    return "A";
  } else if (number >= 80) {
    return "B";
  } else if (number >= 70) {
    return "C";
  } else if (number >= 60) {
    return "D";
  } else {
    return "You miserable failure!!";
  }
};
console.log(getGrade(40));

//extended #2
const prioritize = (urgent, important) => {
  let options = [
    { option: 1, urgent: true, important: true },
    { option: 2, urgent: true, important: false },
    { option: 3, urgent: false, important: true },
    { option: 4, urgent: false, important: false },
  ];
  for (let i = 0; i < options.length; i++) {
    if (options[i].urgent === urgent && options[i].important === important) {
      return options[i].option;
    }
  }
};
console.log(`The priority level is ${prioritize(true, false)}`);

//Extended #3
const calculatePay = (hours, wage) => {
  if (hours <= 40) {
    let pay = hours * wage;
    console.log(`Your weekly pay comes out to ${pay}.`);
  } else {
    let pay = 40 * wage + (hours - 40) * (wage * 1.5);
    console.log(`Your weekly pay comes out to ${pay}.`);
  }
};
calculatePay(69, 69);
