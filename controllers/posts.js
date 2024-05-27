const path = require('path');
const fs = require('fs');
let posts = require('../db/posts.json');

const index = (req, res) => {
  let html = '<ul>';
  posts.forEach((p) => {
    html += `
        <li>
          
            <h3>${p.title}</h3>
            <p>${p.content}</p>
            <img width="200" src="/imgs/posts/${p.image}" />
            <p>
              <strong>Tags</strong>: ${p.tags
                .map((t) => `<span class="tag">${t}</span>`)
                .join(', ')}
            </p>
          
        </li>`;
  });
  html += '<ul>';
  res.send(html);
};

const show = (req, res) => {
  const postRichiesto = posts.find((post) => post.slug === req.params.slug);
  if (postRichiesto) {
    res.json(postRichiesto);
  } else {
    res.status(404).send(`<h1>Post non trovato</h1>`);
  }
};
// const create = (req, res) => {};

module.exports = {
  index,
  show,
  // create,
};
