$(document).ready(function() {
  $("form#wordCounter").submit(function(event) {
    var phrase = $("input#phrase").val();
    var results = wordOrder(phrase);

    $.each(results, function(index, value) {

      $("#target").append("<li>" + value + "</li>");
    });

    event.preventDefault();
  });
  // $('.item').on('click', function(){
  //   $('.item').removeClass('active');
  //   $(this).addClass('active')
  // });

  $('.home').on('click', function() {
    $('.ui.sidebar')
    .sidebar('toggle');

  });
});
