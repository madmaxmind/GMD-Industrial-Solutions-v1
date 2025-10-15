// article.js - renderizar markdown
fetch('article.md')
  .then(res => res.text())
  .then(md => {
    document.getElementById('content').innerHTML = marked.parse(md);
  });