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
        synopsis: "Max is sent to bed without supper and imagines sailing away to the land of Wild Things,where he is made king.",
        originalPublisher: "Harper & Row",
        currentPublisher: " ",
        yearPublished: 1963,
        quote: " ",
        image: " ",
    },
    {
        title: "The Very Hungry Caterpillar",
        creator: "Eric Carle",
        synopsis: "Follows the progress of a very hungry caterpillar as he eats his way through a varied and very large quantity of food, until, full at last, he forms a coccoon around himself and goes to sleep.",
        originalPublisher: "World Publishing Company",
        currentPublisher: " ",
        yearPublished: 1969,
        quote: " ",
        image: " ",
    },
    {
        title: "Charlotte's Web",
        creator: "E. B. White",
        synopsis: "‘Some Pig’. ‘Humble’. ‘Radiant’. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter.",
        originalPublisher: "Harper & Brothers",
        currentPublisher: " ",
        yearPublished: 1952,
        quote: " ",
        image: " ",
    },
    {
        title: "The Trumpet of the Swan",
        creator: "E. B. White",
        synopsis: "Like the rest of his family, Louis is a trumpeter swan. But unlike his four brothers and sisters, Louis can't trumpet joyfully. In fact, he can't even make a sound. And since he can't trumpet his love, the beautiful swan Serena pays absolutely no attention to him. Louis tries everything he can think of to win Serena's affection;he even goes to school to learn to read and write. But nothing seems to work. Then his father steals him a real brass trumpet. Is a musical instrument the key to winning Louis his love?",
        originalPublisher: "Harper & Row",
        currentPublisher: " ",
        yearPublished: 1970,
        quote: " ",
        image: " ",
    },
    {
        title: "Stuart Little",
        creator: "E. B. White",
        synopsis: "Stuart Little is no ordinary mouse. Born to a family of humans, he lives in New York City with his parents, his older brother George, and Snowbell the cat. Though he's shy and thoughtful, he's also a true lover of adventure. Stuart's greatest adventure comes when his best friend, a beautiful little bird named Margalo, disappears from her nest. Determined to track her down, Stuart ventures away from home for the very first time in his life. He finds adventure aplenty. But will he find his friend?",
        originalPublisher: "Harper & Brothers",
        currentPublisher: " ",
        yearPublished: 1945,
        quote: " ",
        image: " ",
    },
    {
        title: "The Giving Tree",
        creator: "Shel Silverstein",
        synopsis: "A young boy grows to manhood and old age experiencing the love and generosity of a tree which gives to him without thought of return.",
        originalPublisher: "Harper & Row",
        currentPublisher: " ",
        yearPublished: 1964,
        quote: " ",
        image: " ",
    },
    {
        title: "Madeline",
        creator: "Ludwig Bemelmans",
        synopsis: "Madeline is one of the best-loved characters in children's literature. Set in picturesque Paris, this tale of a brave little girl's trip to the hospital was a Caldecott Honor Book in 1940 and has as much appeal today as it did then. The combination of a spirited heroine, timelessly appealing art, cheerful humor, and rhythmic text makes Madeline a perennial favorite with children of all ages.",
        originalPublisher: "Viking Press",
        currentPublisher: " ",
        yearPublished: 1939,
        quote: " ",
        image: " ",
    },
    {
        title: "Curious George",
        creator: "H.A. Rey",
        synopsis: "The first adventure in this highly popular series tells how the little monkey Curious George, caught in the jungle and brought back to the city by a man in a yellow hat, can't help being interested in all the new things around him. Though well meaning, George's curiosity always gets him into trouble.",
        originalPublisher: "Houghton Mifflin Harcourt",
        currentPublisher: " ",
        yearPublished: 1941,
        quote: " ",
        image: " ",
    },
    {
        title: "Corduroy",
        creator: "Don Freeman",
        synopsis: "The amusing story of a toy bear whose one missing button from his green corduroy overalls almost costs him the opportunity of belonging to someone.",
        originalPublisher: "Viking Press",
        currentPublisher: " ",
        yearPublished: 1968,
        quote: " ",
        image: " ",
    },
    {
        title: "Caps for Sale",
        creator: "Esphyr Slobodkina",
        synopsis: "Monkey-see-monkey-do. Tale of the Peddler who went to sleep with his unsold caps on his head - and of the monkeys who stole them and wouldn't give them back until, in disgust he threw down the one remaining cap.",
        originalPublisher: "W. R. Scott",
        currentPublisher: " ",
        yearPublished: 1940,
        quote: " ",
        image: " ",
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

