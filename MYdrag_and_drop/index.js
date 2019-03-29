window.onload = function() {
  var draggable = document.getElementById('draggable'),
    draggable2 = document.getElementById('draggable2'),
    draggable3 = document.getElementById('draggable3'),
    dropzones = document.getElementsByClassName('dropzone');

  draggable.addEventListener('dragstart', function() {
    draggable.classList.add('active');
  });

  draggable.addEventListener('dragend', function() {
    draggable.classList.remove('active');
  });

  for(let i = 0; i < dropzones.length; i++) {
    dropzones[i].addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    dropzones[i].addEventListener('dragenter', function(e) {
      dropzones[i].classList.add('hover');
    });

    dropzones[i].addEventListener('dragleave', function(e) {
      e.preventDefault();
      dropzones[i].classList.remove('hover');
    });

    dropzones[i].addEventListener('drop', function(e) {
      e.target.appendChild(draggable);
      dropzones[i].classList.remove('hover');
    });
  }
}
