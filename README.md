# Chrome Extension Boilerplate

Lean boilerplate for building a Chrome extension with ES6 and running tests in node.

## Features

* Lean, no gulp, no grunt, no phantomjs.
* Very simple, just install and run the script commands in package.json to start writing code
* Run tests in node without a browser using jsdom (for a browser mock) and sinon-chrome for mocking the Chrome API.

# Getting started

* Run ```npm install``` to download dependencies.

## Development

Edit ```manifest.json``` with the details of your project. Update the icons in ```src/assets```.

* Run ```npm run watch```, this will autocompile files on changes.
* Run ```npm run build```, this will compile the files once.
* Run ```npm run build:debug```, this will output error details if it runs into problems while compiling.

The build comes with ```jQuery``` and ```lodash``` as well as support for react and ```.jsx``` files. You can remove these or add more third party scripts by installing via npm.

Add new entries to webpack.config.js and start writing your code in ES6 or commonjs in the src/ folder.

* In the Chrome extensions page, click ```Load unpacked extension...``` and select the ```build``` directory.

## Tests

Add new test file entries to webpack.config.test.js. Then require the compiled file in the test/run.js file.

* Run ```npm run watch:test```, this will autocompile test files on changes
* Run ```npm run tests```, run tests in node

## Upload

* Run ```zip -r my_chrome_extension_name_here.zip build``` and upload in the Chrome dev console

## License

Copyright (c) 2016 Pasha Craydon.

Licensed under the MIT license.
