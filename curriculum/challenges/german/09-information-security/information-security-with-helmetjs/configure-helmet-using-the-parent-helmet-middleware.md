---
id: 587d8249367417b2b2512c40
title: Configure Helmet Using the ‘parent’ helmet() Middleware
challengeType: 2
forumTopicId: 301575
dashedName: configure-helmet-using-the-parent-helmet-middleware
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-infosec" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-infosec/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`app.use(helmet())` will automatically include all the middleware introduced above, except `noCache()`, and `contentSecurityPolicy()`, but these can be enabled if necessary. Du kannst auch jede andere Middleware einzeln deaktivieren oder konfigurieren, indem du ein Konfigurationsobjekt verwendest.

**Example:**

```js
app.use(helmet({
  frameguard: {         // configure
    action: 'deny'
  },
  contentSecurityPolicy: {    // enable and configure
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // disable
}))
```

Wir haben jede Middleware einzeln vorgestellt - zum einen für Schulungszwecke und zum anderen zur Vereinfachung der Tests. Using the ‘parent’ `helmet()` middleware is easy to implement in a real project.

# --hints--

no tests - it's a descriptive challenge

```js
assert(true);
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```