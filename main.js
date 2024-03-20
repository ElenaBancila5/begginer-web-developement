var imagesAlba = document.querySelectorAll('.trip_image');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}
function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}


for (i = 0; i < imagesAlba.length; i++) {
    imagesAlba[i].addEventListener('click', openModal);
}

backdrop.onclick = closeModal;

