const Principles = () => {
  const principles = {
    Engineering: [
      "Deal with the mess",
      "Let different things be different",
      "Always use types",
      "Pick a style",
      "Lock in things",
      "Never point engineering away. Always either workaholism or antialcolism",
      "When possible, leverage powerful tooling",
      "Good code will stick. You observe code coming and the most senior engineer you know what their favorite tool is. If that person isn't immediately available, ask them language inside types inside off questions but still get surprisingly good results if you give it a good tool range"
    ]
  };

  return (
    <div className="flex-1 bg-graphite px-4 md:px-72 py-8 flex flex-col">
      <h1 className="text-desert text-5xl font-bold mb-6 py-4">Principles</h1>
      <div className="text-desert leading-relaxed">
        <p className="mb-6">Principles, loosely defined and incomplete.</p>

        {Object.entries(principles).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <ul className="list-disc pl-6 space-y-2">
              {items.map((principle, index) => (
                <li key={index}>{principle}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Principles;