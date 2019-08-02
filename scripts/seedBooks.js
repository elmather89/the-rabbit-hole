const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rabbitholedb"
);

const bookSeed = [
    {
        _id: "0099408392",
        _creators: ["sen1928"],
        title: "Where the Wild Things Are",
        creatorName: "Maurice Sendak",
        synopsis: "Max is sent to bed without supper and imagines sailing away to the land of Wild Things, where he is made king.",
        originalPublisher: "Harper & Row",
        currentPublisher: "Red Fox",
        yearPublished: 1963,
        quote: "Let the wild rumpus start!",
        bookImage: "https://i.harperapps.com/covers/9780060254926/y648.jpg",
        dob: 1928,
        dod: 2012,
        bio: "Maurice Sendak received the Caldecott Medal for Where the Wild Things Are. He has also received the Hans Christian Andersen Medal, the Laura Ingalls Wilder Award, the National Medal of Arts, and the Astrid Lindgren Memorial Award.",
        creatorTags: "Author / Illustrator / Artist"
    },
    {
        _id: "0241003008",
        _creators: ["car1929"],
        title: "The Very Hungry Caterpillar",
        creatorName: "Eric Carle",
        synopsis: "Follows the progress of a very hungry caterpillar as he eats his way through a varied and very large quantity of food, until, full at last, he forms a coccoon around himself and goes to sleep.",
        originalPublisher: "World Publishing Company",
        currentPublisher: "Puffin Books",
        yearPublished: 1969,
        quote: "In the light of the moon a little egg lay on a leaf.",
        bookImage: "https://images-na.ssl-images-amazon.com/images/I/81Tfdl%2Bvm3L.jpg",
        dob: 1929,
        dod: "",
        bio: "Eric Carle is acclaimed and beloved as the creator of brilliantly illustrated and innovatively designed picture books for very young children. His best-known work, The Very Hungry Caterpillar, has eaten its way into the hearts of literally millions of children all over the world and has been translated into more than 25 languages and sold over twelve million copies.",
        creatorTags: "Illustrator / Author / Designer"
    },
    {
        _id: "0064410935",
        _creators: ["whi1899"],
        title: "Charlotte's Web",
        creatorName: "E. B. White",
        synopsis: "‘Some Pig’. ‘Humble’. ‘Radiant’. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter.",
        originalPublisher: "Harper & Brothers",
        currentPublisher: "HarperCollins Publishers",
        yearPublished: 1952,
        quote: "If I can fool a bug... I can surely fool a man. People are not as smart as bugs.",
        bookImage: "https://i.harperapps.com/covers/9780060263867/x510.jpg",
        dob: 1899,
        dod: 1985,
        bio: "E. B. White, the author of such beloved classics as Charlotte's Web, Stuart Little, and The Trumpet of the Swan, was born in Mount Vernon, New York. He graduated from Cornell University in 1921 and, five or six years later, joined the staff of The New Yorker magazine, then in its infancy. He died on October 1, 1985, and was survived by his son and three grandchildren.",
        creatorTags: "Author"
    },
    {
        _id: "0064408671",
        _creators: ["whi1899"],
        title: "The Trumpet of the Swan",
        creatorName: "E. B. White",
        synopsis: "Like the rest of his family, Louis is a trumpeter swan. But unlike his four brothers and sisters, Louis can't trumpet joyfully. In fact, he can't even make a sound. And since he can't trumpet his love, the beautiful swan Serena pays absolutely no attention to him. Louis tries everything he can think of to win Serena's affection;he even goes to school to learn to read and write. But nothing seems to work. Then his father steals him a real brass trumpet. Is a musical instrument the key to winning Louis his love?",
        originalPublisher: "Harper & Row",
        currentPublisher: "HarperCollins",
        yearPublished: 1970,
        quote: "Safety is all well and good: I prefer freedom.",
        bookImage: "https://images-na.ssl-images-amazon.com/images/I/51NUyaqOcjL._SX328_BO1,204,203,200_.jpg",
        dob: 1899,
        dod: 1985,
        bio: "E. B. White, the author of such beloved classics as Charlotte's Web, Stuart Little, and The Trumpet of the Swan, was born in Mount Vernon, New York. He graduated from Cornell University in 1921 and, five or six years later, joined the staff of The New Yorker magazine, then in its infancy. He died on October 1, 1985, and was survived by his son and three grandchildren.",
        creatorTags: "Author"
    },
    {
        _id: "0064400565",
        _creators: ["whi1899"],
        title: "Stuart Little",
        creatorName: "E. B. White",
        synopsis: "Stuart Little is no ordinary mouse. Born to a family of humans, he lives in New York City with his parents, his older brother George, and Snowbell the cat. Though he's shy and thoughtful, he's also a true lover of adventure. Stuart's greatest adventure comes when his best friend, a beautiful little bird named Margalo, disappears from her nest. Determined to track her down, Stuart ventures away from home for the very first time in his life. He finds adventure aplenty. But will he find his friend?",
        originalPublisher: "Harper & Brothers",
        currentPublisher: "HarperCollins",
        yearPublished: 1945,
        quote: "Not every doctor can look into a mouse's ear without laughing.",
        bookImage: "https://images-na.ssl-images-amazon.com/images/I/61Dvo5DcSEL._SX333_BO1,204,203,200_.jpg",
        dob: 1899,
        dod: 1985,
        bio: "E. B. White, the author of such beloved classics as Charlotte's Web, Stuart Little, and The Trumpet of the Swan, was born in Mount Vernon, New York. He graduated from Cornell University in 1921 and, five or six years later, joined the staff of The New Yorker magazine, then in its infancy. He died on October 1, 1985, and was survived by his son and three grandchildren.",
        creatorTags: "Author"
    },
    {
        _id: "0060256656",
        _creators: ["sil1930"],
        title: "The Giving Tree",
        creatorName: "Shel Silverstein",
        synopsis: "A young boy grows to manhood and old age experiencing the love and generosity of a tree which gives to him without thought of return.",
        originalPublisher: "Harper & Row",
        currentPublisher: "HarperCollins Publishers",
        yearPublished: 1964,
        quote: "And the boy loved the tree...very much. And the tree was happy.",
        bookImage: "https://static.wixstatic.com/media/fa39c3_c6c3b1266239468fa0c4fc352e1d17cd~mv2.jpg",
        dob: 1930,
        dod: 1999,
        bio: "Shel Silverstein's incomparable career as a bestselling children's book author and illustrator began with Lafcadio, the Lion Who Shot Back. He is also the creator of picture books including A Giraffe and a Half, Who Wants a Cheap Rhinoceros?, The Missing Piece, The Missing Piece Meets the Big O, and the perennial favorite The Giving Tree, as well as classic poetry collections such as Where the Sidewalk Ends, A Light in the Attic, Every Thing On It, Don't Bump the Glump!, and Runny Babbit.",
        creatorTags: "Author / Poet / Cartoonist / Songwriter / Playwright"
    },
    {
        _id: "0590133373",
        _creators: ["bem1898"],
        title: "Madeline",
        creatorName: "Ludwig Bemelmans",
        synopsis: "In an old house in Paris that was covered in vines, lived twelve little girls in two straight lines. Madeline is the smallest of the girls. She is seven years old, and the only redhead. She is the bravest and most daring of the girls, flaunting at the tiger in the zoo and giving Miss Clavel a headache as she goes around the city doing all sorts of antics.",
        originalPublisher: "Viking Press",
        currentPublisher: "London: Hippo",
        yearPublished: 1939,
        quote: "The smallest one was Madeline.",
        bookImage: "https://s26162.pcdn.co/wp-content/uploads/2018/03/9780590089074_mres.jpg",
        dob: 1898,
        dod: 1962,
        bio: "Ludwig Bemelmans was a painter, illustrator, and writer of more than three dozen books for both adults and children. Born in 1898 in a part of Tirol now known as Merano, Italy, he came to the United States in 1914 and, after spending Christmas Eve on Ellis Island, set up residence in New York City. Before finding his voice as a writer, he worked in a hotel and ran his own restaurant. Later Bemelmans became a novelist and a nonfiction writer, as well as a frequent contributor to The New Yorker (for which he drew many covers), Town and Country, Holiday, and Vogue; and he also wrote a screenplay in Hollywood. He penned the first draft of Madeline on the backs of menus in Pete's Tavern. He is best known for his Madeline books, which rank among the most honored children's books ever. Madeline was named a Caldecott Honor Book; and the first of its five sequels, Madeline's Rescue, won the Caldecott Medal and was a New York Times Outstanding Book of the Year. A world traveler, Bemelmans was renowned as a true cosmopolite, an irreverent and droll chronicler of the incongruous, an elegant man-about-town, a merry observer of the improbable and the absurd. He died in 1962 after completing the sixth story about Madeline, Madeline's Christmas.",
        creatorTags: "Author / Illustrator / Painter"
    },
    {
        _id: "039515023X",
        _creators: ["rey1898"],
        title: "Curious George",
        creatorName: "H.A. Rey",
        synopsis: "the curious monkey, George is taken from the jungle by the man in the yellow hat to live in a new home, but--oh, what happened! Though trying to be good, George is still very curious and takes a swim in the ocean, escapes from jail, and goes for a flying ride on a bunch of balloons.",
        originalPublisher: "Houghton Mifflin Harcourt",
        currentPublisher: "Houghton Mifflin Co",
        yearPublished: 1941,
        quote: "What a nice little monkey. I would like to take him home with me.",
        bookImage: "https://images-na.ssl-images-amazon.com/images/I/513NAjhmZjL._SX258_BO1,204,203,200_.jpg",
        dob: 1898,
        dod: 1977,
        bio: "Hans Augusto Rey was a German-born American illustrator and author, known best for the Curious George series of children's picture books that he and his wife Margret Rey created from 1939 to 1966.",
        creatorTags: "Author / Illustrator"
    },
    {
        _id: "0670241334",
        _creators: ["fre1908"],
        title: "Corduroy",
        creatorName: "Don Freeman",
        synopsis: "The amusing story of a toy bear whose one missing button from his green corduroy overalls almost costs him the opportunity of belonging to someone.",
        originalPublisher: "Viking Press",
        currentPublisher: "Viking Books for Young Readers",
        yearPublished: 1968,
        quote: "Look! There's the very bear I've always wanted.",
        bookImage: "https://images.penguinrandomhouse.com/cover/9781101631386",
        dob: 1908,
        dod: 1978,
        bio: "Don Freeman was a painter, printmaker, cartoonist, children's book author, and illustrator. He was born in San Diego, California, attended high school in Missouri, and later moved to New York City where he studied etching with John Sloan. Frequent subjects included Broadway theatre, politics, and the circus. He was also a jazz musician, and the brother of circus entrepreneur Randy Freeman.",
        creatorTags: "Cartoonist / Penciller / Painter / Printmaker / Author / Illustrator"
    },
    {
        _id: "0064431436",
        _creators: ["slo1908"],
        title: "Caps for Sale",
        creatorName: "Esphyr Slobodkina",
        synopsis: "Monkey-see-monkey-do. Tale of the Peddler who went to sleep with his unsold caps on his head - and of the monkeys who stole them and wouldn't give them back until, in disgust he threw down the one remaining cap.",
        originalPublisher: "W. R. Scott",
        currentPublisher: "HarperCollinsPublishers",
        yearPublished: 1940,
        quote: "You monkeys, you! Give me back my caps!",
        bookImage: "https://i.harperapps.com/covers/9780062134479/y648.jpg",
        dob: 1908,
        dod: 2002,
        bio: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        creatorTags: "Artist / Author / Illustrator"
    }  
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

