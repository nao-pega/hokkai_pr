let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    
    // 3秒ごとに画像を切り替える
    setTimeout(showSlides, 3000); 
}

const title = document.getElementById('main-title');
const text = title.textContent;  // 元のテキストを取得
const wrappedText = text.split('').map(char => `<span>${char}</span>`).join('');
title.innerHTML = wrappedText;   // <span>で囲んだ文字列をセット