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

 function toggleMenu() {
     const navMenu = document.getElementById("nav-menu");
     navMenu.classList.toggle("active");
 }

 function openModal(src, date, title, desc) {
     document.getElementById('modalImg').src = src;
     document.getElementById('modalDate').innerText = "Captured on: " + date;
     document.getElementById('modalTitle').innerText = title;
     document.getElementById('modalDesc').innerText = desc;
     document.getElementById('galleryModal').style.display = "flex";
 }

 function closeModal() {
     document.getElementById('galleryModal').style.display = "none";
 }


 window.onclick = function(event) {
     let modal = document.getElementById('galleryModal');
     if (event.target == modal) {
         closeModal();
     }
 }

 // Scroll
 const homePageWrapper = document.getElementById('home-page');

 homePageWrapper.onscroll = function() {
     let winScroll = homePageWrapper.scrollTop;
     let height = homePageWrapper.scrollHeight - homePageWrapper.clientHeight;
     let scrolled = (winScroll / height) * 100;

     document.getElementById("myBar").style.width = scrolled + "%";
 };
