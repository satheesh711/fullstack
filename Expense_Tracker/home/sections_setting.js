let sections = document.getElementById("Home_main").getElementsByTagName("section")
let defultsession_display = sessionStorage.getItem("defultsession")
let btns = document.getElementsByClassName('btn_nav')

displaysectionsnone()
displaysections(Number(defultsession_display))

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
       sections[sessionStorage.getItem("defultsession")].style.display = 'none'
       sessionStorage.setItem("defultsession", `${i}`)
       displaysections(i)
    })
}

document.getElementById("Home_current").addEventListener('click', () => {
      sections[sessionStorage.getItem("defultsession")].style.display = 'none'
      sessionStorage.setItem("defultsession", '1')
      displaysections(1)
   });

function displaysectionsnone() {
    for (let i = 0; i < sections.length; i++)
       sections[i].style.display = "none"
}

function displaysections(n) {
    sections[n].style.display = 'block'
    switch (n) {
       case 0:
          home_page()
          break
       case 1:
          currentMonth()
          break
       case 2:
          previousMonth()
          break
       case 3:
          overReview()
          break
       case 4:
          receipts()
          break
    }
}
 
 