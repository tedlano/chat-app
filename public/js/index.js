var socket = io();

socket.on('connect', function () {
    console.log("Connected:", socket);

    socket.emit('createMessage', {
        from: 'Ted',
        subject: 'yep'
    });
});

socket.on('disconnect', function () {
    console.log("Disconnected:", socket);
});

socket.on('newMessage', function (message) {
    console.log("New Message", message);
});
