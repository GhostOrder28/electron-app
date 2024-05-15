import Konva from "konva";
import { onMouseUp, onMouseDown, onMouseMove } from "./toolbox";

const buttonWidget = document.querySelector('.button-widget');
const canvas = document.querySelector('#canvas');
const props = document.querySelectorAll('#propertybox input');
props.forEach(p => {
  p.disabled = true
})

const width = canvas.offsetWidth;
const height = canvas.offsetHeight;

const stage = new Konva.Stage({
  container: canvas,   // id of container <div>
  width,
  height
});

export const layer = new Konva.Layer();

stage.add(layer)

layer.draw()

buttonWidget.addEventListener('mousedown', onMouseDown, false);
buttonWidget.addEventListener('mouseup', function (e) {
  onMouseUp(e, layer)
}, false);
buttonWidget.addEventListener('mousemove', onMouseMove, false);
