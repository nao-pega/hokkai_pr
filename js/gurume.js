const title = document.getElementById('main-title');
const text = title.textContent;  // 元のテキストを取得
const wrappedText = text.split('').map(char => `<span>${char}</span>`).join('');
title.innerHTML = wrappedText;   // <span>で囲んだ文字列をセット