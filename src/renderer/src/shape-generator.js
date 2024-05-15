import Konva from "konva";
import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_FILL,
  DEFAULT_STROKE,
  DEFAULT_DRAGGABLE,
  DEFAULT_STROKE_WIDTH,
  DEFAULT_CORNER_RADIOUS,
  DEFAULT_TEXT,
  DEFAULT_FONT_SIZE,
} from './consts';
import { shapeSelector } from "./property-box";
import { stage } from "./renderer";

function shapeGenerator (currentChildrenLength) {
  const buttonGroup = new Konva.Group({
    draggable: DEFAULT_DRAGGABLE,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
    id: `Button ${currentChildrenLength + 1}`
  });
  const buttonShape = new Konva.Rect({
    width: buttonGroup.width(),
    height: buttonGroup.height(),
    fill: DEFAULT_FILL,
    stroke: DEFAULT_STROKE,
    strokeWidth: DEFAULT_STROKE_WIDTH,
    cornerRadius: DEFAULT_CORNER_RADIOUS,
  });

  const buttonText = new Konva.Text({
    text: `${DEFAULT_TEXT} ${currentChildrenLength + 1}`,
    width: buttonGroup.width(),
    height: buttonGroup.height(),
    fontSize: DEFAULT_FONT_SIZE,
    align: 'center',
    verticalAlign: 'middle',
    listening: false,
  })

  buttonGroup.add(buttonShape)
  buttonGroup.add(buttonText)

  buttonGroup.on('click', (e) => {
    shapeSelector(e)
  })
  buttonGroup.on('mouseenter', function () {
    stage.container().style.cursor = 'pointer';
  });
  buttonGroup.on('mouseleave', function () {
    stage.container().style.cursor = 'default';
  });


  return buttonGroup
};

export default shapeGenerator;
