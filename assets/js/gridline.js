document.addEventListener("DOMContentLoaded", function(event) {

var maxW = $(window).width();

function gridLine(dir, pos, side, margin, col, xtr) {
  var gridClass = "";
  var gridStyle = "";
  if (dir == "h") {
    gridClass = "guideH";
    gridStyle = side;
    gridSize = "width:";
  } else {
    gridClass = "guideV";
    gridStyle = side;
    gridSize = "height:";
  }
  if (col != null) {
    gridCol = "#" + col;
  } else {
    gridCol = "#00FFFF";
  }

  if (margin != null) {
    var newSize = 100 - margin;
    document.write(
      '<div class="' +
        gridClass +
        '" style="' +
        gridStyle +
        ":" +
        pos +
        ";margin:" +
        margin +
        "px;" +
        gridSize +
        newSize +
        "%;background:" +
        gridCol +
        ";" +
        xtr +
        '">&nbsp;</div>'
    );
  } else {
    document.write(
      '<div class="' +
        gridClass +
        '" style="' +
        gridStyle +
        ":" +
        pos +
        ";background:" +
        gridCol +
        ";" +
        xtr +
        '">&nbsp;</div>'
    );
  }
}

//global guides
gridLine("v", "27px", "left", 0);
gridLine("v", "875px", "left", 0);
gridLine("h", "25px", "top", 0);

});

//special margin lines
for (var i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    gridLine(
      "h",
      "1px",
      "bottom",
      2 + i * 4,
      "FF4EFF",
      "position:absolute;bottom:-5;"
    );
  } else {
    gridLine(
      "h",
      "1px",
      "bottom",
      2 + i * 4,
      "9636FC",
      "position:absolute;bottom:-5;"
    );
  }
  if (i % 2 == 0) {
    gridLine("v", "6px", "right", 9 + i * 4, "9636FC", "");
  }
}

//import guides from each page
