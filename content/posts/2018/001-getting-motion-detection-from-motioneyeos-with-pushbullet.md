---
title: "Getting motion detection from motioneyeos with pushbullet"
date: 2018-06-29T13:26:16-04:00
draft: false
Description: ""
Tags: ["golang","programming", "pushbullet", "motioneyeos",  "2018"]
Categories: ["programming", "golang", "2018"]
author: "Terrence Drumm"

---

While on my vacation I decided to build a bit of a security camera system with a raspberry pi.  I used [motionEyeOS](https://github.com/ccrisan/motioneyeos/wiki).

I spent some time writing a script to send notifications to me with pushbullet.  Due to some bushes setting the camera off every sec I don't plan on using this script.  This would be should be good for cameras aimed inside or static place.

Anyway, I thought this might be useful to someone.

### Code
Get the code on [github](https://github.com/TDogVoid/pushcam)

### Thoughts
I am thinking of making a version with Discord rather than pushbullet.  I assume discord rate limit is much higher.

If anyone can explain to me what smart mask number is better for situations that would be awesome.