window.onload = function(){
    AOS.init();
    //스크롤 내리면 header에 active추가
    let header = document.querySelector(".header")
    window.addEventListener("scroll",function(){
        if(window.scrollY >= 100){
            header.classList.add("active")
        }else{
            header.classList.remove("active")

        }
    })

    //모바일 메뉴 버튼
    let moMenuBtn = document.querySelector(".mo-menu-btn")
    let sideMenu = document.querySelector(".side-menu")
    moMenuBtn.addEventListener("click",function(){
        sideMenu.classList.toggle("active")
        this.classList.toggle("active")
    })
    window.addEventListener("resize",function(){
        let winWidth = window.innerWidth
        if(winWidth > 768){
            sideMenu.classList.remove("active")
            moMenuBtn.classList.remove("active")
        }
    })

    
}



    