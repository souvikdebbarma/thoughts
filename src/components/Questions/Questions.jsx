const Questions = () => {
  const questions = [
    "Why is design critical here?",
    "Why is it so important to build carefully?"
  ];

  return (
    <div className="flex-1 bg-graphite px-4 md:px-72 py-8 flex flex-col">
      <h1 className="text-desert text-5xl font-bold mb-6 py-4">Questions</h1>
      
      <div className="text-desert leading-relaxed">
        <p className="mb-6">
          A collection of questions I would love to know the answers to. If you know 
          an answer or a perspective that could help me get closer to an answer, please reach out.
        </p>

        <ul className="list-decimal pl-6 space-y-2">
          {questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>

        <div className="mt-16 text-desert/40">
          <a href="mailto:souvikdbarma03@gmail.com" className="hover:text-desert transition-colors duration-300">
            souvikdbarma03@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Questions;