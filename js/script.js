(function (){
    document.documentElement.style.overflow = 'hidden';
    const loader = document.querySelector(".loader");
    function loading(){
        let opacity = 0;
        let loading = undefined;
    

        loading = setInterval(fadeOut,60);
        
        function fadeOut(){
            opacity = Number(window.getComputedStyle(loader).getPropertyValue("opacity"));
    
            if(opacity > 0){
                opacity = opacity - 0.1;
                loader.style.opacity = opacity;

            }else {
                clearInterval(loading);
                document.documentElement.style.overflow = 'visible';
                
            }
        };
        
    };
    if(window.innerWidth > 639){
        setTimeout(loading,4000);
    }else {
        loader.style.display = 'none';
        document.documentElement.style.overflow = 'visible';
    }
    window.addEventListener('resize',function (){
        if(window.innerWidth > 639){
            setTimeout(loading,4000);
        }else {
            loader.style.display = 'none';
            document.documentElement.style.overflow = 'visible';
        }
    });
})();

(function (){
    let typingBool = false;
    let typingIdx = 0;
    let typingElem = document.querySelector(".typingTxt").innerText;
    const topBtn = document.querySelector('.topBtn');

    document.querySelector("#main").classList.add("active");

    topBtn.addEventListener('click',function() {
        window.scrollTo({top:0, behavior: 'smooth'})
    })
    function scrollHandler(){
        const $target = document.querySelectorAll("section");
        let sct = this.scrollY;
        // console.log(sct);
        //active 활성화
        $target.forEach(function(item){
            let tt = item.offsetTop
            if(sct >= tt - 300){
                item.classList.add("active")
            }
        })
    }

    function typingFunc (){
        typingElem = typingElem.split("");

        if(typingBool == false){
            typingBool = true;

            var typingInt = setInterval(typing,100);
        }

        function typing(){
            if(document.querySelector("#rest").classList.contains('active')){
                if(typingIdx < typingElem.length){
                    document.querySelector('.typing').append(typingElem[typingIdx]);
                    typingIdx++;
                }else {
                    clearInterval(typingInt);
                }
            }
        }
    }
    window.addEventListener("scroll",scrollHandler);
    typingFunc ();

})();

(function () {
    // 개인정보
    const agree = document.querySelector('.agreement-area');
    const close = document.querySelector('.closeBtn');
    const agreebefore = document.querySelector(".ur_agreement");

    agreebefore.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.add('active');
        agree.classList.add('active');
    })

    close.addEventListener('click',function(e) {
        e.preventDefault();
        this.classList.remove('active');
        agree.classList.remove('active');
    })

})();

(function() {
    let swiper = undefined;
    function initSwiper() {
        swiper = new Swiper(".cardSwiper", {
            effect: "cards",
            grabCursor: true,
        });
    }
    function swiperHandler() {
        if(this.innerWidth < 640 && swiper == undefined){
            initSwiper()
        }else if (this.innerWidth >= 640 && swiper != undefined) {
            swiper.destroy();
            swiper = undefined;
        }
    }
    swiperHandler();
    window.addEventListener("resize",swiperHandler);

    
})();


