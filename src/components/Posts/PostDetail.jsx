import { useParams } from 'react-router-dom';
import { BiTime } from 'react-icons/bi';
import ReactMarkdown from 'react-markdown'

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
      content: `
      If you've ever felt like the universe has a mischievous sense of humor, congratulations—you've met Murphy's Law. This infamous adage claims that "Anything that can go wrong, will go wrong." It's the reason toast lands butter-side down, your Wi-Fi cuts out during an important Zoom call, and your favorite T-shirt is mysteriously missing just when you need it. But where does Murphy's Law come from, and why does it seem to govern our lives with such precision? Let's dive in.
      
      <h3>A Rocky (and Rockety) Origin</h3>
      The story of Murphy's Law begins in 1949, in the high-stakes world of aerospace engineering. Edward A.Murphy Jr., an American aerospace engnineer, was working on a U.S. Air Force project to test the effects of acceleration on pilots. athese experiments involved strapping people to rocket sleds and launching them at terrifying speeds. (Think of it as the original extreme sport, but for science.)
      
      During one test, a technician wired sensors incorrectly, botching the data collection. Frustrated, Murphy reportedly muttered something along the lines of, _“If there’s any way to do it wrong, he will.”_ The phrase stuck, later evolving into the universal Murphy’s Law. It’s rise to fame was cemented when Col. Jhon Paul Stapp, the project leader, began using it as a reminder to prepare for every possible failure.
      
      How Murphy’s Law Works (or Why It Feels Like the Universe Hates Us Sometimes)

      Murphy’s Law isn’t magic — it’s rooted in probability, human error, and good old-fashioned bad timing. Here’s why it seems to work so well:

      1. Probability Loves Chaos: The more steps involved in a process, the more likely something will go wrong. A simple morning routine with five steps? you might spill coffee. Planning a wedding with 500 moving parts? Goodluck.
      2. Human Error: People aren’t perfect. We miss details, skip steps, and sometimes just have bad days. Murphy’s Law reminds us that even a tiny mistake can snowball into a big problem.
      3. Selective Memory: Let’s face it — we remember the times thing go wrong far better than the times everything runs smoothly. This makes Murphy’s Law feel like it’s lurking around every corner.
      
      Murphy’s Law in Daily Life

      If you’re wondering how the law impacts you personally, just think back to this week. Chances are, you’ve already had a Murphy moment or two. Here are some classics:

      - The Buttered-Toast phenomenon: Drop a piece of toast, and it’s almost guaranteed to land butter-side down. is it physics? is it fate? Or is it just Murphy laughing at your breakfast?
      - Technology Trolling You: Your phone dies right after you can scan a QR code for a ticket. Or, better yet, the printer breaks only when you’re rushing to print something for a meeting.
      - Traffic Shenanigans: Running late? Every traffic ligh will turn red just for you. Running early? you’ll hit green all the way, only to arrive at your destination to find it locked.
      
      #### How to Outsmart Murphy (Hint: You Can’t, but You Can Try)

      While you can’t escape Murphy’s Law entirely, you can soften its blows by:

      1. Over-Preparing: Always have a backup plan (or two). If you’re presenting at work, download your slides locally and save them to the cloud.
      2. Simplifying Processes: The fewer moving parts, the fewer thing that can go wrong. Want toast? Just eat the bread. Murphy can’t mess with that.
      3. Accepting the Chaos: Sometimes, you just have to laugh and move on. After all, life wouldn’t be half as interesting if everything went perfectly.
      
      Conclusion: Figuring Out Murphy’s Law

      At its core, Murphy’s Law isn’t just about things going wrong — it’s about being prepared for life’s inevitable hiccups. It teaches us resilience and reminds us that a sense of humour goes a long way. Sure, it’s annoying when the Wi-Fi dies during a movie’s climax or when your cat knocks over your coffee, but these moments make life unpredictable and, dare we say, entertaining.

      So, the next time Murphy strikes, remember: You’re not alone. Everyone’s toast lands butter-side down. And who knows? Maybe the universe isn’t out to get you. Maybe it’s just testing how well you can adapt — and laugh — along the way.`,
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
