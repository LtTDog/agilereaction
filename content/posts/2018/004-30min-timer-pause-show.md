---
title: "30min Sleep Timer That Pauses Your Show"
date: 2018-07-07T11:18:09-04:00
draft: false
Description: ""
Tags: ["2018", "golang"]
Categories: ["2018", "golang"]
author: ""
---


I wrote a quick and dirty little program for my mom to pause her show when she's watching it on her computer. It's a 30 min timer that resets every time you move the mouse or press a button. After 30 minutes of inactivity, it presses the spacebar key pausing the show.  It can't tell if your show is playing or not so it could start your show too. This is windows based only.

[Link to the github code](https://github.com/TDogVoid/SleepTimerPauseShow)

If anyone has any suggestions on how to detect if a show is still playing, I'd love to hear it.  I was thinking of detecting if audio was being played but couldn't find one in golang.
