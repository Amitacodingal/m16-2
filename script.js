var index = 0;
slider();

function slider() {
    var i;
    var x = document.getElementsByClassName('dslides');
    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
    }
    index++;
    if (index > x.length) {
        index = 1
    }

    x[index - 1].style.display = 'block';

    setTimeout(slider, 60000);
}