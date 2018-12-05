---
title: "Expiring Cookies In Phoenix"
date: 2018-10-21T09:42:39-04:00
draft: false
Description: "Expiring Cookies In Phoenix"
Tags: ["2018", "elixir", "phoenix"]
Categories: ["2018", "elixir", "phoenix"]
author: ""

---

So I started working on a side project using [elixir](https://elixir-lang.org/) and [phoenix](https://phoenixframework.org/) last month. In phoenix cookies are set to never expire.  Which is a bit of security issue for logins, since someone could get that cookie and pose as that person forever. Not major especially if you use https but still could be easily tighten up.  

Anyhow I wanted post where and how to set a max age on your cookies in phoenix, since it took a bit of searching for me to find.  This won't stop the issue but does shorten the length of time they could use it.  You should be using https, especially since you can get a free certificate for your domain from [Let's Encrypt](https://letsencrypt.org/).

In your **MyAppWeb.Endpoint file.**

Add max_age field and the time you would like to expire the in seconds.

```
plug Plug.Session,
    store: :cookie,
    max_age: 60*60*24,  #expires in 24 hours
    key: "your_key",
    signing_salt: "random salt"
```

Also add `configure_session(conn, renew: true)` to your login function to make sure they get a new good cookie.
