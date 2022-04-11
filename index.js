let btn = document.querySelectorAll("button");
console.log(btn)

btn.forEach((btan) => {
    btan.addEventListener("click", () => {
        btan.parentNode.classList.toggle('active');
    })
})

