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