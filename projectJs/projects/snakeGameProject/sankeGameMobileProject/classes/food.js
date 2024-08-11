import { getRandomInt } from "../utils/helpers.js";


export class Food {
    x = 0;
    y = 0;
    size = 20;
    constructor(gridSize, snakePositions) {
        this.x = 0;
        this.y = 0;
        this.respawn(gridSize, snakePositions);
    }

    respawn(gridSize, snakePositions) {
        let collisionOrDeviation = true;
        while (collisionOrDeviation) {
            gridSize = (300 / this.size)
            this.x = getRandomInt(0, gridSize) * this.size;
            this.y = getRandomInt(0, gridSize) * this.size;
            collisionOrDeviation = false;
            snakePositions.forEach((point) => {
                if (point.x === this.x && point.y === this.y) {
                    collisionOrDeviation = true;
                }
            });
        }
    }
    draw(canvasContext) {
        canvasContext.fillStyle = "red";
        canvasContext.fillRect(this.x, this.y, this.size, this.size);
    }
}
