const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/rabbitholedb"
);

const usersSeed = [
    {
        "name" : "Elizabeth L Mather",
        "email" : "el@gmail.com",
        "password" : "$2a$10$udsbUOJMopX8ihK8fiLzxO3ArThhhJBJvKqsBgw3SzQuhFCKJqnFm",
        "avatar" : "https://media.licdn.com/dms/image/C4E03AQHLF8T7c4TObA/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=Gn-dtm9kX_jU6ZtQofxPXif3XK_KjuFXMrHNrIVbfrQ",
        "date" : ("2019-07-19T19:27:16.303Z")
    },
    {
        "name" : "Christy",
        "email" : "christy@gmail.com",
        "password" : "$2a$10$RVIpFdZTSlle8u0okdyMF.CZYGf2mFbPIyIxuL5..TnhW1TMEHqxu",
        "avatar" : "https://media.licdn.com/dms/image/C4E03AQHrNIWG_K8Ejg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=dexKzeBcwl_r1CNcxb62PJTUktc2iDF0NpvCzGEYpDw",
        "date" : ("2019-07-19T20:07:41.070Z")
    },
    {
        "name" : "Jen",
        "email" : "jen@gmail.com",
        "password" : "$2a$10$2kkjTn2XUzHdx11Kgs1mzeqeSryp3pavTCNi5wagFjpn9NidN819W",
        "avatar" : "https://media.licdn.com/dms/image/C4D03AQEYQT_JZMvXxg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=-352-9kTOVooHvXD711yx5nvm5Hdz597sKGFEYo2u8I",
        "date" : ("2019-07-19T20:07:56.502Z")
    },
    {
        "name" : "Robert",
        "email" : "robert@gmail.com",
        "password" : "$2a$10$O1geot17L7JEU.iPry58Ne1tz9jcMYCUiwC79xBaUNV6o36EneZpW",
        "avatar" : "https://ca.slack-edge.com/TD160CP16-UFUHN22M7-7f61939138a2-72",
        "date" : ("2019-07-19T20:12:24.059Z")
    }
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(usersSeed))
.then(data => {
    console.log(data.result.n + " users added!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});