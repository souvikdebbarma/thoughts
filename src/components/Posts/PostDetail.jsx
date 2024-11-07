import { useParams } from 'react-router-dom';
import { BiTime } from 'react-icons/bi';

const PostDetail = () => {
  const { slug } = useParams();
  
  // This would typically come from your data source
  const posts = {
    'prompt-design': {
      title: 'Prompt Design',
      date: '2023-07-11',
      content: `I'm usually averse to the common habit of trying to find old-world analogues to new-world phenomena. So please bear with me as I commit that exact sin: let me present the case for why prompting should be called prompt design and be likened to web design.

I view prompting as communicating with a time-constrained human. While LLM-specific techniques are certainly helpful (most notably chain-of-thought), I've found that one of the best ways to improve performance is to just have extremely clear and high-quality instructions, similarly to how clarity and conciseness helps real humans understand better too.

Prompting-as-clear-communication makes prompting sound like writing. Most of the prompting I am doing, however, is parametric: I have a number of input variables, and need to dynamically adapt my prompt to those.`,
      readTime: calculateReadTime(`...your full content here...`)
    },
    // Add other posts here
  };

  const post = posts[slug];

  return (
    <div className="flex-1 bg-graphite px-4 md:px-72 py-8">
      <div className="text-desert/40 mb-4 flex items-center gap-2">
        <BiTime className="h-5 w-5" />
        {post.readTime} minutes
      </div>
      <h1 className="text-desert text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
      <div className="text-desert leading-relaxed space-y-6">
        {post.content.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

// Reading time calculator function
const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

export default PostDetail; 