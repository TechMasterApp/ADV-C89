function addUser() {
    p1n = document.getElementById("p1ni").value
    p2n = document.getElementById("p2ni").value

    localStorage.setItem("p1n", p1n)
    localStorage.setItem("p2n", p2n)

    window.location = "game_page.html"
}