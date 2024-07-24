const mainAside = document.getElementById("aside");
const smallasideBtn = document.getElementById("open-aside");
const openasideBtn = document.getElementById("open-btn");


// big aside in small screen
const openAsideArr = [openasideBtn];
const elemToggleFunc = function (elem) {elem.classList.toggle("active");}

for (let i = 0; i < openAsideArr.length; i++) {
    openAsideArr[i].addEventListener("click", function () {
        elemToggleFunc(mainAside);
    });
}


// small aside in big screen
const smallAsideArr = [smallasideBtn];
const smallAsideFunc = function (elem) {elem.classList.toggle("smallaside");}

for (let i = 0; i < smallAsideArr.length; i++) {
    smallAsideArr[i].addEventListener("click", function () {
        smallAsideFunc(mainAside);
    });
}


// convert color mode
const themeToggler = document.getElementById("theme-toggler");
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme-variable');
    
    themeToggler.querySelector('.fa-moon').classList.toggle('active');
    themeToggler.querySelector('.fa-adjust').classList.toggle('active');
    
});

$('body').css('paddingTop', $('.header').innerHeight() - 1);


function loadHtml(selector, htmlContent){
    document.querySelector(selector).innerHTML = htmlContent;
}

// put active btn on aside
// document.querySelectorAll('#aside .sidebar .aside-list li .sidebar-item').foreach(function (item) {
// 	item.addEventListener('click',function(){$(this).addClass('active').siblings().removeClass('active');} ) ;
// });
// console.log($('#aside .sidebar .aside-list li'));