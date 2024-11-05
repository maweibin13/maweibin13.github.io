// 显示特定的页面部分
function showSection(sectionId) {
  // 隐藏所有部分
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // 显示目标部分
  const activeSection = document.getElementById(sectionId);
  activeSection.style.display = 'block';
}

// 默认显示首页
showSection('home');
