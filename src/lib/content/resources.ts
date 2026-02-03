export interface ResourceSection {
  heading: string;
  paragraphs: string[];
}

export interface ResourcePost {
  slug: string;
  title: string;
  summary: string;
  readingTime: string;
  serviceSlug: string;
  takeaways: string[];
  action: string;
  downloadFile: string;
  downloadLabel: string;
  body: ResourceSection[];
}

export const resources: ResourcePost[] = [
  {
    slug: "ai-pilot-scorecard",
    title: "Scorecard: Is your AI pilot ready to launch?",
    summary:
      "A practical checklist to evaluate whether your team, data, and use case are ready for an AI pilot. Score yourself before you invest.",
    readingTime: "6 min",
    serviceSlug: "ai-jumpstart",
    takeaways: [
      "Identify the strongest AI use case for your business today",
      "Evaluate data readiness without hiring a data team",
      "Set success metrics before writing a single prompt",
      "Avoid the most common first-pilot mistakes"
    ],
    action: "Download the scorecard and rate your readiness before your next planning meeting.",
    downloadFile: "/downloads/ai-pilot-scorecard.pdf",
    downloadLabel: "Download AI Pilot Scorecard (PDF)",
    body: [
      {
        heading: "Why most AI pilots stall before they start",
        paragraphs: [
          "The excitement around AI is real, but excitement alone does not ship a working pilot. Most teams stall because they skip the readiness questions: Is the use case specific enough? Is the data accessible? Does someone own the outcome?",
          "A scorecard forces the conversation before money moves. It replaces gut feel with a structured evaluation that surfaces gaps early, when they are cheap to fix.",
          "This is not about gatekeeping AI adoption. It is about making sure the first project lands well so the next ten get funded."
        ]
      },
      {
        heading: "The five dimensions of pilot readiness",
        paragraphs: [
          "We evaluate readiness across five dimensions: use-case clarity, data availability, stakeholder alignment, technical feasibility, and success criteria. Each dimension gets a score from one to five.",
          "Use-case clarity asks whether you can describe the workflow the AI will improve in one sentence. If the answer is vague, the pilot scope will be vague too.",
          "Data availability checks whether the information the AI needs already exists in a digital, accessible format. PDFs in a shared drive count. Tribal knowledge in someone's head does not.",
          "Stakeholder alignment measures whether a decision maker has committed time, budget, and a definition of done. Pilots without executive sponsorship tend to drift.",
          "Technical feasibility looks at whether the AI capability you need is mature enough to deploy in weeks, not months. Chat and RAG are mature. Fully autonomous decision-making usually is not.",
          "Success criteria ask whether you have a number you will measure. Reduction in handle time, increase in first-contact resolution, hours saved per week. Without a metric, you cannot prove the pilot worked."
        ]
      },
      {
        heading: "How to score yourself",
        paragraphs: [
          "Rate each dimension from one to five. A one means you have not started thinking about it. A five means you have documented evidence or a working prototype.",
          "Add up your total. A score of twenty or above means you are ready to move. Fifteen to nineteen means you have one or two gaps to close first. Below fifteen, you need a discovery workshop before committing to a build.",
          "The scorecard is not pass-fail. It is a prioritization tool. If data availability scores a two but everything else is a four, you know exactly where to focus before kicking off."
        ]
      },
      {
        heading: "Common mistakes the scorecard prevents",
        paragraphs: [
          "Choosing a use case because it sounds impressive rather than because it solves a measurable problem. The scorecard forces specificity.",
          "Assuming data is ready because it exists somewhere. The scorecard distinguishes between data that exists and data that is accessible, clean, and structured enough to use.",
          "Launching without a success metric and then struggling to justify the next phase. The scorecard makes you commit to a number before you start.",
          "Skipping stakeholder alignment and discovering mid-pilot that the person who needs to approve the rollout was never briefed. The scorecard catches this early."
        ]
      },
      {
        heading: "What to do with your score",
        paragraphs: [
          "If you score twenty or above, you are ready to scope an AI Jumpstart engagement. Bring your scorecard to the kickoff—it accelerates discovery.",
          "If you score fifteen to nineteen, block one week to close the gaps. That usually means documenting the use case, pulling a data sample, or getting a stakeholder to commit.",
          "If you score below fifteen, consider a paid discovery workshop. We will help you identify the right use case, audit your data, and build the business case so the pilot has the best chance of landing."
        ]
      }
    ]
  },
  {
    slug: "automation-handbook",
    title: "Automation playbook for small teams",
    summary:
      "A step-by-step guide to identifying, prioritizing, and implementing automations that save real hours every week—without a dedicated ops team.",
    readingTime: "8 min",
    serviceSlug: "automation",
    takeaways: [
      "Audit your current workflows for automation potential",
      "Prioritize automations by effort, impact, and fragility",
      "Choose the right tools without overengineering",
      "Document automations so they survive team changes"
    ],
    action: "Download the planning worksheet and map your first three automations this week.",
    downloadFile: "/downloads/automation-planning-worksheet.pdf",
    downloadLabel: "Download Automation Planning Worksheet (PDF)",
    body: [
      {
        heading: "Automation is not about replacing people",
        paragraphs: [
          "The goal of automation for small teams is not to eliminate roles. It is to stop wasting skilled people on tasks a script can handle. Every hour your operations lead spends copying data between spreadsheets is an hour they are not spending on strategy.",
          "Small teams feel this more acutely than large ones. When you only have five people, one person spending three hours a week on manual reporting is six percent of your total capacity. Automate that, and you get a measurable lift without hiring.",
          "The playbook focuses on practical, maintainable automations. No code where possible, light code where necessary, and always documented so the next person can pick it up."
        ]
      },
      {
        heading: "Step one: audit your workflows",
        paragraphs: [
          "Before you automate anything, you need to know what you are doing manually. Spend one week tracking every repeated task across your team. Use a shared spreadsheet with columns for task name, frequency, time spent, tools involved, and who owns it.",
          "Look for patterns: tasks that happen on a schedule, tasks triggered by an event, tasks that involve moving data from one tool to another, and tasks that require a decision based on simple rules.",
          "Do not filter yet. Capture everything. The goal is a complete picture of where time goes. You will prioritize in the next step."
        ]
      },
      {
        heading: "Step two: prioritize by impact and effort",
        paragraphs: [
          "Plot each task on a two-by-two grid: impact on the vertical axis, effort to automate on the horizontal. High impact and low effort go first. These are your quick wins.",
          "Impact means hours saved per week multiplied by the cost of the person doing the work. A task that takes thirty minutes a week but is done by your highest-paid team member might rank higher than a two-hour task done by an intern.",
          "Effort means how complex the automation is to build and maintain. Moving a row from a form submission to a spreadsheet is low effort. Parsing unstructured emails and routing them to the right person is high effort.",
          "Start with three automations. No more. Ship them, stabilize them, then pick the next three."
        ]
      },
      {
        heading: "Step three: choose the right tools",
        paragraphs: [
          "For most small teams, the right stack is a combination of Zapier or Make for integrations, Airtable or Notion for structured data, and a simple dashboard tool like Google Sheets or Retool for visibility.",
          "Do not over-engineer. If a Zapier workflow solves the problem, do not build a custom API. Save custom code for cases where the no-code tool genuinely cannot handle the logic or volume.",
          "Consider maintenance cost. A Zapier workflow that anyone on the team can edit is worth more than a custom script that only one developer understands. The best automation is one that survives the person who built it leaving."
        ]
      },
      {
        heading: "Step four: document everything",
        paragraphs: [
          "Every automation gets a one-page SOP: what it does, what triggers it, what it touches, how to tell if it is broken, and how to fix it. Store these in a shared location your whole team can access.",
          "Record a short screen capture walking through the automation. Tools change their interfaces, and a video catches details that written docs miss.",
          "Add a changelog. Every time someone modifies the automation, they add a dated entry describing what changed and why. This is the single most important practice for long-term maintainability."
        ]
      },
      {
        heading: "Step five: measure and iterate",
        paragraphs: [
          "Track hours saved per week per automation. This is your ROI metric. If an automation saves two hours a week and took four hours to build, it pays for itself in two weeks.",
          "Review your automation inventory monthly. Some automations will break as tools update. Some will become irrelevant as processes change. Prune what is not working and reinvest in what is.",
          "Once you have stabilized your first three automations, go back to your audit and pick the next three. The process compounds—each round gets faster because your team builds muscle memory for identifying and shipping automations."
        ]
      }
    ]
  },
  {
    slug: "mvp-discovery-interview-guide",
    title: "MVP discovery interview guide",
    summary:
      "A structured interview framework to validate your product idea with real users before writing code. Twelve questions that surface what matters.",
    readingTime: "7 min",
    serviceSlug: "mvp",
    takeaways: [
      "Structure discovery interviews that produce actionable insights",
      "Avoid leading questions that confirm your bias",
      "Identify must-have features versus nice-to-haves",
      "Synthesize findings into a clear build priority list"
    ],
    action: "Download the interview script and schedule your first five conversations this week.",
    downloadFile: "/downloads/mvp-interview-script.pdf",
    downloadLabel: "Download MVP Interview Script (PDF)",
    body: [
      {
        heading: "Why discovery interviews matter more than surveys",
        paragraphs: [
          "Surveys tell you what people say they want. Interviews show you what they actually struggle with. The difference matters when you are deciding what to build first.",
          "A ten-question survey might get two hundred responses and a false sense of confidence. Five well-run interviews will surface the unexpected constraints, workarounds, and emotional triggers that drive real adoption.",
          "Discovery interviews are not about validating your idea. They are about understanding the problem deeply enough to build something people switch to. If you go in trying to confirm your hypothesis, you will miss the signal."
        ]
      },
      {
        heading: "Who to interview and how many",
        paragraphs: [
          "Interview people who experience the problem today and are actively trying to solve it. Not people who might have the problem someday. Not your friends who will be polite.",
          "Five to eight interviews is the sweet spot for an MVP. You will start hearing repeated patterns by interview four or five. If you are still hearing completely new information after eight, your target audience might be too broad.",
          "Recruit from communities where your target users already gather. LinkedIn groups, Slack communities, Reddit threads, customer support tickets. Offer a small gift card if needed, but most people will talk for free if the topic is relevant to their daily work."
        ]
      },
      {
        heading: "The twelve questions",
        paragraphs: [
          "These questions are ordered to build context before specifics. Start broad and narrow as the conversation progresses.",
          "One: Tell me about your role and what a typical week looks like. Two: What is the most frustrating part of that workflow? Three: How are you solving that problem today? Four: What have you tried that did not work?",
          "Five: How much time do you spend on this problem each week? Six: What would a perfect solution look like? Seven: What would it need to do on day one to be useful? Eight: What could you live without for the first version?",
          "Nine: Who else is involved in this workflow? Ten: How do you currently measure success? Eleven: What would make you switch from your current solution? Twelve: Is there anything I should have asked but did not?",
          "Question twelve is the most important. It gives the interviewee permission to share what is really on their mind, and it often surfaces the insight you did not know to look for."
        ]
      },
      {
        heading: "How to run the interview",
        paragraphs: [
          "Keep it to thirty minutes. Respect people's time and you will get better signal. Rushed answers in a twenty-minute interview are more honest than polished answers in a sixty-minute one.",
          "Record the conversation with permission. You will not remember the exact phrasing, and exact phrasing matters. The way someone describes their frustration reveals priority better than any feature request.",
          "Do not pitch your solution during the interview. The moment you start explaining what you are building, the interviewee shifts from describing their problem to evaluating your idea. Keep those conversations separate."
        ]
      },
      {
        heading: "Synthesizing what you heard",
        paragraphs: [
          "After all interviews, create a grid with rows for each interviewee and columns for each question. Look for patterns across rows, not insights within a single interview.",
          "Highlight phrases that appeared in three or more interviews. These are your strongest signals. A feature that one person asked for is a request. A problem that five people described independently is a market.",
          "Rank features by how many interviewees described the underlying problem, not by how many requested the feature. People are bad at predicting what they will use. They are good at describing what frustrates them.",
          "The output of this synthesis is a prioritized list of problems to solve, not features to build. Features come from your expertise as a builder. Problems come from your users."
        ]
      }
    ]
  },
  {
    slug: "commerce-ai-patterns",
    title: "AI-driven merchandising patterns for commerce",
    summary:
      "Practical patterns for using AI to improve product discovery, personalization, and merchandising in commerce—without a data science team.",
    readingTime: "7 min",
    serviceSlug: "commerce",
    takeaways: [
      "Implement AI-assisted product recommendations without a data science team",
      "Use semantic search to improve product discovery",
      "Automate merchandising rules based on real-time signals",
      "Measure the revenue impact of AI-driven changes"
    ],
    action: "Download the checklist and identify which pattern fits your store this quarter.",
    downloadFile: "/downloads/commerce-ai-checklist.pdf",
    downloadLabel: "Download Commerce AI Checklist (PDF)",
    body: [
      {
        heading: "AI in commerce is not just recommendations",
        paragraphs: [
          "When most people think of AI in commerce, they think of product recommendations. Those matter, but they are one pattern among many. The real opportunity is using AI to make your entire merchandising operation smarter.",
          "This includes semantic search that understands intent, dynamic pricing signals, automated collection management, and intelligent inventory allocation. Each pattern can be implemented incrementally, and most do not require a data science team.",
          "The key is starting with the pattern that addresses your biggest revenue leak. For most stores, that is search and discovery. If customers cannot find what they want, no amount of recommendation tuning will help."
        ]
      },
      {
        heading: "Pattern one: semantic search",
        paragraphs: [
          "Traditional site search matches keywords. Semantic search matches intent. A customer searching for 'summer dress for wedding' should see cocktail dresses and formal sundresses, not every product tagged 'summer' or 'dress.'",
          "Implementing semantic search does not require building a model from scratch. Services like Algolia, Typesense, and OpenAI embeddings can be layered onto your existing catalog with minimal engineering.",
          "The impact is measurable: track search-to-purchase conversion rate before and after. Most stores see a fifteen to thirty percent improvement in search conversion when they move from keyword to semantic search."
        ]
      },
      {
        heading: "Pattern two: intelligent product recommendations",
        paragraphs: [
          "Recommendations work best when they combine collaborative filtering (customers who bought X also bought Y) with contextual signals (time of day, cart contents, browsing history, location).",
          "Start simple. A 'frequently bought together' module on the product page and a 'you might also like' section in the cart are the two highest-impact placements. Get those working before adding complexity.",
          "Measure revenue per session with and without recommendations. A/B test placement, timing, and the algorithm itself. The goal is incremental revenue, not algorithmic sophistication."
        ]
      },
      {
        heading: "Pattern three: automated collection management",
        paragraphs: [
          "Manually curating product collections does not scale. AI can manage collections dynamically based on rules: add products that are trending, remove products that are out of stock, reorder by conversion rate.",
          "This pattern works especially well for stores with large catalogs. A store with five hundred products can curate manually. A store with five thousand cannot maintain that quality at scale without automation.",
          "Implement this by connecting your analytics data to your collection rules. When a product's conversion rate drops below a threshold, move it down. When a product starts trending on social, boost it. The rules are simple; the execution is automated."
        ]
      },
      {
        heading: "Pattern four: AI-assisted merchandising copy",
        paragraphs: [
          "Product descriptions, meta titles, and collection copy can be generated or improved with AI. This is not about replacing your brand voice—it is about scaling it.",
          "Use AI to generate first drafts of product descriptions based on structured attributes (material, use case, sizing). Have a human review and approve. The result is consistent copy across your entire catalog at a fraction of the time.",
          "Test AI-generated copy against your existing copy using A/B tests on product pages. Measure time on page, add-to-cart rate, and conversion rate. Let the data decide which version performs better."
        ]
      },
      {
        heading: "Measuring revenue impact",
        paragraphs: [
          "Every pattern should be tied to a revenue metric. Semantic search measures search conversion rate. Recommendations measure revenue per session. Collections measure sell-through rate. Copy measures product page conversion rate.",
          "Run each pattern as an A/B test for at least two weeks before making it permanent. Commerce traffic has weekly seasonality, and you need at least one full cycle to get reliable data.",
          "Stack patterns incrementally. Implement one, measure it, stabilize it, then add the next. Trying to launch all four at once makes it impossible to attribute results and harder to debug issues."
        ]
      }
    ]
  },
  {
    slug: "estimator-metrics",
    title: "Metrics to track after you launch the estimator",
    summary:
      "A guide to the key metrics that tell you whether your project estimator is driving qualified leads, setting accurate expectations, and improving over time.",
    readingTime: "5 min",
    serviceSlug: "mvp",
    takeaways: [
      "Track estimator completion rate to measure engagement",
      "Compare estimates to actuals to calibrate accuracy",
      "Use estimator data to qualify leads before the first call",
      "Iterate on pricing inputs based on real conversion data"
    ],
    action: "Download the tracking plan and wire up analytics before your next sprint.",
    downloadFile: "/downloads/estimator-tracking-plan.pdf",
    downloadLabel: "Download Estimator Tracking Plan (PDF)",
    body: [
      {
        heading: "Why estimator analytics matter",
        paragraphs: [
          "An estimator is not just a lead generation tool. It is a data source that tells you how prospects think about their projects—what they value, what they expect to pay, and where they drop off.",
          "Without analytics, your estimator is a black box. You know someone used it, but you do not know whether the estimate felt accurate, whether it motivated them to book a call, or whether it scared them away.",
          "The right metrics turn your estimator into a feedback loop: prospects use it, you measure behavior, you adjust inputs and pricing, and the next cohort gets a more accurate and more persuasive experience."
        ]
      },
      {
        heading: "Metric one: completion rate",
        paragraphs: [
          "Completion rate is the percentage of people who start the estimator and finish it. This is your top-of-funnel metric. If people are not completing the estimator, nothing else matters.",
          "A healthy completion rate for a multi-step estimator is sixty to eighty percent. Below sixty percent, look for friction: too many steps, confusing language, or a step that feels too personal too early.",
          "Track drop-off by step. If most people drop off at the same step, that step needs work. Common culprits are budget questions asked too early and jargon-heavy option labels."
        ]
      },
      {
        heading: "Metric two: estimate-to-booking rate",
        paragraphs: [
          "This is the percentage of people who complete the estimator and then book a call. It measures whether the estimate motivated action.",
          "A low estimate-to-booking rate can mean the estimate felt too high, too vague, or the call-to-action was not compelling enough. Test different CTA copy, add social proof near the booking button, or adjust the estimate range to feel more approachable.",
          "Segment this metric by project type and estimate range. You may find that automation estimates convert well but MVP estimates do not. That tells you the MVP pricing or scope framing needs adjustment."
        ]
      },
      {
        heading: "Metric three: estimate accuracy",
        paragraphs: [
          "Compare the estimate the tool generated to the actual project price after the engagement closes. This is your calibration metric.",
          "If estimates are consistently lower than actuals, you are setting expectations that lead to sticker shock on the first call. If estimates are consistently higher, you may be scaring away qualified prospects.",
          "Track accuracy as a ratio: actual price divided by estimated midpoint. A ratio between 0.85 and 1.15 is healthy. Outside that range, adjust your base prices or multipliers."
        ]
      },
      {
        heading: "Metric four: lead quality score",
        paragraphs: [
          "Use estimator inputs to score lead quality before the first call. A prospect who selected 'high complexity' and 'fast timeline' with three add-ons is a different conversation than someone who selected 'low complexity' and 'standard timeline' with no add-ons.",
          "Build a simple scoring model: assign points for project type, complexity, size, speed, and number of add-ons. Higher scores indicate higher-value prospects who likely need more support.",
          "Share the score with your sales or account team so they can prioritize follow-up and tailor the conversation. A qualified lead who gets a fast, relevant response is far more likely to convert."
        ]
      },
      {
        heading: "Iterating on the estimator",
        paragraphs: [
          "Review estimator metrics monthly. Look for patterns: which project types are most popular, which add-ons are selected most often, and where the biggest accuracy gaps are.",
          "Use this data to adjust base prices, multipliers, and option labels. If nobody selects 'high complexity,' the label might be intimidating. If everyone selects 'fast timeline,' your standard timeline might feel too slow.",
          "The estimator is a living tool. Treat it like a product feature with its own backlog, not a set-it-and-forget-it widget. The teams that iterate on their estimator quarterly see measurably better lead quality over time."
        ]
      }
    ]
  }
];

export function getResourceBySlug(slug: string): ResourcePost | undefined {
  return resources.find((r) => r.slug === slug);
}
