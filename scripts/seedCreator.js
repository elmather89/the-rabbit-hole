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
        birthdate: 1928,
        dateOfDeath: 2012,
        biography: "Maurice Sendak received the Caldecott Medal for Where the Wild Things Are. He has also received the Hans Christian Andersen Medal, the Laura Ingalls Wilder Award, the National Medal of Arts, and the Astrid Lindgren Memorial Award.",
        legacy: "Sendak gained international acclaim after writing and illustrating Where the Wild Things Are, edited by Ursula Nordstrom at Harper & Row.",
        ownWords: "You cannot write for children... They're much too complicated. You can only write books that are of interest to them.",
        tags: [Author, Illustrator, Artist],
        image: "https://upload.wikimedia.org/wikipedia/en/1/11/Maurice-Sendak_portrait2.jpg"
    },
    {
        firstName: "Eric",
        lastName: "Carle",
        birthdate: 1929,
        dateOfDeath: "",
        biography: "Eric Carle is acclaimed and beloved as the creator of brilliantly illustrated and innovatively designed picture books for very young children. His best-known work, The Very Hungry Caterpillar, has eaten its way into the hearts of literally millions of children all over the world and has been translated into more than 25 languages and sold over twelve million copies.",
        legacy: "His career as an illustrator and children's book author took off after he collaborated on Brown Bear, Brown Bear, What Do You See? He has illustrated more than 70 books, most of which he also wrote, and more than 145 million copies of his books have been sold around the world.",
        ownWords: "We ahve eyes, and we're looking at stuff all the time, all day long. And I just think that whatever our eyes touch should be beautiful, tasteful, appealing, and important.",
        tags: [Illustrator, Author, Designer],
        image: "https://storytoys.com/wp-content/uploads/2016/06/eric-carle.jpg"
    },
    {
        firstName: "E. B.",
        lastName: "White",
        birthdate: 1899,
        dateOfDeath: 1985,
        biography: "E. B. White, the author of such beloved classics as Charlotte's Web, Stuart Little, and The Trumpet of the Swan, was born in Mount Vernon, New York. He graduated from Cornell University in 1921 and, five or six years later, joined the staff of The New Yorker magazine, then in its infancy. He died on October 1, 1985, and was survived by his son and three grandchildren.",
        legacy: "For more than fifty years, he was a contributor to The New Yorker magazine. He was also a co-author of the English language style guide The Elements of Style. In addition, he wrote books for children, including Stuart Little (1945), Charlotte's Web (1952), and The Trumpet of the Swan (1970).",
        ownWords: "I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.",
        tags: [Author],
        image: "https://capitanswing.com/wp-content/uploads/EBWhite2-450x450.jpg"
    },
    {
        firstName: "Shel",
        lastName: "Silverstein",
        birthdate: 1930,
        dateOfDeath: 1999,
        biography: "Shel Silverstein's incomparable career as a bestselling children's book author and illustrator began with Lafcadio, the Lion Who Shot Back. He is also the creator of picture books including A Giraffe and a Half, Who Wants a Cheap Rhinoceros?, The Missing Piece, The Missing Piece Meets the Big O, and the perennial favorite The Giving Tree, as well as classic poetry collections such as Where the Sidewalk Ends, A Light in the Attic, Every Thing On It, Don't Bump the Glump!, and Runny Babbit.",
        legacy: "His books have been translated into more than 30 languages and have sold more than 20 million copies.[3] He was the recipient of two Grammy Awards, as well as Golden Globe Award and Academy Award nominations.",
        ownWords: "Tell me I'm clever, Tell me I'm kind, Tell me I'm talented, Tell me I'm cute, Tell me I'm sensitive, Graceful and wise, Tell me I'm perfect - But tell me the truth.",
        tags: [Author, Poet, Cartoonist, Songwriter, Playwright],
        image: "https://upload.wikimedia.org/wikipedia/en/8/8f/Ssilverstein.jpg"
    },
    {
        firstName: "Ludwig",
        lastName: "Bemelmans",
        birthdate: 1898,
        dateOfDeath: 1962,
        biography: "Ludwig Bemelmans was a painter, illustrator, and writer of more than three dozen books for both adults and children. Born in 1898 in a part of Tirol now known as Merano, Italy, he came to the United States in 1914 and, after spending Christmas Eve on Ellis Island, set up residence in New York City. Before finding his voice as a writer, he worked in a hotel and ran his own restaurant. Later Bemelmans became a novelist and a nonfiction writer, as well as a frequent contributor to The New Yorker (for which he drew many covers), Town and Country, Holiday, and Vogue; and he also wrote a screenplay in Hollywood. He penned the first draft of Madeline on the backs of menus in Pete's Tavern. He is best known for his Madeline books, which rank among the most honored children's books ever. Madeline was named a Caldecott Honor Book; and the first of its five sequels, Madeline's Rescue, won the Caldecott Medal and was a New York Times Outstanding Book of the Year. A world traveler, Bemelmans was renowned as a true cosmopolite, an irreverent and droll chronicler of the incongruous, an elegant man-about-town, a merry observer of the improbable and the absurd. He died in 1962 after completing the sixth story about Madeline, Madeline's Christmas.",
        legacy: " He is known best for the Madeline picture books. Six were published since 1939.",
        ownWords: "It's always wonderful when something altogether wrong ends right, without the help of either religion or the police.",
        tags: [Author, Illustrator, Painter],
        image: "https://upload.wikimedia.org/wikipedia/en/b/b3/Ludwig_Bemelmans.jpg"
    },
    {
        firstName: "Don",
        lastName: "Freeman",
        birthdate: 1908,
        dateOfDeath: 1978,
        biography: "Don Freeman was a painter, printmaker, cartoonist, children's book author, and illustrator. He was born in San Diego, California, attended high school in Missouri, and later moved to New York City where he studied etching with John Sloan. Frequent subjects included Broadway theatre, politics, and the circus. He was also a jazz musician, and the brother of circus entrepreneur Randy Freeman.",
        legacy: "Throughout Don Freeman's career, he was the writer and illustrator of more than 20 children's books. He is best known for his publication of Corduroy. Although he came up with many of his ideas on his own, his wife Lydia Freeman contributed greatly to his success; indeed, she co-wrote two books with him, Chuggy and the Blue Caboose and Pet of the Met.",
        ownWords: "It seems to me, that the more ignorant you are, the smarter you think you are, and the smarter you are, the more you realize how ignorant you are.",
        tags: [Cartoonist, Penciller, Painter, Printmaker, Author, Illustrator],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/DonFreeman.jpg/330px-DonFreeman.jpg"
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: 1908,
        dateOfDeath: 2002,
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " "
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: " ",
        dateOfDeath: " ",
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " "
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: " ",
        dateOfDeath: " ",
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " "
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: " ",
        dateOfDeath: " ",
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " "
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: " ",
        dateOfDeath: " ",
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " "
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: " ",
        dateOfDeath: " ",
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " "
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: " ",
        dateOfDeath: " ",
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " "
    },
    {
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: " ",
        dateOfDeath: " ",
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: " ",
        ownWords: " ",
        tags: " ",
        image: " "
    }

];

db.Creator
.remove({})
.then(() => db.Creator.collection.insertMany(creatorSeed))
.then(data => {
    console.log(data.result.n + " creator added!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});