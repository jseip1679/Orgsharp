//userData is an array of user objects
var userData = [
  {
    id: 0,
    firstname:"Jake",
    lastname: "Seip",
    age: "28",
    mobile: "+1 (410) 819 - 6666",
    title: "Programmer",
    email: "jake.seip@gmail.com",
    imgUrl: "http://m3.licdn.com/mpr/pub/image-Z2Nf9njxRb9xp8FVXNle4CxBPRc048MHZ22iRrlxPERpuvUxZ2NiuR8xPvEEuRfduawI/jake-seip.jpg",
    employeeIds:{}
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
    firstname:"Jane",
    lastname: "Doe",
    imgUrl:"http://m.c.lnkd.licdn.com/media/p/2/000/199/116/1a3678b.jpg"
  }
];

var hierarchyData = {
  0:{"root":"true", children: [1,2]},
  1:{children:[3]},
  2:[],
  3:[]
};
