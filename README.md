# lib3d-blog

## Introduction

POC to experiment grunt as the assets management automation tool, combined with:
* requirejs optimizer,
* less preprocessor,
* automatic sprite generation,
* application cache manifest,
* an angular application, 
* an express server with mongoose,
* the whole (except server application) with livereload.

## Installation

### MongoDB

Intall MongoDB. You may need to install Python on Windows for node canvas used by the `spritesmith` (sprite generator).

`mongod` has to be running on localhost:27017.

### Node and npm

This is tested against at least node v0.10.28.

Run:

```
npm install -g grunt grunt-cli bower
npm install --link
bower install
```

## Start

### Server

Run the server: `npm start`

### Grunt

Run the default grunt task: `grunt`.

The default task contains develoment compilations (same as `grunt development`) and watchers:

* on the Gruntfile itself to reconfigure watchers,
* on js assets to rerun require js optimization,
* on less files to rerun less compilation,
* on images in watched sprite folder to rebuild the sprite png and less file an rerun less compilation,
* on views to rebuild the application cache manifest.

`grunt development` and `grunt production` are single-run commands to build assets in development and production environments.

Connect to `http://localhost:3000`.
