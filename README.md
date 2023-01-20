# Project Skeleton

## What we provide

- Google Auth (Skeleton.js & auth.js)
  - Disclaimer: Auth isn't being taught until the second week.
- Socket Infrastructure (client-socket.js & server-socket.js)
  - Disclaimer: Socket isn't being taught until the second week.
- User Model (auth.js & user.js)

## What you need to change

- Change the font in utilities.css
- Change the Frontend CLIENT_ID for Google Auth (Skeleton.js) (we'll talk about it at the end of week 2)
- Change the Server CLIENT_ID for Google Auth (auth.js) (we'll talk about it at the end of week 2)
- Change the Database SRV for Atlas (server.js)
- Change the Database Name for MongoDB (server.js)
- Add a favicon to your website at the path client/dist/favicon.ico
- Update website title in client/dist/index.html
- Update this README file ;)
- Update the package.json file with your app name :) (line 2)

## Socket stuff

Note: we'll be getting to this in lecture in week 2, so don't worry if you don't know it yet

- If you're not using realtime updating or don't need server->client communication, you can remove socket entirely! (server-socket.js, client-socket.js, and anything that imports them)
- If you are using socket, consider what you want to do with the FIXME in server-socket.js

## How to integrate into your own project

On GitHub download this repository as a zip file, then extract the files into your own repository.
Warning: make sure you copy the hidden files too: .babelrc, .gitignore, .npmrc, .eslintignore, .eslintrc, and .prettierrc

Note that you should create a `.env` file to store your secrets. You should have the mongo srv and session secret there. A session secret is just a secret string so the session library can encrypt session data. See `.env.example`.

## Typescript Instructions

This branch is configured to use Typescript in both the frontend and backend.
In the frontend, if you decide to use TS, you will need to define the Props and State interface for each component.
In the backend, make sure that you include type signatures when needed.

If you want to come use a js server, change the "start" script of package.json to `"start": "nodemon --ignore client/",` instead of
`"TS_NODE_PROJECT='./tsconfig.json' nodemon --watch 'server/**/*.ts' --exec 'ts-node' server/server.ts"`

If you want to modify how TS is compiled, you should modify tsconfig.json.

**Sharing interfaces**

In the shared folder, you can export shared interfaces between the frontend and backend. This is to make get and post requests typesafe. Make sure that the interface is in sync with the mongoose schema! See server/models/User.ts.

**Note**

When installing packages, you will also have to install their type signatures. If the TypeScript compiler
is complaining that some package does not have any type signatures, make sure to do `npm install @types/nameOfPackageHere`. Note that because Heroku deletes all the devDependencies after the build step, make sure to do `npm install dependencyThatTheServerNeeds`. In this setup, you should only include use `npm install somePackage --save-dev` on client-side devDependencies.

## don't touch

the following files students do not need to edit. feel free to read them if you would like.

```
client/src/index.js
client/src/utilities.js
client/src/client-socket.js
server/validator.js
server/server-socket.js
tsconfig.json
.babelrc
.npmrc
.prettierrc
package-lock.json
webpack.config.js
```

## Good luck on your project :)
