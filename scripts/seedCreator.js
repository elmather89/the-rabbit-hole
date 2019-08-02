const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/rabbitholedb"
);

const creatorSeed = [
    {
        _id: "sen1928",
        _books: ["0099408392"],
        firstName: "Maurice",
        lastName: "Sendak",
        birthdate: 1928,
        dateOfDeath: 2012,
        biography: "Maurice Sendak received the Caldecott Medal for Where the Wild Things Are. He has also received the Hans Christian Andersen Medal, the Laura Ingalls Wilder Award, the National Medal of Arts, and the Astrid Lindgren Memorial Award.",
        legacy: "Sendak gained international acclaim after writing and illustrating Where the Wild Things Are, edited by Ursula Nordstrom at Harper & Row.",
        ownWords: "You cannot write for children... They're much too complicated. You can only write books that are of interest to them.",
        tags: "Author / Illustrator / Artist",
        image: "https://upload.wikimedia.org/wikipedia/en/1/11/Maurice-Sendak_portrait2.jpg"
    },
    {
        _id: "car1929",
        _books: ["0241003008"],
        firstName: "Eric",
        lastName: "Carle",
        birthdate: 1929,
        dateOfDeath: "",
        biography: "Eric Carle is acclaimed and beloved as the creator of brilliantly illustrated and innovatively designed picture books for very young children. His best-known work, The Very Hungry Caterpillar, has eaten its way into the hearts of literally millions of children all over the world and has been translated into more than 25 languages and sold over twelve million copies.",
        legacy: "His career as an illustrator and children's book author took off after he collaborated on Brown Bear, Brown Bear, What Do You See? He has illustrated more than 70 books, most of which he also wrote, and more than 145 million copies of his books have been sold around the world.",
        ownWords: "We ahve eyes, and we're looking at stuff all the time, all day long. And I just think that whatever our eyes touch should be beautiful, tasteful, appealing, and important.",
        tags: "Illustrator / Author/ Designer",
        image: "https://storytoys.com/wp-content/uploads/2016/06/eric-carle.jpg"
    },
    {
        _id: "whi1899",
        _books: ["0064410935", "0064408671", "0064400565"],
        firstName: "E. B.",
        lastName: "White",
        birthdate: 1899,
        dateOfDeath: 1985,
        biography: "E. B. White, the author of such beloved classics as Charlotte's Web, Stuart Little, and The Trumpet of the Swan, was born in Mount Vernon, New York. He graduated from Cornell University in 1921 and, five or six years later, joined the staff of The New Yorker magazine, then in its infancy. He died on October 1, 1985, and was survived by his son and three grandchildren.",
        legacy: "For more than fifty years, he was a contributor to The New Yorker magazine. He was also a co-author of the English language style guide The Elements of Style. In addition, he wrote books for children, including Stuart Little (1945), Charlotte's Web (1952), and The Trumpet of the Swan (1970).",
        ownWords: "I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.",
        tags: "Author",
        image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNzI0MzU3NjQ2/e-b-white-9529308-1-402.jpg"
    },
    {
        _id: "sil1930",
        _books: ["0060256656"],
        firstName: "Shel",
        lastName: "Silverstein",
        birthdate: 1930,
        dateOfDeath: 1999,
        biography: "Shel Silverstein's incomparable career as a bestselling children's book author and illustrator began with Lafcadio, the Lion Who Shot Back. He is also the creator of picture books including A Giraffe and a Half, Who Wants a Cheap Rhinoceros?, The Missing Piece, The Missing Piece Meets the Big O, and the perennial favorite The Giving Tree, as well as classic poetry collections such as Where the Sidewalk Ends, A Light in the Attic, Every Thing On It, Don't Bump the Glump!, and Runny Babbit.",
        legacy: "His books have been translated into more than 30 languages and have sold more than 20 million copies.3 He was the recipient of two Grammy Awards, as well as Golden Globe Award and Academy Award nominations.",
        ownWords: "Tell me I'm clever, Tell me I'm kind, Tell me I'm talented, Tell me I'm cute, Tell me I'm sensitive, Graceful and wise, Tell me I'm perfect - But tell me the truth.",
        tags: "Author / Poet / Cartoonist / Songwriter / Playwright",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8f/Ssilverstein.jpg"
    },
    {
        _id: "bem1898",
        _books: ["0590133373"],
        firstName: "Ludwig",
        lastName: "Bemelmans",
        birthdate: 1898,
        dateOfDeath: 1962,
        biography: "Ludwig Bemelmans was a painter, illustrator, and writer of more than three dozen books for both adults and children.",
        legacy: " He is known best for the Madeline picture books. Six were published since 1939.",
        ownWords: "It's always wonderful when something altogether wrong ends right, without the help of either religion or the police.",
        tags: "Author / Illustrator / Painter",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b3/Ludwig_Bemelmans.jpg"
    },
    {
        _id: "rey1898",
        _books: ["039515023X"],
        firstName: "H.A.",
        lastName: "Rey",
        birthdate: 1898,
        dateOfDeath: 1977,
        biography: "Hans Augusto Rey was a German-born American illustrator and author, known best for the Curious George series of children's picture books that he and his wife Margret Rey created from 1939 to 1966.",
        legacy: "70 years after his creation, Curious George remains very much alive, an icon for generations of children, with more than 30 million copies of the books sold throughout the world.",
        ownWords: "I know what I liked as a child, and I don’t do any book that I, as a child, wouldn’t have liked.",
        tags: "Author / Illustrator",
        image: "https://www.diogenes.ch/dam/Diogenes/Autorenportraits/rey_ha_700068643_beschnitten.jpg"
    },
    {
        _id: "fre1908",
        _books: ["0670241334"],
        firstName: "Don",
        lastName: "Freeman",
        birthdate: 1908,
        dateOfDeath: 1978,
        biography: "Don Freeman was a painter, printmaker, cartoonist, children's book author, and illustrator. He was born in San Diego, California, attended high school in Missouri, and later moved to New York City where he studied etching with John Sloan. Frequent subjects included Broadway theatre, politics, and the circus. He was also a jazz musician, and the brother of circus entrepreneur Randy Freeman.",
        legacy: "Throughout Don Freeman's career, he was the writer and illustrator of more than 20 children's books. He is best known for his publication of Corduroy. Although he came up with many of his ideas on his own, his wife Lydia Freeman contributed greatly to his success; indeed, she co-wrote two books with him, Chuggy and the Blue Caboose and Pet of the Met.",
        ownWords: "It seems to me, that the more ignorant you are, the smarter you think you are, and the smarter you are, the more you realize how ignorant you are.",
        tags: "Cartoonist / Penciller / Painter / Printmaker / Author / Illustrator",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/DonFreeman.jpg/330px-DonFreeman.jpg"
    },
    {
        _id: "slo1908",
        _books: ["0064431436"],
        firstName: "Esphyr",
        lastName: "Slobodkina",
        birthdate: 1908,
        dateOfDeath: 2002,
        biography: "Esphyr Slobodkina, internationally renowned artist and author of the children's classic Caps for Sale, was among the first female American artists to explore abstraction and the first to use collage in American storybooks. She studied art in Russia and China before immigrating to the United States in 1928. She was a founding member of the American Abstract Artists group, and her work is represented in prominent museum collections across the country.",
        legacy: "Slobodkina was a celebrated avant garde artist and feminist in the middle part of the 20th century.",
        ownWords: "The verbal patterns and the patterns of behavior we present to children in these lighthearted confections are likely to influence them for the rest of their lives. These aesthetic impressions, just like the moral teachings of early childhood, remain indelible.",
        tags: "Artist / Author / Illustrator",
        image: "https://upload.wikimedia.org/wikipedia/en/c/c7/Photo_of_Esphyr_Slobodkina.jpg"
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