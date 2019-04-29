
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newBurger = $(this).data("newburger");
  
      var newBurgerState = {
        devoured: newBurger
      };
  
      
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          
          location.reload(); //reload for page update
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
        
          
          location.reload(); //reload for updated list
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          
         
          location.reload();
        }
      );
    });
  });
  