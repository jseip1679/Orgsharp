//userData is an array of user objects
var userData = [
  {
    id: 0,
    firstname:"Joe",
    lastname: "Ceo",
    age: "28",
    mobile: "+1 (410) 819 6666",
    title: "Programmer",
    email: "user0@orgsharp.com",
    imgUrl: "http://images.apple.com/pr/bios/images/cook_hero20110204.png"
  },
  {
    id: 1,
    firstname:"Samuel L.",
    lastname: "Dog",
    age: "4",
    title: "Dog",
    email: "user1@orgsharp.com",
    imgUrl: "http://2.media.collegehumor.cvcdn.com/61/55/ed68d65090620e2c3b66781a6b375f74-dog-may-actually-be-samuel-l-jackson.jpg"
  },
  {
    id: 2,
    email: "user1@orgsharp.com",
    firstname:"John",
    lastname: "Doe"
  },
  {
    id: 3,
    firstname:"Ali",
    email: "user3@orgsharp.com",
    lastname: "W",
    imgUrl:"./img/female_exec.jpg"
  },
  {
    id: 4,
    firstname:"Jane",
    email: "user4@orgsharp.com",
    lastname: "Jones",
    imgUrl:"./img/female_exec.jpg"
  },
  {
    id: 5,
    firstname:"Jane",
    lastname: "Jones",
    email: "user5@orgsharp.com",
    imgUrl:"./img/female_exec.jpg"
  },
  {
    id: 6,
    firstname:"Jane",
    lastname: "Jones",
    email: "user6@orgsharp.com",
    imgUrl:"./img/female_exec.jpg"
  },
  {
    id: 7,
    firstname:"Jane",
    lastname: "Doe",
    email: "user7@orgsharp.com", 
    imgUrl:"http://m.c.lnkd.licdn.com/media/p/2/000/199/116/1a3678b.jpg"
  }
];

var hierarchyData = {
  treeDepth: 4,
  0:{"root":true, parent: null, children: [1,3]},
  1:{parent: 0, children:[2,4,5]},
  2:{parent: 1, children:[]},
  3:{parent: 0, children:[]},
  4:{parent: 1, children:[]},
  5:{parent: 1, children:[6]},
  6:{parent: 5, children:[7]},
  7:{parent: 6, children:[]}
};
