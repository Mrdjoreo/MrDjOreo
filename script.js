
function filterGear(category) {
  const groups = document.querySelectorAll('.gear-group');
  groups.forEach(group => {
    if (category === 'all' || group.id === category) {
      group.style.display = 'block';
    } else {
      group.style.display = 'none';
    }
  });
}
