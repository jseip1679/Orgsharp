var translate3d = function(x, y, z){
  return "translate3d(" + x + "px, " + y + "px, " + z + "px)";
};

var rotateAxis = function(axis, degree){
  return "rotate"+axis+"("+degree+"deg)";
};

var offsetIndex = function(n){
  if(n%2 === 0){
    return -n || -1;
  }else{
    return n;
  }
};

var rotateAxes = function(x, y, z){
  return "rotateX(" + x + "deg) " + "rotateY(" + y + "deg) " + "rotateZ(" + z + "deg)";
};


var generateSVGPath = function (x1,y1,x2,y2,center){
  var xCtrl,
      yCtrl;
  xCtrl = Math.floor((x2+x1)*0.50);
  yCtrl = Math.floor((y1+y2)*0.35);

  center = center || 0;

  var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
  newLine.setAttribute("x1",""+(x1+center));
  newLine.setAttribute("x2",""+(x2+center));
  newLine.setAttribute("y1",""+y1);
  newLine.setAttribute("y2",""+y2);
  newLine.setAttribute("stroke-width","2");
  newLine.setAttribute("stroke","gray");

  //console.log("Setting XVG at Endpoints: ("+x1+","+y1+"):("+x2+","+y2+") with controls: ("+xCtrl+","+yCtrl+")");
  return newLine;
};

var updateTreeDepth = function(hierarchyData){

  //refactoring to accept model
  var getMaxDepthofChildren  = function(nodeID,curDepth){
    var children = hierarchyData.get(nodeID).children;

    //get the depth of each child path
    var childDepths = [];

    curDepth = curDepth || 1;

    if(children && children.length >= 0){
      for(var i = 0; i < children.length; i++){
        childDepths.push(getMaxDepthofChildren(children[i],curDepth+1));
      }
      // console.log("NodeID:" , nodeID, " Depth: ",curDepth," Child Depths: ", childDepths);
    }

    //return the greatest of each child path
    var greatestChild = 0;
    for(var j = 0; j < childDepths.length; j++){
      if(childDepths[j] > greatestChild){
        greatestChild = childDepths[j];
      }
    }

    if(curDepth > greatestChild){
      return curDepth;
    } else {
      return greatestChild;
    }

  };

  // console.log("OVERALL DEPTH IS:" , getMaxDepthofChildren(0,0));

  return getMaxDepthofChildren(0,0);
};

