const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer0) => {
  rl.question('What is your favorite dessert? ', (answer1) => {
    rl.question('What animal would you like to keep as a pet? ', (answer2) => {
      rl.question('Which movie have you watched the most? ', (answer3) => {
        rl.question('How many times did you watch that movie? (One word). ', (answer4) => {
          rl.question('What is your favorite hobby? ', (answer5) => {
            rl.question('What is your favorite programming language? ', (answer6) => {
              rl.question('On a scale of 1 to 10, how are you feeling today? ', (answer7 => {
                console.log(`My name is ${answer0}! My favorite dessert is ${answer1}, and if I could have any animal for a pet, I'd have a ${answer2}. I've watched ${answer3} ${answer4} times.` + 
                ` My favorite hobby is ${answer5} and my favorite programming language is ${answer6}. In terms of mood, today is a ${answer7} out of 10 day!`);
                rl.close();

              }));
            });
          });
        });
      });
    });
  });
});

