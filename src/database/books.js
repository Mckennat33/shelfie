import react from 'react'

const Books = [
  {
    id: 1,
    title: "The Ashen Crown",
    author: "L. M. Harrow",
    genre: "Fantasy",
    year_published: 2014,
    image_url: "https://picsum.photos/200/300?random=1",
    total_pages: 612,
    description: "A fallen kingdom, a reluctant heir, and a crown forged in ash."
  },
  {
    id: 2,
    title: "Steel & Silence",
    author: "Aaron Voss",
    genre: "Fantasy",
    year_published: 2017,
    image_url: "https://picsum.photos/200/300?random=2",
    total_pages: 488,
    description: "An exiled warrior must choose between vengeance and redemption."
  },
  {
    id: 3,
    title: "The Last Cartographer",
    author: "Elena Bright",
    genre: "Fantasy",
    year_published: 2019,
    image_url: "https://picsum.photos/200/300?random=3",
    total_pages: 534,
    description: "Maps become weapons in a world where borders constantly shift."
  },
  {
    id: 4,
    title: "Empire of Cinders",
    author: "Marcus Vale",
    genre: "Fantasy",
    year_published: 2016,
    image_url: "https://picsum.photos/200/300?random=4",
    total_pages: 701,
    description: "Magic returns to an empire that tried to erase it."
  },
  {
    id: 5,
    title: "The Moonbound Pact",
    author: "Isabel Rowan",
    genre: "Fantasy",
    year_published: 2021,
    image_url: "https://picsum.photos/200/300?random=5",
    total_pages: 452,
    description: "Ancient oaths awaken when the moon disappears from the sky."
  },

  {
    id: 6,
    title: "Signal Lost",
    author: "Daniel Kerr",
    genre: "Science Fiction",
    year_published: 2018,
    image_url: "https://picsum.photos/200/300?random=6",
    total_pages: 389,
    description: "A deep-space crew receives a message that should not exist."
  },
  {
    id: 7,
    title: "Neon Divide",
    author: "Rhea Collins",
    genre: "Science Fiction",
    year_published: 2022,
    image_url: "https://picsum.photos/200/300?random=7",
    total_pages: 421,
    description: "A hacker uncovers the truth behind a city split by class and code."
  },
  {
    id: 8,
    title: "The Quiet Machine",
    author: "Owen Pike",
    genre: "Science Fiction",
    year_published: 2015,
    image_url: "https://picsum.photos/200/300?random=8",
    total_pages: 376,
    description: "An AI designed to predict wars begins asking forbidden questions."
  },
  {
    id: 9,
    title: "Orbital Winter",
    author: "S. J. Lang",
    genre: "Science Fiction",
    year_published: 2020,
    image_url: "https://picsum.photos/200/300?random=9",
    total_pages: 498,
    description: "Survival becomes uncertain when Earth's orbit begins to decay."
  },
  {
    id: 10,
    title: "Children of the Red Sun",
    author: "Nina Solis",
    genre: "Science Fiction",
    year_published: 2013,
    image_url: "https://picsum.photos/200/300?random=10",
    total_pages: 544,
    description: "A generation raised on Mars questions its loyalty to Earth."
  },

  {
    id: 11,
    title: "The Silent Harbor",
    author: "James Holloway",
    genre: "Mystery",
    year_published: 2016,
    image_url: "https://picsum.photos/200/300?random=11",
    total_pages: 342,
    description: "A coastal town hides secrets beneath its calm surface."
  },
  {
    id: 12,
    title: "Midnight Evidence",
    author: "Clara Finch",
    genre: "Mystery",
    year_published: 2019,
    image_url: "https://picsum.photos/200/300?random=12",
    total_pages: 378,
    description: "A cold case reopens when new evidence surfaces at midnight."
  },
  {
    id: 13,
    title: "The Vanishing Ledger",
    author: "Robert Klein",
    genre: "Mystery",
    year_published: 2014,
    image_url: "https://picsum.photos/200/300?random=13",
    total_pages: 401,
    description: "A missing financial record exposes a web of corruption."
  },
  {
    id: 14,
    title: "Glass Alibi",
    author: "Mara Stone",
    genre: "Mystery",
    year_published: 2021,
    image_url: "https://picsum.photos/200/300?random=14",
    total_pages: 355,
    description: "A detective questions every reflection in a city of mirrors."
  },
  {
    id: 15,
    title: "The Final Witness",
    author: "Evan Brooks",
    genre: "Mystery",
    year_published: 2017,
    image_url: "https://picsum.photos/200/300?random=15",
    total_pages: 419,
    description: "One witness holds the truth—and someone wants them silenced."
  },

  {
    id: 16,
    title: "Beneath the Pines",
    author: "Hannah Reed",
    genre: "Thriller",
    year_published: 2018,
    image_url: "https://picsum.photos/200/300?random=16",
    total_pages: 392,
    description: "A disappearance in the woods reveals a brutal past."
  },
  {
    id: 17,
    title: "Zero Hour Protocol",
    author: "Victor Shaw",
    genre: "Thriller",
    year_published: 2020,
    image_url: "https://picsum.photos/200/300?random=17",
    total_pages: 447,
    description: "A cyberattack threatens to shut down an entire nation."
  },
  {
    id: 18,
    title: "The Cold Extraction",
    author: "Lena Ward",
    genre: "Thriller",
    year_published: 2015,
    image_url: "https://picsum.photos/200/300?random=18",
    total_pages: 361,
    description: "An undercover mission spirals into a deadly chase."
  },
  {
    id: 19,
    title: "Dead Signal",
    author: "Tom Alvarez",
    genre: "Thriller",
    year_published: 2023,
    image_url: "https://picsum.photos/200/300?random=19",
    total_pages: 428,
    description: "A journalist follows a signal no one else can hear."
  },
  {
    id: 20,
    title: "The Black Dossier",
    author: "K. R. Miles",
    genre: "Thriller",
    year_published: 2019,
    image_url: "https://picsum.photos/200/300?random=20",
    total_pages: 512,
    description: "Classified files reveal a conspiracy decades in the making."
  },

  {
    id: 21,
    title: "A Quiet Morning",
    author: "Emily Frost",
    genre: "Literary Fiction",
    year_published: 2012,
    image_url: "https://picsum.photos/200/300?random=21",
    total_pages: 284,
    description: "A single morning reshapes the lives of a fractured family."
  },
  {
    id: 22,
    title: "The Long Way Home",
    author: "Peter Alden",
    genre: "Literary Fiction",
    year_published: 2016,
    image_url: "https://picsum.photos/200/300?random=22",
    total_pages: 337,
    description: "A journey across states becomes a journey inward."
  },
  {
    id: 23,
    title: "Still Water Years",
    author: "Nora Blake",
    genre: "Literary Fiction",
    year_published: 2018,
    image_url: "https://picsum.photos/200/300?random=23",
    total_pages: 309,
    description: "Memory and regret surface in a lakeside town."
  },
  {
    id: 24,
    title: "The Unwritten Season",
    author: "Caleb Moore",
    genre: "Literary Fiction",
    year_published: 2021,
    image_url: "https://picsum.photos/200/300?random=24",
    total_pages: 356,
    description: "A writer confronts the story he never told."
  },
  {
    id: 25,
    title: "Where the Road Ends",
    author: "Laura Kim",
    genre: "Literary Fiction",
    year_published: 2015,
    image_url: "https://picsum.photos/200/300?random=25",
    total_pages: 328,
    description: "Lives intersect at the edge of a dying highway town."
  },

  {
    id: 26,
    title: "The Iron Code",
    author: "Samuel Trent",
    genre: "Nonfiction",
    year_published: 2020,
    image_url: "https://picsum.photos/200/300?random=26",
    total_pages: 412,
    description: "An exploration of discipline, habit, and personal mastery."
  },
  {
    id: 27,
    title: "Thinking in Systems",
    author: "Rachel Donovan",
    genre: "Nonfiction",
    year_published: 2017,
    image_url: "https://picsum.photos/200/300?random=27",
    total_pages: 389,
    description: "How systems thinking reshapes problem solving."
  },
  {
    id: 28,
    title: "The Focus Equation",
    author: "Daniel Cho",
    genre: "Nonfiction",
    year_published: 2022,
    image_url: "https://picsum.photos/200/300?random=28",
    total_pages: 301,
    description: "Attention, effort, and mastery in a distracted age."
  },
  {
    id: 29,
    title: "Built to Learn",
    author: "Megan Price",
    genre: "Nonfiction",
    year_published: 2019,
    image_url: "https://picsum.photos/200/300?random=29",
    total_pages: 344,
    description: "How continuous learning drives long-term success."
  },
  {
    id: 30,
    title: "The Long Game of Health",
    author: "Dr. Aaron Wells",
    genre: "Nonfiction",
    year_published: 2021,
    image_url: "https://picsum.photos/200/300?random=30",
    total_pages: 368,
    description: "Evidence-based strategies for lifelong physical performance."
  }
];



export default Books;