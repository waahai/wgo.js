import shadow from './stoneShadow';
import CanvasBoard from '..';

export default {
    // draw handler for stone layer
  stone: {
        // drawing function - args object contain info about drawing object, board is main board object
    draw (canvasCtx: CanvasRenderingContext2D, args: any, board: CanvasBoard) {
      const stoneRadius = board.config.theme.stoneSize;
      const radgrad = canvasCtx.createRadialGradient(
        -2 * stoneRadius / 5,
        -2 * stoneRadius / 5,
        1,
        -stoneRadius / 5,
        -stoneRadius / 5,
        4 * stoneRadius / 5,
      );
      radgrad.addColorStop(0, '#666');
      radgrad.addColorStop(1, '#000');

      canvasCtx.beginPath();
      canvasCtx.fillStyle = radgrad;
      canvasCtx.arc(0, 0, stoneRadius, 0, 2 * Math.PI, true);
      canvasCtx.fill();
    },
  },

    // adding shadow
  shadow,
};