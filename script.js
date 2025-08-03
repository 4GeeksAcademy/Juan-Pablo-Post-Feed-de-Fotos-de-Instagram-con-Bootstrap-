 //modal 
  $('#mymodal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus');
    });

function setView(view) {
    const container = document.getElementById('postContainer');
    container.className = view + '-view';
}
