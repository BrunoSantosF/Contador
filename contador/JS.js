let count = 0;

const value = document.querySelector(".number");
const btns = document.querySelectorAll(".btn");


btns.forEach(btn);

function btn(btn){
    btn.addEventListener("click",n);
}
function n (e){
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
        count--;
    } else if (styles.contains("increase")) {
        count++;
    } else {
        count = 0;
    }

    if (count > 0) {
        value.style.color = "green";
    }
    if (count < 0) {
        value.style.color = "red";
    }
    if (count === 0) {
        value.style.color = "#222";
    }
    value.textContent = count;
    
}

