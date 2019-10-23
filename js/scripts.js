// Back end

// Front end
$(document).ready(function() {
  $("#formOne").submit(function(e) {
    $("#finish").empty();
    var to = parseInt($("input#to").val());
    var by = parseInt($("input#by").val());
    if (to > 0 && by > 0 && to >= by) {
      for (var numbers = by; numbers <= to; numbers += by) {
        if (numbers >= to) {
          $("#finish").append(numbers);
        } else {
          $("#finish").append(numbers + ", ");
        }
      }
    }
    e.preventDefault();
  });
});
