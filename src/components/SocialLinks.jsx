import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;
  const twitterUrl = import.meta.env.VITE_TWITTER_URL;
  const mailto = `mailto:${import.meta.env.VITE_MAILTO}`;

  return (
    <div className="w-full flex justify-center gap-6 p-4 text-white">
      <a
        href={linkedinUrl}
        className="hover:text-blue-600"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href={githubUrl}

        className="hover:text-gray-300"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400"
      >
        <Twitter className="w-6 h-6" />
      </a>
      <a
        href={mailto}
        className="hover:text-red-400"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;
