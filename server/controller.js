const motivations = [
  "Be Greatful for what you do have, knowing someone has less than you.",
  "Mark 9:23",
  "You are capible, now go and DO!",
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt! I like it!",
      "Your Javascript skills are stellar.",
      "Keep Smiling, it looks good on you!",
      "In case you didn't know, you're AMAZING",
      "You’re that “Nothing” when people ask me what I’m thinking about.",
      "You look great today.",
      "You’re a smart cookie.",
      "I bet you make babies smile.",
      "You have impeccable manners.",
      "I like your style.",
      "You have the best laugh.",
      "I appreciate you, so much!!",
      "You are the most perfect you there is.",
      "Our system of inside jokes is so advanced that only you and I get it. And I like that.",
      "You’re strong.",
      "Your perspective is refreshing.",
      "You’re an awesome friend.",
      "You light up the room.",
      "You give the best hugs ever!",
      "You should be proud of yourself. Look how far you've come!",
      "You’re more helpful than you realize.",
      "You have a great sense of humor.",
      "You’ve got all the right moves!",
      "Is that your picture next to “charming” in the dictionary?",
      "Your kindness is a balm to all who encounter it, and I'm thankful for you!",
      "You’re all that and a super-size bag of chips.",
      "On a scale from 1 to 10, you’re an 11.",
      "You are brave.",
      "You’re even more beautiful on the inside than you are on the outside.",
      "You have the courage of your convictions.",
      "Aside from food. You’re my favorite.",
      "If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.",
      "You are making a difference.",
      "You’re like sunshine on a rainy day.",
      "You bring out the best in other people.",
      "Your ability to recall random factoids at just the right time is impressive.",
      "You’re a great listener.",
      "How is it that you always look great, even in sweatpants?",
      "Everything would be better if more people were like you!",
      "You were cool way before hipsters were cool.",
      "That color is perfect on you.",
      "Hanging out with you is always a blast.",
      "You always know — and say — exactly what I need to hear when I need to hear it, Thank you.",
      "You smell really good.",
      "You may dance like no one’s watching, but everyone’s watching because you’re an amazing dancer!",
      "Being around you makes everything better!",
      "When you say, “I meant to do that,” I totally believe you.",
      "When you’re not afraid to be yourself is when you’re most incredible.",
      "Colors seem brighter when you’re around.",
      "You’re more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
      "That thing you don’t like about yourself is what makes you so interesting.",
      "You’re wonderful.",
      "Everyday is just BLAH when I don’t see you For reals!",
      "Jokes are funnier when you tell them.",
      "You’re better than a triple-scoop ice cream cone. With sprinkles.",
      "Your bellybutton is kind of adorable.",
      "Your hair looks stunning.",
      "You’re one of a kind!",
      "You’re inspiring.",
      "If you were a box of crayons, you’d be the giant name-brand one with the built-in sharpener.",
      "You should be thanked more often. So thank you!!",
      "Our community is better because you’re in it.",
      "Someone is getting through something hard right now because you’ve got their back.",
      "You have the best ideas.",
      "You always know how to find that silver lining.",
      "Everyone gets knocked down sometimes, but you always get back up and keep going.",
      "You’re a candle in the darkness.",
      "You’re a great example to others.",
      "Being around you is like being on a happy little vacation.",
      "You always know just what to say.",
      "You’re always learning new things and trying to better yourself, which is awesome.",
      "If someone based an Internet meme on you, it would have impeccable grammar.",
      "You could survive a Zombie apocalypse.",
      "You’re more fun than bubble wrap.",
      "When you make a mistake, you fix it.",
      "Who raised you? They deserve a medal for a job well done.",
      "You’re great at figuring stuff out.",
      "Your voice is magnificent.",
      "The people you love are lucky to have you in their lives.",
      "You’re like a breath of fresh air.",
      "You’re gorgeous — and that’s the least interesting thing about you, too.",
      "You’re so thoughtful.",
      "Your creative potential seems limitless.",
      "You’re the coolest person I know. And I consider myself bet friends with like all celebrities, so. . . .",
      "You’re irresistible when you blush.",
      "Actions speak louder than words, and yours tell an incredible story.",
      "Somehow you make time stop and fly at the same time.",
      "When you make up your mind about something, nothing stands in your way.",
      "You seem to really know who you are.",
      "Any team would be lucky to have you on it.",
      "In high school I bet you were voted “most likely to keep being awesome",
      "I bet you do the crossword puzzle in ink.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "The man on the top of the mountain did not fall there.",
      `If you have something good in your life, don't let it go!`,
      "You will conquer obstacles to achieve success.",
      "A short stranger will soon enter your life with blessings to share.",
      "Love can last a lifetime, if you want it to.",
      "The greatest love is self-love.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  getLuckyNumber: (req, res) => {
    const luckyNum = ["3", "6", "9", "77", "5"];
    let randomIndex = Math.floor(Math.random() * luckyNum.length);
    let randomNum = luckyNum[randomIndex];

    res.status(200).send(randomNum);
  },

  getMotivated: (req, res) => {
    res.status(200).send(motivations);
  },

  addMotivation: (req, res) => {
    let { item } = req.body;
    motivations.push(item);

    res.status(200).send(motivations);
  },
};
