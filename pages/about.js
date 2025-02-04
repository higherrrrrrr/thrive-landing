import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-4xl font-bold mb-8">About</h2>

      <div className="mb-8 border-b border-gray-200" />

      <div className="flex flex-col items-center mb-12">
        <Image
          src="/carl.jpg"
          alt="Carl Cortright"
          width={300}
          height={300}
          className="rounded-lg mb-8"
          priority
        />
        <div className="flex space-x-12 items-center">
          <Image
            src="/coinbase.png"
            alt="Coinbase"
            width={100}
            height={40}
          />
          <Image
            src="/yc.png"
            alt="Y Combinator"
            width={100}
            height={40}
          />
        </div>
      </div>
      <div className="space-y-6 text-lg">
        <p>
          Hi! My name is Carl and I'm a software engineer and entrepreneur based in San Francisco, CA.
          I have 10+ years of software engineering and entrepreneurship experience across venture-backed startups,
          scale ups, and public companies. I started Thrive to work on ideas that I'm personally excited about,
          while helping companies in my orbit overcome their tech challenges. We both build and invest to
          create the best outcomes. Thrive is part consultancy, part holding company for my projects, and part angel fund.
        </p>
        <p>
          I started my career at Coinbase where I fast-tracked my way to Senior Software Engineer. At Coinbase I wore
          many hats across commerce, decentralized exchange, regular exchange, and core financial infrastructure.
          I've written code that has moved trillions of dollars (yes, with a T),
          secured hundreds of billions of dollars, and served hundreds of millions of users. While at
          Coinbase I was also the only technical member of the Coinbase ventures investment committee,
          where I owned the dev tool and protocol investment areas and made ~40 early-stage
          cryptocurrency investments.
        </p>
        <p>
        After Coinbase I started my own company in the Web3 space as a technical CEO. I raised $5.3m from investors like Kindred Ventures, Matchstick, Foundry Group, Coinbase Ventures, and Chapter One. I led of team of 10, owning engineering and go-to-market. I've taken many products, ranging from simple SaaS applications to heavily technical data infrastructure, to market. As a CTO or technical member of the team, I understand both the business and what needs to happen technically to achieve the company's goals. My latest venture before I started Thrive was a YC-backed AI company where I was CTO. I actively angel invest through the Thrive entity and have ownership in ~30 and counting early stage tech startups.
        </p>
        <p>
          Thrive is combining everything that I've ever learned about building companies and investing into a single entity. 
          It's a way for me to build software, work with other entrepreneurs, and effectively deploy capital into ecosystems
           that I believe in. I write actively on my blog, which you can check out above.
        </p>
        <p>
          You can read more about my professional history on my{' '}
          <a
            href="https://linkedin.com/in/carlcortright"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            LinkedIn
          </a>.
        </p>
      </div>
    </div>
  );
}
