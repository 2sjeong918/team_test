var doc = document;
var body = doc.body;

doc.addEventListener('keyup', toggleGrid);

function toggleGrid(e) {
  if (e.keyCode === 71 && e.shiftKey ) {
    body.classList.toggle('show-grid');
  }
}