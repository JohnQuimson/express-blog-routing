<h1 align="center">
  
 express-blog-routing
  
</h1>

<!-- <h4 align="center">summary <a href="http://electron.atom.io" target="_blank">"link"</a>.</h4> -->

<!-- <p align="center">
  <a href="https://badge.fury.io/js/electron-markdownify">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Gitter">
  </a>
  <a href="https://gitter.im/amitmerchant1990/electron-markdownify"><img src="https://badges.gitter.im/amitmerchant1990/electron-markdownify.svg"></a>
  <a href="https://saythanks.io/to/bullredeyes@gmail.com">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>
  <a href="https://www.paypal.me/AmitMerchant">
    <img src="https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&amp;style=flat">
  </a>
</p> -->

<p align="center">
  <a href="#description">Description</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#used-technologies">Used technologies</a> 
</p>

![screenshot](https://raw.githubusercontent.com/gist/mahmudinm/47588cab5af928d2c8a2976d90216ea7/raw/88f20c9d749d756be63f22b09f3c4ac570bc5101/programming.gif)

## Description

Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
All'interno creare le seguenti rotte:

- / -> index: ritornerà un html con una ul che stamperà la lista dei post
- /:slug -> show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post
  /create
- /create -> create: ritornerà un semplice html con un h1 con scritto Creazione nuovo post e nel caso venga richiesta una risposta diversa da html lancerà un errore 406
- /:slug/download -> download: dovrà far scaricare l’immagine del post rappresentato dallo slug.

Attenzione, se lo slug contiene il simbolo / la rotta non funzionerà. C’è qualche strumento che ci permette di codificare lo slug?
Scrivere tutte le funzioni delle rotte nel controller dedicato

Registrare il router dentro app.js con il prefisso /posts.

### Bonus

Nella rotta show, aggiungere al post una proprietà image_url dove creare il link completo per l'immagine
Aggiungere un'altra proprietà image_download_url che invece dovrà far scaricare l'immagine puntando alla rotta download
Rendere navigabili i post nella index, stampando un link per la show di ciascuno

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
 git clone ('link of the repository')

# Go into the repository
 cd ('file name')

# Install dependencies
 npm install

# Run the app
 npm run dev
```

## Used technologies

This software uses the following technologies:

- [Node.js](https://)
- [Express](https://)

> GitHub [@JohnQuimson](https://github.com/JohnQuimson) &nbsp;&middot;&nbsp;
> Twitter [@John Henric Quimson](https://www.linkedin.com/in/john-henric-quimson-973827280/)
