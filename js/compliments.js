function changeCompliment(event) {
  const compliments = [
    'You\'re good at what you do!',
    'I always learn so much from you.',
    'You have the most beautiful lips and eyes. I always get lost in them.',
    'I\'ll never forget one of your phrases from when we first met. It\'s a trap.<br>BEST DAMN TRAP OF MY LIFE!',
    'There is so much warm in your smile. So much kindness in your heart. And so much love in your eyes.',
    'If you will give me the privilege. There will be trial and error, high times and low times. But I will spend every day<br>of the rest of my life - loving you',
    'You are so smart!',
    'I love your smile! Melts me every time!',
    'How do you look so beautiful all the time?... Tell me, I really wanna know',
    'You are part of the reason my life feels so perfect',
    'Your eyes are so beautiful and expressive I can\'t help but get lost in them...You were right, they are a trap :)',
    'You\'re my best friend baby.',
    'You make me want to be my best because you deserve the best',
    'I love your sense of style and how ou can make literally ANYTHING look good. It\'s not fair',
    'I\'m just lucky you even look in my direction occasionally.',
    'The more I learn about you, the more I fall in love with you.',
    'You showed me I’m capable of having the best relationship in the world',
    'Even when you’re grouchy, I love you. Even when you\'re mad, I love you. Even when you\'re overwhelmed, I love you. Even when you\'re sad, I love you.<br> And if ever you don\'t love you, I\'ll love you enough for the both of us. And make damn sure you get back to loving you!',
    'You make me feel like I can touch the sky.',
    'I love looking at you.',
    'Your cooking is amazing. It really is, it\'s better than my mom\'s. Don\'t tell her I said that though.',
    'I smile thinking about you when I’m alone.',
    'Every moment with you is like a dream I don\'t want to wake up from',
    'I\'m just lucky you even look in my direction occasionally.',
    `I'll always remember seeing you for the first time. I was so anxious. Who was this girl I was going to meet, what is she like in person.<br>When I saw you sitting in Dos Toros, I questioned if I should just walk away.
    <br> I was that damn shooketh lol but I didn't, no way in hell would I. From what I knew, you were amazing, funny, beautiful, kind, generous, selfless.<br>You were everything I had ever looked for and more. Oh you are so much more!
    <br>But anyway, I walked in, and there you were, sitting, listening to music, simply waiting - and for me of all people.<br>
      Who was this beautiful woman that made my heart flutter with her very look. Her very smile that melted me to my core. I think it was then that I fell in love with you.<br>
      And every day after, I fell in love with you even more. Honestly, in that moment, I realized how lucky I was to be there. Now I relaize how lucky I am to have you in my life.<br>
      I plan on remembering that everyday. I love you Amanda, and I hope I can spend the rest of my life loving you, and building with you.<br> Sincerely,<br>Your boyfriend, Darryl.`,
  ];
  let random = Math.floor(Math.random() * (compliments.length));
  document.getElementById('compliment').innerHTML = compliments[random];
}

document.getElementById('new-compliment').addEventListener('click', changeCompliment);
