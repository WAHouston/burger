$(".create-form").on("submit", function(event) {
    event.preventDefault()
    var newBurger = {
        name: $("#order").val().trim()
    }
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(function(){
        location.reload()
    })
})

$(".devour").on("click", function(event) {
    event.preventDefault()
    $.ajax({
        url: "/api/burger/" + $(this).data("id"),
        method: "PUT"
    }).then(function(){
        location.reload()
    })
})