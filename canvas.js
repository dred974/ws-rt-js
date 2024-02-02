document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("canvas");
    var ctv = canvas.getContext("2d");
    
    var frameRate = 1000 / 30
    setInterval(gameloop(), frameRate)
    
    
    function gameloop() {
        clear_screen();
        draw_minimap(map, 8, 0.5);
    }

    function draw_circle(x, y, radius, color) {
        var canvas = document.getElementById("canvas");
        var ctc = canvas.getContext("2d");
        const gradient = ctc.createRadialGradient(0, 90, 30, 100, 100, 70);
        
        ctc.beginPath();
        ctc.lineWidth = 10
        ctc.strokeStyle = color
        ctc.arc(x, y, radius, 0, 2 * Math.PI);
        ctc.fillStyle = gradient;
        ctc.fill();
        ctc.stroke()
        ctc.closePath();
    }
    
    function draw_line(startX, startY, endX, endY, color)
    {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        
        ctx.fillStyle = color;
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.closePath();
        ctx.stroke();
    }
    
    function clear_screen(color = "red") {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
    
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 380, 280);
    }

    function createMap() {
        return map
    }

    function draw_minimap(map, cellSize, scale) {
        var minimapCanvas = document.createElement("canvas");
        minimapCanvas.id = "minimap";
        document.body.appendChild(minimapCanvas);
        var minimapCtx = minimapCanvas.getContext("2d");

        minimapCanvas.width = map[0].length * cellSize * scale
        minimapCanvas.height = map.length * cellSize * scale

        minimapCanvas.style.position = "absolute"
        minimapCanvas.style.left = "0%"
        minimapCanvas.style.top = "0%"

        for (var y = 0; y < map.length; y++) {
            for (var x = 0; x < map[y].length; x++) {
                var Celltype = map[y][x]
                var color = (Celltype >= 1) ? "black" : "red";

                minimapCtx.fillStyle = color
                minimapCtx.fillRect(x * cellSize * scale, y * cellSize * scale, cellSize * scale, cellSize * scale)
            }
        }
    }
})