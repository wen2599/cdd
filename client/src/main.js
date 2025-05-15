// client/src/main.js
document.addEventListener('DOMContentLoaded', () => {
  // 初始化卡容器
  const container = document.getElementById('card-container');
  
  // 示例：动态加载卡片
  const demoCards = [
    'back', 
    'ace_of_spades', 
    'king_of_diamonds'
  ];
  
  demoCards.forEach(card => {
    const img = document.createElement('img');
    img.className = 'card';
    img.src = `images/cards/${card}.png`;
    img.alt = card;
    container.appendChild(img);
  });
});
