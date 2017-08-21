var socket = io();

socket.on('connect', function () {
    console.log("Connected:", socket);
});

socket.on('disconnect', function () {
    console.log("Disconnected:", socket);
});

socket.on('newMessage', function (message) {
    console.log("New Message", message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

$(document).ready(function(){
    $('#message-form').on('submit', function(e){
        console.log("CLICK");
        e.preventDefault();
        socket.emit('createMessage', {
            from: 'User',
            text: $('[name="message"]').val()
        }, function () {

        });
    });
});
