 const loader = document.getElementById('loader');
 const homePage = document.getElementById('home-page');

 document.getElementById('get-started-btn').addEventListener('click', function () {
     loader.classList.add('loader-hidden');
    setTimeout(() => {
         loader.style.display = 'none';
         homePage.style.display = 'block';
     }, 800);
 });

function goToCover() {
    homePage.style.display = 'none';
    loader.style.display = 'flex';
    loader.classList.remove('loader-hidden');
     const bar = document.querySelector('.loading-bar');
     bar.style.animation = 'none';
     bar.offsetHeight;
     bar.style.animation = null;
 }

