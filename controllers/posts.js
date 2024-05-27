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
// const show = (req, res) => {};
// const create = (req, res) => {};

module.exports = {
  index,
  // show,
  // create,
};
