// Gemini Nexus Upgrade 核心逻辑
document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggle-sidebar');
  const coffeeTip = document.getElementById('coffee-tip');

  // 侧边栏开关逻辑
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      console.log('侧边栏状态已切换');
    });
  }

  // 咖啡笔尖 (Coffee Tip) 模拟功能
  if (coffeeTip) {
    coffeeTip.addEventListener('click', () => {
      coffeeTip.style.transform = 'scale(1.2)';
      coffeeTip.innerText = '☕ 正在为您注入灵感...';
      setTimeout(() => {
        coffeeTip.style.transform = 'scale(1)';
        coffeeTip.innerText = '咖啡笔尖';
      }, 2000);
    });
  }
});
