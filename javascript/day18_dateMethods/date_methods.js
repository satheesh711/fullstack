let coun = document.getElementById("count")
let inp = document.getElementById("inp")
inp.onkeyup = function (e) {
    if (e.key == 'Enter') {
        let str = inp.value
        let yy = Number(str.slice(0, 4))
        let mon = Number(str.slice(5, 7))
        let dd = Number(str.slice(8))
        let newdate = new Date(yy, mon-1, dd)
        if(newdate-(new Date)>0){
        let b = setInterval(function () {
            let date = new Date();
            let ms = newdate - date
            if (ms < 0) {
                let a = document.createElement('h1')
                coun.textContent = '0 Days:0 Hrs:0 Min:0 Sec:000 Ms'
                a.textContent = "happy birthday"
                coun.appendChild(a)
                clearInterval(b)
            }
            else {
                let d = Math.floor(ms / (24 * 60 * 60 * 1000))
                ms = ms - (d * 24 * 60 * 60 * 1000)
                let h = Math.floor(ms / (60 * 60 * 1000))
                ms = ms - (60 * 60 * 1000 * h)
                let m = Math.floor(ms / (60 * 1000))
                ms = ms - (m * 60 * 1000)
                let s = Math.floor(ms / 1000)
                ms = String(ms - (s * 1000))
                ms = ms.padStart(3, '0')
                let a = (d + " Days:" + h + " Hrs: " + m + " Min: " + s + " Sec: " + ms + "Ms")
                coun.textContent = a
            }
        }, 1)
    }
    }
}


