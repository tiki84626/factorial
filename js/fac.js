$(document).ready(function() {
  $("form").submit(function(event){

    var number = parseInt($("input#number").val());
    var method = $("input:radio[name=method]:checked").val();

    function facLoop(x) {
      if (x === 0) {
        return 1;
      } else if (x < 0) {
        return "undefined";
      } else {
        for (i = x; i > 2; i--) {
          x *= (i - 1);
        }
        return x;
      }
    }

    function facRecursion(x) {
      if (x === 0) {
        return 1;
      } else if (x < 0) {
        return "undefined";
      } else {
        return x *= facRecursion(x - 1);
      }
    }

    if (method === "non-recur") {
      answer = facLoop(number);
      $("#answer").text(answer);
    } else if (method === "recur") {
      answer = facRecursion(number);
      $("h3#answer").text(answer);
    } else {

    }

    event.preventDefault();
  });
});
