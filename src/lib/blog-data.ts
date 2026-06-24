export type ContentSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "tip"; label: string; text: string }
  | { type: "cta" };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  category: string;
  coverImage: string;
  coverAlt: string;
  content: ContentSection[];
  meta: {
    title: string;
    description: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "paris-food-tour-what-to-expect",
    title: "Your First Paris Food Tour: Everything You Need to Know",
    excerpt:
      "Thinking about joining a food tour in Paris? Here's the honest, insider guide to what you'll eat, drink, and experience — and how to make the most of every bite.",
    date: "2026-04-01",
    readTime: 7,
    category: "Travel Tips",
    coverImage:
      "/images/_wp-content_uploads_2025_12_paris-food-tour-guide-wine-tasting-1024x683.webp",
    coverAlt: "Local guide pouring wine on a Paris food tour in Montmartre",
    meta: {
      title: "Paris Food Tour: What to Expect — A Complete Guide",
      description:
        "Everything you need to know before joining a food tour in Paris. What you'll eat, how to prepare, group size, meeting point and why Montmartre is the best neighborhood.",
    },
    content: [
      {
        type: "p",
        text: "A food tour in Paris sounds like a dream — and it genuinely is. But like anything worth doing, a little preparation goes a long way. Whether you're a first-time visitor or a seasoned Paris traveler, here's everything you need to know before you show up at Sacré-Cœur.",
      },
      {
        type: "h2",
        text: "Why Montmartre Is the Perfect Neighborhood",
      },
      {
        type: "p",
        text: "Paris has 20 arrondissements, each with its own personality. But Montmartre — the hillside village in the 18th — is the one that still feels like a neighborhood. Cobblestone streets, family-run fromageries, hidden wine cellars, boulangeries that have been open since the 1920s. It's the Paris that locals actually live in, not the Paris of tourist menus and overlit souvenir shops.",
      },
      {
        type: "p",
        text: "For a food tour, this matters enormously. You're not just walking past interesting buildings — you're stepping inside places that have deep roots in their community, meeting artisans who have spent decades perfecting their craft. The stories that come with each tasting are as nourishing as the food itself.",
      },
      {
        type: "h2",
        text: "What You'll Actually Eat and Drink",
      },
      {
        type: "p",
        text: "Our Montmartre Food & Wine Tour includes 6–8 tastings over 3 hours. This isn't a nibble-and-move-on situation — each stop is a proper tasting with context, conversation and often a glass of wine to go with it.",
      },
      {
        type: "ul",
        items: [
          "A welcome glass of local wine at the meeting point",
          "3–4 aged cheeses from a family-run fromagerie, with wine pairings",
          "Fresh bread and a legendary croissant from a traditional boulangerie",
          "Artisan charcuterie in a hidden cave à vins",
          "Seasonal pastries — whatever is best that week",
          "A final glass at a panoramic terrace only locals know",
        ],
      },
      {
        type: "tip",
        label: "Pro tip",
        text: "Don't eat breakfast before the tour. Seriously. Show up with an appetite — you'll thank us at the fromagerie.",
      },
      {
        type: "h2",
        text: "How to Prepare",
      },
      {
        type: "h3",
        text: "Wear comfortable shoes",
      },
      {
        type: "p",
        text: "Montmartre is hilly. The streets are cobblestone. Your best Parisian outfit is always welcome, but leave the stilettos for dinner. Comfortable walking shoes will let you focus on the food rather than your feet.",
      },
      {
        type: "h3",
        text: "Arrive 5 minutes early",
      },
      {
        type: "p",
        text: "We start at the steps of Sacré-Cœur Basilica. The meeting point coordinates are sent by email after booking. Getting there early gives you a moment to breathe, take in the view, and chat with the other guests before your guide arrives.",
      },
      {
        type: "h3",
        text: "Tell us about dietary restrictions",
      },
      {
        type: "p",
        text: "We accommodate vegetarians and most food allergies with advance notice. The tour centers on cheese, wine and charcuterie, so it's more challenging for vegans — though we always do our best. Just mention it at booking and your guide will be prepared.",
      },
      {
        type: "h2",
        text: "Group Size and Why It Matters",
      },
      {
        type: "p",
        text: "We cap the group at 8 guests. This is non-negotiable for us. At 8 people, you can actually hear your guide in a narrow cheese cellar. You can ask questions without feeling like you're holding up a crowd. You can linger over a tasting without a queue forming behind you.",
      },
      {
        type: "blockquote",
        text: "The small group was what made it. Our guide knew everyone's name by the second stop. It felt like exploring Paris with a friend, not following a flag through a crowd.",
      },
      {
        type: "h2",
        text: "What Happens After",
      },
      {
        type: "p",
        text: "At the end of the tour, your guide will hand you a personalised map: the best spots to return to, hidden restaurants, wine bars only locals know, markets worth visiting on a Saturday morning. Consider it a cheat sheet for the rest of your trip.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "wine-cheese-paris-guide",
    title: "Wine & Cheese in Paris: A Beginner's Guide to French Pairings",
    excerpt:
      "France has over 1,000 cheeses and more wine appellations than any country on earth. Here's how to navigate it all — and why Montmartre is the best place to start learning.",
    date: "2026-03-15",
    readTime: 8,
    category: "Food & Wine",
    coverImage:
      "/images/_wp-content_uploads_2025_12_wine-cheese-tasting-montmartre-paris-food-tour-1024x1024.webp",
    coverAlt: "French wine and cheese tasting in Montmartre Paris",
    meta: {
      title: "Wine & Cheese Paris: A Beginner's Guide to French Pairings",
      description:
        "Learn how to pair French wine and cheese like a local. A beginner-friendly guide to the best combinations, with tips from our Montmartre food tour guides.",
    },
    content: [
      {
        type: "p",
        text: "In France, wine and cheese aren't served together by accident. The pairing is a centuries-old tradition rooted in terroir — the idea that what grows together in the same soil, same climate, same region, tends to taste extraordinary together. Understanding this principle is the first step to navigating one of the world's great gastronomic pleasures.",
      },
      {
        type: "h2",
        text: "The Four Families of French Cheese",
      },
      {
        type: "p",
        text: "Before we talk pairings, it helps to know who you're working with. French cheeses fall into four broad families, each with different textures, flavours and wine affinities.",
      },
      {
        type: "h3",
        text: "Soft-ripened (pâte molle)",
      },
      {
        type: "p",
        text: "Think Brie de Meaux, Camembert de Normandie, Chaource. These are the creamy, bloomy-rind cheeses that ooze at room temperature. They're mild, buttery, with an earthy mushroom note from the white mould. Best paired with: unoaked Chardonnay, Champagne, light Pinot Noir.",
      },
      {
        type: "h3",
        text: "Pressed, uncooked (pâte pressée non cuite)",
      },
      {
        type: "p",
        text: "Comté, Saint-Nectaire, Reblochon. These are firmer, nuttier, with more complexity. Comté aged 18+ months develops caramel and hazlenut notes that pair beautifully with Jura whites (Savagnin, Chardonnay) or a medium-bodied Burgundy.",
      },
      {
        type: "h3",
        text: "Washed-rind (pâte molle à croûte lavée)",
      },
      {
        type: "p",
        text: "Époisses, Munster, Livarot. The boldest, most pungent family. The smell is infamous; the taste is surprisingly sweeter and more complex than the aroma suggests. These need wines with some sweetness or body to stand up to them: Alsatian Gewurztraminer, Sauternes, or a Rhône red.",
      },
      {
        type: "h3",
        text: "Blue (pâte persillée)",
      },
      {
        type: "p",
        text: "Roquefort, Bleu d'Auvergne, Fourme d'Ambert. The classic pairing for Roquefort is Sauternes — salty and sweet is one of gastronomy's great duets. Other blues work well with late-harvest wines, Port, or even a robust Rhône red.",
      },
      {
        type: "h2",
        text: "The Golden Rule of Pairing",
      },
      {
        type: "blockquote",
        text: "What grows together, goes together. If you're not sure, start with a wine from the same region as the cheese. You'll be right 80% of the time.",
      },
      {
        type: "p",
        text: "This principle — called 'terroir pairing' — is the easiest shortcut a beginner can use. Comté comes from the Jura, so drink a Jura Chardonnay. Reblochon comes from Haute-Savoie, so try a Savoyard Jacquère. Epoisses comes from Burgundy, so reach for a white Burgundy.",
      },
      {
        type: "h2",
        text: "Red Wine and Cheese: The Great Myth",
      },
      {
        type: "p",
        text: "Most people assume red wine and cheese is the classic combination. French sommeliers will tell you the opposite: white wine and rosé are almost universally better with cheese. The tannins in red wine clash with the fat and salt of most cheeses, making both taste worse. The exceptions are blue cheeses with big Rhône reds, and aged hard cheeses with mature Bordeaux.",
      },
      {
        type: "tip",
        label: "The easiest win",
        text: "Champagne and cheese is one of the most underrated combinations in French gastronomy. The acidity cuts through fat perfectly, and the bubbles reset your palate between bites.",
      },
      {
        type: "h2",
        text: "Where to Find the Best Cheese in Montmartre",
      },
      {
        type: "p",
        text: "Montmartre has several exceptional fromageries that operate the old way: cheese bought directly from small farms, aged on-site, and sold at peak ripeness. The shopkeepers know every cheese's origin, how it was made, and exactly which wine to drink with it. Ask them. They love talking about it.",
      },
      {
        type: "p",
        text: "On our food tour, we visit one of these fromageries and taste 3–4 cheeses with matched wine pairings — guided by your local host who grew up in this neighborhood and has been eating in these shops since childhood.",
      },
      {
        type: "h2",
        text: "A Starter Pairing Cheat Sheet",
      },
      {
        type: "ul",
        items: [
          "Brie de Meaux → Champagne or Chablis",
          "Comté 18 months → Jura Chardonnay or aged Burgundy white",
          "Reblochon → Savoyard white (Jacquère, Roussette)",
          "Roquefort → Sauternes or Banyuls",
          "Chèvre frais → Sancerre or Pouilly-Fumé",
          "Époisses → Alsatian Gewurztraminer or Burgundy Pinot Noir",
        ],
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "eat-like-a-parisian",
    title: "How to Eat Like a Parisian: A Local's Honest Guide",
    excerpt:
      "Parisians have a specific, almost ritualistic relationship with food. It's not about what they eat — it's about how, when and with whom. Here's the code, decoded.",
    date: "2026-03-01",
    readTime: 6,
    category: "Culture",
    coverImage:
      "/images/_wp-content_uploads_2025_12_ouple-enjoying-wine-paris-food-tour-1024x512.webp",
    coverAlt: "Couple enjoying wine and food in Paris",
    meta: {
      title: "How to Eat Like a Parisian: A Local's Honest Guide",
      description:
        "Discover the unwritten rules of Parisian eating culture — from the boulangerie morning ritual to the long lunch, aperitif hour, and why a meal is never just food.",
    },
    content: [
      {
        type: "p",
        text: "There's a particular kind of pleasure in watching a Parisian eat. Not the theatrical Instagram version — just an ordinary person, at an ordinary table, treating an ordinary Tuesday lunch like it's worth an hour of their full attention. That's the thing to understand first: for Parisians, food is not fuel. It is, in the most literal sense, one of the pleasures of being alive.",
      },
      {
        type: "h2",
        text: "The Boulangerie Ritual",
      },
      {
        type: "p",
        text: "The day begins at the boulangerie. This is non-negotiable. You go before work, you go before school, you go before you're even fully awake. You buy a baguette tradition — not the standard baguette, the tradition, which is made with a slower fermentation that gives it better crust and flavour — and you eat the heel of it on the walk home. This is called la quignon. It's not a rule. It's just what happens.",
      },
      {
        type: "p",
        text: "The best boulangeries change their bread twice a day. Morning for breakfast and lunch, late afternoon for dinner. Bread more than four hours old is, in Parisian terms, stale. This sounds extreme until you've tasted fresh.",
      },
      {
        type: "h2",
        text: "The Long Lunch",
      },
      {
        type: "p",
        text: "France passed a law decades ago protecting the lunch break. The idea that eating well mid-day has value — cultural, social, even economic — is enshrined in legislation. Parisians take this seriously. A proper lunch is at minimum an hour, often ninety minutes. It involves a starter, a main, and either cheese or dessert. It involves conversation. It involves wine, often.",
      },
      {
        type: "blockquote",
        text: "In Paris, the lunch table is not a place to answer emails. The phone stays in the pocket. The food comes first.",
      },
      {
        type: "p",
        text: "As a visitor, the practical takeaway: eat lunch seriously. The prix-fixe menus served at lunch in Paris restaurants are typically the same dishes as dinner, for significantly less money. Parisians know this. Tourists eating hot dogs at 1pm near Notre Dame do not.",
      },
      {
        type: "h2",
        text: "Aperitif Culture",
      },
      {
        type: "p",
        text: "The aperitif — l'apéro — is one of France's great contributions to civilised living. It happens between 6 and 8pm, before dinner. The drink is almost secondary. The point is the pause: the moment between the workday and the evening where you stop, sit with people you like, and allow yourself to be nowhere in particular.",
      },
      {
        type: "p",
        text: "In Montmartre, this often happens on the steps, in small squares, or in the natural wine bars scattered through the village. A glass of Beaujolais, a plate of olives, the light going golden over the rooftops. You begin to understand why people move to Paris.",
      },
      {
        type: "h2",
        text: "The Unwritten Rules",
      },
      {
        type: "ul",
        items: [
          "Never ask for a doggy bag in a traditional restaurant — it implies the portion was too large, which is an insult to the chef",
          "Bread goes directly on the table beside the plate, not on a side plate",
          "Salad comes after the main course, to cleanse the palate before cheese",
          "You wait for the word 'bon appétit' (or a nod from the host) before eating",
          "Wine is poured first for guests, then the host pours for themselves last",
          "Finishing everything on your plate is a compliment; leaving food suggests the portion was too large",
          "Coffee comes after dessert — never with it, never before",
        ],
      },
      {
        type: "h2",
        text: "Avoiding Tourist Traps",
      },
      {
        type: "p",
        text: "The tourist menus near major landmarks look like bargains. They are not. They are typically made with lower-quality ingredients, prepared in bulk, and designed to turn tables quickly. A laminated menu with photographs is a reliable warning sign. An absence of French speakers at neighbouring tables is another.",
      },
      {
        type: "p",
        text: "The simplest rule: walk one or two streets away from any monument and the quality of food improves dramatically. Parisians don't eat at restaurants next to tourist attractions. Follow the Parisians.",
      },
      {
        type: "tip",
        label: "The local test",
        text: "Before entering any restaurant, look at who's eating there. If more than half the tables have tourists, keep walking. If you hear mostly French being spoken, sit down.",
      },
      {
        type: "h2",
        text: "Food as Social Currency",
      },
      {
        type: "p",
        text: "In Paris, knowing where to eat — and knowing why the place you've chosen is worth it — is a form of cultural capital. Locals share recommendations with the same seriousness that others might share investment advice. A really good restaurant tip, in Paris, is a gift.",
      },
      {
        type: "p",
        text: "On our food tour, we give you that gift. At the end of three hours, you'll leave with a handwritten map of the best places to return to: the fromagerie we visit, the wine bar with the extraordinary natural pours, the boulangerie that makes the best croissant in Montmartre. It's the local knowledge that most visitors never get.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "montmartre-hidden-food-scene",
    title: "Montmartre's Hidden Food Scene: Beyond the Tourist Traps",
    excerpt:
      "Most visitors to Montmartre see the souvenir shops near Sacré-Cœur and leave disappointed. A different Montmartre — extraordinary, authentic, deeply local — exists just one street away.",
    date: "2026-02-15",
    readTime: 7,
    category: "Local Life",
    coverImage:
      "/images/_wp-content_uploads_2025_12_authentic-paris-food-tour-local-guide-1-scaled.webp",
    coverAlt: "Authentic Paris food tour local guide in Montmartre",
    meta: {
      title: "Montmartre's Hidden Food Scene: A Local's Guide",
      description:
        "Discover the authentic food scene in Montmartre beyond the tourist traps. Local fromageries, natural wine bars, hidden bakeries and the neighborhood's best-kept culinary secrets.",
    },
    content: [
      {
        type: "p",
        text: "Montmartre's reputation has a complicated relationship with its reality. The postcard version — white domed basilica, artists at easels, crêpe stands on every corner — is real enough. But it's a surface. Underneath it is one of Paris's most extraordinary food neighborhoods: a village that still has the rhythms of village life, where the fromagerie has been in the same family for three generations, where the wine bar owner makes annual pilgrimages to small farms in the Loire to select her bottles personally.",
      },
      {
        type: "p",
        text: "Finding this Montmartre requires knowing where to look — or knowing someone who grew up here.",
      },
      {
        type: "h2",
        text: "The Two Montmartres",
      },
      {
        type: "p",
        text: "The tourist Montmartre concentrates on Rue Lepic, Place du Tertre and the immediate vicinity of Sacré-Cœur. Millions of visitors pass through annually, and the food economy in this zone has adapted accordingly: overpriced crêpes, mediocre bistros with English menus, souvenir shops selling miniature Eiffel Towers (which is, of course, in a completely different arrondissement).",
      },
      {
        type: "p",
        text: "The local Montmartre begins the moment you turn onto a side street. Suddenly: a queue of French people outside a boulangerie at 8am. A cheese shop with a handwritten chalkboard. A wine bar with no sign on the door that you'd walk past completely if you didn't know to ring the bell.",
      },
      {
        type: "h2",
        text: "The Fromagerie Culture",
      },
      {
        type: "p",
        text: "Montmartre has several traditional fromageries that operate very differently from the cheese sections of supermarkets. These are specialists: they age cheeses on-site, buy directly from small producers, and sell only when a cheese is at its peak. Come in summer for the best chèvres. Come in winter for the washed-rind cheeses — the Époisses, the Munster — which need cold weather to be at their most extraordinary.",
      },
      {
        type: "p",
        text: "The shopkeepers will let you taste before you buy. Ask them what they're most excited about this week. They will never steer you wrong.",
      },
      {
        type: "h2",
        text: "The Natural Wine Revolution",
      },
      {
        type: "p",
        text: "Montmartre has become one of the centres of Paris's natural wine scene — wines made with minimal intervention, no added sulphites or yeasts, from producers who farm their vines biodynamically or organically. The result is wines that taste of place: alive, sometimes cloudy, often surprising, always interesting.",
      },
      {
        type: "p",
        text: "The wine bars in this neighborhood are a universe away from the tourist bistros selling generic Bordeaux by the carafe. Here, the person behind the bar has visited every producer on the list. They can tell you about the harvest, the soil, the weather that year. This is wine culture as it should be.",
      },
      {
        type: "blockquote",
        text: "The best natural wine bars in Montmartre don't look like wine bars. They look like someone's living room that happens to have great bottles.",
      },
      {
        type: "h2",
        text: "The Boulangeries Worth Queuing For",
      },
      {
        type: "p",
        text: "Paris takes bread seriously in the way other cities take architecture seriously. There are annual competitions for the best baguette in Paris, and the winner gets to supply bread to the Élysée Palace for a year. In Montmartre, there are several boulangeries that consistently reach this level.",
      },
      {
        type: "p",
        text: "What makes a great baguette? Long fermentation (18-24 hours, not the fast industrial 2-hour version), high-quality flour, and — crucially — being eaten within two hours of baking. The window between perfect and stale is genuinely narrow. The boulangeries in this neighborhood bake twice daily, morning and late afternoon. Regulars plan their days accordingly.",
      },
      {
        type: "h2",
        text: "The Secret Terraces",
      },
      {
        type: "p",
        text: "Montmartre is a hill, and on that hill are views. Most tourists find the main viewpoint in front of Sacré-Cœur and are satisfied with that. But the neighborhood has a dozen hidden terraces and rooftop spots that look out over the same city from angles that tourists never discover. We end every food tour at one of them.",
      },
      {
        type: "tip",
        label: "Getting here",
        text: "Take the Abbesses metro (line 12) and walk up rather than taking the funicular. The walk through the winding streets IS the experience. Give yourself 15 minutes.",
      },
      {
        type: "h2",
        text: "Why a Guided Tour Makes All the Difference",
      },
      {
        type: "p",
        text: "You can explore Montmartre on your own and have a wonderful time. But you will walk past the fromagerie without knowing it's there. You will not know which boulangerie is currently making the best croissant. You will not find the wine bar with no sign on the door. And you will definitely not discover the panoramic terrace at the end.",
      },
      {
        type: "p",
        text: "This is what a local guide changes. Not just access to places, but context — the stories, the relationships, the history that makes a meal mean something beyond the flavours on the plate.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "natural-wine-paris-montmartre",
    title: "Natural Wine in Paris: Why Montmartre Leads the Movement",
    excerpt:
      "Natural wine — made with minimal intervention, maximum soul — has transformed the Paris wine scene. Montmartre is its heartland. Here's what you need to know before you drink.",
    date: "2026-02-01",
    readTime: 6,
    category: "Food & Wine",
    coverImage:
      "/images/_wp-content_uploads_2025_12_wine-tasting-paris-food-tour-montmartre-1-1024x683.webp",
    coverAlt: "Wine tasting at a natural wine bar in Montmartre Paris",
    meta: {
      title: "Natural Wine Paris: The Guide to Montmartre's Best Wine Bars",
      description:
        "Discover Paris's natural wine scene centered in Montmartre. What is natural wine, why it matters, and how to drink it like a Parisian — from our local food tour guides.",
    },
    content: [
      {
        type: "p",
        text: "Something has shifted in Paris wine culture over the past decade. The old guard — grand château reds, oak-forward whites, wines made to a formula — still exists. But alongside it, something more alive has taken root: natural wine, vin naturel, made by farmers who treat their vineyards like gardens rather than factories, and who bottle what the land gives them rather than engineering the result.",
      },
      {
        type: "p",
        text: "Montmartre, with its history of artistic rebellion and its village-scale community, became one of the first neighborhoods in Paris where this movement took hold. Today it is, arguably, the capital of Parisian natural wine culture.",
      },
      {
        type: "h2",
        text: "What Is Natural Wine, Exactly?",
      },
      {
        type: "p",
        text: "Natural wine doesn't have a strict legal definition, but the principle is clear: grapes grown without synthetic pesticides or herbicides, harvested by hand, fermented with wild yeasts (not commercial yeasts added in the cellar), and bottled with little or no added sulphites. The result is wine that is, in the truest sense, just fermented grapes — with all the unpredictability and vitality that implies.",
      },
      {
        type: "p",
        text: "Natural wines are often cloudy (unfined and unfiltered), sometimes slightly fizzy (residual CO₂), and can taste funky, fresh, fruity or mineral depending on the vintage and producer. They don't taste like conventional wine. That's the point.",
      },
      {
        type: "h2",
        text: "The Vocabulary You Need",
      },
      {
        type: "ul",
        items: [
          "Vin naturel — natural wine, the broadest term",
          "Vin orange — white wine made with extended skin contact, giving amber colour and tannin",
          "Pétillant naturel (pét-nat) — naturally sparkling wine, bottled before fermentation is complete",
          "Macération — skin contact for white wines, extracting colour and texture",
          "Sans soufre — no added sulphites; the most minimal possible intervention",
          "Biodynamique — the farming philosophy behind many natural wines, aligned with lunar cycles",
        ],
      },
      {
        type: "h2",
        text: "Why Montmartre?",
      },
      {
        type: "p",
        text: "The natural wine movement needed space to grow, and Montmartre's small, independent bar culture provided it. Unlike the more fashionable districts of Paris — where restaurant rents are eye-watering and the clientele expects conventional luxury — Montmartre has always accommodated the unconventional.",
      },
      {
        type: "p",
        text: "The caves à vins that opened here in the early 2010s could take risks on unknown producers, on wines that might be cloudy or smell of farmyard, because their clientele was curious and adventurous. Those early bars developed the vocabularly and culture around natural wine that has since spread across the city.",
      },
      {
        type: "blockquote",
        text: "Drinking natural wine in Montmartre feels like discovering jazz in New Orleans — you're at the source of something that has since gone everywhere.",
      },
      {
        type: "h2",
        text: "How to Approach It as a Beginner",
      },
      {
        type: "p",
        text: "The best advice for someone new to natural wine: suspend expectations. You will taste things that surprise you, possibly in ways you didn't anticipate. A Beaujolais poured slightly chilled that smells of cherries and earth. A white wine that looks amber and tastes of dried apricot and sea salt. A pét-nat that fizzes gently and tastes like a vineyard in autumn.",
      },
      {
        type: "p",
        text: "Ask the person pouring for context. Natural wine bars in Montmartre are staffed by people who have visited the producers, who know the region, who can tell you about the vintage. This knowledge is part of what you're drinking.",
      },
      {
        type: "tip",
        label: "Temperature matters",
        text: "Most natural wines are served slightly cooler than conventional wines — even reds. A light Beaujolais naturel served at 14°C rather than room temperature is a revelation.",
      },
      {
        type: "h2",
        text: "What We Taste on the Tour",
      },
      {
        type: "p",
        text: "On our Montmartre Food & Wine Tour, we visit a cave à vins that has been one of the neighborhood's finest for years. Your guide will walk you through two or three natural wines — chosen specifically to illustrate different styles — alongside artisan charcuterie selected to complement them. It's a 45-minute masterclass in an art form that's been evolving in this very neighborhood for the past decade.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "best-food-markets-montmartre",
    title: "The 5 Best Places to Shop for Food in Montmartre",
    excerpt:
      "Forget the supermarket. Shopping for food in Montmartre means following the same streets locals have walked for generations — to the fromagerie, the boulangerie, the butcher who knows your name.",
    date: "2026-01-20",
    readTime: 5,
    category: "Local Life",
    coverImage:
      "/images/_wp-content_uploads_2025_12_paris-montmartre-food-tour-1024x683.webp",
    coverAlt: "Montmartre street scene with food shops and market",
    meta: {
      title: "Best Food Shopping in Montmartre: Markets, Fromageries & More",
      description:
        "Where locals shop for food in Montmartre. The best fromageries, boulangeries, wine shops and markets in Paris's most authentic food neighborhood.",
    },
    content: [
      {
        type: "p",
        text: "Montmartre's relationship with food shopping is deeply traditional — and it survives. While the rest of Paris has watched its neighborhood épiceries and specialist shops slowly give way to supermarket chains and franchise cafés, Montmartre has held on to its village anatomy. The fromagerie still exists. The boulangerie still has a queue at 8am. The cave à vins still knows what every bottle on its list tastes like.",
      },
      {
        type: "p",
        text: "Here are five categories of food shopping in Montmartre that are worth your time — and your appetite.",
      },
      {
        type: "h2",
        text: "1. The Traditional Fromageries",
      },
      {
        type: "p",
        text: "Cheese shops in Montmartre do things differently from supermarkets. They age on-site. They source from small farms that practice traditional methods. They sell only when a cheese has reached peak ripeness, which means the Camembert might not be ready until Thursday, and you should come back on Thursday.",
      },
      {
        type: "p",
        text: "The best fromageries in the neighborhood will let you taste before you buy, will tell you the story of each cheese, and will tell you exactly what to drink with it. They will also wrap your cheese properly (never cling film) and tell you how long it will travel.",
      },
      {
        type: "h2",
        text: "2. The Artisan Boulangeries",
      },
      {
        type: "p",
        text: "There are dozens of boulangeries in Montmartre, but perhaps four or five that justify genuine devotion. These are the ones using traditional fermentation methods — slow-risen doughs, hand-shaped loaves, baked twice daily. The baguette tradition is the baseline. The croissants, when made well, are layered, buttery, and will make you understand why the croissant is considered an achievement of civilisation.",
      },
      {
        type: "tip",
        label: "What to order",
        text: "Always ask for a baguette tradition rather than a baguette normale. The tradition has better fermentation, better crust, better flavour — and is protected by French law to ensure it's made the old way.",
      },
      {
        type: "h2",
        text: "3. Rue Lepic and the Market Street",
      },
      {
        type: "p",
        text: "Rue Lepic is one of Paris's last genuine market streets — a winding road that descends from Montmartre's heights through a succession of fruit sellers, vegetable stalls, fishmongers, butchers and specialty food shops. It's busiest Saturday mornings, when the street turns into something close to an outdoor market.",
      },
      {
        type: "p",
        text: "Shop here the way locals do: buy what looks best rather than what you planned to buy. The green beans might be exceptional this week. The strawberries might just have arrived from the south. Follow the produce, not the recipe.",
      },
      {
        type: "h2",
        text: "4. The Cave à Vins",
      },
      {
        type: "p",
        text: "Wine shops in Montmartre have evolved with the natural wine movement, and the best ones are now as much education centers as retail outlets. The staff know every bottle on the list. They know which producers they've visited, which harvests were exceptional, which wines drink best now and which need another year.",
      },
      {
        type: "p",
        text: "Don't be intimidated. Walk in, tell them what you're eating for dinner and how much you want to spend, and let them choose. The recommendation you'll get from a Montmartre cave à vins will be better than anything you'd have chosen yourself.",
      },
      {
        type: "h2",
        text: "5. The Marché de Barbès",
      },
      {
        type: "p",
        text: "At the foot of the Montmartre hill, in the 18th arrondissement, the Marché de Barbès opens every Wednesday and Saturday morning under the elevated metro. This is one of Paris's most vibrant and most affordable markets — fresh produce, spices, North African specialties, fish, and a genuinely multicultural cross-section of the city doing its weekly shop.",
      },
      {
        type: "p",
        text: "It's not picturesque in the way of tourist-facing markets. It's the real thing: noisy, crowded, abundant, and deeply alive. Arrive early (before 10am), bring cash, and leave room in your bag.",
      },
      {
        type: "blockquote",
        text: "Shopping for food in Montmartre is not about convenience. It's about connection — to the people who made what you're eating, to the seasons that shaped it, to the neighborhood you're walking through.",
      },
      {
        type: "h2",
        text: "Taste It First",
      },
      {
        type: "p",
        text: "The best way to discover these places, of course, is with someone who has been going to them for years. On our food tour, your guide takes you to the spots worth knowing — and introduces you to the producers and shopkeepers who make Montmartre's food culture what it is.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "french-pastries-montmartre-guide",
    title: "French Pastries in Montmartre: A Guide to the Essential Classics",
    excerpt:
      "The croissant, the pain au chocolat, the tarte aux fraises, the éclair. French pastries are an art form with a grammar of their own. Here's how to read it.",
    date: "2026-01-08",
    readTime: 6,
    category: "Food & Wine",
    coverImage:
      "/images/_wp-content_uploads_2025_12_paris-food-tour-french-pastries-montmartre-1-768x1024.webp",
    coverAlt: "French pastries from a Montmartre boulangerie",
    meta: {
      title: "French Pastries Guide: The Classics of Montmartre's Boulangeries",
      description:
        "A guide to the essential French pastries — croissant, pain au chocolat, éclair, tarte and more. What makes them extraordinary in Montmartre's best boulangeries.",
    },
    content: [
      {
        type: "p",
        text: "French pastry is one of the most technically demanding forms of cooking in the world. A great croissant requires 27 separate layers of butter and dough, each laminated by hand, rested overnight, and baked at a temperature that transforms the whole thing into a revelation of crunch and air and richness. That this object exists at all — that you can buy one at 8am for €1.50 and eat it on a cobblestone street in Montmartre — is extraordinary.",
      },
      {
        type: "h2",
        text: "The Croissant: Anatomy of a Classic",
      },
      {
        type: "p",
        text: "A good croissant is an engineering achievement. The outside should shatter at the first bite — not bend, not tear, shatter — releasing a cascade of laminated layers and the smell of butter that has been coaxed into something more than itself by heat. The inside should be soft, slightly chewy, with a honeycomb structure that holds its shape.",
      },
      {
        type: "p",
        text: "A croissant that bends when you pick it up was made with margarine or cheap butter. A croissant that smells of butter before you bite it was made correctly. The croissant ordinaire is made with straight (non-laminated) dough and is cheaper and inferior. Always ask for the croissant beurre.",
      },
      {
        type: "tip",
        label: "The test",
        text: "Pick up a croissant and look at the underside. It should be evenly golden-brown from edge to edge, with visible horizontal lines showing the lamination. If the bottom is pale or the layers are invisible, move on.",
      },
      {
        type: "h2",
        text: "Pain au Chocolat",
      },
      {
        type: "p",
        text: "The pain au chocolat (called a chocolatine in the southwest of France, a fact that launches genuine arguments) is a rectangular laminated pastry with two bars of dark chocolate inside. The quality of the chocolate matters enormously — it should be bitter enough to cut through the butter, not the waxy sweetness of cheap chocolate. The pastry itself should follow the same standards as the croissant: shatteringly crisp outside, soft and layered inside.",
      },
      {
        type: "h2",
        text: "The Tarte and the Éclair",
      },
      {
        type: "h3",
        text: "Tarte aux Fraises",
      },
      {
        type: "p",
        text: "The French strawberry tart is a study in restraint. A buttery, crisp pâte sablée base. A layer of crème pâtissière — vanilla custard made with egg yolks and real vanilla. Fresh strawberries, arranged with geometric precision. A thin brush of nappage to make them shine. Nothing else. The excellence is in the quality of each element and the absence of anything that doesn't need to be there.",
      },
      {
        type: "h3",
        text: "L'Éclair",
      },
      {
        type: "p",
        text: "The éclair — a long choux pastry shell filled with flavoured cream and glazed on top — is one of the most technically demanding of the classic pastries. The choux must be crisp and dry, not soft and chewy (a sign it was baked too quickly). The cream inside must be cold, well-flavoured and not sweet to excess. The glaze on top must be smooth and glossy, applied at exactly the right moment.",
      },
      {
        type: "h2",
        text: "Seasonal Pastries: Following the Calendar",
      },
      {
        type: "p",
        text: "French pastry follows the seasons in the same way French cooking does. In January, the galette des rois (a puff pastry filled with almond cream) is everywhere, because January 6th is Epiphany and this is what you eat. In spring, the tarte aux fraises appears the moment the first domestic strawberries arrive. In autumn, the tarte tatin (caramelised apple tart) takes over.",
      },
      {
        type: "p",
        text: "The seasonal pastry on offer at a good Montmartre boulangerie is always worth ordering, precisely because it's temporary. Ask your guide what's in season.",
      },
      {
        type: "h2",
        text: "What We Taste on the Tour",
      },
      {
        type: "p",
        text: "On our Montmartre Food & Wine Tour, we stop at a boulangerie that represents everything we've described above — traditional methods, exceptional butter, bread and pastries baked twice daily. You'll taste the croissant that gives you the standard to measure all future croissants against. You'll also try whatever is seasonal and extraordinary that week.",
      },
      {
        type: "ul",
        items: [
          "A freshly baked croissant beurre at its best",
          "Fresh bread from the oven — including the legendary baguette tradition",
          "Seasonal pastry selected by your guide the morning of the tour",
          "Context about what makes Montmartre's boulangerie culture exceptional",
        ],
      },
      {
        type: "blockquote",
        text: "One croissant from the right boulangerie in Montmartre will change how you eat croissants everywhere else for the rest of your life. And that is not a bad thing to have happen to you.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "private-food-tour-paris",
    title: "Private Food Tour Paris: How to Book an Exclusive Experience",
    excerpt:
      "A private food tour in Paris means no shared tables, no strangers, and a guide who adapts entirely to your group. Here's what to look for — and what to avoid.",
    date: "2026-04-10",
    readTime: 7,
    category: "Private Tours",
    coverImage:
      "/images/_wp-content_uploads_2025_12_Food-Tour-Group-Montmartre-Paris-1024x683.jpg",
    coverAlt: "Private group food tour in Montmartre Paris",
    meta: {
      title: "Private Food Tour Paris: Book an Exclusive Experience",
      description:
        "How to book a private food tour in Paris. What's included, how to choose the right guide, and why going private makes a difference for couples, families and corporate groups.",
    },
    content: [
      {
        type: "p",
        text: "Most food tours in Paris are shared experiences — you join a group of strangers, follow a set itinerary, and eat at whatever pace the slowest member of the group sets. That works perfectly well for many people. But for some groups — couples celebrating an anniversary, families with young children, corporate teams, or anyone who simply prefers to set their own pace — a private food tour is a fundamentally different thing.",
      },
      {
        type: "h2",
        text: "What 'Private' Actually Means",
      },
      {
        type: "p",
        text: "A true private food tour means one thing: the guide is exclusively yours for the duration. No other guests share your experience. No compromises on pace, dietary preferences, or conversation. The tour is built around your group, not the other way around.",
      },
      {
        type: "p",
        text: "This distinction matters more than most people realise when booking. Some tour companies advertise 'semi-private' tours — which usually just means smaller groups, not exclusivity. Always check: is this group just for us, or could strangers be added?",
      },
      {
        type: "tip",
        label: "What to ask before booking",
        text: "Ask directly: 'Will there be any other guests on this tour?' A reputable private tour operator will confirm in writing that the experience is exclusively for your group.",
      },
      {
        type: "h2",
        text: "Who Books Private Food Tours in Paris?",
      },
      {
        type: "p",
        text: "The range is wider than you might expect. Couples on anniversary trips who want an intimate afternoon with a guide who speaks to them, not a crowd. Families with children aged 8 and up who need a slower pace and a guide who can hold a child's attention at the chocolate stop. Corporate teams from international companies using Paris as an offsite — shared tastings break ice faster than any meeting room exercise. Friends celebrating a significant birthday who want the experience to feel tailored, not generic.",
      },
      {
        type: "h2",
        text: "What a Private Food Tour Should Include",
      },
      {
        type: "ul",
        items: [
          "A minimum of 8–10 tastings (anything less is a walk with snacks)",
          "Local producers only — not tourist-facing shops with revolving displays",
          "A guide who sources and selects every product personally",
          "Flexibility: if your group wants to linger at the cheese shop, you linger",
          "All food and drink included — no surprise costs at each stop",
          "A restaurant finale, not a street corner send-off",
        ],
      },
      {
        type: "h2",
        text: "How We Run Private Tours in Montmartre",
      },
      {
        type: "p",
        text: "Our private food tours follow the same route as our public tour — through Montmartre's fromagerie, boulangerie, butcher, seafood stop, artisan chocolatier, and restaurant finale — but the experience is entirely adapted to your group. We've run private tours for couples in their 20s and retired travellers in their 70s, for groups of 2 and groups of 20. Each one is different.",
      },
      {
        type: "p",
        text: "The guide — Imrane — has spent years working the floor of Paris's finest restaurants, which means he can read a table. He knows when to slow down, when to let conversation breathe, and when to tell the story that makes a tasting unforgettable rather than just educational.",
      },
      {
        type: "blockquote",
        text: "\"Of the five European food tours we've taken over the years this was by far the best. Our guide was friendly and quite knowledgeable about the sourcing, preparation, and history of the foods and wines he served.\" — William C., Viator",
      },
      {
        type: "h2",
        text: "Pricing and Booking",
      },
      {
        type: "p",
        text: "Private tours are priced by group size. For small groups — 2 to 4 people — the per-person rate is typically comparable to the public tour. For larger groups, it becomes more economical per head. We always recommend booking directly rather than through OTA platforms: you get a better price, direct communication with your guide, and the flexibility to adjust the itinerary before the day.",
      },
      {
        type: "p",
        text: "To get a quote, send us your group size, preferred date, and any dietary requirements or special occasion details. We respond within 24 hours.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "paris-food-tour-families-children",
    title: "Paris Food Tour with Kids: Why It Works Better Than You Think",
    excerpt:
      "Worried a food tour might not work with children? Here's why Montmartre is one of the best places in Paris to eat with kids — and how we make the experience work for every age.",
    date: "2026-04-12",
    readTime: 6,
    category: "Travel Tips",
    coverImage:
      "/images/_wp-content_uploads_2025_12_paris-food-tour-traditional-french-dishes-1024x683.webp",
    coverAlt: "Traditional French food on a Paris food tour in Montmartre",
    meta: {
      title: "Paris Food Tour with Kids: A Family Guide to Montmartre",
      description:
        "Can children join a Paris food tour? Yes — and they love it. Here's how a Montmartre food tour works for families, what kids eat, and what to expect at each stop.",
    },
    content: [
      {
        type: "p",
        text: "When parents ask whether a food tour works with children, the honest answer is: it depends entirely on the tour. A rushed walk through tourist-heavy stops with a guide talking over the group's head? Not ideal. A slower, story-driven afternoon through a real neighbourhood, with stops that include artisan chocolate and fresh pastries from the oven? Children are often the most engaged guests in the group.",
      },
      {
        type: "h2",
        text: "What Ages Work Best?",
      },
      {
        type: "p",
        text: "From experience: children aged 8 and up tend to get the most out of a food tour. They're old enough to be genuinely curious about how a croissant is made or where a cheese comes from. Younger children — 5 to 7 — can absolutely join, especially if they're adventurous eaters, but the experience is more about shared fun than food education.",
      },
      {
        type: "p",
        text: "Toddlers and very young children are possible if you have a pram-friendly group willing to move at a gentle pace. Worth discussing with us before booking so we can adapt accordingly.",
      },
      {
        type: "h2",
        text: "What Children Eat on the Tour",
      },
      {
        type: "p",
        text: "The honest truth is that a Montmartre food tour is one of the most child-friendly food experiences in Paris — not because we dumb it down, but because the foods are genuinely appealing to young palates.",
      },
      {
        type: "ul",
        items: [
          "Fresh croissant beurre straight from the oven — universally beloved",
          "Artisan bread: baguette tradition, warm and crusty",
          "Cheese tasting: we introduce milder options for younger tasters, and strong ones for the adventurous",
          "Chocolate at the artisan chocolatier — usually the highlight of the afternoon for any child under 14",
          "Charcuterie: many children love jambon de Paris and mild pâté",
          "Restaurant finale: a full sit-down meal with a kids-friendly menu option",
        ],
      },
      {
        type: "tip",
        label: "Dietary needs",
        text: "Tell us before the tour if your child has any allergies or strong dislikes. We'll make sure every stop has something they can eat with confidence.",
      },
      {
        type: "h2",
        text: "Why Montmartre Works for Families",
      },
      {
        type: "p",
        text: "Montmartre is a walking neighbourhood — relatively flat along our route, with real pavements and no major roads to cross mid-tour. It's human in scale, which matters when you're keeping track of children. The shops we visit are small, intimate and calm — not the overwhelming market halls or crowded tourist corridors you find in other parts of Paris.",
      },
      {
        type: "p",
        text: "The neighbourhood itself is endlessly interesting for children: the windmill of Moulin de la Galette, the views over Paris from the steps of Sacré-Cœur, the cats sitting in doorways, the old-fashioned shop fronts. There's always something to look at, which helps with energy levels between stops.",
      },
      {
        type: "h2",
        text: "How We Adapt the Tour for Families",
      },
      {
        type: "p",
        text: "A family booking on a private tour allows us to slow the pace significantly. We can spend longer at the chocolatier — where the process of making chocolate from bean to bar genuinely captivates children — and move more quickly through stops that are less child-relevant. We can also adjust the restaurant finale to something earlier in the afternoon if bedtime routines require it.",
      },
      {
        type: "p",
        text: "On our public group tours, we aim for a pace that works for everyone, including younger guests. If you're joining a shared tour with children, a quick note at booking lets us seat you well and manage expectations from the group.",
      },
      {
        type: "blockquote",
        text: "Children have an honesty about food that adults lose over time. When a child tries a proper French croissant for the first time and their face changes — that's the reaction we're all chasing.",
      },
      {
        type: "h2",
        text: "Practical Tips for Families",
      },
      {
        type: "ul",
        items: [
          "Eat a light breakfast — you'll be eating for 3 hours",
          "Bring a water bottle for younger children",
          "Wear comfortable shoes — expect 2–3 km of gentle walking",
          "Book private if you want full flexibility on pace and stops",
          "The chocolate stop is always last before the restaurant — good motivation for the whole group",
        ],
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "oysters-paris-guide",
    title: "Oysters in Paris: Where to Eat Them and What to Know",
    excerpt:
      "Paris is one of the world's great oyster cities — and most visitors don't know it. Here's the guide to eating oysters in the French capital, from the best spots to the etiquette.",
    date: "2026-04-15",
    readTime: 8,
    category: "French Food Culture",
    coverImage:
      "/images/_wp-content_uploads_2025_12_wine-tasting-paris-food-tour-montmartre-1-1024x683.webp",
    coverAlt: "Wine and seafood tasting on a Paris food tour",
    meta: {
      title: "Oysters in Paris: Where to Eat Them and What You Should Know",
      description:
        "A complete guide to eating oysters in Paris. The best varieties, where to go, what to drink alongside them, and why they're part of every great Paris food tour.",
    },
    content: [
      {
        type: "p",
        text: "Oysters in Paris feel like a contradiction. The city is hundreds of kilometres from the sea. And yet Parisians consume more oysters per capita than almost any coastal city in France. Walk through a market in the 18th arrondissement on a Saturday morning and you'll find a fishmonger's stall surrounded by Parisians, standing in the cold, eating oysters from the shell with a squeeze of lemon and a glass of Muscadet. It's one of the city's great pleasures, and most tourists never discover it.",
      },
      {
        type: "h2",
        text: "Why Paris Is an Oyster City",
      },
      {
        type: "p",
        text: "The history is practical: France produces the finest oysters in the world, primarily from Brittany, Normandy, and the Atlantic coast. Paris, as the nation's capital, has always demanded the best of everything that France produces — and so the oysters arrive by the crate every morning, as fresh as anything you'll find at the source. The cold water, the swift transport logistics, and the French reverence for quality control mean that a Parisian oyster market is not second-best to the coast.",
      },
      {
        type: "h2",
        text: "Understanding French Oyster Varieties",
      },
      {
        type: "h3",
        text: "Creuse (Hollow Oysters)",
      },
      {
        type: "p",
        text: "The Creuse — the cupped, elongated oyster — is the most commonly eaten oyster in France. Varieties are numbered by size: 00 (largest) to 5 (smallest). A size 3 is what most Parisians default to — a comfortable mouthful, not so small it feels like a snack, not so large it becomes a challenge. The flavour varies significantly by region of origin: Breton oysters tend to be brinier and more mineral, Norman ones creamier and milder.",
      },
      {
        type: "h3",
        text: "Plates (Flat Oysters)",
      },
      {
        type: "p",
        text: "The Plate — flat-shelled, round, and considerably rarer — is the oyster that serious eaters seek out. Belon oysters from the Bélon river in Brittany are the most famous: intensely flavoured, metallic, complex, with a finish that lingers for a full minute. They're not for the faint-hearted. They're also not for the uninitiated — start with a Creuse, earn your way to a Belon.",
      },
      {
        type: "h2",
        text: "How to Eat an Oyster in Paris",
      },
      {
        type: "p",
        text: "The French approach to oysters is minimal. The point is the oyster itself — not what you add to it. A wedge of lemon is acceptable, and a light squeeze is the local default. Small shallots in red wine vinegar (mignonette) are traditional and excellent. A few drops of Tabasco is acceptable if you must. Cocktail sauce or any creamy condiment is not.",
      },
      {
        type: "tip",
        label: "The etiquette",
        text: "In Paris, you drink the liquid in the shell (the liquor) along with the oyster — it carries much of the flavour. Slurping is not just acceptable; it's expected. Chew once or twice before swallowing — you'll catch flavours that you'd miss otherwise.",
      },
      {
        type: "h2",
        text: "What to Drink with Oysters",
      },
      {
        type: "p",
        text: "Muscadet from the Loire Valley is the canonical pairing — its bone-dry minerality mirrors the brine of a good Breton oyster perfectly. Chablis works equally well. Champagne is the celebratory choice and genuinely excellent with oysters, despite the price premium. Avoid red wine and anything sweet.",
      },
      {
        type: "p",
        text: "For non-wine drinkers: a cold, unflavoured sparkling water is the best non-alcoholic companion. The carbonation cleanses the palate between oysters. Still water dulls the experience.",
      },
      {
        type: "h2",
        text: "Where to Eat Oysters in Paris",
      },
      {
        type: "p",
        text: "The best oysters in Paris are not in restaurants — they're at the market. Every major Paris market has at least one poissonnerie with a standing oyster bar: you buy a half-dozen or dozen, they're opened in front of you, you stand at the counter with a glass of wine poured from a bottle in a bucket of ice, and you eat. This is how Parisians actually do it.",
      },
      {
        type: "ul",
        items: [
          "Marché d'Aligre (12th): one of Paris's best markets with excellent seafood stalls",
          "Marché Raspail (6th): the Saturday organic market has exceptional quality",
          "Marché Saxe-Breteuil (7th): neighbourhood market with good seafood section",
          "Poissonneries in Montmartre: our local suppliers, some of the freshest in the city",
        ],
      },
      {
        type: "h2",
        text: "Oysters on Our Food Tour",
      },
      {
        type: "p",
        text: "Oysters are part of our Montmartre food tour — a deliberate choice, because they represent something most food tours skip entirely: the sea, in a city that has learned to bring the sea to it. We taste them with context — variety, provenance, and the wine pairing that makes the combination more than the sum of its parts.",
      },
      {
        type: "blockquote",
        text: "An oyster eaten standing at a Paris market counter, glass in hand, is one of the simplest and most complete pleasures the city offers. Don't let it pass you by.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "best-food-tour-paris-small-group",
    title: "How to Choose the Best Food Tour in Paris (Honest Guide)",
    excerpt:
      "There are dozens of food tours in Paris. Some are outstanding. Some are tourist traps with good marketing. Here's how to tell the difference before you book.",
    date: "2026-04-18",
    readTime: 8,
    category: "Travel Tips",
    coverImage:
      "/images/_wp-content_uploads_2025_12_wine-cheese-tasting-montmartre-paris-food-tour-1024x1024.webp",
    coverAlt: "Wine and cheese tasting on a small group food tour in Paris",
    meta: {
      title: "Best Food Tour Paris: How to Choose (Honest Guide for 2026)",
      description:
        "How to choose the best food tour in Paris. What to look for, red flags to avoid, group size, guide credentials, and why small-group tours deliver a better experience.",
    },
    content: [
      {
        type: "p",
        text: "If you search for food tours in Paris, you'll find hundreds of options, ranging from €30 self-guided phone apps to €250 private experiences. The quality range is equally wide. Some tours are genuinely extraordinary — they change how you understand French food for the rest of your life. Others are glorified supermarket walks where a disinterested guide reads facts off a laminated card.",
      },
      {
        type: "p",
        text: "The marketing of all of them looks roughly the same. So how do you tell the difference? Here's an honest guide from someone who runs a food tour.",
      },
      {
        type: "h2",
        text: "Group Size: The Most Important Factor",
      },
      {
        type: "p",
        text: "The single biggest predictor of food tour quality is group size. Small groups — 8 to 12 people maximum — allow the guide to actually talk to each guest, to pause when someone has a question, to adapt the pace to the group's energy. Large groups — 20 to 30 people — mean the guide is managing logistics, not delivering an experience. You spend half the tour waiting for the group to reassemble outside each stop.",
      },
      {
        type: "tip",
        label: "Ask before booking",
        text: "Ask the operator: 'What is the maximum group size on this tour?' If the answer is above 12, expect a more generic, less personal experience. If they won't answer, that tells you something too.",
      },
      {
        type: "h2",
        text: "The Guide's Background",
      },
      {
        type: "p",
        text: "A food tour is only as good as its guide. Look for guides who have professional backgrounds in food and hospitality — chefs, sommeliers, former restaurant professionals — rather than generalist city guides who have added 'food tour' to their repertoire. The difference shows in the depth of knowledge: a professional can explain why a particular cheese is aged for 18 months, not just that it tastes good.",
      },
      {
        type: "p",
        text: "Also look for guides who actually live in the neighbourhood they're showing you. The best food tour guides in Paris have personal relationships with the shops they visit — the fromagerie owner knows them by name, the baker sets aside a fresh batch for tour groups. That access is not possible without years of genuine community presence.",
      },
      {
        type: "h2",
        text: "The Stops: Local Shops vs. Tourist-Adjacent",
      },
      {
        type: "p",
        text: "The shops on a food tour reveal everything about its quality. A great food tour visits places that locals actually use — the fromagerie where the neighbourhood shops for Sunday dinner, the boulangerie with a queue at 7am, the butcher who sources from specific regional producers. A poor food tour visits shops that have essentially become tourist infrastructure: they exist primarily to serve tour groups and have adapted their product accordingly.",
      },
      {
        type: "ul",
        items: [
          "Green flag: the shop has a queue of locals when you arrive",
          "Green flag: the guide has a named relationship with the owner or staff",
          "Green flag: the products change seasonally, or even week by week",
          "Red flag: the tasting is set up in advance with pre-portioned samples on a tray",
          "Red flag: the shop sells prominently to tourist audiences (branded bags, multilingual menus, etc.)",
          "Red flag: multiple tour groups are visiting simultaneously",
        ],
      },
      {
        type: "h2",
        text: "What's Actually Included",
      },
      {
        type: "p",
        text: "A good food tour includes everything — no additional charges at stops, no expectation to tip individually at each shop, no awkward moment where you have to decide whether to buy something. The guide has pre-arranged tastings with each producer, and those tastings are included in your tour price.",
      },
      {
        type: "p",
        text: "The number of tastings matters too. A genuine food tour should include at least 10 to 15 distinct tastings across 4 to 7 stops. If a tour advertises '6 tastings in 3 stops', that's a light snack walk, not a food tour.",
      },
      {
        type: "h2",
        text: "Reviews: What to Look For",
      },
      {
        type: "p",
        text: "Review aggregators like TripAdvisor, Viator, and GetYourGuide are useful but require reading beyond the star rating. Look for reviews that mention specific details: the name of the guide, a particular stop, a specific tasting that was memorable. Generic 5-star reviews ('Great experience! Highly recommend!') are less reliable than specific ones that describe what actually happened.",
      },
      {
        type: "p",
        text: "Also look at the ratio of negative reviews and how the operator responds to them. A tour that has no negative reviews ever is either very young or has very few guests. A tour that has occasional negative reviews but responds thoughtfully and constructively shows a level of professionalism that matters.",
      },
      {
        type: "h2",
        text: "The French Food Tour Approach",
      },
      {
        type: "p",
        text: "Our Montmartre tour keeps groups at 8 people maximum. Imrane — the guide — spent years working the floor of Michelin-starred kitchens and two world top-10 restaurants before starting this tour. Every stop is a shop he has a personal relationship with, built over years of living and working in the neighbourhood. The tastings total 15 across 7 stops, all included. There are no tourist-facing shops on the route.",
      },
      {
        type: "blockquote",
        text: "The test is simple: does the tour feel like it was designed to show visitors what Montmartre is, or to process tourists through a neighbourhood? The experience of those two things is entirely different.",
      },
      {
        type: "cta",
      },
    ],
  },
  {
    slug: "montmartre-guide-food-lovers",
    title: "Montmartre for Food Lovers: The Ultimate Neighbourhood Guide",
    excerpt:
      "Montmartre is more than a tourist landmark. For those who know where to look, it's one of the most extraordinary food neighbourhoods in Paris. Here's the full guide.",
    date: "2026-04-20",
    readTime: 9,
    category: "Paris Neighbourhoods",
    coverImage:
      "/images/_wp-content_uploads_2025_12_moulin-de-montmartre-paris-food-tour.webp",
    coverAlt: "Moulin de la Galette windmill in Montmartre Paris",
    meta: {
      title: "Montmartre Food Guide: The Best Neighbourhood for Food Lovers",
      description:
        "A complete food guide to Montmartre, Paris. The best boulangeries, fromageries, wine bars, restaurants and food markets in the 18th arrondissement — from a local guide.",
    },
    content: [
      {
        type: "p",
        text: "Most visitors to Montmartre come for Sacré-Cœur, the views, and the artists. They spend an hour at the top, take photographs, buy a painting, and leave. They miss entirely what makes Montmartre one of the most interesting places to eat in Paris: a dense, authentic network of artisan food producers who have been working the same streets for decades.",
      },
      {
        type: "p",
        text: "This guide is written by someone who grew up in Montmartre, works here every day, and has spent years building relationships with the people who make this neighbourhood's food culture what it is. It is not a list of restaurant recommendations from a travel magazine. It is an honest account of how food works in this corner of Paris.",
      },
      {
        type: "h2",
        text: "The Character of Montmartre",
      },
      {
        type: "p",
        text: "Montmartre is the highest point in Paris — physically and, in some ways, temperamentally. It was absorbed into the city relatively late, and it has maintained the character of a village in a way that the rest of Paris's inner arrondissements haven't. Streets are narrow and non-grid-like. Shops are small. People know each other.",
      },
      {
        type: "p",
        text: "This matters for food because the commercial pressure that has turned much of central Paris into a landscape of chains and tourist-facing brasseries has had less effect here. The fromagerie owner in Montmartre doesn't need to adapt to what tourists want to buy — he sells to the neighbourhood, which has very high standards and doesn't tolerate mediocre cheese.",
      },
      {
        type: "h2",
        text: "Bread: The Boulangeries of Montmartre",
      },
      {
        type: "p",
        text: "Montmartre has an exceptional concentration of traditional boulangeries — bakers who use stone-milled flour, long fermentation, and wood-fired or deck ovens to produce bread that bears little resemblance to the industrial loaves sold in supermarkets. The baguette tradition here is a serious object: a legal designation requiring specific flour, specific fermentation, and specific baking techniques. When you bite into one warm from the oven, you understand why the French care.",
      },
      {
        type: "p",
        text: "What to look for in a Montmartre boulangerie: a queue of locals in the morning, a board on the wall listing the day's specials, pastries that look individually made rather than factory-produced, and a baguette that has a pronounced ear (the diagonal slash on top) showing it was baked correctly.",
      },
      {
        type: "h2",
        text: "Cheese: The Fromageries",
      },
      {
        type: "p",
        text: "A great Parisian fromagerie is one of the most sensory experiences a food lover can have. The smell hits you before you enter — a complex layering of ammonia, earth, cream, and fermentation that is, once you've grown to love it, one of the most appetising smells in existence. Inside, the cheeses are arranged by category: fresh, soft, washed-rind, pressed, blue. A good fromager can guide you from mild to strong, from familiar to the truly extraordinary.",
      },
      {
        type: "p",
        text: "In Montmartre, the best fromageries still age some of their own cheeses — a practice called affinage — in caves beneath the shop. This means the cheese you buy was ripened in this building, not shipped in from a wholesaler. The difference in quality is not subtle.",
      },
      {
        type: "tip",
        label: "How to order at a fromagerie",
        text: "Tell the fromager how many people you're serving and whether you want to eat the cheese now or in two days. They will select accordingly. This is normal; they do it all day. Don't feel like you need to pretend to know what you want.",
      },
      {
        type: "h2",
        text: "Wine: Montmartre's Vineyards and Wine Bars",
      },
      {
        type: "p",
        text: "Montmartre is one of the only arrondissements of Paris that still has a working vineyard. The Clos Montmartre, maintained by the city since 1933, produces around 1,500 bottles per year — sold at auction, with proceeds going to the neighbourhood. The wine itself is more symbol than serious drinking, but the vineyard's existence tells you something about Montmartre's relationship with the vine.",
      },
      {
        type: "p",
        text: "The wine bars in Montmartre range from traditional cave à vins — bare stone walls, a chalkboard list, glasses poured directly from the barrel — to more contemporary natural wine bars run by younger sommeliers. Both have their place. The traditional caves tend to pour reliable classics at fair prices. The natural wine bars are worth seeking out if you want to drink something genuinely unexpected.",
      },
      {
        type: "h2",
        text: "Charcuterie: The Butchers",
      },
      {
        type: "p",
        text: "French charcuterie is a world that takes years to fully navigate. Pâtés, rillettes, saucissons, jambon, boudin noir, andouillette — each with regional variants, each requiring specific knowledge to buy and eat well. A Montmartre butcher who has been operating for decades will know exactly what he has, where it came from, and how to serve it. Ask questions: the answer will almost always be interesting.",
      },
      {
        type: "h2",
        text: "Chocolate: The Artisan Chocolatiers",
      },
      {
        type: "p",
        text: "Paris has some of the finest chocolatiers in the world, and Montmartre has its own. What separates an artisan chocolatier from a commercial one is the sourcing: a genuine chocolatier works with specific cacao origins — often single-estate beans from Ecuador, Madagascar, or Venezuela — and develops recipes that highlight the character of each origin. The result is a bar of chocolate that tastes of somewhere specific, rather than of 'chocolate in general'.",
      },
      {
        type: "h2",
        text: "The Seafood Culture",
      },
      {
        type: "p",
        text: "Landlocked Paris takes its seafood with a seriousness that surprises many visitors. The oyster stalls at Saturday markets, the poissonneries receiving daily deliveries from Brittany and Normandy, the restaurants serving plateaux de fruits de mer — all of this is part of a supply chain that has been functioning for centuries. Montmartre's fishmongers work with suppliers whose names they know, whose boats they can identify. The distance from the sea is an irrelevance when the logistics are this good.",
      },
      {
        type: "h2",
        text: "Eating in Montmartre: Practical Advice",
      },
      {
        type: "ul",
        items: [
          "Go in the morning: boulangeries are at their best from 7am to noon",
          "Avoid the tourist triangle around Sacré-Cœur for restaurants — walk two streets further",
          "Saturday is market day — the best time to see the neighbourhood's food culture in full operation",
          "Ask shop owners for recommendations: Montmartre producers know each other and will send you in the right direction",
          "Eat standing at the fromagerie counter if invited — it's how locals shop",
          "Bring cash: many of the best small producers are card-averse",
        ],
      },
      {
        type: "blockquote",
        text: "The most authentic version of Montmartre is not on the hill around Sacré-Cœur. It's in the streets below — the rue Lepic, the rue des Abbesses, the side streets where the locals actually live and eat. That's where the tour goes.",
      },
      {
        type: "cta",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const current = getBlogPost(slug);
  const others = blogPosts.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current?.category);
  const different = others.filter((p) => p.category !== current?.category);
  return [...sameCategory, ...different].slice(0, count);
}
