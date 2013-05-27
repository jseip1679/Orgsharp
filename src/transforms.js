var translate3d = function(x, y, z){
  return "translate3d(" + x + "px, " + y + "px, " + z + "px)";
};

var rotateAxis = function(axis, degree){
  console.log("rotate"+axis+"("+degree+"deg)");
  return "rotate"+axis+"("+degree+"deg)";
};