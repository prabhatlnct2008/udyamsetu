export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  id: string;
  heading: string;
  intro?: string;
  items: FaqItem[];
}

export const FAQ_INTRO =
  'This FAQ page is for clinics, dentists, therapists, rehab centres, interior designers, realtors, coaching centres, consultants, salons, and boutique service businesses in South Delhi. It answers practical questions about websites, Google Maps ranking, local SEO, lead generation, AI automation, WhatsApp follow-up, reviews, and business growth.';

export const FAQ_INTRO_LOCATIONS =
  'Especially useful for businesses in and around Greater Kailash, Saket, Malviya Nagar, Hauz Khas, Green Park, Defence Colony, Lajpat Nagar, South Extension, CR Park, Nehru Place, Mehrauli, Panchsheel, and nearby South Delhi commercial areas.';

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'websites',
    heading: 'Websites',
    items: [
      {
        question:
          'Does my South Delhi business need a website if I already have Instagram or a Google Business Profile?',
        answer:
          'Yes. Instagram and Google Business Profile help people discover you, but your website helps them trust you, understand your services, and take action. A clinic can show doctors, treatments, fees, FAQs, and appointment options. A designer can show project galleries. A realtor can show area expertise. Your website should connect search, social media, WhatsApp, calls, and lead forms in one place.',
      },
      {
        question: 'What should a local business website include?',
        answer:
          'A strong local website should include your services, location, contact details, WhatsApp button, enquiry form, testimonials, photos, FAQs, and clear calls to action. Clinics should add doctor profiles and treatment pages. Interior designers should add portfolio pages. Realtors should add locality pages. Coaching centres should add batch details, subjects, fees guidance, demo-class options, and parent / student FAQs.',
      },
      {
        question:
          'Should I create separate pages for localities like GK, Saket, Malviya Nagar, or Defence Colony?',
        answer:
          'Yes, if you genuinely serve those areas. A page for "Dental Clinic in Greater Kailash" or "Interior Designer in Hauz Khas" can help Google and customers understand your service area. These pages should not be copy-paste. Each page should mention real services, nearby landmarks, customer needs, timings, photos, FAQs, and how people from that locality can contact you.',
      },
      {
        question: 'What is a landing page, and why do I need one?',
        answer:
          'A landing page is a focused webpage built for one goal, such as booking a consultation, requesting a quote, or calling your business. For example, a dermatologist could have a landing page for "laser hair removal in South Delhi". A realtor could have one for "builder floors in Defence Colony". Good landing pages reduce confusion and improve enquiry quality.',
      },
      {
        question: 'How can my website convert more visitors into leads?',
        answer:
          'Make the next step obvious. Use clear buttons like "Book Appointment", "Request Quote", "WhatsApp Us", or "Schedule Consultation". Put contact options near the top of the page. Add trust signals such as reviews, photos, years of experience, service details, and FAQs. Avoid long generic paragraphs that do not answer what customers actually worry about.',
      },
      {
        question: 'Should I show prices on my website?',
        answer:
          'Show price ranges, starting prices, or "depends on requirement" guidance if exact pricing is difficult. South Delhi customers often compare before calling. A clinic can mention consultation fees or treatment ranges. A designer can mention project-size ranges. A coaching centre can mention batch fee categories. Pricing clarity filters poor-fit leads and improves trust.',
      },
      {
        question:
          'What type of contact form works best for a local service business?',
        answer:
          'Use a short form. Ask only for name, phone number, service needed, locality, and preferred contact time. For high-value services like rehab, real estate, legal consulting, or interior design, add one qualifying question such as budget range, urgency, or type of help needed. Long forms reduce enquiries.',
      },
      {
        question: 'How often should I update my website?',
        answer:
          'Update important pages whenever your services, fees, timings, team, photos, offers, or location details change. For local SEO, add fresh content at least monthly, such as FAQs, case studies, project updates, patient education articles, market notes, or service-area pages. Stale websites make customers wonder whether the business is active.',
      },
    ],
  },
  {
    id: 'local-seo',
    heading: 'Local SEO and Google Business Profile',
    items: [
      {
        question: 'How do I appear on Google Maps for "near me" searches?',
        answer:
          'Start with a verified Google Business Profile. Add correct business name, address, phone number, hours, website, services, photos, and categories. Google says local results are mainly based on relevance, distance, and prominence, so your profile must clearly explain what you do, where you are, and why customers trust you.',
      },
      {
        question:
          'What is the most important part of Google Business Profile optimization?',
        answer:
          'Completeness and accuracy come first. Your category, services, phone number, hours, address, photos, and website link should be correct. Then focus on reviews, review replies, regular posts, service descriptions, appointment links, and photos. Google notes that complete and accurate information can help businesses appear for relevant local searches.',
      },
      {
        question: 'Should I target pin codes in my local SEO?',
        answer:
          'Yes, but carefully. Pin codes such as 110048 for Greater Kailash, 110017 for Saket / Malviya Nagar, 110024 for Defence Colony / Lajpat Nagar, and 110019 for CR Park / Nehru Place can help structure your service-area thinking. Do not stuff pin codes randomly. Use them when they match real service areas, customer questions, and location pages.',
      },
      {
        question: 'How do reviews affect local visibility?',
        answer:
          'Reviews help customers trust you and may support local prominence. For clinics, salons, realtors, therapists, coaching centres, and consultants, reviews often influence whether someone calls. Do not fake reviews. Ask real customers politely, make it easy with a review link or QR code, and reply professionally to both positive and negative reviews.',
      },
      {
        question:
          'How can I ask customers for Google reviews without sounding pushy?',
        answer:
          'Ask after a successful service moment. A clinic can ask after appointment completion. A coach can ask after a good result or demo class. A designer can ask after handover. Use a simple message: "Thank you for choosing us. If you found our service helpful, your Google review would help other customers find us."',
      },
      {
        question: 'Why is my competitor ranking higher even if my service is better?',
        answer:
          'Google cannot judge service quality the way a customer does. It uses signals such as business information, relevance, distance, reviews, links, website quality, photos, and overall prominence. Your competitor may have better local pages, more reviews, stronger profile activity, or clearer service categories.',
      },
      {
        question: 'What photos should I upload to my Google Business Profile?',
        answer:
          'Upload real, high-quality photos. Clinics should show reception, treatment rooms, doctors, equipment, and exterior signage. Designers should show completed projects. Coaching centres should show classrooms, faculty, and student activity. Realtors can show office, team, and locality expertise. Avoid only stock images; real photos build trust.',
      },
      {
        question: 'What should I track in local SEO?',
        answer:
          'Track Google Business Profile views, calls, website clicks, direction requests, appointment bookings, review growth, keyword visibility, and form submissions. Also track enquiry quality. A business getting 100 random leads is not automatically healthier than one getting 20 strong, relevant leads.',
      },
      {
        question: 'Can local SEO work without paid ads?',
        answer:
          'Yes, but it takes consistency. Google Business Profile, reviews, service pages, local landing pages, citations, and useful content can generate organic leads. Paid ads can help faster, especially for urgent or competitive services, but SEO builds longer-term visibility.',
      },
      {
        question: 'What is hyperlocal SEO for South Delhi?',
        answer:
          'Hyperlocal SEO means targeting specific neighbourhoods, not only "Delhi". For example, "psychologist in GK", "interior designer in Hauz Khas", "realtor in Defence Colony", or "coaching centre in Malviya Nagar". South Delhi customers often search by locality, market, metro station, mall, or nearby landmark.',
      },
    ],
  },
  {
    id: 'lead-generation',
    heading: 'Lead Generation and Conversion',
    items: [
      {
        question: 'What is a qualified lead?',
        answer:
          'A qualified lead is someone who matches your service, location, budget, urgency, and decision stage. For a clinic, that could mean a patient ready to book. For a designer, it could mean a homeowner with a clear project and budget. For a realtor, it could mean a buyer or seller focused on a specific locality.',
      },
      {
        question: 'Why am I getting enquiries but not conversions?',
        answer:
          'Common reasons include slow response, unclear pricing, weak trust signals, poor follow-up, no WhatsApp structure, vague service pages, or low-quality traffic. Many South Delhi businesses receive leads from directories, Instagram, Google, and referrals, but lose them because there is no proper lead capture and follow-up system.',
      },
      {
        question: 'How can WhatsApp improve lead follow-up?',
        answer:
          'WhatsApp can help you respond quickly, send service details, share location, confirm appointments, send reminders, and collect documents or requirements. Use saved templates, but personalize them. For clinics, designers, coaching centres, and consultants, WhatsApp is often where the real conversion happens.',
      },
      {
        question: 'Should I use SEO or paid ads first?',
        answer:
          'Use both depending on urgency. If you need leads this month, paid ads can help. If you want long-term visibility, SEO is essential. A practical approach is to fix your website and Google Business Profile first, then run focused ads to landing pages while building local SEO in parallel.',
      },
      {
        question: 'How can I get more patients or clients without discounting?',
        answer:
          'Improve trust and clarity instead of cutting price. Show reviews, photos, service details, expertise, FAQs, and outcomes. Explain your process. Make booking easy. For premium South Delhi businesses, positioning matters. Customers may pay more when they understand your value and feel confident.',
      },
      {
        question: 'What lead magnet works for local businesses?',
        answer:
          'A lead magnet should solve a small decision problem. A dentist can offer an implant consultation checklist. An interior designer can offer a renovation budget guide. A realtor can offer a South Delhi locality buying checklist. A coaching centre can offer a free demo class or exam-planning guide.',
      },
      {
        question: 'How can I avoid fake or low-quality leads?',
        answer:
          'Use better forms, landing pages, and qualifying questions. Ask for locality, service need, budget range, timeline, and preferred contact method. Use call tracking or CRM tagging to identify lead sources. Avoid campaigns that chase volume without checking whether leads actually convert.',
      },
      {
        question: 'What customer information should I collect from each enquiry?',
        answer:
          'Collect name, phone number, locality, service needed, urgency, source of enquiry, and next action. For high-value services, add budget, preferred date, and decision-maker status. Keep the process simple. Too much data at the first step can scare customers away.',
      },
      {
        question: 'How quickly should I respond to a lead?',
        answer:
          'As quickly as possible. For clinics, home services, realtors, salons, and coaching centres, a delay can send the customer to the next business in search results. Set up missed-call alerts, WhatsApp auto-acknowledgements, and follow-up reminders so no enquiry disappears.',
      },
    ],
  },
  {
    id: 'ai-automation',
    heading: 'AI and Automation',
    items: [
      {
        question: 'What is AI automation in simple words?',
        answer:
          'AI automation means using AI tools to handle repetitive or time-consuming work, such as replying to common questions, sorting leads, writing draft content, sending reminders, summarizing enquiries, or preparing reports. The goal is not to replace your business judgement. The goal is to save time and reduce missed opportunities.',
      },
      {
        question: 'What is agentic AI?',
        answer:
          'Agentic AI refers to AI systems that can follow goals, take multi-step actions, use tools, and complete workflows with less manual input. For a local business, this could mean an AI assistant that captures an enquiry, asks qualifying questions, sends information, books a slot, updates a sheet or CRM, and reminds your team.',
      },
      {
        question: 'Can AI answer website enquiries 24 / 7?',
        answer:
          'Yes, if it is set up properly. An AI chatbot can answer common questions about services, fees, timings, location, documents required, and appointment steps. For sensitive sectors like healthcare, mental health, legal, or rehab, AI should not give risky advice. It should guide users to a human expert when needed.',
      },
      {
        question: 'Can AI help with SEO content?',
        answer:
          'Yes. AI can help draft FAQs, service-page outlines, blog topics, Google Business Profile posts, meta descriptions, and local keyword ideas. Human review is still important. Content should reflect your real services, location, tone, and expertise. Generic AI content will not build much trust.',
      },
      {
        question: 'Can AI help with review replies and social media posts?',
        answer:
          'Yes. AI can draft polite review replies, Instagram captions, LinkedIn posts, Google posts, and short educational content. The best results come when AI uses your brand voice, actual services, and local context. Always review the final post before publishing.',
      },
      {
        question: 'What should not be automated?',
        answer:
          'Do not fully automate medical diagnosis, legal advice, sensitive mental-health responses, refund disputes, crisis situations, or final sales promises. AI should support your team, not make risky commitments. For high-trust businesses, automation should be clear, careful, and supervised.',
      },
      {
        question: 'How can a clinic use AI without sounding robotic?',
        answer:
          'Use AI for the first layer: appointment reminders, common FAQs, preparation instructions, review requests, and follow-up messages. Keep important conversations human. Write messages in a warm, simple tone. Avoid overusing technical language or pretending the AI is a doctor.',
      },
      {
        question: 'What is the first automation a South Delhi business should build?',
        answer:
          'Start with lead capture and follow-up. Every enquiry from website, WhatsApp, Google Business Profile, Instagram, and calls should go into one tracker. Then set reminders for follow-up. This simple system can improve conversions before adding advanced AI agents.',
      },
      {
        question: 'Is AI safe for customer or patient data?',
        answer:
          'AI can be useful, but data handling matters. Do not feed sensitive personal, medical, legal, or financial details into random tools. Use proper access control, consent, secure storage, and human review. For clinics, therapists, rehab centres, and lawyers, privacy should be treated as a core business requirement.',
      },
    ],
  },
  {
    id: 'industries',
    heading: 'Industry-Specific Business Questions',
    items: [
      {
        question:
          'What should a dental clinic in GK, Saket, or Malviya Nagar focus on first?',
        answer:
          'Focus on Google Business Profile, reviews, treatment pages, appointment booking, and emergency / local keywords. Create pages for major treatments such as implants, braces, root canal, cosmetic dentistry, and pediatric dentistry. Add real clinic photos, doctor profiles, timings, fees guidance, and clear WhatsApp or call buttons.',
      },
      {
        question: 'What should a mental health or rehab centre website include?',
        answer:
          'It should include confidentiality reassurance, services, therapist / doctor credentials, admission or appointment process, family FAQs, location, contact options, and emergency guidance where appropriate. Avoid sensational claims. Families often compare trust, privacy, safety, and approach before calling.',
      },
      {
        question: 'How can an aesthetic clinic or salon attract better leads?',
        answer:
          'Show real services clearly, explain who each treatment is for, add pricing guidance where possible, use before / after content carefully and ethically, collect reviews, and keep Instagram plus Google Business Profile active. For premium South Delhi customers, trust and hygiene matter as much as offers.',
      },
      {
        question:
          'How can a realtor in Defence Colony, GK, or Saket generate better leads?',
        answer:
          'Create locality-specific pages, not just generic property listings. Explain buyer / seller process, property types, budget ranges, documentation support, and area expertise. Use WhatsApp automation to ask whether the person is buying, selling, renting, investing, or browsing. This improves lead quality.',
      },
      {
        question:
          'How can an interior designer in Hauz Khas, Shahpur Jat, or South Extension use a website better?',
        answer:
          'Turn your portfolio into searchable project pages. Each project should include location type, style, scope, materials, timeline, and photos. Add enquiry forms that ask budget range, property type, and project timeline. Instagram brings attention, but your website should convert that attention into serious enquiries.',
      },
      {
        question:
          'What should a coaching centre in Malviya Nagar or Kalu Sarai do online?',
        answer:
          'Create pages for courses, exams, batches, faculty, results, demo classes, and fees guidance. Add WhatsApp enquiry, parent FAQs, student testimonials, and batch-start reminders. Local SEO should target exam + locality combinations, such as CUET coaching, JEE coaching, NEET coaching, or commerce tuition near Malviya Nagar.',
      },
      {
        question: 'What should a law firm or consultant website focus on?',
        answer:
          'Focus on credibility, clarity, and professional tone. Explain practice areas, consultation process, team background, location, and how to book a consultation. Avoid exaggerated promises. Use FAQs to explain common client concerns in simple language. Enquiry forms should protect confidentiality.',
      },
      {
        question: 'How can home-service businesses win urgent "near me" searches?',
        answer:
          'Keep Google Business Profile accurate, add service areas, collect reviews, upload real work photos, and create service pages for urgent needs like plumbing, electrical repair, pest control, AC repair, or cleaning. Make phone and WhatsApp buttons very visible. Speed matters more than long content.',
      },
      {
        question: 'How can Nehru Place B2B service providers stand out?',
        answer:
          'Show expertise, not just a service list. Add case studies, industries served, response time, support process, pricing models, and proof of work. For IT, website, consulting, or digital firms, AI-powered lead capture and proposal follow-up can help differentiate from low-cost competitors.',
      },
    ],
  },
  {
    id: 'trust-growth',
    heading: 'Trust, Growth, and Conversion',
    items: [
      {
        question: 'What trust signals should I add online?',
        answer:
          'Add reviews, testimonials, real photos, team profiles, qualifications, years of experience, awards if genuine, case studies, clear contact details, location proof, FAQs, and transparent process steps. For South Delhi premium businesses, trust often decides whether someone calls.',
      },
      {
        question: 'How do I know whether my marketing is working?',
        answer:
          'Track calls, WhatsApp enquiries, form submissions, appointment bookings, qualified leads, conversion rate, review growth, Google Business Profile actions, and revenue by source. Do not judge marketing only by website traffic. A small amount of high-quality traffic can be better than many poor leads.',
      },
      {
        question: 'What should I do in the first 30 days?',
        answer:
          'Fix your Google Business Profile, update your website contact flow, add top service pages, collect recent reviews, set up a lead tracker, create WhatsApp reply templates, and publish weekly Google / social updates. This gives you a practical foundation before advanced SEO or AI automation.',
      },
      {
        question: 'What common mistakes should South Delhi businesses avoid?',
        answer:
          'Avoid copy-paste websites, fake reviews, weak Google profiles, no follow-up system, overdependence on Instagram, unclear pricing, slow replies, and generic "best service in Delhi" claims. Local customers want proof, clarity, location relevance, and quick response.',
      },
      {
        question: 'How can Udyam Setu AI help my business?',
        answer:
          'Udyam Setu AI can help by improving your website, local SEO, Google Business Profile strategy, lead-generation funnels, WhatsApp workflows, AI assistants, automation systems, content planning, and conversion tracking. The best approach starts with your actual locality, customer type, enquiry pattern, and business bottleneck.',
      },
    ],
  },
];

export const getAllFaqItems = (): FaqItem[] =>
  FAQ_GROUPS.flatMap((g) => g.items);

function getFaqItem(groupId: string, index: number): FaqItem {
  const group = FAQ_GROUPS.find((g) => g.id === groupId);
  if (!group) throw new Error(`Unknown FAQ group: ${groupId}`);
  const item = group.items[index];
  if (!item) throw new Error(`Unknown FAQ item: ${groupId}[${index}]`);
  return item;
}

// Five questions chosen to span Lead Gen, Local SEO, AI, and Trust + Growth
// — used as the homepage FAQ teaser that links into /faqs for the full set.
export const FEATURED_FAQ_ITEMS: FaqItem[] = [
  getFaqItem('lead-generation', 0),  // What is a qualified lead?
  getFaqItem('local-seo', 0),        // How do I appear on Google Maps for "near me" searches?
  getFaqItem('lead-generation', 8),  // How quickly should I respond to a lead?
  getFaqItem('ai-automation', 0),    // What is AI automation in simple words?
  getFaqItem('trust-growth', 2),     // What should I do in the first 30 days?
];
