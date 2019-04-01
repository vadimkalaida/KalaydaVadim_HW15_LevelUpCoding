window.onload = function() {
  var draggable = document.getElementById('draggable1'),
    draggable2 = document.getElementById('draggable2'),
    draggable3 = document.getElementById('draggable3'),
    dropzones = document.getElementsByClassName('dropzone');


  draggable.addEventListener('mousedown', function() {
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
        e.preventDefault();
        e.target.appendChild(draggable);
        dropzones[i].classList.remove('hover');
      });
    }
  });

  draggable2.addEventListener('mousedown', function() {
    draggable2.addEventListener('dragstart', function() {
      draggable2.classList.add('active');
    });

    draggable2.addEventListener('dragend', function() {
      draggable2.classList.remove('active');
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
        e.preventDefault();
        e.target.appendChild(draggable2);
        dropzones[i].classList.remove('hover');
      });
    }
  });

  draggable3.addEventListener('mousedown', function() {
    draggable3.addEventListener('dragstart', function() {
      draggable3.classList.add('active');
    });

    draggable3.addEventListener('dragend', function() {
      draggable3.classList.remove('active');
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
        e.preventDefault();
        e.target.appendChild(draggable3);
        dropzones[i].classList.remove('hover');
      });
    }
  });
}
