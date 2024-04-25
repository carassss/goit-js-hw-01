function getElementWidth(content, padding, border) {
  return Number.parseFloat(content) + (Number.parseFloat(padding) * 2) + (Number.parseFloat(border) * 2);
}

console.log(getElementWidth("60px", "12px", "8.5px"));
