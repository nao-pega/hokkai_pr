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


const snowContainer = document.querySelector('.snow');
const numberOfSnowflakes = 150; // 降らせたい雪の粒の数

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    
    // ランダムな位置（X軸）
    snowflake.style.left = Math.random() * 100 + 'vw';
    
    // ランダムなサイズ（雪の粒の大きさ）
    const size = Math.random() * 3 + 6; // 6pxから9px
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    
    // ランダムなアニメーション速度（降るスピード）
    const duration = Math.random() * 6 + 5; // 5秒から11秒
    snowflake.style.animationDuration = duration + 's';
    
    // ランダムなアニメーション開始遅延（バラバラに降り始めるように）
    snowflake.style.animationDelay = Math.random() * 10 + 's';
    
    snowContainer.appendChild(snowflake);

    // 画面外に出た雪を削除し、再生成する（無限に降らせるため）
    snowflake.addEventListener('animationiteration', () => {
        // 新しい位置をランダムに設定し直す
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // アニメーションをリセットするためには一度要素をクローンする必要がある
        // シンプルに、アニメーションが完了したら要素を削除し、再生成する
        snowflake.remove();
        createSnowflake();
    });
}

// 指定した数の雪の粒を生成
for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
}