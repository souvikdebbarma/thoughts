import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = [
    {
      year: 2023,
      items: [
        {
          title: "Prompt Design",
          date: "Jul 11",
          slug: "prompt-design"
        }
      ]
    },
    {
      year: 2022,
      items: [
        {
          title: "Consciousness", 
          date: "Aug 24",
          slug: "consciousness"
        },
        {
          title: "In Between Moments",
          date: "Jan 24",
          slug: "in-between-moments"
        }
      ]
    }
    // ... add more years/posts
  ];

  return (
    <div className="flex-1 bg-graphite px-4 md:px-72 py-8 flex flex-col">
      <h1 className="text-desert text-5xl font-bold mb-6 py-4">Posts</h1>
      <div className="space-y-16">
        {posts.map((yearGroup) => (
          <div key={yearGroup.year} className="flex">
            <div className="text-desert/40 text-3xl font-bold w-32">{yearGroup.year}</div>
            <div className="flex-1 space-y-4">
              {yearGroup.items.map((post) => (
                <div key={post.slug} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/posts/${post.slug}`} 
                      className="text-desert text-lg hover:text-white transition-colors duration-300"
                    >
                      {post.title}
                    </Link>
                    <span className="text-desert/40 text-sm">{post.date}</span>
                  </div>
                  <div className="border-b border-desert/40 mt-2"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;