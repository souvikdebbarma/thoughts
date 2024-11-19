import { useParams } from 'react-router-dom';
import { BiTime } from 'react-icons/bi';

const PostDetail = () => {
  const { slug } = useParams();

  // Reading time calculator function
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  // Posts data
  const posts = {
    "murphy's-law": {
      title: "Murphy's Law",
      date: '2023-07-11',
      content: `If you've ever felt like the universe has a mischievous sense of humor, congratulations—you've met Murphy's Law. This infamous adage claims that "Anything that can go wrong, will go wrong." It's the reason toast lands butter-side down, your Wi-Fi cuts out during an important Zoom call, and your favorite T-shirt is mysteriously missing just when you need it. But where does Murphy's Law come from, and why does it seem to govern our lives with such precision? Let's dive in.`,
    },
    consciousness: {
      title: "Consciousness",
      date: '2022-08-24',
      content: `Consciousness is a complex and often elusive concept that has puzzled philosophers, scientists, and thinkers for centuries. What does it mean to be aware? How do thoughts and emotions intertwine with physical existence?`,
    },
    "in-between-moments": {
      title: "In Between Moments",
      date: '2022-01-24',
      content: `Life often unfolds in the quiet moments between milestones. It is in these "in-between moments" that we find the essence of being—the gentle pause, the unspoken laughter, and the serene contemplation.`,
    },
  };

  // Find the specific post using slug
  const post = posts[slug];

  // If post is not found, display an error message
  if (!post) {
    return (
      <div className="flex-1 bg-graphite px-4 md:px-72 py-8">
        <h1 className="text-desert text-4xl md:text-5xl font-bold mb-8">Post Not Found</h1>
      </div>
    );
  }

  // Calculate the read time for the post
  const readTime = calculateReadTime(post.content);

  return (
    <div className="flex-1 bg-graphite px-4 md:px-72 py-8">
      <div className="text-desert/40 mb-4 flex items-center gap-2">
        <BiTime className="h-5 w-5" />
        {readTime} minutes
      </div>
      <h1 className="text-desert text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>
      <div className="text-desert leading-relaxed space-y-6">
        {post.content.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
