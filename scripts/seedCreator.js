const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rabbitholedb"
);

const creatorSeed = [
    {
        firstName: "Maurice",
        lastName: "Sendak",
        // birthdate: " ",
        // dateOfDeath: " ",
        biography: "Maurice Sendak received the Caldecott Medal for Where the Wild Things Are. He has also received the Hans Christian Andersen Medal, the Laura Ingalls Wilder Award, the National Medal of Arts, and the Astrid Lindgren Memorial Award.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " ",
    },
    {
        firstName: "Eric",
        lastName: "Carle",
        // birthdate: " ",
        // dateOfDeath: " ",
        biography: "Eric Carle is acclaimed and beloved as the creator of brilliantly illustrated and innovatively designed picture books for very young children. His best-known work, The Very Hungry Caterpillar, has eaten its way into the hearts of literally millions of children all over the world and has been translated into more than 25 languages and sold over twelve million copies.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " ",
    },
    {
        firstName: "E. B.",
        lastName: "White",
        // birthdate: " ",
        // dateOfDeath: " ",
        biography: "E. B. White, the author of such beloved classics as Charlotte's Web, Stuart Little, and The Trumpet of the Swan, was born in Mount Vernon, New York. He graduated from Cornell University in 1921 and, five or six years later, joined the staff of The New Yorker magazine, then in its infancy. He died on October 1, 1985, and was survived by his son and three grandchildren.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " ",
    },
    {
        firstName: "Shel",
        lastName: "Silverstein",
        // birthdate: " ",
        // dateOfDeath: " ",
        biography: "Shel Silverstein 's incomparable career as a bestselling children's book author and illustrator began with Lafcadio, the Lion Who Shot Back. He is also the creator of picture books including A Giraffe and a Half, Who Wants a Cheap Rhinoceros?, The Missing Piece, The Missing Piece Meets the Big O, and the perennial favorite The Giving Tree, as well as classic poetry collections such as Where the Sidewalk Ends, A Light in the Attic, Every Thing On It, Don't Bump the Glump!, and Runny Babbit.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " ",
    },
    {
        firstName: "Ludwig",
        lastName: "Bemelmans",
        // birthdate: " ",
        // dateOfDeath: " ",
        biography: "Ludwig Bemelmans was a painter, illustrator, and writer of more than three dozen books for both adults and children. Born in 1898 in a part of Tirol now known as Merano, Italy, he came to the United States in 1914 and, after spending Christmas Eve on Ellis Island, set up residence in New York City. Before finding his voice as a writer, he worked in a hotel and ran his own restaurant. Later Bemelmans became a novelist and a nonfiction writer, as well as a frequent contributor to The New Yorker (for which he drew many covers), Town and Country, Holiday, and Vogue; and he also wrote a screenplay in Hollywood. He penned the first draft of Madeline on the backs of menus in Pete's Tavern. He is best known for his Madeline books, which rank among the most honored children's books ever. Madeline was named a Caldecott Honor Book; and the first of its five sequels, Madeline's Rescue, won the Caldecott Medal and was a New York Times Outstanding Book of the Year. A world traveler, Bemelmans was renowned as a true cosmopolite, an irreverent and droll chronicler of the incongruous, an elegant man-about-town, a merry observer of the improbable and the absurd. He died in 1962 after completing the sixth story about Madeline, Madeline's Christmas.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " ",
    },
    {
        firstName: "Don",
        lastName: "Freeman",
        // birthdate: " ",
        // dateOfDeath: " ",
        biography: "Don Freeman was a painter, printmaker, cartoonist, children's book author, and illustrator. He was born in San Diego, California, attended high school in Missouri, and later moved to New York City where he studied etching with John Sloan. Frequent subjects included Broadway theatre, politics, and the circus. He was also a jazz musician, and the brother of circus entrepreneur Randy Freeman.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " ",
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        // birthdate: " ",
        // dateOfDeath: " ",
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " ",
    },

];

db.Creator
.then(() => db.Creator.collection.insertMany(creatorSeed))
.then(data => {
    console.log(data.result.n + " creator added!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});


