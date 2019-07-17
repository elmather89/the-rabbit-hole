const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rabbitholedb"
);

const bookSeed = [
    {
        title: "Where the Wild Things Are",
        creator: "Maurice Sendak",
        synopsis: "Max is sent to bed without supper and imagines sailing away to the land of Wild Things, where he is made king.",
        originalPublisher: "Harper & Row",
        currentPublisher: "Red Fox",
        yearPublished: 1963,
        quote: "Let the wild rumpus start!",
        bookImage: "https://i.harperapps.com/covers/9780060254926/y648.jpg"
    },
    {
        title: "The Very Hungry Caterpillar",
        creator: "Eric Carle",
        synopsis: "Follows the progress of a very hungry caterpillar as he eats his way through a varied and very large quantity of food, until, full at last, he forms a coccoon around himself and goes to sleep.",
        originalPublisher: "World Publishing Company",
        currentPublisher: "Puffin Books",
        yearPublished: 1969,
        quote: "In the light of the moon a little egg lay on a leaf.",
        bookImage: "https://images-na.ssl-images-amazon.com/images/I/81Tfdl%2Bvm3L.jpg"
    },
    {
        title: "Charlotte's Web",
        creator: "E. B. White",
        synopsis: "‘Some Pig’. ‘Humble’. ‘Radiant’. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter.",
        originalPublisher: "Harper & Brothers",
        currentPublisher: "HarperCollins Publishers",
        yearPublished: 1952,
        quote: "If I can fool a bug... I can surely fool a man. People are not as smart as bugs.",
        bookImage: "https://i.harperapps.com/covers/9780060263867/x510.jpg"
    },
    {
        title: "The Trumpet of the Swan",
        creator: "E. B. White",
        synopsis: "Like the rest of his family, Louis is a trumpeter swan. But unlike his four brothers and sisters, Louis can't trumpet joyfully. In fact, he can't even make a sound. And since he can't trumpet his love, the beautiful swan Serena pays absolutely no attention to him. Louis tries everything he can think of to win Serena's affection;he even goes to school to learn to read and write. But nothing seems to work. Then his father steals him a real brass trumpet. Is a musical instrument the key to winning Louis his love?",
        originalPublisher: "Harper & Row",
        currentPublisher: "HarperCollins",
        yearPublished: 1970,
        quote: "Safety is all well and good: I prefer freedom.",
        bookImage: "https://images-na.ssl-images-amazon.com/images/I/51NUyaqOcjL._SX328_BO1,204,203,200_.jpg"
    },
    {
        title: "Stuart Little",
        creator: "E. B. White",
        synopsis: "Stuart Little is no ordinary mouse. Born to a family of humans, he lives in New York City with his parents, his older brother George, and Snowbell the cat. Though he's shy and thoughtful, he's also a true lover of adventure. Stuart's greatest adventure comes when his best friend, a beautiful little bird named Margalo, disappears from her nest. Determined to track her down, Stuart ventures away from home for the very first time in his life. He finds adventure aplenty. But will he find his friend?",
        originalPublisher: "Harper & Brothers",
        currentPublisher: "HarperCollins",
        yearPublished: 1945,
        quote: "Not every doctor can look into a mouse's ear without laughing.",
        bookImage: "https://images-na.ssl-images-amazon.com/images/I/61Dvo5DcSEL._SX333_BO1,204,203,200_.jpg"
    },
    {
        title: "The Giving Tree",
        creator: "Shel Silverstein",
        synopsis: "A young boy grows to manhood and old age experiencing the love and generosity of a tree which gives to him without thought of return.",
        originalPublisher: "Harper & Row",
        currentPublisher: "HarperCollins Publishers",
        yearPublished: 1964,
        quote: "And the boy loved the tree...very much. And the tree was happy.",
        bookImage: "https://static.wixstatic.com/media/fa39c3_c6c3b1266239468fa0c4fc352e1d17cd~mv2.jpg"
    },
    {
        title: "Madeline",
        creator: "Ludwig Bemelmans",
        synopsis: "In an old house in Paris that was covered in vines, lived twelve little girls in two straight lines. Madeline is the smallest of the girls. She is seven years old, and the only redhead. She is the bravest and most daring of the girls, flaunting at the tiger in the zoo and giving Miss Clavel a headache as she goes around the city doing all sorts of antics.",
        originalPublisher: "Viking Press",
        currentPublisher: "London: Hippo",
        yearPublished: 1939,
        quote: "The smallest one was Madeline.",
        bookImage: "https://s26162.pcdn.co/wp-content/uploads/2018/03/9780590089074_mres.jpg"
    },
    {
        title: "Curious George",
        creator: "H.A. Rey",
        synopsis: "the curious monkey, George is taken from the jungle by the man in the yellow hat to live in a new home, but--oh, what happened! Though trying to be good, George is still very curious and takes a swim in the ocean, escapes from jail, and goes for a flying ride on a bunch of balloons.",
        originalPublisher: "Houghton Mifflin Harcourt",
        currentPublisher: "Houghton Mifflin Co",
        yearPublished: 1941,
        quote: "What a nice little monkey. I would like to take him home with me.",
        bookImage: "https://images-na.ssl-images-amazon.com/images/I/513NAjhmZjL._SX258_BO1,204,203,200_.jpg"
    },
    {
        title: "Corduroy",
        creator: "Don Freeman",
        synopsis: "The amusing story of a toy bear whose one missing button from his green corduroy overalls almost costs him the opportunity of belonging to someone.",
        originalPublisher: "Viking Press",
        currentPublisher: "Viking Books for Young Readers",
        yearPublished: 1968,
        quote: "Look! There's the very bear I've always wanted.",
        bookImage: "https://images.penguinrandomhouse.com/cover/9781101631386"
    },
    {
        title: "Caps for Sale",
        creator: "Esphyr Slobodkina",
        synopsis: "Monkey-see-monkey-do. Tale of the Peddler who went to sleep with his unsold caps on his head - and of the monkeys who stole them and wouldn't give them back until, in disgust he threw down the one remaining cap.",
        originalPublisher: "W. R. Scott",
        currentPublisher: "HarperCollinsPublishers",
        yearPublished: 1940,
        quote: "You monkeys, you! Give me back my caps!",
        bookImage: "https://i.harperapps.com/covers/9780062134479/y648.jpg"
    },
    
];

db.Book
.remove({})
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.result.n + " book added!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});

