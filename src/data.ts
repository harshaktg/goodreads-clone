// data.js
const data = {
  sellingPoints: [
    {
      title: "Deciding what to read next?",
      text: "You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.",
      class: 'w-[280px] text-[13px] mr-[40px] mb-[10px]'
    },
    {
      title: "What are your friends reading?",
      text: "Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.",
      class: 'w-[280px] text-[13px] mr-[10px] mb-[10px]'
    }
  ],
  discoveryItems: [
    {
      actionText: "Because Brian liked…",
      sourceBooks: [
        { alt: "Nudge by Richard H. Thaler", title: "Nudge by Richard H. Thaler", width: 80, class: "", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1348322381l/3450744._SX98_.jpg", url: "https://www.goodreads.com/book/show/3450744-nudge" },
        { alt: "Traffic by Tom Vanderbilt", title: "Traffic by Tom Vanderbilt", width: 80, class: "", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320428955l/2776527._SX98_.jpg", url: "https://www.goodreads.com/book/show/2776527-traffic" },
        { alt: "Predictably Irrational by Dan Ariely", title: "Predictably Irrational by Dan Ariely", width: 80, class: "", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1255573980l/1713426._SX98_.jpg", url: "https://www.goodreads.com/book/show/1713426.Predictably_Irrational" },
        { alt: "The Curious Incident of the Dog in the Night-Time by Mark Haddon", title: "The Curious Incident of the Dog in the Night-Time by Mark Haddon", width: 80, class: "", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479863624l/1618._SX98_.jpg", url: "https://www.goodreads.com/book/show/1618.The_Curious_Incident_of_the_Dog_in_the_Night_Time" }
      ],
      resultBook: {
        actionText: "He discovered:",
        descriptors: "Decision-making, Sociology, Marketing",
        alt: "Thinking, Fast and Slow by Daniel Kahneman",
        title: "Thinking, Fast and Slow by Daniel Kahneman",
        width: 80,
        src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317793965l/11468377._SX98_.jpg",
        url: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow"
      },
      arrowImgSrc: "https://s.gr-assets.com/assets/home/discovery_arrow-f1e8677f2c8b68500ed82ef0d5b7c59b.png"
    },
    {
      actionText: "Because Deborah liked…",
      sourceBooks: [
        { alt: "The First Days by Rhiannon Frater", title: "The First Days by Rhiannon Frater", width: 80, class: "", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388800064l/9648068._SX98_.jpg", url: "https://www.goodreads.com/book/show/9648068-the-first-days" },
        { alt: "Feed by Mira Grant", title: "Feed by Mira Grant", width: 80, class: "", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408500437l/7094569._SX98_.jpg", url: "https://www.goodreads.com/book/show/7094569-feed" },
        { alt: "Rot & Ruin by Jonathan Maberry", title: "Rot & Ruin by Jonathan Maberry", width: 80, class: "", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1264898635l/7157310._SX98_.jpg", url: "https://www.goodreads.com/book/show/7157310-rot-ruin" },
        { alt: "Married with Zombies by Jesse Petersen", title: "Married with Zombies by Jesse Petersen", width: 80, class: "", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1265814659l/7716140._SX98_.jpg", url: "https://www.goodreads.com/book/show/7716140-married-with-zombies" }
      ],
      resultBook: {
        actionText: "She discovered:",
        descriptors: "Zombies, Post Apocalyptic, Dystopia, Urban Fantasy",
        alt: "The Reapers are the Angels by Alden Bell",
        title: "The Reapers are the Angels by Alden Bell",
        width: 80,
        src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388716938l/8051458._SX98_.jpg",
        url: "https://www.goodreads.com/book/show/8051458-the-reapers-are-the-angels"
      },
      arrowImgSrc: "https://s.gr-assets.com/assets/home/discovery_arrow-f1e8677f2c8b68500ed82ef0d5b7c59b.png"
    }
  ],
  genres: [
    { label: "Art", url: "https://www.goodreads.com/genres/art" },
    { label: "Biography", url: "https://www.goodreads.com/genres/biography" },
    { label: "Business", url: "https://www.goodreads.com/genres/business" },
    { label: "Children's", url: "https://www.goodreads.com/genres/children-s" },
    { label: "Christian", url: "https://www.goodreads.com/genres/christian" },
    { label: "Classics", url: "https://www.goodreads.com/genres/classics" },
    { label: "Comics", url: "https://www.goodreads.com/genres/comics" },
    { label: "Cookbooks", url: "https://www.goodreads.com/genres/cookbooks" },
    { label: "Ebooks", url: "https://www.goodreads.com/genres/ebooks" },
    { label: "Fantasy", url: "https://www.goodreads.com/genres/fantasy" },
    { label: "Fiction", url: "https://www.goodreads.com/genres/fiction" },
    { label: "Graphic Novels", url: "https://www.goodreads.com/genres/graphic-novels" },
    { label: "Historical Fiction", url: "https://www.goodreads.com/genres/historical-fiction" },
    { label: "History", url: "https://www.goodreads.com/genres/history" },
    { label: "Horror", url: "https://www.goodreads.com/genres/horror" },
    { label: "Memoir", url: "https://www.goodreads.com/genres/memoir" },
    { label: "Music", url: "https://www.goodreads.com/genres/music" },
    { label: "Mystery", url: "https://www.goodreads.com/genres/mystery" },
    { label: "Nonfiction", url: "https://www.goodreads.com/genres/non-fiction" },
    { label: "Poetry", url: "https://www.goodreads.com/genres/poetry" },
    { label: "Psychology", url: "https://www.goodreads.com/genres/psychology" },
    { label: "Romance", url: "https://www.goodreads.com/genres/romance" },
    { label: "Science", url: "https://www.goodreads.com/genres/science" },
    { label: "Science Fiction", url: "https://www.goodreads.com/genres/science-fiction" },
    { label: "Self Help", url: "https://www.goodreads.com/genres/self-help" },
    { label: "Sports", url: "https://www.goodreads.com/genres/sports" },
    { label: "Thriller", url: "https://www.goodreads.com/genres/thriller" },
    { label: "Travel", url: "https://www.goodreads.com/genres/travel" },
    { label: "Young Adult", url: "https://www.goodreads.com/genres/young-adult" },
  ],
  quotes: [
    {
      avatar: { alt: "Oscar Wilde", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg", url: "https://www.goodreads.com/author/show/3565.Oscar_Wilde" },
      text: "“Be yourself; everyone else is already taken.”",
      author: { name: "Oscar Wilde", url: "https://www.goodreads.com/author/show/3565.Oscar_Wilde" },
      work: null,
    },
    {
      avatar: { alt: "I'm selfish, impatient...", src: "https://images.gr-assets.com/quotes/1511992603p2/8630.jpg", url: "https://images.gr-assets.com/quotes/1511992603p8/8630.jpg" }, // Avatar links to larger image, text links to quote page
      text: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      author: { name: "Marilyn Monroe", url: null }, // No author page link in this case
      work: null,
    },
    {
      avatar: { alt: "Frank Zappa", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1696236573i/22302._UX200_CR0,0,200,200_.jpg", url: "https://www.goodreads.com/author/show/22302.Frank_Zappa" },
      text: "“So many books, so little time.”",
      author: { name: "Frank Zappa", url: "https://www.goodreads.com/author/show/22302.Frank_Zappa" },
      work: null,
    },
    {
      avatar: { alt: "Albert Einstein", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg", url: "/author/show/9810.Albert_Einstein" },
      text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      author: { name: "Albert Einstein", url: "https://www.goodreads.com/author/show/9810.Albert_Einstein" },
      work: null,
    },
    {
      avatar: { alt: "Marcus Tullius Cicero", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg", url: "/author/show/13755.Marcus_Tullius_Cicero" },
      text: "“A room without books is like a body without a soul.”",
      author: { name: "Marcus Tullius Cicero", url: "https://www.goodreads.com/author/show/13755.Marcus_Tullius_Cicero" },
      work: null,
    },
    {
      avatar: { alt: "Bernard M. Baruch", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1331977133i/5768330._UX200_CR0,30,200,200_.jpg", url: "/author/show/5768330.Bernard_M_Baruch" },
      text: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      author: { name: "Bernard M. Baruch", url: "https://www.goodreads.com/author/show/5768330.Bernard_M_Baruch" },
      work: null,
    },
    {
      avatar: { alt: "William W. Purkey", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1282396130i/1744830._UX200_CR0,47,200,200_.jpg", url: "/author/show/1744830.William_W_Purkey" },
      text: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
      author: { name: "William W. Purkey", url: "https://www.goodreads.com/author/show/1744830.William_W_Purkey" },
      work: null,
    },
    {
      avatar: { alt: "Dr. Seuss", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1193930952i/61105._UX200_CR0,30,200,200_.jpg", url: "/author/show/61105.Dr_Seuss" },
      text: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      author: { name: "Dr. Seuss", url: "https://www.goodreads.com/author/show/61105.Dr_Seuss" },
      work: null,
    },
    {
      avatar: { alt: "Mae West", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1738043431i/259666._UX200_CR0,23,200,200_.jpg", url: "/author/show/259666.Mae_West" },
      text: "“You only live once, but if you do it right, once is enough.”",
      author: { name: "Mae West", url: "https://www.goodreads.com/author/show/259666.Mae_West" },
      work: null,
    },
    {
      avatar: { alt: "Mahatma Gandhi", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg", url: "/author/show/5810891.Mahatma_Gandhi" },
      text: "“Be the change that you wish to see in the world.”",
      author: { name: "Mahatma Gandhi", url: "https://www.goodreads.com/author/show/5810891.Mahatma_Gandhi" },
      work: null,
    },
    {
      avatar: { alt: "Robert Frost", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1605640483i/7715._UX200_CR0,33,200,200_.jpg", url: "/author/show/7715.Robert_Frost" },
      text: "“In three words I can sum up everything I've learned about life: it goes on.”",
      author: { name: "Robert Frost", url: "https://www.goodreads.com/author/show/7715.Robert_Frost" },
      work: null,
    },
    {
      avatar: { alt: "J.K. Rowling", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg", url: "/author/show/1077326.J_K_Rowling" },
      text: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
      author: { name: "J.K. Rowling", url: "https://www.goodreads.com/author/show/1077326.J_K_Rowling" },
      work: { title: "Harry Potter and the Goblet of Fire", url: "https://www.goodreads.com/work/quotes/3046572" },
    },
    {
      avatar: { alt: "Albert Camus", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1686463588i/957894._UY200_CR46,0,200,200_.jpg", url: "/author/show/957894.Albert_Camus" },
      text: "“Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend”",
      author: { name: "Albert Camus", url: "https://www.goodreads.com/author/show/957894.Albert_Camus" },
      work: null,
    },
    {
      avatar: { alt: "Mark Twain", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1322103868i/1244._UX200_CR0,40,200,200_.jpg", url: "/author/show/1244.Mark_Twain" },
      text: "“If you tell the truth, you don't have to remember anything.”",
      author: { name: "Mark Twain", url: "https://www.goodreads.com/author/show/1244.Mark_Twain" },
      work: null,
    },
    {
      avatar: { alt: "Maya Angelou", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1379017377i/3503._UX200_CR0,6,200,200_.jpg", url: "/author/show/3503.Maya_Angelou" },
      text: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
      author: { name: "Maya Angelou", url: "https://www.goodreads.com/author/show/3503.Maya_Angelou" },
      work: null,
    },
    {
      avatar: { alt: "Friendship ...", src: "https://images.gr-assets.com/quotes/1387503187p2/10554.jpg", url: "https://images.gr-assets.com/quotes/1387503187p8/10554.jpg" },
      text: "“Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .”",
      author: { name: "C.S. Lewis", url: null },
      work: { title: "The Four Loves", url: "https://www.goodreads.com/work/quotes/14816053" },
    },
    {
      avatar: { alt: "Oscar Wilde", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg", url: "/author/show/3565.Oscar_Wilde" },
      text: "“To live is the rarest thing in the world. Most people exist, that is all.”",
      author: { name: "Oscar Wilde", url: "https://www.goodreads.com/author/show/3565.Oscar_Wilde" },
      work: null,
    },
    {
      avatar: { alt: "Elbert Hubbard", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1216826209i/114059._CR0,24,200,200_.jpg", url: "/author/show/114059.Elbert_Hubbard" },
      text: "“A friend is someone who knows all about you and still loves you.”",
      author: { name: "Elbert Hubbard", url: "https://www.goodreads.com/author/show/114059.Elbert_Hubbard" },
      work: null,
    },
    {
      avatar: { alt: "Oscar Wilde", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg", url: "/author/show/3565.Oscar_Wilde" },
      text: "“Always forgive your enemies; nothing annoys them so much.”",
      author: { name: "Oscar Wilde", url: "https://www.goodreads.com/author/show/3565.Oscar_Wilde" },
      work: null,
    },
    {
      avatar: { alt: "Martin Luther King Jr.", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198518558i/23924._UX200_CR0,21,200,200_.jpg", url: "/author/show/23924.Martin_Luther_King_Jr_" },
      text: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”",
      author: { name: "Martin Luther King Jr.", url: "https://www.goodreads.com/author/show/23924.Martin_Luther_King_Jr_" },
      work: { title: "A Testament of Hope: The Essential Writings and Speeches", url: "/work/quotes/52037" },
    },
  ],
  quoteLinks: [
    { label: "Best quotes", url: "https://www.goodreads.com/quotes" },
    { label: "Love quotes", url: "https://www.goodreads.com/quotes/tag/love" },
    { label: "Inspirational quotes", url: "https://www.goodreads.com/quotes/tag/inspirational" },
    { label: "Funny quotes", url: "https://www.goodreads.com/quotes/tag/funny" },
    { label: "Motivational quotes", url: "https://www.goodreads.com/quotes/tag/motivational" },
    { label: "Life quotes", url: "https://www.goodreads.com/quotes/tag/life" },
    { label: "Friends quotes", url: "https://www.goodreads.com/quotes/tag/friends" },
    { label: "Positive quotes", url: "https://www.goodreads.com/quotes/tag/positive" },
  ],
  awards: {
    title: "Goodreads Choice Awards: Readers' Favorite Books 2024",
    logo: { alt: "2024 Goodreads Choice Awards", title: "2024 Goodreads Choice Awards", src: "https://s.gr-assets.com/assets/award/2024/choice-logo-medium-4c3862cfdaf9defa43fe9acd9bcbe496.png", url: "https://www.goodreads.com/choiceawards/best-books-2024" },
    categories: [
      { label: "Readers' Favorite 2024", url: "https://www.goodreads.com/choiceawards/best-books-2024" },
      { label: "Readers' Favorite Fiction", url: "https://www.goodreads.com/choiceawards/readers-favorite-fiction-books-2024" },
      { label: "Readers' Favorite Historical Fiction", url: "https://www.goodreads.com/choiceawards/readers-favorite-historical-fiction-books-2024" },
      { label: "Readers' Favorite Mystery & Thriller", url: "https://www.goodreads.com/choiceawards/readers-favorite-mystery-thriller-books-2024" },
      { label: "Readers' Favorite Romance", url: "https://www.goodreads.com/choiceawards/readers-favorite-romance-books-2024" },
      { label: "Readers' Favorite Romantasy", url: "https://www.goodreads.com/choiceawards/readers-favorite-romantasy-books-2024" },
      { label: "Readers' Favorite Fantasy", url: "https://www.goodreads.com/choiceawards/readers-favorite-fantasy-books-2024" },
      { label: "Readers' Favorite Science Fiction", url: "https://www.goodreads.com/choiceawards/readers-favorite-science-fiction-books-2024" },
      { label: "Readers' Favorite Horror", url: "https://www.goodreads.com/choiceawards/readers-favorite-horror-books-2024" },
      { label: "Readers' Favorite Debut Novel", url: "https://www.goodreads.com/choiceawards/readers-favorite-debut-novel-2024" },
      { label: "Readers' Favorite Audiobook", url: "https://www.goodreads.com/choiceawards/readers-favorite-audio-books-2024" },
      { label: "Readers' Favorite Young Adult Fantasy", url: "https://www.goodreads.com/choiceawards/readers-favorite-ya-fantasy-books-2024" },
      { label: "Readers' Favorite Young Adult Fiction", url: "https://www.goodreads.com/choiceawards/readers-favorite-ya-fiction-books-2024" },
      { label: "Readers' Favorite Nonfiction", url: "https://www.goodreads.com/choiceawards/readers-favorite-nonfiction-books-2024" },
      { label: "Readers' Favorite Memoir", url: "https://www.goodreads.com/choiceawards/readers-favorite-memoir-books-2024" },
      { label: "Readers' Favorite History & Biography", url: "https://www.goodreads.com/choiceawards/readers-favorite-history-bio-books-2024" },
    ]
  },
  editorialBlog: {
    header: "News & Interviews",
    title: "The Goodreads Editors Share Their April Book Picks",
    blogPostUrl: "https://www.goodreads.com/blog/show/2906-the-goodreads-editors-share-their-april-book-picks?ref=Soapbox_Signed_Out_2025_Apr_Blog_2906",
    imageUrl: "https://images.gr-assets.com/blogs/1742486927p7/2906.jpg",
    imageAlt: "The Goodreads Editors Share Their April Book Picks",
    likesCountText: "66 likes",
    commentsCountText: null,
  },
  listTeasers: [
    {
      bookImages: [
        { alt: "The Help by Kathryn Stockett", title: "The Help by Kathryn Stockett", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1622355533l/4667024._SY75_.jpg", url: "https://www.goodreads.com/book/show/4667024-the-help", size: 'SY75' },
        { alt: "The Kite Runner by Khaled Hosseini", title: "The Kite Runner by Khaled Hosseini", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579036753l/77203._SY75_.jpg", url: "https://www.goodreads.com/book/show/77203.The_Kite_Runner", size: 'SY75' },
        { alt: "Water for Elephants by Sara Gruen", title: "Water for Elephants by Sara Gruen", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1667708346l/43641._SY75_.jpg", url: "https://www.goodreads.com/book/show/43641.Water_for_Elephants", size: 'SY75' },
        { alt: "The Book Thief by Markus Zusak", title: "The Book Thief by Markus Zusak", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522157426l/19063._SY75_.jpg", url: "https://www.goodreads.com/book/show/19063.The_Book_Thief", size: 'SY75' },
      ],
      title: { label: "Best for Book Clubs", url: "https://www.goodreads.com/list/show/19.Best_for_Book_Clubs" },
      metaText: "13,990 books | 17,543 voters"
    },
    {
      bookImages: [
        { alt: "The Girl With the Dragon Tattoo by Stieg Larsson", title: "The Girl With the Dragon Tattoo by Stieg Larsson", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684638853l/2429135._SX50_.jpg", url: "https://www.goodreads.com/book/show/2429135.The_Girl_With_the_Dragon_Tattoo", size: 'SX50' },
        { alt: "And Then There Were None by Agatha Christie", title: "And Then There Were None by Agatha Christie", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1638425885l/16299._SY75_.jpg", url: "https://www.goodreads.com/book/show/16299.And_Then_There_Were_None", size: 'SY75' },
        { alt: "Angels & Demons by Dan Brown", title: "Angels & Demons by Dan Brown", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1696691404l/960._SY75_.jpg", url: "https://www.goodreads.com/book/show/960.Angels_Demons", size: 'SY75' },
        { alt: "Rebecca by Daphne du Maurier", title: "Rebecca by Daphne du Maurier", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386605169l/17899948._SX50_.jpg", url: "https://www.goodreads.com/book/show/17899948-rebecca", size: 'SX50' },
      ],
      title: { label: "Best Crime & Mystery Books", url: "https://www.goodreads.com/list/show/11.Best_Crime_Mystery_Books" },
      metaText: "7,286 books | 15,238 voters"
    },
    {
      bookImages: [
        { alt: "To Kill a Mockingbird by Harper Lee", title: "To Kill a Mockingbird by Harper Lee", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657._SY75_.jpg", url: "https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird", size: 'SY75' },
        { alt: "Harry Potter and the Sorcerer’s Stone by J.K. Rowling", title: "Harry Potter and the Sorcerer’s Stone by J.K. Rowling", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598823299l/42844155._SX50_.jpg", url: "https://www.goodreads.com/book/show/42844155-harry-potter-and-the-sorcerer-s-stone", size: 'SX50' },
        { alt: "The Great Gatsby by F. Scott Fitzgerald", title: "The Great Gatsby by F. Scott Fitzgerald", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1738790966l/4671._SY75_.jpg", url: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby", size: 'SY75' },
        { alt: "1984 by George Orwell", title: "1984 by George Orwell", src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX50_.jpg", url: "https://www.goodreads.com/book/show/40961427-1984", size: 'SX50' },
      ],
      title: { label: "Best Books of the 20th Century", url: "https://www.goodreads.com/list/show/6.Best_Books_of_the_20th_Century" },
      metaText: "7,828 books | 49,735 voters"
    },
  ],
  authorsFeature: {
    title: "Are you an author or a publisher?",
    text: "Gain access to a massive audience of book lovers. Goodreads is a great place to promote your books.",
    links: [
      { label: "Author program", url: "https://www.goodreads.com/author/program", class: "py-[4px] px-[12px] rounded-[3px] border border-[#D6D0C4] bg-[#F4F1EA] dark:bg-dark-bg-secondary dark:text-dark-text-primary leading-[1] hover:bg-[#ede6d6] text-[11px] inline-block h-[11px]" },
      { label: "Advertise", url: "https://www.goodreads.com/advertisers", class: "py-[4px] px-[12px] rounded-[3px] border border-[#D6D0C4] bg-[#F4F1EA] dark:bg-dark-bg-secondary dark:text-dark-text-primary leading-[1] hover:bg-[#ede6d6] text-[11px] inline-block h-[11px]" },
    ]
  }
};

export default data;