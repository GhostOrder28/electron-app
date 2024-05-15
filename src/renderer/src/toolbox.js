import shapeGenerator from "./shape-generator";

const buttonWidget = document.querySelector('.button-widget');

// button widget initial position
const buttonWidgetInitTop = buttonWidget.offsetTop;
const buttonWidgetInitLeft = buttonWidget.offsetLeft;

// dragging
let initX;
let initY;
let firstX;
let firstY;
let dragging = false;
let currentMouseX;
let currentMouseY;
let elementHovered;

function onMouseDown (e) {
	e.preventDefault();

  dragging = true;
	initX = this.offsetLeft;
	initY = this.offsetTop;
	firstX = e.pageX;
	firstY = e.pageY;
};

function onMouseUp (e, layer) {
  dragging = false;
  buttonWidget.style.top = buttonWidgetInitTop + 'px'
  buttonWidget.style.left = buttonWidgetInitLeft + 'px'

  if (elementHovered.tagName === 'CANVAS') {
    const newButton = shapeGenerator(layer.getChildren().length);

    newButton.x(currentMouseX)
    newButton.y(currentMouseY)

    layer.add(newButton)
  };
};

function onMouseMove(e) {
  if (!dragging) return;

	this.style.left = initX+e.pageX-firstX + 'px';
	this.style.top = initY+e.pageY-firstY + 'px';
  currentMouseX = e.pageX;
  currentMouseY = e.pageY;
  elementHovered = document.elementsFromPoint(e.pageX, e.pageY)[2]
}

export {
  onMouseDown,
  onMouseUp,
  onMouseMove,
}
