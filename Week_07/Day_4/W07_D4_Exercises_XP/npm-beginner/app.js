/*
Exercise 6: Simple NPM Package Usage
Instructions
    Create a directory named npm-beginner.
    Inside the npm-beginner directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
    Install the chalk package, which provides easy coloring for terminal output, by running npm install chalk in the terminal.
    Create a file named app.js inside the npm-beginner directory.
    In app.js, require the chalk package and use it to color and style text in the terminal.
    Write a simple script that uses chalk to print a colorful message.
    Run app.js using Node.js and observe the colorful output in the terminal.
*/

import chalk from 'chalk';

const log = console.log;

log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.red('-'.repeat(20)));

log(chalk.blue.bgRed.bold('Hello world!'));

log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
log(chalk.red.bgGreen('-'.repeat(20)));

log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(chalk.bgWhiteBright(`
              
    CPU: ${chalk.red('90%  ')    }
    RAM: ${chalk.green('40%  ')  }
    DISK: ${chalk.yellow('70% ')}
              `));

log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

log(error('Error!'));
log(warning('Warning!'));

const name = 'Sindre';
log(chalk.green('Hello %s'), name);

log(chalk.yellow('-'.repeat(20)));