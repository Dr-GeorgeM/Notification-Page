function markAllAsRead() {
    const unreadMessages = document.querySelectorAll(".message-one");

    unreadMessages.forEach((message) => {
        message.classList.remove("message-one");
        message.classList.add("read-message-one");
    });

    const msgNum = document.querySelector(".msg-num");
    msgNum.innerHTML = 0;
}

const button = document.querySelector(".btn");
button.addEventListener("click", markAllAsRead);  