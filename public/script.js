
var OSName="Unknown OS";
if (navigator.userAgent.indexOf("Win")!=-1) OSName="Windows";
if (navigator.userAgent.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.userAgent.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.userAgent.indexOf("Linux")!=-1) OSName="Linux";
      
    // Display the OS name
console.log(OSName)


const socket = io("/");
const user = prompt("Enter your name to proceed");

$(function () {
    $("#send").click(function () {
        if ($("#chat_message").val().length !== 0) {
            console.log(user);
            socket.emit("message", $("#chat_message").val());
            $("#chat_message").val("");
        }
    })
    $("#chat_message").keydown(function (e) {
        if (e.key == "Enter" && $("#chat_message").val().length !== 0) {
            socket.emit("message", $("#chat_message").val());
            $("#chat_message").val("");
        }
    })
})

socket.on("createMessage", (message) => {
    $(".messages").append(`
        <div class="message">
            <span>${message}</span>
        </div>
    `)
});