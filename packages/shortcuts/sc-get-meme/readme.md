## sc-get-meme

![Demo gif](https://media.giphy.com/media/Up1NilzehsUTjOQNZo/giphy.gif)

A shortcut that you can get random meme by one clicking, I always put it on my homescreen!

[iCloud link](https://www.icloud.com/shortcuts/4908fe7ff41a4a08824230fb3bcaf889)

### Build

```sh
$ yarn build
```
And the shortcut file might be the `dist` folder

Currently, this shortcut could not be implement using `shortcut-js`, to note the logic of this shortcu I put the reversed JSON of the `get-meme` temporary until `shortcut-js` support [`repeat with`](https://github.com/joshfarrant/shortcuts-js/pull/371) and [`filter file`](https://github.com/joshfarrant/shortcuts-js/pull/372).

The above links are my feature implementation PRs, if someone could do me a favor review that, it would be awesome!
