document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  document.addEventListener('mousemove', (e) => {

    if (Date.now() - (window.lastMoveTime || 0) < 100) return;
    window.lastMoveTime = Date.now();
    
    const tail = document.createElement('div');
    tail.className = 'mouse-tail';
    tail.style.left = `${e.clientX}px`;
    tail.style.top = `${e.clientY}px`;
    body.appendChild(tail);

    setTimeout(() => {
      tail.style.opacity = '0';
      setTimeout(() => {
        tail.remove();
      }, 500);
    }, 1000);
  });
});
