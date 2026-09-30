fetch("https://edanurerguven.vercel.app/wayra.css?v=" + new Date().getTime())
  .then(res => res.text())
  .then(text => {
    require('fs').writeFileSync('live_wayra.css', text, 'utf8');
    console.log('Saved live css');
  });
