# SVG Logo Maker
This is a Node.js command-line application that generates an SVG file of a logo based on user input. The logo consists of a text and a shape that can be one of the following: circle, triangle, or square. The user can also choose the colors of the text and the shape by entering a color keyword or a hexadecimal number.

## Installation
To install the dependencies, run the following command:

npm install

## Usage
To start the application, run the following command:

node index.js

The application will prompt the user for the following information:

Up to three characters for the text of the logo:
The color of the text (keyword or hexadecimal):
The shape of the logo (circle, triangle, or square):
The color of the shape (keyword or hexadecimal):

After the user enters all the information, the application will generate an SVG file named logo.svg in the same directory as the index.js file. The application will also print the message "Generated logo.svg" in the command line.

To view the logo, open the logo.svg file in a browser.

## Examples
Here are some examples of valid inputs:

Enter up to three characters: ABC
Enter the text color (keyword or hexadecimal): blue
Choose a shape: circle
Enter the shape color (keyword or hexadecimal): #FFA500
Generated logo.svg

Enter up to three characters: X
Enter the text color (keyword or hexadecimal): #00FF00
Choose a shape: triangle
Enter the shape color (keyword or hexadecimal): green
Generated logo.svg
