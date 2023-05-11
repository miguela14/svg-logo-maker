const inquirer = require('inquirer');
const fs = require('fs');

const prompts = [
  {
    name: 'text',
    message: 'Enter up to three characters:',
    validate: input => input.length <= 3,
  },
  {
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
];

function getShapeString(shape, color) {
  switch (shape) {
    case 'circle':
      return `<circle cx="150" cy="100" r="50" fill="${color}" />`;
    case 'triangle':
      return `<polygon points="75,25 175,25 125,150" fill="${color}" />`;
    case 'square':
      return `<rect x="75" y="25" width="150" height="150" fill="${color}" />`;
    default:
      console.error(`Invalid shape: ${shape}`);
      return '';
  }
}

function generateLogo(text, textColor, shape, shapeColor) {
  const svgContent = `
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      ${getShapeString(shape, shapeColor)}
      <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="80" font-weight="bold">
        ${text}
      </text>
    </svg>
  `;

  fs.writeFile(__dirname + '/logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

inquirer.prompt(prompts).then(answers => {
  generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
});