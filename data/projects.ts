export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  overview: string;
  image: string;
  videoId?: string;
  badge?: string;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "slack-ai-agent",
    title: "Slack AI Agent for Q&A and Actions",
    category: "AI Agents",
    shortDescription:
      "An AI agent that answers business questions and performs real actions in a connected spreadsheet.",
    overview:
      "This project demonstrates an agentic workflow inside Slack. Users can ask questions in natural language, retrieve relevant business information, and trigger structured actions without leaving the conversation.",
    image: "/projects/slack-agent.png",
    videoId: "cnqwSztGkGk",
    badge: "Working Demo",
    technologies: ["Python", "LangGraph", "Slack API", "LLM API", "Google Sheets API"],
    features: [
      "Natural-language question answering",
      "Tool and function calling",
      "Spreadsheet read and write actions",
      "Conversation context",
      "Structured action confirmation",
    ],
    problem:
      "Teams often switch between chat, spreadsheets, and internal tools to find information or complete repetitive updates.",
    solution:
      "A Slack-based AI agent connects conversation with data and actions, allowing users to retrieve information and perform approved spreadsheet tasks from one interface.",
  },
  {
    slug: "documind-rag-assistant",
    title: "DocuMind — Document Q&A Assistant",
    category: "RAG Chatbots",
    shortDescription:
      "Upload a document, ask questions, and receive grounded answers with page and source references.",
    overview:
      "DocuMind is a retrieval-augmented generation application for working with documents. It processes uploaded files, retrieves relevant chunks, and creates answers supported by the original source.",
    image: "/projects/documind.png",
    videoId: "ubsdu7px8ho",
    badge: "Live Project Demo",
    technologies: ["Python", "LangChain", "Streamlit", "Embeddings", "Vector Database"],
    features: [
      "Document upload and processing",
      "Semantic retrieval",
      "Source and page references",
      "Focused answers from uploaded content",
      "Simple chat workspace",
    ],
    problem:
      "Reading long documents and manually finding exact information is slow and difficult.",
    solution:
      "The assistant transforms document content into a searchable knowledge base and returns concise answers with references that help users verify the information.",
  },
  {
    slug: "website-content-chatbot",
    title: "Website Content AI Chatbot",
    category: "RAG Chatbots",
    shortDescription:
      "A website assistant that answers customer questions using approved website content and business knowledge.",
    overview:
      "This project turns website content into a focused knowledge source for an AI chatbot. The assistant provides relevant answers instead of generic model responses.",
    image: "/projects/website-chatbot.png",
    badge: "Add Your Screenshot",
    technologies: ["Python", "RAG", "LangChain", "Web Content", "Embeddings"],
    features: [
      "Website-content ingestion",
      "Relevant context retrieval",
      "Business-focused responses",
      "Fallback handling",
      "Embeddable chat interface concept",
    ],
    problem:
      "Visitors may leave a website when important information is spread across many pages or difficult to locate.",
    solution:
      "A RAG chatbot retrieves the most relevant website content and gives visitors clear answers while keeping responses grounded in approved information.",
  },
  {
    slug: "shopify-shopping-assistant",
    title: "Shopify AI Shopping Assistant",
    category: "Shopify AI",
    shortDescription:
      "A shopping-assistant concept that guides product discovery, answers policy questions, and supports a clear buying journey.",
    overview:
      "This independent UX and technical concept shows how a Shopify store can improve a basic chat experience with conversational product discovery, sequential questions, product cards, and clear shopping actions.",
    image: "/projects/shopify-assistant.png",
    badge: "Independent Concept",
    technologies: ["Shopify Storefront API", "FastAPI", "React", "RAG", "LLM Tools"],
    features: [
      "Guided product discovery",
      "Sequential preference collection",
      "Product recommendation cards",
      "Shipping and returns knowledge",
      "Cart and human-handoff workflow concept",
    ],
    problem:
      "Basic chat widgets can lose conversational context, repeat generic questions, and fail to guide shoppers toward relevant products.",
    solution:
      "A state-aware shopping assistant combines Shopify product data with structured dialogue and policy knowledge to create a clearer customer journey.",
  },
];
