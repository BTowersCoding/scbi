# scbi

This game is genuinely addictive due to its very carefully tuned slot-machine mechanics. This project began as a way to aid in production strategies. Now I'm more interested in using it to study the game's data model, and possibly shed some light on what characteristics are involved in creating something so endlessly engaging.

I actually was under an illusion that I was the only one still playing the game since it came out in 2013. But then I found there is a discord and reddit community for it and my entire worldview shifted.

It's very important to talk about FarmVille, from which the game inherits its exploitative mechanics. When I looked into it, I found an article that talked about how Facebook used it to discover where the line is where so many notifications will cause a certain number of users to become annoyed but still effectively increase use, and here we have what we have today... the invasive ad-driven unusable trash heap of an internet. 

I actually hate the game in so many ways and feel like an addict for continuing to play it. In truth it is a form of escape, because in real life I have relatively few resources and little influence it feels great to be put in a position where I have the safety, freedom and power to build communities and see them flourish. For this reason it is especially depressing that even my power fantasy involves engaging with an entity that is literally trying to prey upon me by misleading me and exploiting my weaknesses.

Oh what's that? You want links?

https://kottke.org/16/07/the-behavioral-psychology-behind-freemium-mobile-games
https://yukaichou.com/gamification-examples/farmville-game-mechanics-winning-addicting/
https://medium.com/strategy-insider/https-medium-com-sk-sohamkulkarni-the-psychology-of-freemium-games-b66f68a51205
https://uxplanet.org/the-psychology-of-freemium-games-69024d80273b
https://www.psychguides.com/interact/the-psychology-of-freemium/

The way I think that I can turn this power around for "good" would be to use it as a data science project. Can you hear Satan laughing?

## Development

You'll likely want to change the name from `shadow-reagent` to whatever your project is called. Here's where you need to do that:

1. In the `shadow-cljs.edn` file in the project root (so your `init` fn will be called)
2. Rename the directory in the `src` path (inside the project root)- *make sure to change hyphens (-) to underscores (_).*
3. In the `ns` macro at the top of `app.cljs`

Now you can do the thing:

```bash
$ npm install
added 97 packages from 106 contributors in 5.984s
```

Start the development process by running:

```bash
$ npx shadow-cljs watch app
...
[:app] Build completed. (134 files, 35 compiled, 0 warnings, 5.80s)
```

Or simply `jack-in` from your editor. Your app will be served at: at [http://localhost:8080](http://localhost:8080).

## Production build

```bash
npx shadow-cljs release app
```
