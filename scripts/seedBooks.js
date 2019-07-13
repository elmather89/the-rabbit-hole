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
        description: "Max is sent to bed without supper and imagines sailing away to the land of Wild Things,where he is made king.",
        publisher: "Harper & Row",
        year: 1963,
    },
    {
        title: "The Very Hungry Caterpillar",
        creator: "Eric Carle",
        description: "Follows the progress of a very hungry caterpillar as he eats his way through a varied and very large quantity of food, until, full at last, he forms a coccoon around himself and goes to sleep.",
        publisher: "World Publishing Company",
        year: 1969,
    },
    {
        title: "Charlotte's Web",
        creator: "E. B. White",
        description: "‘Some Pig’. ‘Humble’. ‘Radiant’. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter.",
        publisher: "Harper & Brothers",
        year: 1952,
    },
    {
        title: "The Trumpet of the Swan",
        creator: "E. B. White",
        description: "Like the rest of his family, Louis is a trumpeter swan. But unlike his four brothers and sisters, Louis can't trumpet joyfully. In fact, he can't even make a sound. And since he can't trumpet his love, the beautiful swan Serena pays absolutely no attention to him. Louis tries everything he can think of to win Serena's affection;he even goes to school to learn to read and write. But nothing seems to work. Then his father steals him a real brass trumpet. Is a musical instrument the key to winning Louis his love?",
        publisher: "Harper & Row",
        year: 1970,
    },
    {
        title: "Stuart Little",
        creator: "E. B. White",
        description: "Stuart Little is no ordinary mouse. Born to a family of humans, he lives in New York City with his parents, his older brother George, and Snowbell the cat. Though he's shy and thoughtful, he's also a true lover of adventure. Stuart's greatest adventure comes when his best friend, a beautiful little bird named Margalo, disappears from her nest. Determined to track her down, Stuart ventures away from home for the very first time in his life. He finds adventure aplenty. But will he find his friend?",
        publisher: "Harper & Brothers",
        year: 1945,
    },
    {
        title: "The Giving Tree",
        creator: "Shel Silverstein",
        description: "A young boy grows to manhood and old age experiencing the love and generosity of a tree which gives to him without thought of return.",
        publisher: "Harper & Row",
        year: 1964,
    },
    {
        title: "Madeline",
        creator: "Ludwig Bemelmans",
        description: "Madeline is one of the best-loved characters in children's literature. Set in picturesque Paris, this tale of a brave little girl's trip to the hospital was a Caldecott Honor Book in 1940 and has as much appeal today as it did then. The combination of a spirited heroine, timelessly appealing art, cheerful humor, and rhythmic text makes Madeline a perennial favorite with children of all ages.",
        publisher: "Viking Press",
        year: 1939,
    },
    {
        title: "Curious George",
        creator: "H.A. Rey",
        description: "The first adventure in this highly popular series tells how the little monkey Curious George, caught in the jungle and brought back to the city by a man in a yellow hat, can't help being interested in all the new things around him. Though well meaning, George's curiosity always gets him into trouble.",
        publisher: "Houghton Mifflin Harcourt",
        year: 1941,
    },
    {
        title: "Corduroy",
        creator: "Don Freeman",
        description: "The amusing story of a toy bear whose one missing button from his green corduroy overalls almost costs him the opportunity of belonging to someone.",
        publisher: "Viking Press",
        year: 1968,
    },
    {
        title: "Caps for Sale",
        creator: "Esphyr Slobodkina",
        description: "Monkey-see-monkey-do. Tale of the Peddler who went to sleep with his unsold caps on his head - and of the monkeys who stole them and wouldn't give them back until, in disgust he threw down the one remaining cap.",
        publisher: "W. R. Scott",
        year: 1940,
    },
    
];

db.Book
.then(() => db.Book.collection.insertMany(bookSeed))
.then(data => {
    console.log(data.result.n + " book added!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});

