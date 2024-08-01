/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function() {
  var Marzipano = window.Marzipano;
  var createEditableLayers = window.createEditableLayers;
  var mod = Marzipano.util.mod;
  var editMode = window.editMode;
  var brush = window.brush;

  var viewerElement = document.getElementById('pano');

  // Create viewer.
  var viewer = new Marzipano.Viewer(viewerElement);

  // Get stage.
  var stage = viewer.stage();

  // Create layers and add them into stage.
  var imageUrl = "test.jpg";
  createEditableLayers(stage, imageUrl, function(err, layers) {
    if (err) {
      throw err;
    }
    stage.addLayer(layers.colorLayer);
    stage.addLayer(layers.bwLayer);

    var colorCanvas = layers.colorLayer.source().asset().element();
    var bwCanvas = layers.bwLayer.source().asset().element();

    var view = layers.bwLayer.view();
    var canvasAsset = layers.bwLayer.source().asset();
    var canvas = bwCanvas;
    var ctx = canvas.getContext('2d');

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var previousPressPosition = null;

    // const points = [
    //   { x: 1200, y: 1200 },
    //   { x: 1400, y: 1100 },
    //   { x: 1600, y: 1200 },
    //   { x: 1700, y: 1400 },
    //   { x: 1500, y: 1600 },
    //   { x: 1300, y: 1600 },
    //   { x: 1100, y: 1400 }
    // ];

    function drawPolygon() {
      if (points.length < 3) { return; }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
      ctx.fill();
      ctx.stroke();

      // Draw vertices
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
      });
    }

    function getMousePos(event) {
      var pressPosition = { x: event.clientX, y: event.clientY };
      var coordinates = view.screenToCoordinates(pressPosition);
      var imageXY = coordinatesToEquirect(coordinates, canvas.width, canvas.height);
      // const rect = canvas.getBoundingClientRect();
      // return {
      //   x: event.clientX - rect.left,
      //   y: event.clientY - rect.top
      // };

      return imageXY;
    }

    function findDraggingPoint(mousePos) {
      return points.find(point => {
        const dx = point.x - mousePos.x;
        const dy = point.y - mousePos.y;
        return Math.sqrt(dx * dx + dy * dy) < 5;
      });
    }

    let draggingPoint = null;

    window.addEventListener('keypress', (event) => {
      if (event.ctrlKey) {
        viewer.controls().disable();
      }
    });

    window.addEventListener('keyup', (event) => {
      viewer.controls().enable();
    });


    var points = [];

    function addPoint(point) {
      points.push(point);
      drawPolygon();
      canvasAsset.markDirty();
    }

    viewerElement.addEventListener('click', (e) => {
      if (e.shiftKey) {
        const mousePos = getMousePos(e);
        console.log(mousePos);
        addPoint(mousePos);
      }
    });

    


    viewerElement.addEventListener('mousedown', (e) => {
      // if (editMode.get()) {
      if (event.ctrlKey) {
        // const mousePos = getMousePos(event);
        var pressPosition = { x: e.clientX, y: e.clientY };
        var coordinates = view.screenToCoordinates(pressPosition);
        var imageXY = coordinatesToEquirect(coordinates, canvas.width, canvas.height);
        // var centerX = Math.floor(imageXY.x);
        // var centerY = Math.floor(imageXY.y);

        // const p = equirectToCoordinates(mousePos, canvas.width, canvas.height);
        
        draggingPoint = findDraggingPoint(imageXY);

        console.log(draggingPoint);
        viewer.controls().disable();
      }
        
      // }
    });

    viewerElement.addEventListener('mousemove', (e) => {
      // console.log(mousePos);
      if (draggingPoint) {
        
        // const mousePos = getMousePos(event);

        var pressPosition = { x: e.clientX, y: e.clientY };
        var coordinates = view.screenToCoordinates(pressPosition);
        var imageXY = coordinatesToEquirect(coordinates, canvas.width, canvas.height);

        
        // console.log(imageXY);
        draggingPoint.x = imageXY.x;
        draggingPoint.y = imageXY.y;

        console.log(points);
        drawPolygon();
        canvasAsset.markDirty();
      }
    });

    viewerElement.addEventListener('mouseup', () => {
      draggingPoint = null;
      // viewer.controls().enable();
    });

    // drawPolygon();
    

    // editMode.addEventListener('changed', function() {
    //   if (editMode.get()) {
    //     viewer.controls().disable();
    //   } else {
    //     viewer.controls().enable();
    //   }
    //   // brush.updateCursor();
    // });

    // viewerElement.addEventListener('mousedown', function(e) {
    //   var pressPosition = { x: e.clientX, y: e.clientY };
    //   if (editMode.get()) {
    //     paintOnScreenXY(pressPosition);
    //     previousPressPosition = pressPosition;

    //     ctx.putImageData(imageData, 0, 0);
    //     canvasAsset.markDirty();
    //   }
    // });

    // viewerElement.addEventListener('mouseup', function() {
    //   previousPressPosition = null;
    // });

    // viewerElement.addEventListener('mousemove', function(e) {
    //   if (editMode.get() && previousPressPosition) {
    //     var pressPosition = { x: e.clientX, y: e.clientY };
    //     paintBetween(previousPressPosition, pressPosition);
    //     previousPressPosition = pressPosition;
    //     ctx.putImageData(imageData, 0, 0);
    //     canvasAsset.markDirty();
    //     e.stopPropagation();
    //   }
    //   brush.updateCursor(e);
    // });

    // function paintBetween(previous, current) {
    //   var x0 = previous.x;
    //   var x1 = current.x;
    //   var y0 = previous.y;
    //   var y1 = current.y;

    //   var distance = Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0));

    //   var maxIntervalSize = 8;
    //   var intervals = Math.ceil(distance)/maxIntervalSize;

    //   var xInterval = (x1 - x0)/intervals;
    //   var yInterval = (y1 - y0)/intervals;

    //   for (var i = 0; i < intervals; i++) {
    //     paintOnScreenXY({ x: x0 + xInterval*i, y: y0 + yInterval*i });
    //   }
    // }

    // function paintOnScreenXY(screenXY) {
    //   var coordinates = view.screenToCoordinates(screenXY);
    //   var imageXY = coordinatesToEquirect(coordinates, canvas.width, canvas.height);
    //   var centerX = Math.floor(imageXY.x);
    //   var centerY = Math.floor(imageXY.y);
    //   checkAndPaint(centerX,    centerY,    1,  1, screenXY);
    //   checkAndPaint(centerX,    centerY-1,  1, -1, screenXY);
    //   checkAndPaint(centerX-1,  centerY,   -1,  1, screenXY);
    //   checkAndPaint(centerX-1,  centerY-1, -1, -1, screenXY);
    // }

    // function checkAndPaint(startX, startY, xDirection, yDirection, screenXY) {
    //   var pixelX, pixelY;
    //   for (pixelY = startY; true; pixelY = pixelY + yDirection) {
    //     if (pixelY > canvas.height) {
    //       break;
    //     }
    //     var anyInRange = false;
    //     var firstX = true;
    //     for (pixelX = startX; true; pixelX = Marzipano.util.mod(pixelX + xDirection, canvas.width)) {
    //       if (!firstX && pixelX === startX) { break; }
    //       firstX = false;
    //       if (paintIfInRange({ x: pixelX, y: pixelY }, screenXY)) {
    //         anyInRange = true;
    //       }
    //       else {
    //         break;
    //       }
    //     }
    //     if (!anyInRange) {
    //       break;
    //     }
    //   }
    // }

    // function paintIfInRange(pixelXY, screenXY) {
    //   var pixelCoordinates = equirectToCoordinates(pixelXY, canvas.width, canvas.height);
    //   var pixelScreenPosition  = view.coordinatesToScreen(pixelCoordinates);

    //   var intensity = calculateIntensity(screenXY, pixelScreenPosition);
    //   if (intensity > 0) {
    //     var alphaToSet = editMode.get() === 'hide' ? 0 : 255;
    //     var index = (pixelXY.y * imageData.width + pixelXY.x)*4;
    //     imageData.data[index+3] = imageData.data[index+3] * (1-intensity) + alphaToSet * intensity;
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }

    // function calculateIntensity(originXY, testXY) {
    //   var dist = Math.sqrt(
    //     (originXY.x - testXY.x) * (originXY.x - testXY.x) +
    //     (originXY.y - testXY.y) * (originXY.y - testXY.y));

    //   var intensity = Math.max((brush.radius - dist) / brush.radius, 0);
    //   return intensity;
    // }

    function coordinatesToEquirect(coordinates, width, height) {
      var theta = Marzipano.util.mod(coordinates.yaw - Math.PI, 2 * Math.PI);
      var phi = Marzipano.util.mod((coordinates.pitch - Math.PI/2), Math.PI);

      var s = theta / (2 * Math.PI);
      var t = phi / Math.PI;

      var imageX = Math.floor(s * width);
      var imageY = Math.floor(t * height);

      return { x: imageX, y: imageY };
    }

    function equirectToCoordinates(imageXY, width, height) {
      var s = imageXY.x / width;
      var t = imageXY.y / height;

      var theta = s * 2 * Math.PI;
      var phi = t * Math.PI;

      var yaw = theta + Math.PI;
      var pitch = phi - Math.PI/2;

      return { yaw: yaw, pitch: pitch };
    }

  });

})();
