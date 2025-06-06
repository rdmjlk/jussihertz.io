// Credit to https://www.youtube.com/watch?v=ckJ7gdIeebc&ab_channel=TylerPotts
window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout (() => {
        transition_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++){
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() =>{
                window.location.href = target;
            }, 500);
        });
    }
}
