Harjoitustyöpohja
-----------------

Harjoitustyöpohja web-sovellukselle, joka käyttää seuraavia teknologioita:

* PostgreSQL
* Express
* Angular
* Node


## Aloitus Cloud9:ssä

* Luo Cloud9:ssa uusi custom workspace asettaen Git-osoitteeksi
`https://github.com/ahn/ht.git`

* Suorita workspacen terminaalissa

```bash
npm install
bower install
./init-postgresql-at-cloud9.sh
```

`init-postgresql-at-cloud9.sh` on skripti,
joka käynnistää PostgreSQL:n sekä luo sinne tietokannan ja käyttäjän.


* Nyt sovelluksen pitäisi käynnistyä komennolla

```bash
grunt serve
```

---

## Pohja

* Harjoitustyöpohja on luotu
[angular-fullstack](https://github.com/DaftMonk/generator-angular-fullstack)-generaattorilla
    * ja lisätty Sequelize suunnilleen
[tässä ohjeessa](http://docs.sequelizejs.com/en/1.7.0/articles/express/)
kerrotulla tavalla
    * sekä toteutettu käyttäjän luonti ja kirjautuminen

* Projektin yleinen konfiguraatio:

| Tiedosto |    |
|:--------|:---|
| `package.json` | Palvelinpään npm-riippuvuudet |
| `bower.json` | Selainpään Bower-riippuvuudet |
| `Gruntfile.js` | Grunt-tehtävien (tasks) määrittely |

---

## Gruntin käyttö

* Kehitysvaiheessa sovellus ajetaan komennolla
```bash
grunt serve
```

* sovellus on saatavilla osoitteessa `http://WORKSPACE-KÄYTTÄJÄ.c9users.io`

* Lopullisen, julkaistavan sovelluksen voi luoda komennolla
```bash
grunt build
```

* Tämä luo hakemistoon `dist` optimoidun version sovelluksesta
* HTML-, CSS-, ja JavaScript-tiedostot *minifioidaan* ja liitetään yhteen
* Tämän version voi julkaista vaikka Herokuun

---

## client/

* Hakemistossa `client` on  selainpään Angular-sovellus
    * Sovelluksen Angular-moduulin nimi on `workspaceApp`

|Tiedosto|    |
|:-------|:---|
| `client/index.html` | Ensimmäiseksi ladattava HTML-tiedosto |
| `client/app/` | Angular-sovelluksen toteutus |
| `client/app/app.js` | Angular-sovelluksen konfiguraatio |
| `client/app/main/` | Etusivuun littyvät tiedostot |
| `client/assets/` | Kuvat ja muut staattiset tiedostot |
| `client/components/` | Useassa näkymässä käytettävät komponentit, esim `navbar`|

---

## server/

* Hakemistossa `server/` on palvelinpään Node+Express-sovellus

|Tiedosto|    |
|:-------|:---|
| `server/app.js` | Express-sovellus, jonka mm. `grunt serve` suorittaa |
| `server/routes.js` | Express-reittien (routes) määrittely |
| `server/api/` | Reittien toteutus `/api/...` |
| `server/api/user/` | "Käyttäjä-reitti" `/api/user/` |
| `server/models/` | Sequelize-mallit |
