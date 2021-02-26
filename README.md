# Klaxoon Bookmark

Klaxoon Bookmark is a small app to bookmark media from Flickr or Vimeo

## Prerequisites

[npm](https://www.npmjs.com/get-npm) | [yarn](https://classic.yarnpkg.com/en/docs/install/) and node installed on your machine

## Installation

In a terminal, run the command

```bash
npm install
```

OR

```bash
yarn
```

## Start to bookmark

### Backend

A really small backend has been developped, **data are not persisted.**

_You can create **.env** on /server/.env to define the PORT_

/server/.env

```bash
PORT=5000
```

In a terminal, run the command

```bash
server:build
server:start
```

The backend is now running.

### Frontend

In a terminal, run the command

```bash
client:start
```

Now, the project in development mode has been start. Go to http://localhost:8080 to see it. Enjoy !
