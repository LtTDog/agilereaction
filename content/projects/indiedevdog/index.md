---
title: IndieDevDog
icon: "indiedevdog/profile.png"
featured_image: "projects/indiedevdog/profile.png"
---

[@IndieDevDog](https://twitter.com/indiedevdog) is an experimental bot I wrote in originally written in python. I recently rewritten it in node and created a web interface in meteor.  It now uses spam filter and the web interface is for training the bot to detect spam.  The full source code of the bot is over at GitHub.  Its kind of hack together quickly, I wrote it in node and meteor to get a better understanding of the language plus there was some cool frameworks.

Its main goal is to promote Indie Games by retweeting #indiedev and #gamedev stuff.  Unlike some other bots out there this one only runs every 10 minutes and randomly retweet something that’s been posted after its last run.  The purpose of running every 10 minutes is to prevent it from spamming someone’s timeline.