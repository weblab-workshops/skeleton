# How to code a webapp with this skeleton

## Initial setup

All teammates will need (explained in weblab.is/hw0)

- A bash console (on Mac or Linux, this is Terminal. On Windows, we recommend Git Bash)
- NodeJS version 18. If it is installed correctly, typing "node --version" should give v18.13.0 and "npm --version" should give 8.19.3, or higher.
- Visual Studio Code (or another code editor)
- the Prettier VSCode extension

Also, all of you will need to go through the MongoDB Atlas setup (https://bit.ly/mongo-setup).

Additionally for authentication, one of you will need to obtain a CLIENT_ID, instructions are at https://bit.ly/gauth-mit.

## Downloading these files

First, you probably have a team repository somewhere (the link looks like: https://github.com/weblab-class/teammate1-teammate2-teammate3). You each should clone this (empty) repository by navigating to where you want your folder to be (**NOT in catbook**) and typing: git clone https://github.com/weblab-class/teammate1-teammate2-teammate3.git <-- with the correct link.

Then, one of your team members will need to do the following:

First on GitHub, download the skeleton (this repository) as a zip file, by clicking Code -> Download as ZIP. (Do not clone it, since this will download extra files, like .git, which will lead to GitHub being confused).

Then, drag over all of the files in this skeleton into your team's folder. **Make sure to also drag over the hidden files!** To see these hidden files, navigate to the skeleton in Finder/File Explorer and press command+shift+period (mac) or View > Show > Hidden items (windows).

The files/folders you must drag over are:

- .gitignore (hidden)
- .npmrc (hidden)
- .prettierrc (hidden)
- client (folder)
- package-lock.json
- package.json
- README.md
- server (folder)
- vite.config.js

Additionally, you must create a .env file in the root directory. See .env.example for an example of what this file should look like.

Then, in terminal, navigate to your teams folder and push all of the files to your team's GitHub repository as usual:

- git add -A
- git commit -m "Skeleton code"
- git push

Now the rest of your teammates can pull all these files with a 'git pull'!

Post on Piazza if you run into any issues

## What you need to change in the skeleton

- Change the Frontend CLIENT_ID (Skeleton.js) to your team's CLIENT_ID (obtain this at https://bit.ly/gauth-mit)
- Change the Server CLIENT_ID to the same CLIENT_ID (auth.js)
- Change the Database SRV (mongoConnectionURL) for Atlas (server.js). You got this in the MongoDB setup. remember to replace <password> and <dbname> (should be no < or > in your SRV) (From: https://bit.ly/mongo-setup)
- Change the Database Name for MongoDB to whatever you put in the SRV to replace <dbname> (server.js)
- (Optional) Add a favicon to your website at the path client/dist/favicon.ico
- (Optional) Update website title in client/dist/index.html
- (Optional) Update this README file ;)
- (Optional) Update the package.json file with your app name :) (line 2)

## How to run this skeleton

First, 'npm install'
Then open two separate terminals, and 'npm run dev' in the first, and 'npm start' in the second.
Then open http://localhost:5173

<!-- ## How to go from this skeleton to your actual app

Check out this [How to Get Started Guide](http://weblab.is/get-started) -->

## Socket stuff

Note: we'll be getting to this in lecture in week 2, so don't worry if you don't know it yet

- If you're not using realtime updating or don't need server->client communication, you can remove socket entirely! (server-socket.js, client-socket.js, and anything that imports them)
- If you are using sockets, consider what you want to do with the FIXME in server-socket.js

## Edit at your own risk

the following files students do not need to edit. feel free to read them if you would like.

```
client/src/utilities.js
client/src/client-socket.js
server/validator.js
server/server-socket.js
.npmrc
.prettierrc
package-lock.json
vite.config.js
```

## Good luck on your project :)
