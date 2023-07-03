
// load terms anc conditions template
$(document).ready(function() {
  $('#ES-termsModal').on('show.bs.modal', function() {
      $(this).find('.modal-body').load('../templates/terms.html');
  });

  $('#EN-termsModal').on('show.bs.modal', function() {
    $(this).find('.modal-body').load('templates/terms.html');
});
});