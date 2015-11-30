# Angular Boot Camp - Learning Materials

http://angularbootcamp.com/

## "Learn" - the first part of the class

This is a standalone, ready to use set of files, sufficient for the first portion of the class.
The only tools truly necessary for this portion are a text editor and a Web server.
See the readme file inside for instructions on how to launch a Web server,
or use any Web server you have handy.

## Development Web Server Needed

You need to serve these files via a Web server; for certain exercises,
it will not work acceptably to load them directly from "file" URLs.
You might already have a Web server on your machine that can be used,
or your IDE might contain a Web server.

**Important**: Serve the "learn" directory as your "web root".
You will not need to restart your Web server as we move from one step to the next,
and each example will be able to see the shared library files and data files.

## Recommended: Download and install Node

Here's the most recommended approach, because it is more compatible with how single-page-app development
is typically done as projects grow.

https://nodejs.org/en/

Installers are available therefore Windows and Mac;
on Linux you can probably obtain it using your package manager easily.

Node should include NPM, it's package manager. Use that to install live-server,
a very convenient development Web server.

```
npm install -g live-server
```

Navigate to the Learn directory (cd Learn), then run the server:

```
live-server
```

Live server conveniently includes "live reload" in the box.
It will automatically inject pages it serves with a bit of JavaScript to access a web socket
to automatically reload the page from the files change.
This means you will not have to click refresh in the browser.

This is a very minimal use of Node/NPM; in later work,
we will see more of how to use it effectively and idiomatically in an Angular project.

## Recommended: Visual Studio Code

As of late 2015, Visual Studio Code appears to have the most complete developer
assistance. This uses TypeScript d.ts files, even though AngularJS 1.x is not
written in TypeScript and neither are any of these examples.

## Optional: Karma

Some steps provide a few opportunities to introduce unit testing with Karma.
Karma can be installed (if desired) like so:

```
npm install -g karma karma-jasmine karma-chrome-launcher
```
