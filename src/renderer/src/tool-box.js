import shapeGenerator from "./shape-generator";

const buttonWidget = document.querySelector('.button-widget');

// button widget initial position
const WIDGET_DEFAULT_TOP = buttonWidget.offsetTop;
const WIDGET_DEFAULT_LEFT = buttonWidget.offsetLeft;

// dragging variables
let initX;
let initY;
let firstX;
let firstY;
let isDragging = false;
let currentMouseX;
let currentMouseY;
let elementHovered;

function onMouseDown (e) {
	e.preventDefault();

  isDragging = true;
	initX = this.offsetLeft;
	initY = this.offsetTop;
	firstX = e.pageX;
	firstY = e.pageY;
};

function onMouseUp (layer) {
  isDragging = false;
  buttonWidget.style.top = WIDGET_DEFAULT_TOP + 'px'
  buttonWidget.style.left = WIDGET_DEFAULT_LEFT + 'px'

  if (elementHovered.tagName === 'CANVAS') {
    const newButton = shapeGenerator(layer.getChildren().length);
    const newButtonXPos = currentMouseX - newButton.width() / 2;
    const newButtonYPos = currentMouseY - newButton.height() / 2;

    newButton.x(newButtonXPos)
    newButton.y(newButtonYPos)

    layer.add(newButton)
  };
};

function onMouseMove(e) {
  if (!isDragging) return;

	this.style.left = initX + e.pageX - firstX + 'px';
	this.style.top = initY + e.pageY - firstY + 'px';

  const currentElementBehindMouse = document.elementsFromPoint(e.pageX, e.pageY)[2];

  currentMouseX = e.pageX;
  currentMouseY = e.pageY;

  elementHovered = currentElementBehindMouse
}

export {
  onMouseDown,
  onMouseUp,
  onMouseMove,
}
