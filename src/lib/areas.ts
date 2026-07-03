export type Area = {
  slug: string;
  town: string;
  county: string;
  /** Concise, citable summary — first paragraph of the page (GEO). */
  summary: string;
  /** Editorial intro, unique per town. */
  intro: string[];
  /** Named walking spots with genuinely local detail. */
  walks: { name: string; note: string }[];
  /** Local practicalities we actually handle differently per town. */
  localNotes: { heading: string; body: string }[];
  geo: { lat: number; lng: number };
  metaDescription: string;
};

export const AREAS: Area[] = [
  {
    slug: "windsor",
    town: "Windsor",
    county: "Berkshire",
    summary:
      "The Daily Wag provides dog walking, mobile dog grooming and puppy visits throughout Windsor, Berkshire — including Dedworth, Clewer, Spital and the town centre. Group walks cost £15, solo walks £22, and every walk is GPS-tracked with photo updates. Windsor is our home base, so morning slots here are the first to open and the first to fill.",
    intro: [
      "Windsor is where The Daily Wag started, and it is still where most of our walking day happens. We know which stretch of the Long Walk floods after a wet week, which gates into Home Park stick, and exactly where the ice cream queue blocks the pavement on a summer Saturday.",
      "Our Windsor rounds run from Dedworth and Clewer in the west across to Spital and the town centre, so we can usually collect your dog within a short window of the time you ask for — no vague two-hour slots.",
    ],
    walks: [
      {
        name: "The Long Walk",
        note: "The classic. Two and a half miles of tree-lined avenue from the Castle to the Copper Horse. Dogs stay on lead near the deer park at the top — we treat it as a steady, sniff-heavy road walk with unbeatable views.",
      },
      {
        name: "Windsor Great Park",
        note: "Our favourite for group walks. We keep to the woodland edges away from the deer, where the Crown Estate asks for leads, and let recall-solid dogs stretch out in the open grass nearer Cranbourne.",
      },
      {
        name: "Alexandra Gardens & the riverside",
        note: "Short-legged and senior dogs love this flat loop along the Thames past Baths Island. Shaded in summer, and the swans keep every dog fascinated from a respectful distance.",
      },
      {
        name: "Clewer & Dedworth green spaces",
        note: "For quick solo walks and puppy outings we use the quieter recreation grounds west of the town centre — familiar, low-stimulation routes that nervous dogs settle into fast.",
      },
    ],
    localNotes: [
      {
        heading: "Deer, horses and the Crown Estate",
        body: "Large parts of Windsor's best walking land carry lead rules to protect the deer herd, and horses use the Great Park daily. Our walkers know the boundaries precisely and plan off-lead time only where it is genuinely permitted and safe.",
      },
      {
        heading: "Event days",
        body: "Royal events, the half marathon and the Christmas market change Windsor's traffic completely. On event days we shift collections earlier and swap town-centre routes for Clewer and the Great Park perimeter, and we tell you the plan in advance.",
      },
    ],
    geo: { lat: 51.4817, lng: -0.6045 },
    metaDescription:
      "Dog walking in Windsor from £15. GPS-tracked group and solo walks on the Long Walk, Windsor Great Park and riverside routes. Fully insured, DBS-checked local walkers.",
  },
  {
    slug: "eton",
    town: "Eton",
    county: "Berkshire",
    summary:
      "The Daily Wag walks dogs across Eton and Eton Wick every weekday, with group walks at £15 and solo walks at £22. We are based minutes away over Windsor Bridge, so Eton collections fit easily into morning and lunchtime rounds. Favourite routes include The Brocas, the Jubilee River path and Dorney Common.",
    intro: [
      "Eton looks like a one-street town from the tourist trail, but dog owners know better: it is ringed by some of the best flat, open walking in Berkshire. From The Brocas you get the finest view of Windsor Castle anywhere — and your dog gets acres of riverside meadow.",
      "Because we cross Windsor Bridge on foot several times a day, Eton and Eton Wick homes slot neatly into our rounds. No van idling outside — often your dog's walk starts the moment we clip the lead on at your door.",
    ],
    walks: [
      {
        name: "The Brocas",
        note: "The riverside meadow opposite Windsor. Wide, flat and sociable — perfect for group walks, with the Thames to paddle in on hot days and the Castle as a backdrop for your photo updates.",
      },
      {
        name: "Jubilee River path",
        note: "A surfaced, pram-flat path along the flood channel between Eton Wick and Dorney. Brilliant for older dogs and rainy weeks when the meadows turn to mud.",
      },
      {
        name: "Dorney Common",
        note: "Big skies and grazing cattle — which is exactly why we keep dogs on long lines here. Great enrichment for dogs who need space without off-lead chaos.",
      },
      {
        name: "South Meadow Lane loop",
        note: "Our quiet weekday circuit behind Eton College's playing fields. Low footfall, good verges, ideal for reactive dogs who need distance from other walkers.",
      },
    ],
    localNotes: [
      {
        heading: "Livestock on the commons",
        body: "Dorney Common and parts of Eton Wick are lammas land with free-roaming cattle. Our walkers use long lines there as standard and carry treats for calm cattle pass-bys — it becomes brilliant training, not a hazard.",
      },
      {
        heading: "Term-time rhythms",
        body: "Eton's foot traffic swings with the College calendar. During big fixtures and the Fourth of June we route walks away from the High Street entirely, using the Eton Wick side to keep things calm.",
      },
    ],
    geo: { lat: 51.4879, lng: -0.6089 },
    metaDescription:
      "Dog walking in Eton and Eton Wick from £15. Local walkers on The Brocas, Jubilee River and Dorney Common. GPS-tracked, insured, small groups of four dogs max.",
  },
  {
    slug: "ascot",
    town: "Ascot",
    county: "Berkshire",
    summary:
      "The Daily Wag offers dog walking, mobile grooming and puppy visits in Ascot, Sunninghill and Cheapside, with group walks at £15 and solo walks at £22. Ascot's woodland — Swinley Forest and Englemere Pond — makes it our best area for long, shaded off-lead walks, and our mobile grooming van covers Ascot on set weekdays.",
    intro: [
      "Ascot dogs are spoiled, and not just at home. Between Swinley Forest's miles of pine trails and the heath, this is the best woodland walking in our whole coverage area — soft going underfoot, shade in August, and enough squirrels to keep any terrier ambitious.",
      "We built our Ascot round around the woodland rather than the town: collections in Ascot, South Ascot, Sunninghill and Cheapside feed into forest group walks that dogs genuinely drag their owners toward when they see us coming.",
    ],
    walks: [
      {
        name: "Swinley Forest",
        note: "Thousands of acres of Crown Estate pine forest with sandy tracks that drain fast in winter. Our first choice for energetic group walks — long sight-lines make off-lead time safer for dogs with reliable recall.",
      },
      {
        name: "Englemere Pond nature reserve",
        note: "A quieter boardwalk-and-heath loop we save for solo walks and older dogs. Rich sniffing, soft paths, rarely crowded midweek.",
      },
      {
        name: "Ascot Heath",
        note: "The green heart of the racecourse, open to walkers on non-race days. A huge, flat, fenced-feeling space that suits young dogs building their recall.",
      },
      {
        name: "Cheapside & Sunninghill lanes",
        note: "For puppy visits and short solo outings we use the quiet lanes and recreation grounds — low traffic, big verges, gentle introductions to the outside world.",
      },
    ],
    localNotes: [
      {
        heading: "Race weeks",
        body: "Royal Ascot week transforms the town — road closures, helicopters, crowds. We plan that week in advance every year: earlier collections, forest-only routes, and no Heath walks until the last marquee comes down.",
      },
      {
        heading: "Ground-nesting birds",
        body: "Parts of Swinley and the surrounding heath ask for on-lead walking from March to September to protect ground-nesting birds. We follow the seasonal signage precisely and shift off-lead time to the open forestry tracks.",
      },
    ],
    geo: { lat: 51.4084, lng: -0.6707 },
    metaDescription:
      "Dog walking in Ascot, Sunninghill and Cheapside from £15. Swinley Forest group walks, Englemere Pond solo walks, mobile grooming on set weekdays. Insured and DBS-checked.",
  },
  {
    slug: "maidenhead",
    town: "Maidenhead",
    county: "Berkshire",
    summary:
      "The Daily Wag covers Maidenhead, Cookham and Bray with dog walking from £15, puppy visits at £10 and mobile grooming by appointment. Local favourites include Ockwells Park's dedicated dog area, Battlemead Common and the Thames Path at Boulter's Lock. Maidenhead slots are typically mid-morning and early afternoon.",
    intro: [
      "Maidenhead quietly has some of the best dog infrastructure in Berkshire — Ockwells Park even has a dedicated dog exercise area, which tells you everything about how seriously this town takes its spaniels.",
      "Our Maidenhead round runs mid-morning to early afternoon, linking Ockwells, Braywick and the river. If you're commuting from Maidenhead station, we can time the walk so your dog has just settled back down when you're on the train home.",
    ],
    walks: [
      {
        name: "Ockwells Park",
        note: "The reliable favourite: open meadows, woodland fringe and a dedicated fenced dog area — our go-to for young dogs still perfecting recall, and for wet days when we want grass rather than mud.",
      },
      {
        name: "Battlemead Common",
        note: "Wilder and wetter, with wide skies over the wet meadow. We follow the seasonal path rules that protect wintering birds, and dogs love the variety of scent lines here.",
      },
      {
        name: "Thames Path at Boulter's Lock",
        note: "A classic flat river walk toward Cookham with constant boat traffic to watch. Ideal for steady solo walks and dogs who find open fields overwhelming.",
      },
      {
        name: "Braywick Park",
        note: "Close to town for efficient lunchtime walks — parkland, a nature reserve pocket, and enough space for a proper hour without a car journey.",
      },
    ],
    localNotes: [
      {
        heading: "Water dogs welcome",
        body: "Between the Thames, the Jubilee River and Battlemead's wetland, Maidenhead is swimming-dog country. Tell us if your dog is a paddler — we carry towels, and we know the safe, shallow entry points away from boat channels and weirs.",
      },
      {
        heading: "Seasonal path closures",
        body: "Battlemead Common closes some paths seasonally to protect wildlife, and the National Trust land at Cookham has its own rules. We track the current signage so your dog's walk never cuts a corner on local conservation.",
      },
    ],
    geo: { lat: 51.5217, lng: -0.7177 },
    metaDescription:
      "Dog walking in Maidenhead, Cookham and Bray from £15. Ockwells Park, Battlemead Common and Thames Path walks — GPS-tracked, insured, maximum four dogs per group.",
  },
  {
    slug: "slough",
    town: "Slough",
    county: "Berkshire",
    summary:
      "The Daily Wag provides dog walking from £15, puppy visits at £10 and mobile grooming across Slough, Langley and Upton. Regular routes include Upton Court Park, Herschel Park, Langley Park and Black Park just over the border. Slough is our best-value area for midday group walks, with flexible slots for shift workers.",
    intro: [
      "Slough gets underestimated as dog country, which suits us fine: Upton Court Park's 100-plus acres are rarely crowded, Herschel Park's restored Victorian landscape is a genuinely lovely hour, and Langley Park and Black Park sit right on the doorstep.",
      "A lot of our Slough clients work shifts around the trading estate and Heathrow, so we run more flexible collection windows here than anywhere else — early starts, midday walks and split visits are all normal for us, not special requests.",
    ],
    walks: [
      {
        name: "Upton Court Park",
        note: "Big, open and reliably quiet — over a hundred acres beside the Jubilee River path. Our standard Slough group walk, with space for every dog to find its own pace.",
      },
      {
        name: "Herschel Park",
        note: "A restored Victorian park with a nature reserve alongside. We use it for solo walks and older dogs — shaded paths, plenty of benches for a mid-walk breather, all close to the town centre.",
      },
      {
        name: "Langley Park",
        note: "Formal avenues, ancient trees and seasonal colour ten minutes east. A favourite for camera-friendly walks — expect good photo updates when we're here.",
      },
      {
        name: "Black Park",
        note: "Just over the Buckinghamshire border but too good to skip: five hundred acres of pine and lake, with an enclosed dog activity area. We book it in for dogs who need a full adventure day.",
      },
    ],
    localNotes: [
      {
        heading: "Built for shift patterns",
        body: "Slough works around the clock and so do its dogs' owners. We hold early-morning and midday slots specifically for Slough postcodes, and we'll happily fix a standing walk that matches a rotating shift pattern.",
      },
      {
        heading: "Summer heat plan",
        body: "Slough's parks are more open than Ascot's forest, so in a heatwave we move Slough walks to early morning, choose the shaded halves of Herschel and Langley Park, and switch some walks to Black Park's woodland cover. Pavement checks come as standard.",
      },
    ],
    geo: { lat: 51.5105, lng: -0.595 },
    metaDescription:
      "Dog walking in Slough, Langley and Upton from £15. Upton Court Park, Herschel Park and Black Park routes, flexible slots for shift workers. Insured, DBS-checked walkers.",
  },
];

export function getArea(slug: string): Area | undefined {
  return AREAS.find((a) => a.slug === slug);
}
