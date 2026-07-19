const skills = [
  { label: "Python", className: "skillPython" },
  { label: "LangChain", className: "skillLangChain" },
  { label: "LangGraph", className: "skillLangGraph" },
  { label: "RAG", className: "skillRag" },
  { label: "APIs", className: "skillApi" },
  { label: "Shopify", className: "skillShopify" },
];

export function HeroSkillAnimation() {
  return (
    <div className="skillScene" aria-label="Animated AI skills workflow">
      <div className="sceneGlow sceneGlowOne" />
      <div className="sceneGlow sceneGlowTwo" />
      <div className="sceneGrid" />

      <div className="orbit orbitOne" />
      <div className="orbit orbitTwo" />

      <div className="aiCore">
        <span className="corePulse" />
        <span className="coreLabel">AI Agent</span>
        <strong>Think · Retrieve · Act</strong>
      </div>

      {skills.map((skill) => (
        <div key={skill.label} className={`skillNode ${skill.className}`}>
          <span className="skillDot" />
          {skill.label}
        </div>
      ))}

      <div className="miniPanel knowledgePanel">
        <span className="miniLabel">Knowledge</span>
        <div className="miniBars"><i /><i /><i /></div>
        <strong>Relevant context</strong>
      </div>

      <div className="miniPanel actionPanel">
        <span className="miniLabel">Workflow</span>
        <div className="flowSteps">
          <i>Ask</i><b>→</b><i>Retrieve</i><b>→</b><i>Act</i>
        </div>
      </div>
    </div>
  );
}
