const propertyBoxHeader = document.querySelector('#propertybox h2');
const widthField = document.getElementsByName('width-field')[0];
const heightField = document.getElementsByName('height-field')[0];
const cornersField = document.getElementsByName('corners-field')[0];
const props = document.querySelectorAll('#propertybox input');

let selectedShape = '';

widthField.addEventListener('change', (e) => {
  selectedShape.children.forEach(child => {
    child.width(Number(e.target.value))
  })
})

heightField.addEventListener('change', (e) => {
  selectedShape.children.forEach(child => {
    child.height(Number(e.target.value))
  })
})

cornersField.addEventListener('change', (e) => {
  selectedShape.children[0].cornerRadius(Number(e.target.value))
})

export function shapeSelector (e) {
  props.forEach(p => {
    p.disabled = false
  })

  selectedShape = e.target.parent;
  propertyBoxHeader.innerHTML = selectedShape.attrs.id
  widthField.value = selectedShape.children[0].width()
  heightField.value = selectedShape.children[0].height()
  cornersField.value = selectedShape.children[0].cornerRadius()
};
