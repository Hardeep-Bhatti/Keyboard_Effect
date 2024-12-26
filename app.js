let buttons = document.querySelectorAll('section');

gsap.to("section", {
    boxShadow: ".3rem .3rem .3rem orange, .3rem .3rem .3rem orange, .3rem .3rem .3rem orange, .6rem .6rem .6rem whitesmoke, .6rem .6rem .6rem whitesmoke, .6rem .6rem .6rem whitesmoke",
    ease: "power2",
    rotationZ: 360,
    scale: "1.5",
    delay: .5,
    yoyo: true,
    repeat: 1,
    stagger: {
        amount: 3,
        from: "edges"
    },
    onComplete: () => {
        gsap.set("section", {
            clearProps: "boxShadow"
        });
    }
});

let audio = document.querySelector('.audio_01');

buttons.forEach(item => 
    {
        item.addEventListener('click', () =>
        {
            item.style.transform = 'scale(1)';

            item.classList.remove('default_styles');

            item.classList.add('dynamic_styles');

            audio.currentTime = 0;

            audio.play();

            setTimeout(() =>
            {
                item.style.transform = 'scale(1.2)';
                item.classList.remove('dynamic_styles');
                item.classList.add('default_styles');
            }, 500);
        });
    });