import Konva from "konva";
import { onMouseUp, onMouseDown, onMouseMove } from "./tool-box";

const buttonWidget = document.querySelector('.button-widget');
const canvas = document.querySelector('#canvas');
const props = document.querySelectorAll('#propertybox input');
props.forEach(p => {
  p.disabled = true
})

const width = canvas.offsetWidth;
const height = canvas.offsetHeight;

export const stage = new Konva.Stage({
  container: canvas,
  width,
  height
});

export const layer = new Konva.Layer();

stage.add(layer)

layer.draw()

buttonWidget.addEventListener('mousedown', onMouseDown, false);
buttonWidget.addEventListener('mouseup', function () {
  onMouseUp(layer)
}, false);
buttonWidget.addEventListener('mousemove', onMouseMove, false);
