export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  /** Citable opening summary (GEO). */
  summary: string;
  datePublished: string;
  readingMinutes: number;
  /** Simple portable content model: h2 sections of paragraphs. */
  sections: { heading?: string; paragraphs: string[] }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "off-lead-dog-walks-windsor",
    title: "Where can I walk my dog off-lead in Windsor? 7 local favourites",
    metaDescription:
      "The best off-lead and long-line dog walks in and around Windsor — from the Great Park's woodland edges to Ockwells Park's fenced dog area — chosen by local dog walkers.",
    summary:
      "The best off-lead dog walking near Windsor is found at the woodland edges of Windsor Great Park (away from the deer, where leads are required), The Brocas at Eton, Swinley Forest near Ascot, and Ockwells Park in Maidenhead, which has a dedicated fenced dog area. This guide, written by The Daily Wag's local walkers, covers seven favourites and the lead rules for each.",
    datePublished: "2026-06-15",
    readingMinutes: 6,
    sections: [
      {
        paragraphs: [
          "Windsor is one of the best dog-walking towns in the south of England — but it's also a town of rules, deer herds and Crown Estate signage, and the difference between a brilliant off-lead walk and an awkward conversation with a park ranger is knowing exactly where the boundaries sit.",
          "We walk these routes every working day. Here are the seven we rate most for letting a dog properly stretch out, with the honest caveats for each.",
        ],
      },
      {
        heading: "1. Windsor Great Park — the woodland edges",
        paragraphs: [
          "The headline rule first: dogs must be on leads near the deer, and the deer park covers a large share of the open ground. But the woodland fringes toward Cranbourne Gate offer generous space where well-recalled dogs can run, with clear sight-lines and fewer picnickers to ambush.",
          "Go early. Before 9am you'll share the paths with riders and runners rather than crowds, and the light down the Long Walk is worth the alarm clock on its own.",
        ],
      },
      {
        heading: "2. The Brocas, Eton",
        paragraphs: [
          "Cross Windsor Bridge on foot and you're on the finest riverside meadow in the area — flat, open grass with the Castle filling the skyline. It's popular, so off-lead works best on weekday mornings; on hot afternoons the shallow Thames edge here is the local dogs' favourite paddling spot.",
        ],
      },
      {
        heading: "3. Swinley Forest, near Ascot",
        paragraphs: [
          "If your dog has real running in them, this is the one: thousands of acres of pine forest on sandy, fast-draining tracks. Long sight-lines make it one of the safer places locally for off-lead time, though from March to September some heath sections ask for leads to protect ground-nesting birds — follow the seasonal signs.",
        ],
      },
      {
        heading: "4. Ockwells Park, Maidenhead",
        paragraphs: [
          "The only spot on this list with a purpose-built answer to the recall question: a dedicated, enclosed dog exercise area. If your dog's recall is a work in progress, start here — full freedom, zero risk, and open meadows to graduate to on the same visit.",
        ],
      },
      {
        heading: "5. Upton Court Park, Slough",
        paragraphs: [
          "Over a hundred acres and reliably uncrowded, with the Jubilee River path along its edge. It's our pick for dogs who want space without stimulation — few other walkers, big flat grass, easy parking.",
        ],
      },
      {
        heading: "6. Black Park, Wexham",
        paragraphs: [
          "Technically over the Buckinghamshire border but ten minutes from Slough: five hundred acres of woodland around a lake, plus an enclosed dog activity area. Weekends get busy around the café and lake loop; head into the deeper pine sections for proper off-lead room.",
        ],
      },
      {
        heading: "7. The Long Walk — the honest exception",
        paragraphs: [
          "We're including Windsor's most famous walk to say: keep the lead on. Between the deer park, the road crossing and the crowds, the Long Walk is a magnificent on-lead walk rather than an off-lead one. Treat it as a sniff-rich promenade and nobody has a bad day.",
          "If you'd rather your dog got these walks on a weekday while you're at work, that's exactly what we do — GPS-tracked group walks from £15 across Windsor, Eton, Ascot, Maidenhead and Slough.",
        ],
      },
    ],
  },
  {
    slug: "dog-walker-cost-windsor",
    title: "How much does a dog walker cost in Windsor? (2026 price guide)",
    metaDescription:
      "Dog walking in Windsor costs £12–£25 per hour in 2026. See what's included at each price point, what group vs solo walks cost, and the questions to ask before hiring.",
    summary:
      "In 2026, a one-hour group dog walk in Windsor typically costs between £12 and £18, and a solo walk between £20 and £28. The Daily Wag charges £15 for group walks (maximum four dogs) and £22 for solo walks, both GPS-tracked with photo updates, with a free meet & greet before the first booking. This guide explains what drives the price differences.",
    datePublished: "2026-06-22",
    readingMinutes: 5,
    sections: [
      {
        paragraphs: [
          "Ask three Windsor dog owners what they pay their walker and you'll hear three different numbers — because 'dog walking' covers everything from a solo teenager with a lead to an insured professional running structured, tracked group walks. Here's how the local market actually breaks down, and how to compare quotes fairly.",
        ],
      },
      {
        heading: "Typical Windsor prices in 2026",
        paragraphs: [
          "Group walks (2–6 dogs, one hour) generally run £12–£18 locally. Solo one-hour walks run £20–£28. Twenty-minute puppy or comfort visits run £8–£14. Prices in Ascot and central Windsor sit toward the top of those ranges; Slough and Langley toward the bottom.",
          "For reference, The Daily Wag charges £15 for group walks, £22 for solo walks and £10 for puppy visits, the same rate across all five towns we cover.",
        ],
      },
      {
        heading: "What separates a £12 walk from an £18 one",
        paragraphs: [
          "The gap is rarely about the walking. It's about group size (four dogs handled well beats eight handled loosely), insurance and DBS checks, pet first aid training, GPS tracking and updates, and whether the hour means a full hour of walking or an hour including pick-ups.",
          "Ask any prospective walker: how many dogs share the walk, is the time door-to-door or on-the-ground, what does your insurance actually cover, and what happens if my dog is injured? A professional will enjoy answering. Hesitation on any of those four is your answer.",
        ],
      },
      {
        heading: "Solo vs group: which does your dog need?",
        paragraphs: [
          "Group walks suit sociable, reasonably confident dogs — the pack effect burns more energy than the miles alone. Solo walks earn their premium for puppies still building confidence, reactive or nervous dogs, seniors who set their own pace, and dogs recovering from injury.",
          "A good walker will tell you honestly which your dog needs, even when it's the cheaper option. That conversation is exactly what a free meet & greet is for — ours takes half an hour, costs nothing, and comes with no obligation to book.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
