## sc-remote-installer

![Demo gif](https://media.giphy.com/media/jReftFvqjI7z8uNQGG/giphy.gif)

A shortcut that you can install the shortcut anywhere without iCloud link!

So that you can install your local shortcut by simple http server!

[iCloud link](https://www.icloud.com/shortcuts/5ae81f12dfb0480db10946cfb019bfe8)

### Build

```sh
$ yarn build
```
And the shortcut file might be the `dist` folder


Currently, this shortcut could not be implement using `shortcut-js`, to note the logic of this shortcu I put the reversed JSON of the `remote-installer` temporary until `shortcut-js` support `Save File`.
