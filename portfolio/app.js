// import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm"

var birthdayCounter = document.querySelector("#bday-counter");

const isBirthdayDone = new Date() > new Date(new Date().getFullYear(), 10, 15);
const targetDate = new Date(new Date().getFullYear(), 10, 15); // Month is 0-based index

function displayCountdown() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        birthdayCounter.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else if (isBirthdayDone) {
        birthdayCounter.innerHTML = "My birthday is done!";
    } else {
        birthdayCounter.innerHTML = "It's my birthday!";
    }
}

displayCountdown();

setInterval(displayCountdown, 1000);

function showFloatingText(text, event) {
    const floatingText = document.createElement("div");

    floatingText.textContent = text;

    const floatingTextClassname = "click-indicator";

    floatingText.style.className = floatingTextClassname;
    floatingText.style.transition = "1s all";
    floatingText.style.position = "absolute";
    floatingText.style.pointerEvents = "none";
    floatingText.style.color = "#22222260";
    floatingText.style.fontSize = "24px";
    floatingText.style.fontWeight = "bold";
    floatingText.style.padding = "5px 10px";
    floatingText.style.borderRadius = "50%";
    floatingText.style.zIndex = "1000";

    floatingText.style.left = event.clientX - 30 + "px";
    floatingText.style.top = event.clientY + window.scrollY - 30 + "px";

    document.body.appendChild(floatingText);
    // animate(`.${floatingTextClassname}`, { opacity: 1, rotate: 90 }, { duration: 0.6, repeat: Infinity });

    setTimeout(function () {
        floatingText.className += "hide";
        setTimeout(() => {
            floatingText.remove();
        }, 1000);
    }, 1000);
}

document.addEventListener("click", (event) => {
    showFloatingText("Clicked!", event);
});

var currentBirthday = document.querySelector("#current-bday");

currentBirthday.innerHTML = "November 15, " + new Date().getFullYear();