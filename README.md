# Komenteo

## Dependencies

### Install yarn
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
 
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
 
$ sudo apt-get update

$ sudo apt install yarn

### Install latest nodejs

$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

$ sudo apt-get install -y nodejs

$ node -v
v10.16.3

### Install project dependencies

At the root of the repository

$ yarn install

## Run site locally

For now, you have remove the "homepage" entry from ./package.json in order to run the site locally (this var is
otherwise used during yarn deploy).
For example rename the key "_homepage" (add a underscore). Then run

$ yarn start


## Deploy to github page
$ yarn deploy

Then visit https://komenteo.github.io/website/
