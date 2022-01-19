let table = $(#table);

table.innerHTML = "ha"




function myAJAX() {
    $.ajax({url: "optic boukkour.json", success: function (data){
        console.log(data[1].name)
    }});
}
myAJAX()