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
  //console.log("Setting XVG at Endpoints: ("+x1+","+y1+"):("+x2+","+y2+") with controls: ("+xCtrl+","+yCtrl+")");
  return "<path d=\"M"+(x1+center)+","+y1+" Q"+(xCtrl+center)+","+yCtrl+" " +(x2+center)+","+y2+"\" fill=\"none\" stroke=\"#888888\" stroke-width=\"4\" />";
};

var updateTreeDepth = function(hierarchyData){ //TODO FIXME
  var count = 0;

  var traverseChildren = function(nodeID){
    if(!hierarchyData[nodeID].children){return;}
    if(hierarchyData[nodeID].children.length === 0){return;}
      count++;
    for(var i = 0; i < hierarchyData[nodeID].children.length; i++){
      traverseChildren(hierarchyData[nodeID].children[i]);
    }
  };
  traverseChildren(0);
  console.log("oldDepth:", hierarchyData.treeDepth);
  console.log("newDepth:", count);

  hierarchyData.treeDepth = count;
  return count;
};

