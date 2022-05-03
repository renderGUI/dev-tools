<p align="center">
<img src="images/dt-logo.png" alt="logo for devtools application" height="140"/>
<h1 align="center">DevTools</h1>
<p align="center">CLI-based application with various development and productivity tools</p>
</p>

## Demo

![gif of application](/images/demo.gif)

## About

As a front-end developer, my web browser bookmarks are constantly cluttered with links to several workflow applications (e.g. font assets, image compressors, color palettes).  DevTools fixes this issue by bundling several productivity tools into one, simple-to-use CLI application.

Originally, DevTools was intended to be nothing more than a simple text file with references to several useful tools for front-end developers.  Instead, I decided to create every tool from scratch and implement them as executable commands.  Built entirely with JavaScript on Node.js, DevTools offers a simple and quick way to use various tools -- all from the command line!

DevTool features several tools, including:
- random color generator
- decimal-to-binary converter
- countdown timer
- digital clock

## Getting Started

### Prerequisites

Make sure you have all the following prerequisites on your machine before using this application:

- **Node.js** - Node.js is a server-side runtime environment that lets you run JavaScript outside a web browser, and can be downloaded [here](https://nodejs.org/en/).
- **npm** - By default, npm comes pre-installed with Node.js.  If you already have Node.js, then chances are, you probably also have npm.  To check if npm is installed on your machine, type this into the command line:
```sh
$ npm -v
```
- **Terminal Emulator** - There's many different terminal emulators to choose from, but most machines usually already come with one.  If you use VS Code as an IDE, you can use it's built-in Terminal.

### Installation

1. To get started, grab a copy of DevTools by cloning it to your local machine:
```sh
git clone https://github.com/renderGUI/dev-tools.git
```
2. Install the application dependencies:
```sh
$ npm install
```
3. Run the application:
```sh
$ npm start
```

## Usage

- **RUNNING DEVTOOLS GLOBALLY** - By default, DevTools will only run in the project directory.  In order to execute DevTools from anywhere in the terminal emulator, type this into the command line:
```sh
$ sudo npm link
```
...this will ask for your password since it's a root user command.  Now, DevTools can be executed from anywhere in the terminal emulator by using the `devtools` command.
- **CHOOSING A TOOL** - To navigate through the tools, use the Up/Down arrow keys.  Select a tool by hitting the Return key (Enter on Windows).
- **STOPPING THE APPLICATION** - You can stop the application at any time by hitting Ctrl + C.

## Version History

- **1.0.0**: Initial release.