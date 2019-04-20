# Chrome Extension Setup w/ Webpack and React

### Purpose
This repository is used as a basic installation for Webpack, React, and
other useful dependencies to be packed and loaded as a Chrome Extension.

### Guide
If you are viewing this in Chrome, follow the steps below to display
the extension in dev mode within your browser:
- Clone the repository
```
git clone https://github.com/piercefrawley/chrome-extension-util
- Open and install
```
cd chrome-extension-util
yarn install
yarn start
```
- Navigate to the [manage extensions page](chrome://extensions/)
- Select 'Load Unpacked' >> #{path_to_build_folder}
- Open an empty tab in Chrome and view the app
