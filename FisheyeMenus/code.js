document.querySelectorAll('.menu-item').forEach(item => {
  // Handle mouseover to enlarge if not already clicked
  item.addEventListener('mouseover', () => {
    if (!item.classList.contains('clicked')) {
      item.classList.add('active');
    }
  });

  // Handle mouseout to revert back to normal size if not clicked
  item.addEventListener('mouseout', () => {
    if (!item.classList.contains('clicked')) {
      item.classList.remove('active');
    }
  });

  // Handle click to persist the enlarged state
  item.addEventListener('click', () => {
    // Remove 'clicked' and 'active' from all menu items
    document.querySelectorAll('.menu-item').forEach(i => {
      i.classList.remove('clicked', 'active');
    });
    // Add 'clicked' and 'active' to the clicked item
    item.classList.add('clicked', 'active');
  });
});
