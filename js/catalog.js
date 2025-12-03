// --- BOOK DATA ---
const books = [
  {
    title: "The Handmaid’s Tale",
    author: "Margaret Atwood",
    genre: ["Dystopian", "Speculative Fiction"],
    releaseDate: "1985-08-17",
    image: "https://upload.wikimedia.org/wikipedia/en/1/18/TheHandmaidsTale%281stEd%29.jpg",
    synopsis: "In the theocratic state of Gilead, fertile women called “handmaids” are forced to bear children for elite couples. Offred, a handmaid, navigates oppression, surveillance, and her fading memories of freedom, longing for autonomy and identity.",
    rating: {
      average: 4.5,
      count: 128,
      reviews: [
	    { "name": "@arianagrande", "comment": "powerful and eye-opening 😢", "avatar": "img/ariana.jpeg" },
	    { "name": "@billieeilish", "comment": "a must-read for dystopian lovers <3", "avatar": "img/billie.jpeg" },
	    { "name": "@sabrinacarpenter", "comment": "loved the story, very gripping ><", "avatar": "img/sabrina.jpeg" },
	    { "name": "@dualipa", "comment": "offred’s journey is haunting and emotional", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "so intense and thought-provoking 😌", "avatar": "img/nicole.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "couldn’t stop reading, completely gripping", "avatar": "img/rosie.jpeg" },
	    { "name": "@parishilton", "comment": "dystopia done perfectly, very chilling ><", "avatar": "img/paris.jpeg" },
	    { "name": "@lucyliu", "comment": "a story that really stays with you <3", "avatar": "img/lucy.jpeg" }
	  ]
    }
  },
  {
    title: "Call Me by Your Name",
    author: "André Aciman",
    genre: ["Coming‑of-age", "Romance"],
    releaseDate: "2007-01-01",
    image: "https://upload.wikimedia.org/wikipedia/en/7/77/Call_Me_By_Your_Name%2C_2007_book_cover.jpg",
    synopsis: "Set in the 1980s in northern Italy, the novel follows Elio Perlman, a 17‑year-old, and a visiting scholar, Oliver, who comes to stay with Elio’s family for the summer. What begins as polite friendship slowly transforms into a deeply emotional and passionate romance. The book explores yearning, identity, memory, and the bittersweet nature of first love — and how that relationship continues to shape them over the next 20 years.",
    rating: {
      average: 4.2,
      count: 44,
      reviews: [
	    { "name": "@dualipa", "comment": "heartfelt and beautifully written 😌", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "a bittersweet love story, loved it <3", "avatar": "img/nicole.jpeg" },
	    { "name": "@arianagrande", "comment": "so emotional and tender ><", "avatar": "img/ariana.jpeg" }
	  ]
    },
    newArrival: true
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: ["Literary Fiction", "Tragedy"],
    releaseDate: "1925-04-10",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/400px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
    synopsis: "In the Roaring Twenties, Jay Gatsby, a mysteriously wealthy man, throws extravagant parties in the hope of winning back Daisy Buchanan, his old love. Narrated by Nick Carraway, an outsider drawn into Gatsby’s world, the novel explores themes of idealism, social stratification, the American Dream, and the disillusionment of wealth.",
    rating: {
      average: 4.7,
      count: 204,
      reviews: [
	    { "name": "@giselebundchen", "comment": "classic and timeless <3", "avatar": "img/gisele.jpeg" },
	    { "name": "@xtina", "comment": "gatsby’s story is tragic but beautiful 😢", "avatar": "img/christina.jpeg" },
	    { "name": "@arianagrande", "comment": "i felt every emotion reading this ><", "avatar": "img/ariana.jpeg" },
	    { "name": "@billieeilish", "comment": "the 20s vibe is everything, so immersive", "avatar": "img/billie.jpeg" },
	    { "name": "@dualipa", "comment": "gatsby is such a complex character 😌", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "beautifully written but so heartbreaking", "avatar": "img/nicole.jpeg" },
	    { "name": "@lindsaylohan", "comment": "i loved the depiction of wealth and tragedy", "avatar": "img/lindsay.jpeg" },
	    { "name": "@lucyliu", "comment": "every party scene felt so vivid", "avatar": "img/lucy.jpeg" },
	    { "name": "@sooyaa__", "comment": "tragic romance done perfectly ><", "avatar": "img/jisoo.jpeg" },
	    { "name": "@umathurman", "comment": "so much symbolism, i loved analyzing it", "avatar": "img/uma.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "gatsby’s obsession is heartbreaking but fascinating <3", "avatar": "img/rosie.jpeg" },
	    { "name": "@parishilton", "comment": "nick’s perspective is so intriguing", "avatar": "img/paris.jpeg" },
	    { "name": "@rachelmcadams", "comment": "timeless story, emotional and gripping 😢", "avatar": "img/rachel.jpeg" },
	    { "name": "@britneyspears", "comment": "perfect mix of glamour and tragedy", "avatar": "img/britney.jpeg" }
	  ]
    }
  },
  {
    title: "The Book of Longings",
    author: "Sue Monk Kidd",
    genre: ["Historical Fiction"],
    releaseDate: "2020-01-01",
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/The_Book_of_Longings.jpg?20250903001437",
    synopsis: "A reimagined life story of Ana, married to Jesus, told with boldness, spirituality, and fierce independence. The novel explores Ana’s ambition to write, to discover her voice, and to live fully within her time.",
    rating: {
      average: 4.3,
      count: 72,
      reviews: [
	    { "name": "@honeymoon", "comment": "inspiring and thought-provoking 😌", "avatar": "img/lana.jpeg" },
	    { "name": "@arianagrande", "comment": "loved the depth of ana’s character <3", "avatar": "img/ariana.jpeg" },
	    { "name": "@sooyaa__", "comment": "ana’s journey is so empowering ><", "avatar": "img/jisoo.jpeg" },
	    { "name": "@lucyliu", "comment": "bold, beautiful, and so emotional", "avatar": "img/lucy.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "couldn’t put it down, amazing story 😍", "avatar": "img/rosie.jpeg" }
	  ]
    }
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: ["Dystopian", "Political Fiction"],
    releaseDate: "1949-06-08",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/1984_first_edition_cover.jpg",
    synopsis: "In a totalitarian superstate called Oceania, Winston Smith works for the Ministry of Truth, rewriting history to match the Party’s propaganda. The all‑seeing Big Brother watches everyone. Thoughtcrime is punishable, and privacy is an illusion. Winston begins to rebel in small ways — through writing, secret love, and questioning — but the Party’s control is brutally pervasive.",
    rating: {
      average: 4.8,
      count: 220,
      reviews: [
	    { "name": "@sooyaa__", "comment": "this book freaked me out a bit 😳 but in a good way", "avatar": "img/jisoo.jpeg" },
	    { "name": "@umathurman", "comment": "i could not stop reading, totally gripping <3", "avatar": "img/uma.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "so unsettling… big brother is terrifying ><", "avatar": "img/rosie.jpeg" },
	    { "name": "@parishilton", "comment": "the control and tension in this book is insane", "avatar": "img/paris.jpeg" },
	    { "name": "@rachelmcadams", "comment": "every small act of rebellion felt sooo satisfying 😏", "avatar": "img/rachel.jpeg" },
	    { "name": "@devonaoki", "comment": "dark, scary, but i couldn’t put it down", "avatar": "img/devon.jpeg" },
	    { "name": "@lindsaylohan", "comment": "1984 is haunting and brilliant", "avatar": "img/lindsay.jpeg" },
	    { "name": "@camerondiaz", "comment": "makes you rethink everything about society :)", "avatar": "img/cameron.jpeg" },
	    { "name": "@angelinajolie", "comment": "i felt so tense reading this, omg", "avatar": "img/angelina.jpeg" },
	    { "name": "@kaliuchis", "comment": "still gives me chills thinking about it 😅", "avatar": "img/kali.jpeg" },
	    { "name": "@lilyrose_depp", "comment": "thoughtcrime is real… i feel watched ><", "avatar": "img/lily.jpeg" },
	    { "name": "@britneyspears", "comment": "classic dystopia, can’t believe how relevant it still is", "avatar": "img/britney.jpeg" },
	    { "name": "@dualipa", "comment": "crazy how this book predicted sooo much", "avatar": "img/dua.jpeg" },
	    { "name": "@billieeilish", "comment": "the tension is unbearable, loved it", "avatar": "img/billie.jpeg" },
	    { "name": "@giselebundchen", "comment": "cold, brilliant, terrifying — everything i needed", "avatar": "img/gisele.jpeg" },
	    { "name": "@nicolekidman", "comment": "seriously makes you paranoid but i loved it <3", "avatar": "img/nicole.jpeg" },
	    { "name": "@xtina", "comment": "intense, gripping, couldn’t stop", "avatar": "img/christina.jpeg" },
	    { "name": "@itsmeleighton", "comment": "each page makes you feel more trapped ><", "avatar": "img/leighton.jpeg" },
	    { "name": "@lucyliu", "comment": "so smart and scary at the same time 😳", "avatar": "img/lucy.jpeg" },
	    { "name": "@arianagrande", "comment": "wow… still thinking about it days later", "avatar": "img/ariana.jpeg" }
	  ]
    }
  },
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: ["Historical Fiction", "Drama"],
    releaseDate: "2017-06-13",
    image: "https://upload.wikimedia.org/wikipedia/en/1/17/The_Seven_Husbands_of_Evelyn_Hugo.jpg?20210603003522",
    synopsis: "Reclusive Hollywood icon Evelyn Hugo, now in her late 70s, decides to give a final, explosive interview — but only to one woman: an unknown journalist named Monique Grant. As Evelyn recounts her life from her rise in the 1950s to her glittering but scandalous past, she reveals her seven marriages, her ambition, her love affairs, and the secret that changes everything. Monique’s life becomes intertwined with Evelyn’s in unexpected ways, and the book explores fame, identity, and the true cost of sacrifice.",
    rating: {
      average: 4.6,
      count: 57,
      reviews: [
	    { "name": "@devonaoki", "comment": "absolutely captivating 😍", "avatar": "img/devon.jpeg" },
	    { "name": "@drewbarrymore", "comment": "couldn’t put it down ><", "avatar": "img/drew.jpeg" },
	    { "name": "@parishilton", "comment": "evelyn hugo is such a complex icon <3", "avatar": "img/paris.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "so glamorous, dramatic, and addictive 😏", "avatar": "img/rosie.jpeg" }
	  ]
    },
    newArrival: true
  },
  {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    genre: ["Historical Fiction"],
    releaseDate: "2007-05-01",
    image: "https://upload.wikimedia.org/wikipedia/en/1/10/A_Thousand_Splendid_Suns.gif?20170915192408",
    synopsis: "Over thirty years, two Afghan women — Mariam, a harami, and Laila, a younger woman — form a deep bond amid war, loss, and oppression. Their friendship becomes a source of strength, sacrifice, and hope in a brutal world.",
    rating: {
      average: 4.7,
      count: 108,
      reviews: [
	    { "name": "@sabrinacarpenter", "comment": "heart-wrenching and beautiful 😢", "avatar": "img/sabrina.jpeg" },
	    { "name": "@kaliuchis", "comment": "powerful story of resilience <3", "avatar": "img/kali.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "i cried and smiled, such an emotional journey ><", "avatar": "img/rosie.jpeg" },
	    { "name": "@dualipa", "comment": "the bond between the women is so moving", "avatar": "img/dua.jpeg" },
	    { "name": "@lucyliu", "comment": "beautifully written, i felt every moment 😌", "avatar": "img/lucy.jpeg" },
	    { "name": "@arianagrande", "comment": "so inspiring, their friendship gives me hope", "avatar": "img/ariana.jpeg" },
	    { "name": "@parishilton", "comment": "couldn’t put it down, totally gripping <3", "avatar": "img/paris.jpeg" }
	  ]
    }
  },
  {
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    genre: ["Magical Realism", "Contemporary Fiction"],
    releaseDate: "2015-12-06",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9c/Before_the_Coffee_Gets_Cold_book_cover.webp/268px-Before_the_Coffee_Gets_Cold_book_cover.webp.png?20240208000246",
    synopsis: "In a tiny café tucked away in a back alley in Tokyo, there’s a special chair — one that allows its occupant to travel back in time, but only under strict rules: you must finish your coffee before it gets cold, you can’t leave the seat, and only certain people can be met. Over one poignant summer, four customers try to revisit their pasts: a businesswoman longing to mend a lost relationship, a nurse seeking a letter from her husband with Alzheimer’s, sisters healing old wounds, and more. Through their stories, the novel gently explores regret, forgiveness, and the hope that even if we can’t change what was, we can heal.",
    rating: {
      average: 4.2,
      count: 35,
      reviews: [
        { name: "@jennierubyjane", comment: "sweet and bittersweet all at once :)", avatar: "img/jennie.jpeg" }
      ]
    },
    newArrival: true
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    genre: ["Historical Fiction", "Magical Realism"],
    releaseDate: "1987-09-16",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg/500px-Beloved_%281987_1st_ed_dust_jacket_cover%29.jpg",
    synopsis: "Sethe, a formerly enslaved woman, is haunted by the ghost of her dead daughter, Beloved. As the past invades her present, she confronts the trauma of slavery, maternal love, and what it means to be free but not forgotten.",
    rating: {
      average: 4.5,
      count: 97,
      reviews: [
	    { "name": "@arianagrande", "comment": "hauntingly beautiful storytelling 😢", "avatar": "img/ariana.jpeg" },
	    { "name": "@itsmeleighton", "comment": "a masterpiece that stays with you <3", "avatar": "img/leighton.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "so emotional and powerful ><", "avatar": "img/rosie.jpeg" },
	    { "name": "@sooyaa__", "comment": "the depth of sethe’s story hit me hard", "avatar": "img/jisoo.jpeg" },
	    { "name": "@lucyliu", "comment": "couldn’t stop thinking about it after reading 😌", "avatar": "img/lucy.jpeg" }
	  ]
    }
  },
  {
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    genre: ["Mystery", "Historical Fiction"],
    releaseDate: "2001-01-01",
    image: "https://upload.wikimedia.org/wikipedia/en/8/84/TheShadowOfTheWind.jpg?20080922194318",
    synopsis: "Daniel, a young boy in post‑war Barcelona, is taken by his father to the Cemetery of Forgotten Books, where he chooses a novel called The Shadow of the Wind. He becomes obsessed with the author, Julian Carax, and sets out to uncover his tragic story — discovering love, betrayal, and dark secrets along the way.",
    rating: {
      average: 4.8,
      count: 204,
      reviews: [
	    { "name": "@lucyliu", "comment": "intriguing and atmospheric — couldn’t put it down!", "avatar": "img/lucy.jpeg" },
	    { "name": "@camerondiaz", "comment": "beautifully written with unforgettable characters <3", "avatar": "img/cameron.jpeg" },
	    { "name": "@sooyaa__", "comment": "so mysterious, kept me guessing the whole time 😳", "avatar": "img/jisoo.jpeg" },
	    { "name": "@umathurman", "comment": "love the gothic vibes, totally obsessed!", "avatar": "img/uma.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "daniel’s journey is so captivating ><", "avatar": "img/rosie.jpeg" },
	    { "name": "@parishilton", "comment": "dark secrets, romance, mystery… all in one book 😍", "avatar": "img/paris.jpeg" },
	    { "name": "@rachelmcadams", "comment": "couldn’t stop reading, the story just pulls you in", "avatar": "img/rachel.jpeg" },
	    { "name": "@arianagrande", "comment": "love the writing style, very cinematic", "avatar": "img/ariana.jpeg" },
	    { "name": "@billieeilish", "comment": "the twists kept me hooked till the end", "avatar": "img/billie.jpeg" },
	    { "name": "@dualipa", "comment": "atmospheric and emotional, such a ride <3", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "so well-crafted, the characters feel alive", "avatar": "img/nicole.jpeg" },
	    { "name": "@giselebundchen", "comment": "could read this over and over again 😌", "avatar": "img/gisele.jpeg" },
	    { "name": "@xina", "comment": "mystery + romance + heartbreak, yes please ><", "avatar": "img/christina.jpeg" },
	    { "name": "@lindsaylohan", "comment": "zafón’s writing is just magical", "avatar": "img/lindsay.jpeg" },
	    { "name": "@devonaoki", "comment": "kept me thinking long after i finished the book", "avatar": "img/devon.jpeg" }
	  ]
    }
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: ["Gothic", "Romance", "Bildungsroman"],
    releaseDate: "1847-10-16",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Jane_Eyre_title_page.jpg/400px-Jane_Eyre_title_page.jpg",
    synopsis: "Jane Eyre, an orphaned and strong‑willed governess, finds work at Thornfield Hall, where she falls in love with the brooding Mr. Rochester. But secrets haunt Thornfield, and Jane must decide how much she's willing to sacrifice for love, dignity, and independence.",
    rating: {
      average: 4.6,
      count: 29,
      reviews: [
        { name: "@umathurman", comment: "a timeless story of love and independence <3", avatar: "img/uma.jpeg" },
        { name: "@angelinajolie", comment: "jane’s strength and resilience are inspiring 🥰", avatar: "img/angelina.jpeg" }
      ]
    },
    newArrival: true
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    genre: ["Coming‑of‑Age", "Literary Fiction"],
    releaseDate: "1951-07-16",
    image: "https://npr.brightspotcdn.com/dims4/default/f735808/2147483647/strip/true/crop/363x574+0+0/resize/880x1392!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwkar%2Ffiles%2Fcatcher_in_the_rye_cover.png",
    synopsis: "Holden Caulfield, a disillusioned teenager recently expelled from school, wanders around New York City over a few days. He grapples with alienation, loss of innocence, and the phony nature of the adult world, all while longing for genuine connection.",
    rating: {
      average: 4.3,
      count: 112,
      reviews: [
	    { "name": "@honeymoon", "comment": "relatable and raw — holden’s voice is iconic 😌", "avatar": "img/lana.jpeg" },
	    { "name": "@lucyliu", "comment": "a must-read coming-of-age classic <3", "avatar": "img/lucy.jpeg" },
	    { "name": "@sooyaa__", "comment": "felt like i was walking through nyc with him ><", "avatar": "img/jisoo.jpeg" },
	    { "name": "@arianagrande", "comment": "holden is frustrating but so real 😅", "avatar": "img/ariana.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "the angst is perfect, love this book", "avatar": "img/rosie.jpeg" },
	    { "name": "@parishilton", "comment": "classic story about growing up and feeling lost", "avatar": "img/paris.jpeg" },
	    { "name": "@dualipa", "comment": "honestly made me think about my own teen years ><", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "such an emotional and raw read 😢", "avatar": "img/nicole.jpeg" },
	    { "name": "@lindsaylohan", "comment": "timeless and relatable, totally iconic", "avatar": "img/lindsay.jpeg" }
	  ]
    }
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    genre: ["Historical Fiction", "Coming‑of‑Age"],
    releaseDate: "1868-09-01",
    image: "https://cdn.britannica.com/04/126004-050-EC4DF54F/Dustcover-Louisa-May-Alcott-Little-Women-novel.jpg",
    synopsis: "The March sisters — Meg, Jo, Beth, and Amy — grow up during the American Civil War era. The novel explores their relationships, ambitions, and struggles as they come of age, supporting each other through love, hardship, and loss.",
    rating: {
      average: 4.7,
      count: 50,
      reviews: [
	    { "name": "@britneyspears", "comment": "heartwarming and timeless. the sisters feel so real <3", "avatar": "img/britney.jpeg" },
	    { "name": "@dojacat", "comment": "loved every character, especially jo — so inspiring 😌", "avatar": "img/doja.jpeg" },
	    { "name": "@arianagrande", "comment": "such a sweet story, felt like i was growing up with them ><", "avatar": "img/ariana.jpeg" }
	  ]
    },
    newArrival: true
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: ["Romance", "Novel of Manners"],
    releaseDate: "1813-01-28",
    image: "https://cdn.kobo.com/book-images/91a565c9-8a75-4e89-9250-a7c46362547c/353/569/90/False/pride-prejudice-13.jpg",
    synopsis: "Elizabeth Bennet, witty and independent, navigates societal expectations, her family’s anxiety about marrying off her sisters, and the prideful Mr. Darcy, a wealthy aristocrat. Their initial misunderstandings and prejudices slowly give way to mutual respect and love. The novel is a sharp commentary on class, marriage, and first impressions in early 19th‑century England.",
    rating: {
      average: 4.5,
      count: 48,
      reviews: [
	    { "name": "@roses_are_rosie", "comment": "elizabeth is iconic! love the wit and romance <3", "avatar": "img/rosie.jpeg" },
	    { "name": "@xtina", "comment": "classic story, never gets old", "avatar": "img/christina.jpeg" },
	    { "name": "@lalalalisa_m", "comment": "mr. darcy is my ultimate book crush 😍", "avatar": "img/lisa.jpeg" },
	    { "name": "@jennierubyjane", "comment": "i laughed and swooned so much reading this ><", "avatar": "img/jennie.jpeg" },
	    { "name": "@lucyliu", "comment": "timeless romance, witty dialogue, can’t get enough", "avatar": "img/lucy.jpeg" }
	  ]
    },
    newArrival: true
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: ["Historical Fiction", "Drama"],
    releaseDate: "2003-05-29",
    image: "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg?20220127174707",
    synopsis: "Amir, a young boy from Kabul, grows up in a privileged household but is haunted by guilt over betraying his childhood friend Hassan. As Afghanistan undergoes political turmoil, Amir must return to his homeland to confront his past and seek redemption.",
    rating: {
      average: 4.9,
      count: 234,
      reviews: [
	    { "name": "@lalalalisa_m", "comment": "this book broke me 😭 so beautiful and raw", "avatar": "img/lisa.jpeg" },
	    { "name": "@lilyrose_depp", "comment": "cant stop thinking about it, so emotional", "avatar": "img/lily.jpeg" },
	    { "name": "@arianagrande", "comment": "literally cried in public reading this >< amazing story", "avatar": "img/ariana.jpeg" },
	    { "name": "@billieeilish", "comment": "the way the story hits you in the feels omg <3", "avatar": "img/billie.jpeg" },
	    { "name": "@dualipa", "comment": "wow… the guilt and redemption parts got me hard 😭", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "every character feels so real, i loved it", "avatar": "img/nicole.jpeg" },
	    { "name": "@giselebundchen", "comment": "couldn’t put it down, my heart was racing", "avatar": "img/gisele.jpeg" },
	    { "name": "@xtina", "comment": "friendship, loss, redemption… all in one book <3", "avatar": "img/christina.jpeg" },
	    { "name": "@honeymoon", "comment": "felt like i was walking in afghanistan myself 🌄", "avatar": "img/lana.jpeg" },
	    { "name": "@kaliuchis", "comment": "heartbreaking but so beautiful, loved every page", "avatar": "img/kali.jpeg" },
	    { "name": "@angelinajolie", "comment": "still thinking about this story days later", "avatar": "img/angelina.jpeg" },
	    { "name": "@devonaoki", "comment": "so emotional, couldn’t stop reading 🥹", "avatar": "img/devon.jpeg" },
	    { "name": "@drewbarrymore", "comment": "my heart hurt but in the best way", "avatar": "img/drew.jpeg" },
	    { "name": "@jennierubyjane", "comment": "beautifully written, made me cry multiple times", "avatar": "img/jennie.jpeg" },
	    { "name": "@itsmeleighton", "comment": "friendship + forgiveness = perfect combo <3", "avatar": "img/leighton.jpeg" },
	    { "name": "@lucyliu", "comment": "felt every emotion with the characters", "avatar": "img/lucy.jpeg" },
	    { "name": "@britneyspears", "comment": "powerful and unforgettable, hosseini is a genius", "avatar": "img/britney.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "a tale that stays with you forever :)", "avatar": "img/rosie.jpeg" },
	    { "name": "@camerondiaz", "comment": "i cried multiple times, so moving and real", "avatar": "img/cameron.jpeg" },
	    { "name": "@lindsaylohan", "comment": "an emotional journey through friendship and forgiveness", "avatar": "img/lindsay.jpeg" }
	  ]
    },
  },
  {
    title: "The Nightingale",
    author: "Kristin Hannah",
    genre: ["Historical Fiction", "War"],
    releaseDate: "2015-02-03",
    image: "https://m.media-amazon.com/images/I/51qNcIGDMoL._AC_UF1000,1000_QL80_.jpg",
    synopsis: "In WWII France, two sisters take very different paths: Vianne, who must survive the war at home, and Isabelle, who joins the French Resistance. Their courage, heartbreak, and love reveal the many faces of survival during war.",
    rating: {
      average: 4.8,
      count: 187,
      reviews: [
	    { "name": "@blakelively", "comment": "heart-wrenching yet inspiring story of sisterhood <3", "avatar": "img/blake.jpeg" },
	    { "name": "@giselebundchen", "comment": "beautifully written, really brings wwii france to life", "avatar": "img/gisele.jpeg" },
	    { "name": "@arianagrande", "comment": "couldn’t stop reading, so emotional 😢", "avatar": "img/ariana.jpeg" },
	    { "name": "@dualipa", "comment": "isabelle is such a badass omg ><", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "vianne’s story hit me so hard", "avatar": "img/nicole.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "so beautifully sad, cried multiple times 😭", "avatar": "img/rosie.jpeg" },
	    { "name": "@jennierubyjane", "comment": "the bond between sisters is portrayed perfectly", "avatar": "img/jennie.jpeg" },
	    { "name": "@lalalalisa_m", "comment": "war + family + love, such a rollercoaster <3", "avatar": "img/lisa.jpeg" },
	    { "name": "@billieeilish", "comment": "i felt every emotion with these characters", "avatar": "img/billie.jpeg" },
	    { "name": "@xina", "comment": "so gripping, couldn’t put it down ><", "avatar": "img/christina.jpeg" },
	    { "name": "@lindsaylohan", "comment": "beautiful storytelling, very emotional 😌", "avatar": "img/lindsay.jpeg" },
	    { "name": "@lucyliu", "comment": "i loved both sisters’ journeys, so different yet connected", "avatar": "img/lucy.jpeg" },
	    { "name": "@camerondiaz", "comment": "this book stayed with me long after finishing", "avatar": "img/cameron.jpeg" },
	    { "name": "@parishilton", "comment": "the writing is gorgeous and heartbreaking", "avatar": "img/paris.jpeg" },
	    { "name": "@rachelmcadams", "comment": "can’t recommend enough, absolutely moving :)", "avatar": "img/rachel.jpeg" },
	    { "name": "@britneyspears", "comment": "wow… just wow, emotional and inspiring", "avatar": "img/britney.jpeg" }
	  ]
    }
  },
  {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    genre: ["Contemporary Fiction"],
    releaseDate: "2015-01-01",
    image: "https://upload.wikimedia.org/wikipedia/en/9/94/A_Little_LIfe.jpg?20170125060540",
    synopsis: "Follows four college friends — Jude, Willem, Malcolm, and JB — over decades in New York. Jude’s traumatic past, his relationships, and his struggles with self-harm and identity are deeply explored. This is a deeply emotional, brutal, and ultimately hopeful story about friendship, survival, and resilience.",
    rating: {
      average: 4.6,
      count: 78,
      reviews: [
	    { "name": "@roses_are_rosie", "comment": "emotional rollercoaster. profoundly moving 😢", "avatar": "img/rosie.jpeg" },
	    { "name": "@arianagrande", "comment": "tough but unforgettable. a masterpiece <3", "avatar": "img/ariana.jpeg" },
	    { "name": "@dualipa", "comment": "couldn’t stop reading, felt every emotion ><", "avatar": "img/dua.jpeg" },
	    { "name": "@lucyliu", "comment": "so heartbreaking but beautifully written", "avatar": "img/lucy.jpeg" },
	    { "name": "@sooyaa__", "comment": "the friendships in this book hit hard 😌", "avatar": "img/jisoo.jpeg" },
	    { "name": "@britneyspears", "comment": "intense, sad, yet somehow hopeful <3", "avatar": "img/britney.jpeg" },
	    { "name": "@nicolekidman", "comment": "i cried and laughed, such a journey 😢", "avatar": "img/nicole.jpeg" },
	    { "name": "@parishilton", "comment": "deeply human story, won’t forget it ><", "avatar": "img/paris.jpeg" }
	  ]
    }
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: ["Philosophical Fiction", "Adventure"],
    releaseDate: "1988-01-01",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/TheAlchemist.jpg/500px-TheAlchemist.jpg",
    synopsis: "Santiago, a young Andalusian shepherd, has a recurring dream about treasure in Egypt. He sells his flock and goes on a journey across the desert, meeting alchemists, lovers, and wise people, learning lessons about following dreams, listening to the heart, and reading the signs of the world.",
    rating: {
      average: 4.7,
      count: 204,
      reviews: [
	    { "name": "@sooyaa__", "comment": "inspiring journey that makes you follow your dreams <3", "avatar": "img/jisoo.jpeg" },
	    { "name": "@parishilton", "comment": "simple yet profound. loved the philosophical vibe 😌", "avatar": "img/paris.jpeg" },
	    { "name": "@arianagrande", "comment": "santiago’s journey is so magical ><", "avatar": "img/ariana.jpeg" },
	    { "name": "@dualipa", "comment": "makes you reflect on life and your own dreams", "avatar": "img/dua.jpeg" },
	    { "name": "@lucyliu", "comment": "every page felt like a life lesson 😍", "avatar": "img/lucy.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "beautifully simple but so meaningful <3", "avatar": "img/rosie.jpeg" },
	    { "name": "@rachelmcadams", "comment": "i loved how it made me think about my own path", "avatar": "img/rachel.jpeg" },
	    { "name": "@billieeilish", "comment": "philosophical but still super readable 😏", "avatar": "img/billie.jpeg" },
	    { "name": "@britneyspears", "comment": "santiago is such a relatable character", "avatar": "img/britney.jpeg" },
	    { "name": "@nicolekidman", "comment": "so motivational, i want to travel now ><", "avatar": "img/nicole.jpeg" },
	    { "name": "@giselebundchen", "comment": "every lesson hit me hard, love this book", "avatar": "img/gisele.jpeg" },
	    { "name": "@xtina", "comment": "magical and inspiring, can read over and over", "avatar": "img/christina.jpeg" },
	    { "name": "@lindsaylohan", "comment": "makes you question your own dreams 😌", "avatar": "img/lindsay.jpeg" },
	    { "name": "@umathurman", "comment": "i felt like i was walking with santiago across the desert", "avatar": "img/uma.jpeg" },
	    { "name": "@sooyaa__", "comment": "timeless story about following your heart <3", "avatar": "img/jisoo.jpeg" }
	  ]
    }
  },
  {
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: ["Young Adult", "Romance"],
    releaseDate: "2012-01-10",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Fault_in_Our_Stars.jpg?20170701081258",
    synopsis: "Hazel Grace Lancaster, a teenage cancer patient, meets Augustus Waters at a support group. They fall in love, share humor and pain, and embark on a journey to the Netherlands to meet an author they both admire. This is a tender, heartbreaking story about life, love, and mortality.",
    rating: {
      average: 4.5,
      count: 85,
      reviews: [
	    { "name": "@lucyliu", "comment": "heartbreaking but beautifully written 😢", "avatar": "img/lucy.jpeg" },
	    { "name": "@jennierubyjane", "comment": "made me cry and laugh at the same time <3", "avatar": "img/jennie.jpeg" },
	    { "name": "@dualipa", "comment": "hazel and augustus’ story hit me so hard ><", "avatar": "img/dua.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "so emotional and tender, couldn’t put it down", "avatar": "img/rosie.jpeg" },
	    { "name": "@arianagrande", "comment": "such a bittersweet love story 😌", "avatar": "img/ariana.jpeg" },
	    { "name": "@parishilton", "comment": "makes you think about life and love <3", "avatar": "img/paris.jpeg" },
	    { "name": "@britneyspears", "comment": "heartwarming and heartbreaking at the same time ><", "avatar": "img/britney.jpeg" },
	    { "name": "@sooyaa__", "comment": "i felt every emotion reading this 😢", "avatar": "img/jisoo.jpeg" }
	  ]
    }
  },
  {
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    genre: ["Fantasy", "Adventure"],
    releaseDate: "1937-09-21",
    image: "https://m.media-amazon.com/images/I/712cDO7d73L.jpg",
    synopsis: "Bilbo Baggins, a quiet hobbit, is swept into an epic quest by the wizard Gandalf and a band of dwarves to reclaim their homeland from the dragon Smaug. Along the way, Bilbo encounters trolls, goblins, elves, and a magical ring, learning bravery, wit, and the value of home.",
    rating: {
      average: 4.8,
      count: 198,
      reviews: [
	    { "name": "@drewbarrymore", "comment": "classic adventure that never gets old", "avatar": "img/drew.jpeg" },
	    { "name": "@dojacat", "comment": "bilbo is such a lovable hero 😍", "avatar": "img/doja.jpeg" },
	    { "name": "@arianagrande", "comment": "loved the journey, trolls and goblins were hilarious ><", "avatar": "img/ariana.jpeg" },
	    { "name": "@lalalalisa_m", "comment": "gandalf is literally goals ✨", "avatar": "img/lisa.jpeg" },
	    { "name": "@sooyaa__", "comment": "so magical, felt like i was there", "avatar": "img/jisoo.jpeg" },
	    { "name": "@umathurman", "comment": "adventure + fantasy = perfection <3", "avatar": "img/uma.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "smaug is terrifying but epic 😱", "avatar": "img/rosie.jpeg" },
	    { "name": "@parishilton", "comment": "bilbo’s growth is just beautiful to read", "avatar": "img/paris.jpeg" },
	    { "name": "@rachelmcadams", "comment": "couldn’t stop reading, such a fun ride", "avatar": "img/rachel.jpeg" },
	    { "name": "@nicolekidman", "comment": "every character feels so alive, love it", "avatar": "img/nicole.jpeg" },
	    { "name": "@xtina", "comment": "the humor + adventure mix perfectly ><", "avatar": "img/christina.jpeg" },
	    { "name": "@lindsaylohan", "comment": "timeless story, bilbo is such a mood 😌", "avatar": "img/lindsay.jpeg" },
	    { "name": "@britneyspears", "comment": "fantasy at its finest, tolkien forever", "avatar": "img/britney.jpeg" },
	    { "name": "@lucyliu", "comment": "felt like i was on the quest with bilbo", "avatar": "img/lucy.jpeg" }
	  ]
    }
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    genre: ["Epic Fantasy"],
    releaseDate: "1954-07-29",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif?20171019011113",
    synopsis: "The Fellowship begins an epic journey to destroy the One Ring in the fires of Mount Doom. Alongside hobbits, elves, dwarves, wizards, and men, they face dark forces, test loyalties, and confront power, sacrifice, and courage.",
    rating: {
      average: 4.9,
      count: 254,
      reviews: [
	    { "name": "@camerondiaz", "comment": "epic in every sense, a masterpiece 😎", "avatar": "img/cameron.jpeg" },
	    { "name": "@lindsaylohan", "comment": "immersive and unforgettable fantasy world <3", "avatar": "img/lindsay.jpeg" },
	    { "name": "@arianagrande", "comment": "couldn’t put it down — middle-earth feels so real!", "avatar": "img/ariana.jpeg" },
	    { "name": "@billieeilish", "comment": "the journey, the characters, the battles — pure perfection", "avatar": "img/billie.jpeg" },
	    { "name": "@dualipa", "comment": "fantasy done right. tolkien is unmatched", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "i laughed, i cried, i cheered. incredible :)", "avatar": "img/nicole.jpeg" },
	    { "name": "@giselebundchen", "comment": "every reread feels fresh, just wow", "avatar": "img/gisele.jpeg" },
	    { "name": "@xtina", "comment": "a legendary tale of friendship and courage", "avatar": "img/christina.jpeg" },
	    { "name": "@honeymoon", "comment": "the world-building here is insane. love it 🌄", "avatar": "img/lana.jpeg" },
	    { "name": "@kaliuchis", "comment": "felt like i was on the journey with them", "avatar": "img/kali.jpeg" },
	    { "name": "@angelinajolie", "comment": "totally transported me to middle-earth, pure magic 😍", "avatar": "img/angelina.jpeg" },
	    { "name": "@devonaoki", "comment": "tolkien’s writing is timeless, can’t recommend enough", "avatar": "img/devon.jpeg" },
	    { "name": "@drewbarrymore", "comment": "action, emotion, lore — this has it all", "avatar": "img/drew.jpeg" },
	    { "name": "@jennierubyjane", "comment": "the depth of this story is unmatched <3", "avatar": "img/jennie.jpeg" },
	    { "name": "@lilyrose_depp", "comment": "a fantasy world that feels alive, obsessed!", "avatar": "img/lily.jpeg" },
	    { "name": "@itsmeleighton", "comment": "each character’s arc is beautifully crafted", "avatar": "img/leighton.jpeg" },
	    { "name": "@lucyliu", "comment": "epic battles, heartfelt moments, everything you want 😭", "avatar": "img/lucy.jpeg" },
	    { "name": "@britneyspears", "comment": "an absolute classic, tolkien forever", "avatar": "img/britney.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "from start to finish, it’s a masterpiece :)", "avatar": "img/rosie.jpeg" }
	  ]
    }
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: ["Historical Fiction"],
    releaseDate: "2005-03-14",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg?20170530054358",
    synopsis: "Narrated by Death, the story follows Liesel Meminger, a foster girl in Nazi Germany, who steals books and shares them with her neighbors and the Jewish man hiding in her basement. It’s a powerful tale about words, mortality, and humanity.",
    rating: {
      average: 4.7,
      count: 231,
      reviews: [
	    { "name": "@itsmeleighton", "comment": "heartbreaking but beautifully told 😢", "avatar": "img/leighton.jpeg" },
	    { "name": "@umathurman", "comment": "a story that stays with you forever <3", "avatar": "img/uma.jpeg" },
	    { "name": "@rachelmcadams", "comment": "loved the narration by death, so unique", "avatar": "img/rachel.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "couldn’t stop crying, so moving ><", "avatar": "img/rosie.jpeg" },
	    { "name": "@arianagrande", "comment": "liesel is such a brave and inspiring character", "avatar": "img/ariana.jpeg" },
	    { "name": "@parishilton", "comment": "words have so much power in this book 😌", "avatar": "img/paris.jpeg" },
	    { "name": "@sooyaa__", "comment": "beautiful, tragic, and unforgettable", "avatar": "img/jisoo.jpeg" },
	    { "name": "@lucyliu", "comment": "the storytelling is just amazing", "avatar": "img/lucy.jpeg" },
	    { "name": "@billieeilish", "comment": "i felt everything reading this, truly emotional", "avatar": "img/billie.jpeg" },
	    { "name": "@dualipa", "comment": "powerful, sad, but so well-written <3", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "i will never forget this story", "avatar": "img/nicole.jpeg" },
	    { "name": "@xtina", "comment": "so haunting and beautifully crafted ><", "avatar": "img/christina.jpeg" }
	  ]
    }
  },
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    genre: ["Fantasy"],
    releaseDate: "1996-08-06",
    image: "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg?20171211222216",
    synopsis: "The first book in the epic A Song of Ice and Fire series, where noble families vie for control of the Iron Throne in a land of betrayal, dragons, and war.",
    rating: {
      average: 4.6,
      count: 143,
      reviews: [
	    { "name": "@rachelmcadams", "comment": "intricate plot, loved every twist 😌", "avatar": "img/rachel.jpeg" },
	    { "name": "@devonaoki", "comment": "so many characters but all unforgettable <3", "avatar": "img/devon.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "dragons, betrayal, and drama — couldn’t get enough ><", "avatar": "img/rosie.jpeg" },
	    { "name": "@dualipa", "comment": "totally immersive, felt like i was in westeros 😍", "avatar": "img/dua.jpeg" },
	    { "name": "@lucyliu", "comment": "epic fantasy at its finest", "avatar": "img/lucy.jpeg" },
	    { "name": "@parishilton", "comment": "every chapter kept me on edge <3", "avatar": "img/paris.jpeg" },
	    { "name": "@sooyaa__", "comment": "complex and thrilling, loved it ><", "avatar": "img/jisoo.jpeg" },
	    { "name": "@britneyspears", "comment": "can’t wait to read the next book 😌", "avatar": "img/britney.jpeg" },
	    { "name": "@arianagrande", "comment": "so detailed, makes the world feel alive", "avatar": "img/ariana.jpeg" },
	    { "name": "@kaliuchis", "comment": "i got hooked immediately, amazing start to the series 😍", "avatar": "img/kali.jpeg" }
	  ]
    }
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    genre: ["Fantasy", "Mythology"],
    releaseDate: "2018-04-10",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9b/Circe_%28novel%29_Madeline_Milller.jpeg",
    synopsis: "A retelling of the life of Circe, the witch from Greek myth. Banished to a lonely island, she transforms herself, interacts with gods and mortals, and discovers her own power — as well as what it means to be a woman in a world of men and monsters.",
    rating: {
      average: 4.8,
      count: 175,
      reviews: [
	    { "name": "@billieeilish", "comment": "fierce, poetic, and empowering 😎", "avatar": "img/billie.jpeg" },
	    { "name": "@lalalalisa_m", "comment": "madeline miller nailed it <3", "avatar": "img/lisa.jpeg" },
	    { "name": "@arianagrande", "comment": "circe is such a mood omg ><", "avatar": "img/ariana.jpeg" },
	    { "name": "@dualipa", "comment": "love how she finds her power, so inspiring", "avatar": "img/dua.jpeg" },
	    { "name": "@nicolekidman", "comment": "mythology retelling done perfectly", "avatar": "img/nicole.jpeg" },
	    { "name": "@giselebundchen", "comment": "the writing is so lush and magical 😍", "avatar": "img/gisele.jpeg" },
	    { "name": "@xtina", "comment": "couldn’t put it down, such a wild ride ><", "avatar": "img/christina.jpeg" },
	    { "name": "@lindsaylohan", "comment": "circe’s story is empowering and heartbreaking", "avatar": "img/lindsay.jpeg" },
	    { "name": "@lucyliu", "comment": "obsessed with this retelling, amazing", "avatar": "img/lucy.jpeg" },
	    { "name": "@sooyaa__", "comment": "powerful female lead, yes please 😌", "avatar": "img/jisoo.jpeg" },
	    { "name": "@umathurman", "comment": "every chapter felt magical and intense", "avatar": "img/uma.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "madeline miller’s best work yet <3", "avatar": "img/rosie.jpeg" },
	    { "name": "@parishilton", "comment": "loved the mix of myth and emotion, so good", "avatar": "img/paris.jpeg" }
	  ]
    }
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: ["Classic", "Philosophical"],
    releaseDate: "1890-06-20",
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625587534/the-picture-of-dorian-gray-9781625587534_hr.jpg",
    synopsis: "A man remains eternally young while his portrait ages, exploring vanity, morality, and corruption in Victorian society.",
    rating: {
      average: 4.5,
      count: 98,
      reviews: [
	    { "name": "@kaliuchis", "comment": "dark, witty, and unforgettable 😌", "avatar": "img/kali.jpeg" },
	    { "name": "@jennierubyjane", "comment": "a classic that makes you question morality <3", "avatar": "img/jennie.jpeg" },
	    { "name": "@arianagrande", "comment": "i loved how eerie and thought-provoking it is ><", "avatar": "img/ariana.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "so dark but so fascinating", "avatar": "img/rosie.jpeg" },
	    { "name": "@lucyliu", "comment": "timeless story, really makes you reflect 😌", "avatar": "img/lucy.jpeg" },
	    { "name": "@sooyaa__", "comment": "the concept is so unique and gripping <3", "avatar": "img/jisoo.jpeg" },
	    { "name": "@dualipa", "comment": "i couldn’t stop reading, the moral questions are intense ><", "avatar": "img/dua.jpeg" },
	    { "name": "@britneyspears", "comment": "wilde’s wit shines through every page 😏", "avatar": "img/britney.jpeg" }
	  ]
    }
  },
  {
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    genre: ["Dystopian", "Science Fiction", "Literary Fiction"],
    releaseDate: "2005-03-01",
    image: "https://upload.wikimedia.org/wikipedia/en/6/66/Never_Let_Me_Go_%28First-edition_cover%29.jpg?20171115060637",
    synopsis: "Kathy, Tommy, and Ruth grow up at a mysterious boarding school called Hailsham, where they’re taught creativity and art — but not told their full purpose. As they age, they discover the chilling truth behind their existence and the bleak future that awaits them.",
    rating: {
      average: 4.6,
      count: 100,
      reviews: [
	    { "name": "@sooyaa__", "comment": "so haunting, stayed with me for days 😢", "avatar": "img/jisoo.jpeg" },
	    { "name": "@lalalalisa_m", "comment": "beautifully tragic and thought-provoking <3", "avatar": "img/lisa.jpeg" },
	    { "name": "@roses_are_rosie", "comment": "the story is eerie but incredibly moving ><", "avatar": "img/rosie.jpeg" },
	    { "name": "@arianagrande", "comment": "couldn’t stop thinking about the characters", "avatar": "img/ariana.jpeg" },
	    { "name": "@lucyliu", "comment": "so emotional and subtly heartbreaking 😌", "avatar": "img/lucy.jpeg" },
	    { "name": "@parishilton", "comment": "a story that lingers long after reading <3", "avatar": "img/paris.jpeg" },
	    { "name": "@britneyspears", "comment": "intense, thought-provoking, and unforgettable ><", "avatar": "img/britney.jpeg" },
	    { "name": "@dualipa", "comment": "such a hauntingly beautiful narrative 😢", "avatar": "img/dua.jpeg" }
	  ]
    }
  }
];


// --- DOM ELEMENTS ---
const newArrivalsContainer = document.getElementById("newArrivalsContainer");
const booksInStockContainer = document.getElementById("booksInStockContainer");
const customerFavoritesContainer = document.getElementById("customerFavoritesContainer");

const bookModal = document.getElementById("bookModal");
const viewAllModal = document.getElementById("viewAllModal");

const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalAuthor = document.querySelector(".modal-author");
const modalSynopsis = document.querySelector(".modal-synopsis");
const modalGenre = document.querySelector(".modal-genre");
const modalDate = document.querySelector(".modal-date");
const feedbackSection = document.getElementById("feedbackSection");

const viewAllContainer = document.getElementById("viewAllContainer");
const sortSelectViewAll = document.getElementById("sortSelectViewAll");
const genreSelectViewAll = document.getElementById("genreSelectViewAll");

const closeBtns = document.querySelectorAll(".close-btn");


// --- NAVBAR ---
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  navbar.style.transform = (currentScroll > lastScroll && currentScroll > 100) ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});


// --- BOOK CARD ---
// for book cards in section
function createSectionBookCard(book) {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <img src="${book.image}" alt="${book.title}" />
    <h3>${book.title}</h3>
    <p class="author">${book.author}</p>
    <p class="genre">${book.genre.join(", ")}</p>
  `;
  card.onclick = () => openBookModal(book);
  return card;
}

// for book cards in view all
function createViewAllBookCard(book) {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <div class="book-left">
      <img src="${book.image}" alt="${book.title}">
    </div>
    <div class="book-right">
      <div class="feedback-bubbles"></div>
      <h3>${book.title}</h3>
      <p class="author-name">${book.author}</p>
      <p class="genre-info"><strong>Genre:</strong> ${book.genre.join(", ")}</p>
      <p class="synopsis"><strong>Synopsis:</strong> ${book.synopsis}</p>
      <div class="book-meta">
        <span class="release-date"><strong>Release Date:</strong> ${book.releaseDate}</span>
        <div class="book-rating">
          ${generateStarRating(book.rating.average)}
          <span class="rating-text">${book.rating.average}/5 (${book.rating.count} ratings)</span>
        </div>
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.closest('.feedback-bubbles') || e.target.classList.contains('bubble-plus')) return;
    document.querySelectorAll(".viewall-container .book-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
  });

  const bubblesContainer = card.querySelector('.feedback-bubbles');
  renderFeedbackBubbles(bubblesContainer, book.rating?.reviews || []);
  return card;
}

// generate stars for rating
function generateStarRating(rating) {
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
    let starPercent = Math.min(Math.max(rating - (i - 1), 0), 1) * 100;
    starsHTML += `
      <span class="star" style="
        background: linear-gradient(90deg, gold ${starPercent}%, white ${starPercent}%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline-block;
      ">★</span>
    `;
  }
  return starsHTML;
}

// feedback bubbles
function renderFeedbackBubbles(container, reviews = []) {
  container.innerHTML = "";
  if (reviews.length === 0) {
    container.style.display = "none";
    return;
  }
  container.style.display = "flex";

  const maxVisible = 3;
  const visible = reviews.slice(0, maxVisible);

  visible.forEach(r => {
    const img = document.createElement("img");
    img.className = "bubble-avatar";
    img.src = r.avatar || r.profileImg || "";
    img.title = r.name || "";
    img.alt = r.name || "reviewer";
    container.appendChild(img);
  });

  const plus = document.createElement("div");
  plus.classList.add("bubble-plus");
  plus.textContent = `+`;
  plus.onclick = (e) => {
    e.stopPropagation();
    openFeedbackModal(reviews);
  };
  container.appendChild(plus);
}


// --- FEEDBACK MODAL ---
function openFeedbackModal(reviews) {
  const modal = document.getElementById("feedbackModal");
  const list = modal.querySelector(".all-reviews");
  list.innerHTML = "";

  if (!reviews.length) {
    list.innerHTML = "<p>No reviews yet.</p>";
  } else {
    reviews.forEach(r => {
      const item = document.createElement("div");
      item.className = "review-row";
      item.innerHTML = `
        <img class="review-avatar" src="${r.avatar || ''}" alt="${r.name || ''}">
        <div class="review-content">
          <strong class="review-name">${r.name || 'Anon'}</strong>
          <p class="review-comment">${r.comment || ''}</p>
        </div>
      `;
      list.appendChild(item);
    });
  }

  modal.classList.remove("closing");
  modal.style.display = "flex";
}

document.querySelector(".close-feedback").addEventListener("click", () => {
  const modal = document.getElementById("feedbackModal");
  modal.classList.add("closing");

  modal.addEventListener("animationend", function handler() {
    modal.style.display = "none";
    modal.classList.remove("closing");
    modal.removeEventListener("animationend", handler);
  });
});


// --- FAVORITES LOGIC ---
function assignCustomerFavorites(bookList, top = 10) {
  bookList.forEach(book => book.customerFavorite = false);

  const sortedBooks = [...bookList].sort((a, b) => {
    if (b.rating.average !== a.rating.average) return b.rating.average - a.rating.average;
    return b.rating.count - a.rating.count;
  });

  sortedBooks.slice(0, top).forEach(book => book.customerFavorite = true);

  return sortedBooks.slice(0, top);
}

const topCustomerFavorites = assignCustomerFavorites(books, 10);

customerFavoritesContainer.innerHTML = "";
topCustomerFavorites.forEach(book => {
  customerFavoritesContainer.appendChild(createSectionBookCard(book));
});


// --- MODAL & RENDER ---
let currentFilteredBooks = [];

// open book modal
function openBookModal(book) {
  const modal = document.getElementById("bookModal");
  modal.classList.remove("closing");
  modal.style.display = "flex";

  const modalLeft = bookModal.querySelector(".book-modal-left");
  modalLeft.querySelector(".modal-img").src = book.image;

  const modalRight = bookModal.querySelector(".book-modal-right");
  modalRight.querySelector(".modal-title").textContent = book.title;
  modalRight.querySelector(".modal-author").textContent = book.author;
  modalRight.querySelector(".modal-synopsis").innerHTML = "<strong>Synopsis:</strong> " + book.synopsis;
  modalRight.querySelector(".modal-genre").innerHTML = "<strong>Genre:</strong> " + book.genre.join(", ");
  modalRight.querySelector(".modal-date").innerHTML = "<strong>Release Date:</strong> " + book.releaseDate;

  const ratingContainer = modalRight.querySelector(".book-rating");
  ratingContainer.innerHTML = generateStarRating(book.rating.average) +
      `<span class="rating-text">${book.rating.average}/5 (${book.rating.count} ratings)</span>`;

  const bubblesContainer = bookModal.querySelector('.feedback-bubbles');
  renderFeedbackBubbles(bubblesContainer, book.rating?.reviews || []);
}

// close book modal
function closeBookModal() {
  const modal = document.getElementById("bookModal");
  if (!modal || modal.classList.contains("closing")) return;

  modal.classList.add("closing");
  modal.addEventListener("animationend", function handler() {
    modal.style.display = "none";
    modal.classList.remove("closing");
    modal.removeEventListener("animationend", handler);
  });
}

// close button
document.querySelector("#bookModal .close-btn").addEventListener("click", closeBookModal);

// rendering in homepage sections
function renderSection(container, bookList, limit = null) {
  container.innerHTML = "";
  (limit ? bookList.slice(0, limit) : bookList).forEach(book => container.appendChild(createSectionBookCard(book)));
  updateArrows(container.id);
}

// rendering in view all modal
function renderViewAll(bookList) {
  const container = viewAllContainer;
  container.innerHTML = "";
  if(!bookList.length){
    const p = document.createElement("p");
    p.textContent = "No books found.";
    p.className = "no-books";
    container.appendChild(p);
    return;
  }
  bookList.forEach(book => container.appendChild(createViewAllBookCard(book)));
}

// filter books for each section
function filterBooksBySection(section) {
  switch(section){
    case "newArrivals": return books.filter(b => b.newArrival);
    case "booksInStock": return books;
    case "customerFavorites":
	  return [...books]
	    .filter(b => b.customerFavorite)
	    .sort((a, b) => {
	      if (b.rating.average !== a.rating.average) return b.rating.average - a.rating.average;
	      return b.rating.count - a.rating.count;
	    });
    default: return [];
  }
}


// --- VIEW ALL INTERFACE ---
// view all button
let currentViewAllSection = "";
document.querySelectorAll(".view-all-btn").forEach(btn => {
  btn.addEventListener("click", () => openViewAllModal(btn.dataset.section));
});

// open view all modal
function openViewAllModal(section) {
  currentViewAllSection = section;

  const modal = document.getElementById("viewAllModal");
  modal.classList.remove("hide");
  modal.style.display = "flex";
  void modal.offsetWidth;
  modal.classList.add("show");

  sortSelectViewAll.value = "default";
  genreSelectViewAll.value = "all";

  const list = filterBooksBySection(section);
  currentFilteredBooks = list;
  renderViewAll(list);
  populateGenreDropdown(list);
}

// only closes when x button is clicked
document.querySelector("#viewAllModal .close-btn").addEventListener("click", () => {
  const modal = document.getElementById("viewAllModal");
  modal.classList.add("hide");

  modal.addEventListener("animationend", function handler() {
    modal.style.display = "none";
    modal.classList.remove("hide");
    modal.removeEventListener("animationend", handler);
  });
});

// search instantly
document.getElementById("searchInput").addEventListener("input", function() {
  const keyword = this.value.trim().toLowerCase();
  currentFilteredBooks = filterBooksBySection(currentViewAllSection).filter(book => book.title.toLowerCase().startsWith(keyword));
  applySortAndRender();
});

// populate genre dropdown for filtering in view all
function populateGenreDropdown(bookList) {
  const genres = [...new Set(bookList.flatMap(b => b.genre))].sort();
  genreSelectViewAll.innerHTML = '<option value="all">All Genres</option>';

  genres.forEach(genre => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    genreSelectViewAll.appendChild(option);
  });
}

// genre dropdown change handler
genreSelectViewAll.addEventListener("change", function() {
  const selectedGenre = this.value;
  
  if (selectedGenre === "all") {
    currentFilteredBooks = filterBooksBySection(currentViewAllSection);
  } else {
    currentFilteredBooks = filterBooksBySection(currentViewAllSection).filter(b => b.genre.includes(selectedGenre));
  }
  
  applySortAndRender();
});

// sort in view all modal
sortSelectViewAll.addEventListener("change", applySortAndRender);
function applySortAndRender() {
  const sorted = [...currentFilteredBooks];

  switch(sortSelectViewAll.value){
    case "default":
      break;
    case "title-asc":
      sorted.sort((a,b)=> a.title.localeCompare(b.title));
      break;
    case "title-desc":
      sorted.sort((a,b)=> b.title.localeCompare(a.title));
      break;
    case "date-asc":
      sorted.sort((a,b)=> new Date(a.releaseDate) - new Date(b.releaseDate));
      break;
    case "date-desc":
      sorted.sort((a,b)=> new Date(b.releaseDate) - new Date(a.releaseDate));
      break;
  }

  renderViewAll(sorted);
}


// --- HORIZONTAL SCROLL FOR SECTIONS ---
function updateArrows(containerId) {
  const container = document.getElementById(containerId);
  const wrapper = container.parentElement;
  const leftArrow = wrapper.querySelector('.left-arrow');
  const rightArrow = wrapper.querySelector('.right-arrow');

  if(!leftArrow || !rightArrow) return;

  leftArrow.style.display = container.scrollLeft > 0 ? 'block' : 'none';
  rightArrow.style.display = container.scrollLeft + container.clientWidth < container.scrollWidth ? 'block' : 'none';
}

// initial render for each section
['newArrivalsContainer','booksInStockContainer','customerFavoritesContainer'].forEach(id => {
  const container = document.getElementById(id);
  renderSection(container, filterBooksBySection(id.replace('Container','')));
  container.addEventListener('scroll', () => updateArrows(id));
});

// arrow scroll behavior
document.querySelectorAll('.arrow').forEach(arrow => {
  const container = document.getElementById(arrow.dataset.target);

  // single click = 1 book
  arrow.addEventListener('click', () => {
    const bookWidth = container.querySelector('.book-card').offsetWidth + 15;
    container.scrollBy({ left: arrow.classList.contains('right-arrow') ? bookWidth : -bookWidth, behavior: "smooth" });
  });

  // double click + 5 books
  arrow.addEventListener('dblclick', () => {
    const bookWidth = container.querySelector('.book-card').offsetWidth + 15;
    container.scrollBy({ left: arrow.classList.contains('right-arrow') ? bookWidth*5 : -bookWidth*5, behavior: "smooth" });
  });
});


// --- UNIVERSAL CLOSE MODAL ---
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("show");
    modal.classList.add("hide");

    modal.addEventListener("animationend", function handler() {
      modal.style.display = "none";
      modal.classList.remove("hide");
      modal.removeEventListener("animationend", handler);
    });
  });
});


