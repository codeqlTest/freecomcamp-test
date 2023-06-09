---
id: 5900f43e1000cf542c50ff50
title: 'Problema 210: triangoli ottusangoli'
challengeType: 1
forumTopicId: 301852
dashedName: problem-210-obtuse-angled-triangles
---

# --description--

Considera il set $S(r)$ di punti ($x$, $y$) con coordinate intere che soddisfano $|x| + |y| ≤ r$.

Sia $O$ il punto (0,0) e $C$ il punto ($\frac{r}{4}$,$\frac{r}{4}$).

Sia $N(r)$ il numero di punti $B$ in $S(r)$, per cui il triangolo $OBC$ abbia un angolo ottuso, cioè l'angolo più grande $α$ soddisfi $90°&lt;α&lt;180°$.

Per esempio, $N(4)=24$ e $N(8)=100$.

Quanto vale $N(1\\,000\\,000\\,000)$?

# --hints--

`obtuseAngledTriangles()` dovrebbe restituire `1598174770174689500`.

```js
assert.strictEqual(obtuseAngledTriangles(), 1598174770174689500);
```

# --seed--

## --seed-contents--

```js
function obtuseAngledTriangles() {

  return true;
}

obtuseAngledTriangles();
```

# --solutions--

```js
// solution required
```
