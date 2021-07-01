let cursorMeter = document.getElementById('cursorMeter');
document.addEventListener('mousemove', function(e){
    cursorMeter.style.top = e.clientY+'px';
    cursorMeter.style.left = e.clientX+'px';
})

let percent = document.getElementById('percent');
let progressBar = document.getElementById('progressBar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = progress + '%';
    percent.innerHTML = "Scroll Percentage: " + Math.round(progress) + "%";
}