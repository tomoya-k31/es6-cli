'use strict'

var rl = require('readline');

class Cli {
  constructor(handler) {
    this.handler = handler;
  }

  run() {
    var rli = rl.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // プロンプト定義
    rli.setPrompt('> ');

    rli.on('line', (line) => {
      if (line) {
        console.log(line);
        rli.prompt();
      } else {
        rli.prompt();
      }

    }).on('close', () => {
      console.log('Have a great day!');
      process.exit(0);

    }).on('SIGINT', () => {
      rli.question('Are you sure you want to exit? (y/n) ', answer => {
        if (answer.match(/^y(es)?$/i)) rli.pause();
      });

    });

    rli.prompt();
  }
}

new Cli().run();
