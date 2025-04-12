document.querySelectorAll('.menu-item').forEach(item => {
    // Handle mouseover to enlarge
    item.addEventListener('mouseover', () => {
      item.classList.add('active');
    });
    
    // Handle mouseout to revert back to normal size
    item.addEventListener('mouseout', () => {
      item.classList.remove('active');
    });
    
    // For click events (if you want the enlarged state to persist on click)
    item.addEventListener('click', () => {
      // Optionally toggle the active state on click
      item.classList.toggle('active');
    });
  });
  