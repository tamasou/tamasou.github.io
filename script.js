const elements = document.querySelectorAll('.change-color');

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    
    element.style.color = '#008cff'; 
  });

  element.addEventListener('mouseout', () => {
    
    element.style.color = '#000000'; 
  });
});
