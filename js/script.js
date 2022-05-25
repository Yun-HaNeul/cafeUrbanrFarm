// (function (){
//     document.documentElement.style.overflow = 'hidden';
//     const loader = document.querySelector(".loader");
//     function loading(){
//         let opacity = 0;
//         let loading = undefined;
    

//         loading = setInterval(fadeOut,60);
        
//         function fadeOut(){
//             opacity = Number(window.getComputedStyle(loader).getPropertyValue("opacity"));
    
//             if(opacity > 0){
//                 opacity = opacity - 0.1;
//                 loader.style.opacity = opacity;

//             }else {
//                 clearInterval(loading);
//                 document.documentElement.style.overflow = 'visible';
                
//             }
//         };
        
//     };
//     if(window.innerWidth > 639){
//         setTimeout(loading,4000);
//     }else {
//         loader.style.display = 'none';
//         document.documentElement.style.overflow = 'visible';
//     }
//     window.addEventListener('resize',function (){
//         if(window.innerWidth > 639){
//             setTimeout(loading,4000);
//         }else {
//             loader.style.display = 'none';
//             document.documentElement.style.overflow = 'visible';
//         }
//     });
// })();

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
(function (){
    // 폼 에러시 비활성화
    function formHandler(){
        const input = document.querySelectorAll('.required');
        const checkbox = document.querySelector('.contact-checkBox');
        const is_checked = checkbox.checked;
        let $value
        input.forEach(function(item){
            $value = item.value;

            if(!$value){
                item.parentNode.classList.add('error');
            }else {
                item.parentNode.classList.remove('error');
            }
        })

        let $errorCount = document.querySelectorAll('.error').length;

        console.log($errorCount);

        if($errorCount == 0) {
                if(!is_checked == 1){
                    document.querySelector('.ur_form-submit').disabled = true;
                    alert('개인정보 처리 방법에 동의해주세요.')
                }
            }else {
                document.querySelector('.ur_form-submit').disabled = true;
            }
    }
    // 값 입력시 에러 제거
    document.querySelector('.ur_form-submit').addEventListener('click',formHandler);
    const inputBox = document.querySelectorAll('.ur_form-inputBox');
    inputBox.forEach(function(item){
        item.addEventListener('keyup',function() {
            this.classList.remove('error');
        });
    })

    emailjs.init('e9PwK_x1c7-Ip6znY');

    document.getElementById('contact-Form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('cafe_urbarnfarm', 'template_hz15cdj', this)
            .then(function () {
                alert('빠른시일내에 답장 드리겠습니다. 감사합니다.');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });

    }
)()


