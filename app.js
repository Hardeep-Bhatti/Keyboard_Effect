let buttons = document.querySelectorAll('section');

let audio = document.querySelector('.audio_01');

buttons.forEach(item => 
    {
        item.addEventListener('click', () =>
        {
            item.style.transform = 'scale(1)';

            item.classList.remove('default_styles');

            item.classList.add('dynamic_styles');

            audio.play();

            setTimeout(() =>
            {
                item.style.transform = 'scale(1.2)';
                item.classList.remove('dynamic_styles');
                item.classList.add('default_styles');
            }, 500);
        });
    });