/**
 * FAQ content written as direct, quotable question-and-answer pairs (AEO).
 * Each answer opens with the fact an answer engine would lift verbatim.
 */
export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "How much does a dog walker cost in Windsor?",
    answer:
      "The Daily Wag charges £15 for a one-hour group dog walk and £22 for a one-hour solo walk in Windsor, Eton, Ascot, Maidenhead and Slough. Puppy visits cost £10 for 20 minutes. There are no fuel surcharges or hidden extras within our coverage area, and your first meet & greet is free.",
  },
  {
    question: "What areas does The Daily Wag cover?",
    answer:
      "The Daily Wag covers Windsor, Eton, Ascot, Maidenhead and Slough, plus the villages between them including Eton Wick, Old Windsor, Sunninghill, Cookham, Bray and Langley. We are based in Windsor, so Windsor and Eton have the widest choice of time slots.",
  },
  {
    question: "How many dogs do you walk at once?",
    answer:
      "A maximum of four dogs per group walk, always matched by size, temperament and walking pace. Dogs are assessed at a free meet & greet before joining any group, and nervous or reactive dogs can book solo walks instead.",
  },
  {
    question: "How does the free meet & greet work?",
    answer:
      "We visit you and your dog at home, free of charge and with no obligation. It takes about 30 minutes: your dog gets comfortable with their walker, and we note their routine, diet, quirks and vet details before any walk is booked.",
  },
  {
    question: "Are your dog walkers insured and DBS checked?",
    answer:
      "Yes. Every Daily Wag walker is covered by professional pet care insurance, holds an enhanced DBS check, and is certified in pet first aid. Our insurance covers veterinary costs arising from any incident while your dog is in our care.",
  },
  {
    question: "How will I know how my dog's walk went?",
    answer:
      "Every walk is GPS-tracked and ends with a photo update sent to your phone, showing the route walked and how your dog got on. Solo walks also include a short written report covering toileting, behaviour and anything worth flagging.",
  },
  {
    question: "Do you walk dogs in bad weather?",
    answer:
      "Yes — we walk in rain and cold as standard, with a towel-down included. We only cancel or shorten walks in genuinely dangerous conditions such as storms, ice or extreme heat, and in a heatwave we shift walks to early morning and shaded woodland routes.",
  },
  {
    question: "How do you look after my house keys?",
    answer:
      "Keys are coded, never labelled with your name or address, and stored in a secure key safe between walks. Many clients prefer to fit a coded key safe at their door instead — we're happy with either, and keys are returned the day you cancel the service.",
  },
  {
    question: "What happens if my dog is injured on a walk?",
    answer:
      "You are contacted immediately. Every walker carries a canine first aid kit, is pet first aid certified, and knows the nearest emergency vet on every route we use. Our insurance covers veterinary treatment for incidents that happen in our care.",
  },
  {
    question: "Is mobile dog grooming better than a salon?",
    answer:
      "For most dogs, a mobile groom is calmer: The Daily Wag's van comes to your door, your dog is the only animal in it, and there are no cages, no strange dogs barking, and no car journey. It suits anxious dogs, puppies and seniors especially well.",
  },
  {
    question: "Can you visit my puppy while I'm at work?",
    answer:
      "Yes. Our £10 puppy visits are 20-minute home visits covering a toilet break, feeding and play — most young puppies have two or three visits spread across the working day. Visits step up into short walks as your puppy's vaccinations and stamina allow.",
  },
  {
    question: "Do you offer dog walking on Sundays?",
    answer:
      "Our standard hours are Monday to Saturday, 7am to 6pm. We keep Sundays clear for our own dogs, but existing clients can ask about occasional Sunday cover for special circumstances — we'll always say honestly whether we can do it well.",
  },
];

/** Trimmed set used on the home page teaser. */
export const HOME_FAQS = FAQS.slice(0, 4);
