const highlight = (hovItem, highItem, selector) => {
  const hoveredItem = document.querySelector(hovItem);
  const highlightItem = document.querySelector(highItem);

  hoveredItem.addEventListener('mouseover', () => {
    if (highlightItem) {
      highlightItem.classList.add(selector);
    }
  })

  hoveredItem.addEventListener('mouseout', () => {
    if (highlightItem) {
      highlightItem.classList.remove(selector);
    }
  })
};



export default highlight;
