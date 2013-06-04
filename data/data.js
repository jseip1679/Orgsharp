//userData is an array of user objects
var userData = [
  {
    id: 0,
    firstname:"Joe",
    lastname: "Ceo",
    age: "28",
    mobile: "+1 (410) 819 6666",
    title: "Programmer",
  },
  {
    id: 1,
    firstname:"Samuel L.",
    lastname: "Dog",
    age: "4",
    title: "Dog",
    imgUrl: "http://2.media.collegehumor.cvcdn.com/61/55/ed68d65090620e2c3b66781a6b375f74-dog-may-actually-be-samuel-l-jackson.jpg"
  },
  {
    id: 2,
    firstname:"John",
    lastname: "Doe"
  },
  {
    id: 3,
    firstname:"Ali",
    lastname: "W",
    imgUrl:"http://m.c.lnkd.licdn.com/media/p/2/000/199/116/1a3678b.jpg"
  },
  {
    id: 4,
    firstname:"Jane",
    lastname: "Doe",
    imgUrl:"http://m.c.lnkd.licdn.com/media/p/2/000/199/116/1a3678b.jpg"
  },
  {
    id: 5,
    firstname:"Jane",
    lastname: "Doe",
    imgUrl:"http://m.c.lnkd.licdn.com/media/p/2/000/199/116/1a3678b.jpg"
  },
  {
    id: 6,
    firstname:"Jane",
    lastname: "Doe",
    imgUrl:"http://m.c.lnkd.licdn.com/media/p/2/000/199/116/1a3678b.jpg"
  },
  {
    id: 7,
    firstname:"Jane",
    lastname: "Doe",
    imgUrl:"http://m.c.lnkd.licdn.com/media/p/2/000/199/116/1a3678b.jpg"
  }
];

var hierarchyData = {
  treeDepth: 3,
  0:{"root":true, parent: null, children: [1,3]},
  1:{parent: 0, children:[2,4,5]},
  2:{parent: 1, children:[]},
  3:{parent: 0, children:[]},
  4:{parent: 1, children:[]},
  5:{parent: 1, children:[6]},
  6:{parent: 5, children:[]}
};
