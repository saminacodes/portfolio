import nailsImage from "../blog-imgs/nails.webp";
import wileyWolfImage from "../blog-imgs/wiley_wolf.webp";
import wileyJellyImage from "../blog-imgs/wiley_jelly.webp";

const blogPosts = [
  {
    slug: "bitcoin-altcoin-stablecoin-memecoin-shitcoin",
    title: "What Are the Different Categories of Cryptocurrency",
    date: "2021-09-04",
    category: "Archive",
    color: "purple",
    excerpt:
      "A quick guide to the different cryptocurrency categories, from Bitcoin and altcoins to memecoins and shitcoins.",
    sections: [
      {
        content: [
          {
            type: "paragraph",
            text: "Bitcoin. Altcoin. Stablecoin. Memecoin. Shitcoin. Cryptocurrency is beginning to look like that one incredibly complicated role-playing game that keeps you coming back.",
          },
          {
            type: "paragraph",
            text: "There’s a lot of terminology and acronyms to break down when you dive into the world of cryptocurrency. Once you begin to dive into it, you’ll find thousands of different coins, each with unique properties and values.",
          },
          {
            type: "paragraph",
            text: "What distinguishes each of these coins and categories from another? Which should you invest in, and which ones should you avoid?",
          },
          { type: "heading", text: "Bitcoin" },
          {
            type: "paragraph",
            text: "Bitcoin is the first official cryptocurrency that surfaced way back in 2008. This currency was created by a user online with the pseudonym Satoshi Nakamoto. This past month, Bitcoin has surpassed $50,000, proving itself as the most prominent and highest valued coin.",
          },
          {
            type: "paragraph",
            text: "There can only be a max of 21 million of these coins can exist, which makes it a scarce resource. Unlike other scarce resources like gold, more bitcoin cannot surface in the ecosystem. This rule is what makes cryptocurrency free of any centralized manipulation.",
          },
          { type: "heading", text: "Altcoin" },
          {
            type: "paragraph",
            text: "Altcoins originally referred to cryptocurrencies forked from Bitcoin. Now they refer to the native cryptocurrency of any chain. Of these, ETH, the cryptocurrency of the Ethereum chain, is the most popular. Ethereum also enables specialized types of programs called “smart contracts” that can also use ETH.",
          },
          {
            type: "paragraph",
            text: "These smart contracts make Ethereum more versatile, which has resulted in many other altcoins, many of which replicate similar smart-contract concepts. By the way, smart contracts are where “tokens,” another type of cryptocurrency, are defined.",
          },
          {
            type: "image",
            src: "https://miro.medium.com/v2/resize:fit:700/0*wwu0o3rIyfW-u06H",
            alt: "Infographic comparing selected cryptocurrencies",
          },
          {
            type: "paragraph",
            text: "Note that the coins in the previous and following infographics were picked randomly of thousands. This is not an endorsement for any of these cryptocurrencies.",
          },
          { type: "heading", text: "Stablecoin" },
          {
            type: "paragraph",
            text: "Stablecoins are cryptocurrencies where the price is a result of an outside asset. These assets can be gold, fiat, or another type of cryptocurrency. With the value remaining parallel to the real world, it makes it a relatively stable coin.",
          },
          {
            type: "paragraph",
            text: "Stablecoins might be a popular choice among more risk-averse people looking to adopt cryptocurrencies.",
          },
          {
            type: "image",
            src: "https://miro.medium.com/v2/resize:fit:700/0*FshDoHbQdGgfVErH",
            alt: "Infographic about stablecoins",
          },
          { type: "heading", text: "Memecoin" },
          {
            type: "paragraph",
            text: "Memecoins are a cryptocurrency related to, you guessed it, memes. These coins are often meant as a joke and are not to be taken seriously as a product unless you are original Dogecoin and you caught the attention of Elon Musk.",
          },
          {
            type: "paragraph",
            text: "Even then, they don’t have much value and have small communities of support. Be cautious of falling for the hype of memecoins, as many insiders and community leaders use them to pump and dump the market.",
          },
          {
            type: "image",
            src: "https://miro.medium.com/v2/resize:fit:700/0*bBBBQJvPhFxxztS4",
            alt: "Infographic about memecoins",
          },
          { type: "heading", text: "Shitcoin" },
          {
            type: "paragraph",
            text: "Shitcoins is a derogatory term to describe cryptocurrency that has no real value or purpose. These coins often have no goal and were created as a copy of existing currency. These coins are often considered scams and should be avoided at all costs by any serious investor.",
          },
          {
            type: "paragraph",
            text: "Some argue memecoins fall under the shitcoin category. I only disagree because while meme coins have no real value, they have a purpose: being a meme.",
          },
          {
            type: "paragraph",
            text: "From bitcoin to shitcoin, there are so many categories of coins circulating the crypto market. To summarize, bitcoin remains the original and the most popular of cryptocurrencies. Altcoins provide an improved alternative to the popular bitcoin, stablecoins are a start to a stable cryptocurrency market, memecoins are a great way to get your fill of memes in, and shitcoins are worthless. Now off to talking, speculating, investing, and learning more about cryptocurrency.",
          },
        ],
      },
    ],
  },
  {
    slug: "replicate-replit-neon-database",
    title: "Replicate Replit Neon Database Rows from Development to Production",
    date: "2025-11-16",
    category: "Archive",
    color: "purple",
    excerpt:
      "A quick shell script for copying your Replit Neon development database into production.",
    sections: [
      {
        content: [
          {
            type: "paragraph",
            text: "If you are like me and ran into the issue of needing to replicate your database rows from your development instance to production with Replit’s built-in Neon Database here’s a quick script to do just that.",
          },
          {
            type: "paragraph",
            text: "Before you start, make sure you have Postgres installed locally on your device.",
          },
          {
            type: "paragraph",
            text: "If you’re on Mac you can install it with homebrew (I think the minimum version you need here is 16).",
          },
          {
            type: "code",
            text: ["brew install postgresql@16", "brew link --force postgresql@16"].join("\n"),
          },
          {
            type: "paragraph",
            text: "All other systems, please look up your install instructions. Sorry, mate I got nothing.",
          },
          { type: "paragraph", text: "Check and make sure it’s installed." },
          {
            type: "code",
            text: ["pg_dump --version", "psql --version"].join("\n"),
          },
          {
            type: "paragraph",
            text: "Then create a file locally on your device called migrate-to-prod.sh and copy the following. Note: A dump file is basically a backup snapshot of your database and here we are using it to copy over the schemas and data.",
          },
          {
            type: "code",
            text: [
              "#!/bin/bash",
              "",
              "set -e",
              "",
              "# --- CONFIG ---",
              'DEV_DB_URL="postgresql://<dev-user>:<dev-pass>@<dev-host>/<dev-db>?sslmode=require"',
              'PROD_DB_URL="postgresql://<prod-user>:<prod-pass>@<prod-host>/<prod-db>?sslmode=require"',
              "",
              "# Optional: name of the dump file",
              'DUMP_FILE="dev_dump_$(date +%Y%m%d_%H%M%S).sql"',
              "",
              'echo "📦 Dumping dev database..."',
              'pg_dump --no-owner --no-acl --format=plain "$DEV_DB_URL" > "$DUMP_FILE"',
              "",
              'echo "🚀 Restoring into production..."',
              'psql "$PROD_DB_URL" < "$DUMP_FILE"',
              "",
              'echo "✨ Migration complete!"',
              'echo "Dump file saved as: $DUMP_FILE"',
            ].join("\n"),
          },
          {
            type: "paragraph",
            text: "You will need to replace DEV_DB_URL and PROD_DB_URL in the file with your URLs from Replit. You can find both of these under your database settings for both production and development as DATABASE_URL.",
          },
          {
            type: "paragraph",
            text: "After pasting, save your file, and make your file executable by running the following:",
          },
          { type: "code", text: "chmod +x migrate-to-prod.sh" },
          {
            type: "paragraph",
            text: "Then execute the script by running the following command:",
          },
          { type: "code", text: "./migrate-to-prod.sh" },
          {
            type: "paragraph",
            text: "At this point, check back on Replit to make sure you see all the data you were expecting on your app.",
          },
          {
            type: "paragraph",
            text: "If you run into any issues while following these steps, highly recommend debugging with Replit Agent or ChatGPT / or hit up my DMs on Twitter, @saminacodes. ✌🏻",
          },
        ],
      },
    ],
  },
  {
    slug: "developer-relations-in-web3",
    title: "Whats It Like to Be a Developer Advocate in Web3?",
    date: "2022-01-17",
    category: "Archive",
    color: "purple",
    excerpt:
      "What I learned about finding your footing, setting boundaries, and building a career in Web3 Developer Relations.",
    sections: [
      {
        content: [
          { type: "paragraph", text: "My first role in Developer Relations turned out to be in Web3. Therefore, I can’t compare being a Developer Advocate in Web2 to Web3. However, I can tell you about what I have experienced and provide some advice if you are interested in becoming a Developer Advocate at a Web3 company." },
          { type: "paragraph", text: "And, let me warn you, I am not sugarcoating this blog post at all." },
          { type: "subheading", text: "I spend a LOT of time learning and I enjoy it" },
          { type: "paragraph", text: "I don’t have a degree or a fancy NFT certification from the University of Blockchain. Everything that I know I have learned from resources I find through YouTube, Google, etc. There’s indeed a plethora of resources out there, but very few come from established or verified institutions." },
          { type: "paragraph", text: "Therefore, there’s a lot of noise and fruitful articles coming out daily for clicks. It’s imperative to double-check the information and knowledge I read or write. I often ask other developer advocates I know to double-check my sources or ask my co-workers." },
          { type: "paragraph", text: "It’s okay to do this-everybody is still learning together." },
          { type: "paragraph", text: "If I don’t know something, I feel comfortable admitting I don’t know and will look into it. Knowledge gaps will happen a lot as new information comes out every day. No one in Web3 knows absolutely everything about everything, and you have to get used to that." },
          { type: "paragraph", text: "Use these knowledge gaps to your advantage and seek out the answers. This curiosity will help you learn and discover new topics to create content." },
          { type: "paragraph", text: "Fall in love with learning." },
          { type: "subheading", text: "Be prepared for criticism" },
          { type: "paragraph", text: "Not everybody is on board with the idea of Web3, cryptocurrency, or blockchain in general. Blockchain technology receives a lot of criticism. Recognize these criticisms, research them, take a stance on them, and at some point, you will have to address them. The general public is always curious and will look to you for guidance." },
          { type: "paragraph", text: "Unfortunately, the conversation about Web3 has become so polarized. People who don’t know how to communicate will sometimes take their frustrations out on you instead of the technology or industry. Being an advocate in Web3 means you will be one of the more public-facing figures behind the industry." },
          { type: "paragraph", text: "The best thing you can do for yourself and your mental health is to distance your identity from these criticisms. Recognize that any frustrations are not meant for you. I take more frequent breaks from social media than I had before, which has helped my mental health." },
          { type: "paragraph", text: "On the flip side, I respect people who are criticizing the technology itself and the problems that it holds. There are many unanswered questions about social implications, scalability, and the ethos of decentralization. These criticisms ensure that we are building up Web3 the right way from the ground up, so pay special attention to these." },
          { type: "paragraph", text: "It helps to have an open-minded stance, as with all things in life." },
          { type: "paragraph", text: "Blockchain does not solve every problem. Blockchain is also not the root of all evil." },
          { type: "subheading", text: "It's easy to burn out" },
          { type: "paragraph", text: "Web3 is an exciting space right now, and some are in a race to become the latest prominent figure or company. I frequently see posts from “crypto influencers” on Web3 Twitter that will tell you if you want to get ahead in Web3 you need to work all day and night." },
          { type: "paragraph", text: "Please don’t. You will burn out and instantly see diminishing returns." },
          { type: "paragraph", text: "As long as you are consistently showing up, eager to learn, and gaining small wins you will be successful in this space." },
          { type: "paragraph", text: "Small wins every day will have the most return. This advice applies to everyone, not just the Developer Advocates." },
          { type: "paragraph", text: "One of the specific problems with Developer Advocacy is that the role is not solidly defined and responsibilities may vary per company. Sometimes you will work on a per-needs basis in community management, marketing, documentation, or even spend a ton of hours coding and brainstorming with the engineers. The plethora of responsibilities requires a lot of context switching, and sometimes you may feel yourself taking on too much." },
          { type: "paragraph", text: "It’s important to set boundaries with your team by defining your role and outlining your responsibilities. Otherwise, you may find yourself volunteering for every task and running low on bandwidth." },
          { type: "paragraph", text: "Working in Web3 is a marathon. Not a sprint." },
          { type: "subheading", text: "Recruiters contact me every other week" },
          { type: "paragraph", text: "Now, this one is positive. I apologize for the first few grim ones." },
          { type: "paragraph", text: "When I was searching for jobs before Web3 it was really difficult for me. I worked at local non-profits to gain experience. There were not many big opportunities for me in my local area and it was not in my immediate plans to move to a bigger city. Thanks to my network and Twitter, I was able to find this opportunity." },
          { type: "paragraph", text: "Being a Developer Advocate in Web3 has unlocked the gates for me. Not just as a Developer Advocate, but also as a content creator, a technical writer, and even a few marketing-related gigs and other side hustles." },
          { type: "paragraph", text: "There is a huge demand for developer advocates in the Web3 space, especially from prominent protocols and companies. Just be sure to thoroughly research each entity that reaches out to you and not let FOMO lead you into random projects where the team may take advantage of you." },
          { type: "paragraph", text: "Get involved in communities. It will help you grow." },
          { type: "subheading", text: "This is the most I have grown in my career" },
          { type: "paragraph", text: "I see some criticism that many early developers should not dive into Web3 because it is risky. I’d advocate the opposite for this reason." },
          { type: "paragraph", text: "Navigating the unknown as long as you can handle the risks will bring about the most returns." },
          { type: "paragraph", text: "The fast-paced environment will force you to take opportunities you hadn’t envisioned. Thanks to Web3 and my social media presence, I get invited to podcasts, conferences, livestreams, and workshops at universities and other organizations. I have stepped out of my comfort zone when it comes to creating content and learned how to create a workflow for myself." },
          { type: "paragraph", text: "I am fortunate I am in a situation where I am able to take risks." },
          { type: "paragraph", text: "High risk. High reward." },
          { type: "paragraph", text: "If you can do the same, try it! If not, Web3 is not going anywhere." },
          { type: "subheading", text: "The best part of my job is hanging out with the community" },
          { type: "paragraph", text: "This one is going to sound really cheesy, but I actually mean it with my entire heart." },
          { type: "paragraph", text: "Through Web3, I have met so many amazing builders, founders, artists, and visionaries who are working towards a future they believe in. I have made so many friends and hung out in many communities which has genuinely made me so happy. Developer Advocacy allows me to meet new interesting people I can collaborate and build relationships with." },
          { type: "paragraph", text: "This is the part that keeps me going!" },
        ],
      },
    ],
  },
  {
    slug: "building-mergedstudios",
    title: "From Amateur Artist to Freelance Graphic Designer at Age Eighteen",
    date: "2018-04-25",
    category: "Archive",
    color: "purple",
    excerpt:
      "How an accidental interview answer led me to recognize the creative work I’m most proud of.",
    sections: [
      {
        content: [
          {
            type: "paragraph",
            text: "I was speaking to my Computer Science professor last week attempting to land a job as a Teaching Assistant for his class. At one point in this mock interview he asked: “How do you work with other people?” “I have a partner I work with on the regular to create graphics and I’ve learned to communicate efficiently as a result,” I replied. This was not the question he was asking — he wanted to know if I can work with students — but he was rather impressed with how I pushed myself into the graphics market at eighteen years old. Entirely on accident, this turned out to be a better talking point than the ones I had actually prepared.",
          },
          {
            type: "paragraph",
            text: "I never thought this was a big deal. My experience with Twitch streaming already had me competing against other content creators in design elements like emotes and panels. I did realize, however, that MergedStudios, — my freelance graphic “company” — is something I can talk about with more passion than my 3.9 GPA or my spot on the Dean’s List.",
          },
          {
            type: "paragraph",
            text: "We live in a day and age where creating websites, utilizing social media, and starting online businesses are commonly accessible. Someone can create their own personalized website with a handful of clicks and maybe a few dollars. Around age 13, I used Instagram to take pictures of my nail polish art. The feedback I received from these posts pushed me to keep creating and work harder.",
          },
          {
            type: "image",
            src: nailsImage.src,
            alt: "Archived photo from my Nail Art Instagram",
            caption: "Archived photo from my Nail Art Instagram",
          },
          {
            type: "paragraph",
            text: "In the following years, my interest in nail art shifted to pastels, pencil sketching and acrylic painting. I created a website through Weebly to showcase my acrylic paintings and picked up a couple commissions from family members. When my friend Tom started his YouTube channel, he knew about my background in art and asked if I could make a logo and thumbnails for his channel.",
          },
          {
            type: "image",
            src: wileyWolfImage.src,
            alt: "First logo created for Tom’s YouTube channel",
          },
          {
            type: "image",
            src: wileyJellyImage.src,
            alt: "First logos originally created in Microsoft Paint, recreated in Adobe Illustrator",
            caption:
              "My first logos originally created in Microsoft Paint, recreated in Adobe Illustrator",
          },
          {
            type: "paragraph",
            text: "Most people associate graphic design with complex, professional programs like the Adobe Creative Suite, but I made my start using an old standby: Microsoft Paint. I created Tom’s first logo in Microsoft Paint and it wasn’t until later that I was able to fix it up in Adobe Illustrator. I was determined to learn these programs from A to Z. I sat through tutorial after tutorial trying to draw out the knowledge I had of Photoshop and Illustrator back from sophomore year in high school. Digital art turned out to be the most difficult for me to learn in comparison to tangible mediums, but I had started to realize that a market for these artworks exists out there on the internet.",
          },
          {
            type: "paragraph",
            text: "My first digital art client ever was MattGrundy89. Grundy needed graphics for his channel and I was simultaneously shocked and honored that he would trust me to represent him in that way. Grundy then referred me to one of his friends, and this went on to create a domino effect of future clients. It illustrated how one person or one opportunity can open the door for many more, which is an impact that can’t be underestimated.",
          },
          {
            type: "paragraph",
            text: "About a year later, I was considering quitting digital art or limiting commissions due to the pressures of my education. Tom started to help me with graphics when I was stuck or did not have time. He knew the basics of Adobe’s software, as he had worked a lot with Premiere and After Effects for his YouTube channel, and I came to realize that our combined knowledge had some interesting potential.",
          },
          {
            type: "paragraph",
            text: "Together, we created MergedStudios, appropriately named for the merging of two separate art and editing enthusiasts investing their time into learning Adobe software. MergedStudios now works with a regular stream of clients, while we continue to hone our skills and further our knowledge of the medium. It’s become my first formal job and I’m excited for where the future might take us.",
          },
          {
            type: "paragraph",
            text: "Looking back on what I’ve accomplished so far, I can easily say MergedStudios is the creative endeavor I’m most proud of. I feel more confident talking about it in an interview and I have many visions for where I want to take it moving forward. I believe that if you want to get better at something, you have to dedicate a significant part of your life to it. Aspirations like MergedStudios don’t create themselves, you have to go out and build them yourself. If you have a strong enough passion for something, pursue it, even if it seems unlikely. You never know where it might take you.",
          },
        ],
      },
    ],
  },
  {
    slug: "25-lessons-from-2025",
    title: "25 Lessons from 2025",
    date: "2025-12-29",
    category: "Personal",
    color: "yellow",
    excerpt: "In the age of AI, the best leverage you have is being authentic.",
    sections: [
      {
        heading: "1. Healthy stress outlets will save you.",
        paragraphs: ["Go for runs. Deep clean. Journal."],
      },
      {
        heading: "2. Slowly, then all at once.",
        paragraphs: [
          "You’ll feel like things happened overnight but they didn’t. It all compounded into “overnight success.”",
        ],
      },
      {
        heading: "3. Every low is followed by a high and every high is followed by a low.",
        paragraphs: ["You can’t have one without the other."],
      },
      {
        heading: "4. Say yes to more scary things.",
        paragraphs: ["Say yes to things you wouldn’t normally do."],
      },
      {
        heading: "5. Maintain composure",
        paragraphs: ["even when you think you can’t."],
      },
      {
        heading: "6. Stay around people whose happiness brings you happiness.",
        paragraphs: ["Celebrate them more than you celebrate yourself."],
      },
      {
        heading: "7. For every person wishing for you to lose",
        paragraphs: ["there’s another wishing for you to win."],
      },
      {
        heading: "8. Not everything you lose is a loss.",
        paragraphs: [],
      },
      {
        heading: "9. Reading before you sleep",
        paragraphs: ["will give you the best sleep ever."],
      },
      {
        heading: "10. Wealth is not finite.",
        paragraphs: [
          "Wealth is returned energy you decided to put into the world.",
        ],
      },
      {
        heading: "11. In the age of AI, the best leverage you have is being authentic.",
        paragraphs: [],
      },
      {
        heading: "12. As soon as you seek outward validation",
        paragraphs: ["you won’t ever truly accomplish anything."],
      },
      {
        heading: "13. Loneliness is the price of growth.",
        paragraphs: [],
      },
      {
        heading: "14. Replace all your drinks with water and tea.",
        paragraphs: ["It’s the easiest change you can make for your health."],
      },
      {
        heading: "15. Don’t seek love.",
        paragraphs: ["Radiate love."],
      },
      {
        heading: "16. Most ideas and concepts are incredibly simple.",
        paragraphs: ["People just make it sound complicated to look smart."],
      },
      {
        heading: "17. Fail so many times",
        paragraphs: ["till you aren’t phased by failing."],
      },
      {
        heading: "18. Say what you mean and mean what you say.",
        paragraphs: ["Don’t let the big things remain inside."],
      },
      {
        heading: "19. No matter the outcome you will always win.",
        paragraphs: [],
      },
      {
        heading: "20. Half effort is closer to no effort.",
        paragraphs: ["Put your heart into it or don’t bother at all."],
      },
      {
        heading: "21. Anxiety lives and thrives in idleness.",
        paragraphs: ["Stop thinking, start doing."],
      },
      {
        heading: "22. It’s only too late for the guy in the casket.",
        paragraphs: [],
      },
      {
        heading: "23. Foundations that are built fast, crumble fast.",
        paragraphs: [],
      },
      {
        heading: "24. Pay attention to how people talk about others around you.",
        paragraphs: ["That’s how they talk about you when you are not around."],
      },
      {
        heading: "25. You don’t have to finish every book you start reading.",
        paragraphs: ["This doesn’t apply to just books."],
      },
    ],
  },
  {
    slug: "24-lessons-from-2024",
    title: "24 Lessons from 2024",
    date: "2024-12-16",
    category: "Personal",
    color: "green",
    excerpt: "You can have it all. You just can’t have it all at once.",
    sections: [
      {
        heading: "1. You can have it all",
        paragraphs: ["You just can’t have it all at once."],
      },
      {
        heading: "2. Don’t surrender easily",
        paragraphs: [
          "Sometimes the most difficult moments when you raise the white flag are when you are most ready to fight the battle.",
        ],
      },
      {
        heading: "3. What got you here, won’t get you there",
        paragraphs: ["Change the strategy often."],
      },
      {
        heading: "4. Don’t get comfortable in uncertainty",
        paragraphs: ["Some situations won’t ever serve you."],
      },
      {
        heading: "5. You’re not asking for a lot",
        paragraphs: ["You’re asking the wrong person."],
      },
      {
        heading: "6. Let the repetitions compound",
        paragraphs: [
          "Trust that every step forward today, big or small, will lead you to the right place.",
        ],
      },
      {
        heading: "7. Trust your gut more and your brain less",
        paragraphs: [
          "Your brain is good at constructing narratives. Your gut tells it to you straight.",
        ],
      },
      {
        heading: "8. Don’t chase happiness",
        paragraphs: ["Chase purpose and happiness will find you."],
      },
      {
        heading: "9. Social media validation can’t be satiated",
        paragraphs: [
          "Social media algorithms push you to crave a form of validation that can’t be satiated. Go offline as much as you can, as often as you can.",
        ],
      },
      {
        heading: "10. You’re not too old to learn [insert activity]",
        paragraphs: [
          "I started learning piano this year knowing I’ll never be Mozart, but I will one day play his songs.",
        ],
      },
      {
        heading: "11. Be a river, not a pond",
        paragraphs: ["Don’t let your life stagnate before your eyes."],
      },
      {
        heading: "12. When you can’t outsmart someone, outwork them",
        paragraphs: ["Show up every day and you’ll outpace everyone around you."],
      },
      {
        heading: "13. You need a good friend to get you through tough times",
        paragraphs: ["You need a rival to get you through easy times."],
      },
      {
        heading: "14. Don’t draft a plan B",
        paragraphs: ["When you give yourself a choice, you give yourself a way out."],
      },
      {
        heading: "15. If someone is not adding any value to your life, then they are taking from it",
        paragraphs: ["Giving credit for this quote to my best friend, IC. ❤"],
      },
      {
        heading: "16. Don’t change who you are to make yourself palatable",
        paragraphs: ["Some people have bad taste."],
      },
      {
        heading: "17. The thing you thought was embarrassing was actually brave",
        paragraphs: ["It made you human. Don’t beat yourself up about it."],
      },
      {
        heading: "18. Sometimes you’re gonna be the villain",
        paragraphs: ["Villains are some of the coolest characters in the story."],
      },
      {
        heading: "19. When you start losing in some aspects of your life, start making strides towards winning in others",
        paragraphs: [
          "You’ll one day go back and win all those places you lost too.",
        ],
      },
      {
        heading: "20. Oftentimes the right thing to do is the hardest thing to do",
        paragraphs: ["Do it anyway."],
      },
      {
        heading: "21. Reading makes you better at writing",
        paragraphs: ["Writing makes you better at thinking."],
      },
      {
        heading: "22. Pain is fuel",
        paragraphs: [
          "Without pain you would not feel the need to change your circumstances.",
        ],
      },
      {
        heading: "23. You don’t know how many days you’ll be on this earth",
        paragraphs: ["That’s the only certainty within uncertainty."],
      },
      {
        heading: "24. Everyone goes through a lonely period at different points in their life",
        paragraphs: [
          "It’s okay to eat alone. To go to the movies alone. To celebrate your birthday alone. Be alone for some time in order to find yourself.",
        ],
      },
    ],
  },
  {
    slug: "23-lessons-from-2023",
    title: "23 Lessons from 2023",
    date: "2023-12-21",
    category: "Personal",
    color: "red",
    excerpt:
      "Consume less, read more. Replace your endless scrolling with books. Your mental health and eyes will thank you.",
    sections: [
      {
        heading: "1. Consume less, read more",
        paragraphs: [
          "Replace your endless scrolling with books. Your mental health and eyes will thank you.",
        ],
      },
      {
        heading: "2. Take more photos",
        paragraphs: [
          "Of you. Of your loved ones. Of all the places you have been to. Of all the things you like. Don’t worry about the photos looking good. Save them for your future self. Keep them private.",
        ],
      },
      {
        heading: "3. Live one day at a time",
        paragraphs: [
          "With long-term goals still in mind, remember that overnight life can change. Do the best you can with what you have every single day and worry about the future when it arrives.",
        ],
      },
      {
        heading: "4. Show up every day, even when it’s challenging",
        paragraphs: [
          "Your efforts will compound in the long term. You will consequently become resilient to many struggles.",
        ],
      },
      {
        heading: "5. Spend more time conversing with the ones most important to you",
        paragraphs: [
          "Deepening a few core relationships will provide you better returns than trying to meet everybody where they are.",
        ],
      },
      {
        heading: "6. Everyone is fallible",
        paragraphs: [
          "The people you look up to the most will make mistakes. But it’s not a mistake you should pay attention to. It is how they follow up that sets someone apart.",
        ],
      },
      {
        heading: "7. It’s okay to pursue interests that won’t advance your career",
        paragraphs: [
          "Every skill worth pursuing does not need to be monetized.",
        ],
      },
      {
        heading: "8. Just write, don’t overthink it",
        paragraphs: [
          "Share your learnings and best ideas with the world. Write about your emotions, spiritual being, plans, and everything personal, but keep those for yourself in a private journal.",
        ],
      },
      {
        heading: "9. Your diet affects everything",
        paragraphs: [
          "Your energy levels, your mood, your overall health. Even if you struggled to eat healthy growing up like I did, it is never too late to change.",
        ],
      },
      {
        heading: "10. Aim to accomplish three important things every day",
        paragraphs: [
          "If you get overwhelmed like I do, aim to finish three and focus on the rest the next day. Repeat this every single day.",
        ],
      },
      {
        heading: "11. Ask for help more often",
        paragraphs: ["You can’t do everything alone, and nobody is expecting you to."],
      },
      {
        heading: "12. Always be the bigger person",
        paragraphs: [
          "How positively you respond when wronged speaks more to your character than the other person. Don’t level the playing field — elevate it.",
        ],
      },
      {
        heading: "13. Consume less, create more",
        paragraphs: [
          "Similar to lesson one, replace the endless scrolling with projects. Code, design, write, record a video, and take photos. You’ll discover things about yourself that you didn’t know before.",
        ],
      },
      {
        heading: "14. Tell people how you feel more often",
        paragraphs: [
          "If you miss someone, don’t hesitate to text them. If you are upset with someone, don’t bottle it in. If something needs to change, communicate that.",
        ],
      },
      {
        heading: "15. Don’t assume, ask",
        paragraphs: [
          "There’s a random weird quote I remember “When you assume, you make an ass out of you and me.” Don’t do that.",
        ],
      },
      {
        heading: "16. Have a bias for action",
        paragraphs: [
          "When something needs to be done — do it. Don’t wait for others to solve things for you all the time.",
        ],
      },
      {
        heading: "17. Don’t hesitate to spend money on experiences",
        paragraphs: ["Save up for them. They are almost always worth it."],
      },
      {
        heading: "18. Sing carelessly, dance in front of the mirror, and throw a rave at 7 am in the morning while brushing your teeth",
        paragraphs: [
          "Good music will always put you in a good mood. I spent over 60,000 minutes listening to music this year according to Spotify. Guilty.",
        ],
      },
      {
        heading: "19. How you treat yourself is how others will treat you",
        paragraphs: [
          "Treat yourself with care and respect. Don’t speak low of yourself because it will grant others permission to do the same to you.",
        ],
      },
      {
        heading: "20. Phone calls are better than texting",
        paragraphs: [
          "Many will disagree, but I love to hear people’s voices. I feel closer to who I am speaking with when I hear their voice.",
        ],
      },
      {
        heading: "21. Call your loved ones more often",
        paragraphs: ["I am sure you’ve heard this one before."],
      },
      {
        heading: "22. Multi-task less",
        paragraphs: [
          "Give people your undivided attention. Be present. Put the phone down, you self-absorbed zombie. >:(",
        ],
      },
      {
        heading: "23. Have zero expectations of others",
        paragraphs: [
          "Only expect the world and more from yourself. You only have control over your own thoughts and your output.",
        ],
      },
    ],
  },
];

blogPosts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

export default blogPosts;

export function getReadTime(post) {
  const text = [
    post.title,
    post.excerpt,
    ...post.sections.flatMap(({ heading, paragraphs, content }) =>
      content
        ? content.flatMap((block) => [
            block.text,
            block.link?.text,
            block.caption,
          ])
        : [heading, ...paragraphs],
    ),
  ].join(" ");
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return `${minutes} min read`;
}
