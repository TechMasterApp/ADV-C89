p1n = localStorage.getItem("p1n")
p2n = localStorage.getItem("p2n")
document.getElementById("p1l").innerHTML = p1n
document.getElementById("p2l").innerHTML = p2n
qp = p1n
ap = p2n
document.getElementById("p1qa").innerHTML = ": " + qp
document.getElementById("p2qa").innerHTML = ": " + ap

s1 = 0
s2 = 0
document.getElementById("p1s").innerHTML = ": " + s1
document.getElementById("p2s").innerHTML = ": " + s2

cc = 0

function send() {
    gw = document.getElementById("w").value
    aw = gw.toLowerCase()
    sl = aw.charAt(1)
    ml = aw.charAt(Math.floor(aw.length / 2))
    ll = aw.charAt(aw.length - 1)
    rwus = aw.replace(sl, "_")
    rwum = rwus.replace(ml, "_")
    rwul = rwum.replace(ll, "_")
    console.log(rwul)
    document.getElementById("w").value = ""
    wts = "<h4>Q: " + rwul + "</h4><br>"
    ib = "<input id='oi' placeholder='Send Your Word'><br><br>"
    cb = "<button class='btn btn-success' onclick='check()'>Check</button><br>"
    os = "<h4 id='s' class='text-danger'></h4><br>"
    document.getElementById("output").innerHTML = wts + ib + cb + os
}

function check() {
    ga = document.getElementById("oi").value
    la = ga.toLowerCase()
    if (la == aw) {
        if (ap == p2n) {
            s2 = s2 + 1
            document.getElementById("p2s").innerHTML = ": " + s2
            qp = p2n
            ap = p1n
            document.getElementById("p1qa").innerHTML = ": " + qp
            document.getElementById("p2qa").innerHTML = ": " + ap
        } else {
            s1 = s1 + 1
            document.getElementById("p1s").innerHTML = ": " + s1
            qp = p1n
            ap = p2n
            document.getElementById("p1qa").innerHTML = ": " + qp
            document.getElementById("p2qa").innerHTML = ": " + ap
        }
    } else if (la != aw) {
        cc = cc + 1
        document.getElementById("s").innerHTML = "Incorrect, please try again."
        if (cc >= 3) {
            document.getElementById("s").innerHTML = "The answer was: " + gw
            gi = "<button class='btn btn-success' onclick='clearOutput()'>I'll get it next time, I guess.</button>"
            document.getElementById("output").innerHTML += gi
        }
    }
}

function clearOutput() {
    if (ap == p2n) {
        qp = p2n
        ap = p1n
        document.getElementById("p1qa").innerHTML = ": " + qp
        document.getElementById("p2qa").innerHTML = ": " + ap
    } else {
        qp = p1n
        ap = p2n
        document.getElementById("p1qa").innerHTML = ": " + qp
        document.getElementById("p2qa").innerHTML = ": " + ap
    }
    cc = 0
    document.getElementById("output").innerHTML = ""
}