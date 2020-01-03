import { Point, Color } from '../types';
import CanvasBoard from './CanvasBoard';

export interface BoardViewport {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface CanvasBoardThemeBase {
  // stones
  stoneHandler: DrawHandler<BoardFieldObject>;
  stoneSize: number;

  // shadow
  shadowColor: string;
  shadowTransparentColor: string;
  shadowBlur: number;
  shadowOffsetX: number;
  shadowOffsetY: number;

  // markup
  markupBlackColor: string;
  markupWhiteColor: string;
  markupNoneColor: string;
  markupLinesWidth: number;
  markupHandlers: {
    [key: string]: DrawHandler<BoardFieldObject>;
  };

  // grid & star points
  gridLinesWidth: number;
  gridLinesColor: string;
  starColor: string;
  starSize: number;

  // coordinates
  coordinatesHandler: DrawHandler;
  coordinatesColor: string;
  coordinatesX: string | (string | number)[];
  coordinatesY: string | (string | number)[];

  // other
  variationColor: string;
  font: string;
  linesShift: number;
  imageFolder: string;

  // background
  backgroundColor: string;
  backgroundImage: string;
}

export type CanvasBoardTheme = {
  [key in keyof CanvasBoardThemeBase]: CanvasBoardThemeBase[key] | ((board: CanvasBoard) => CanvasBoardThemeBase[key]);
};

export interface CanvasBoardConfig {
  size: number;
  width: number;
  height: number;
  starPoints: {
    [size: number]: Point[];
  };
  viewport: BoardViewport;
  coordinates: boolean;
  theme: CanvasBoardTheme;
}

export interface DrawFunction<P> {
  (context: CanvasRenderingContext2D, args: P, board: CanvasBoard): void;
}

export interface DrawHandler<P = any> {
  [layer: string]: {
    draw: DrawFunction<P>;
    clear?: DrawFunction<P>;
  };
}

export interface BoardFieldObject {
  x: number;
  y: number;
  c?: Color;
  [key: string]: any;
}

export interface BoardCustomObject {
  handler: DrawHandler<BoardCustomObject>;
  [key: string]: any;
}