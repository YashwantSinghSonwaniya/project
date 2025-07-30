import React, { useState } from 'react';
import { ArrowLeft, Newspaper, Search, AlertTriangle, CheckCircle, ExternalLink, Eye, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FakeNews: React.FC = () => {
  const [newsText, setNewsText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | { isReal: boolean; confidence: number; reasons: string[] }>(null);

  const analyzeNews = () => {
    if (!newsText.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const confidence = Math.floor(Math.random() * 30) + 70;
      const isReal = Math.random() > 0.4;
      
      setResult({
        isReal,
        confidence,
        reasons: isReal 
          ? ['Source verification passed', 'Writing style analysis normal', 'Fact-checking database match']
          : ['Suspicious source patterns', 'Emotional manipulation detected', 'No corroborating sources found']
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const tools = [
    {
      name: 'Google Fact Check Explorer',
      description: 'Search for fact-checks from publishers and organizations worldwide using Google\'s comprehensive database.',
      link: 'https://toolbox.google.com/factcheck/explorer',
      icon: '🔍'
    },
    {
      name: 'Snopes',
      description: 'The world\'s largest fact-checking site that investigates rumors, urban legends, and misinformation.',
      link: 'https://www.snopes.com',
      icon: '✅'
    },
    {
      name: 'AllSides Media Bias Chart',
      description: 'Analyze news sources for political bias and reliability ratings to understand perspective and credibility.',
      link: 'https://www.allsides.com/media-bias/media-bias-chart',
      icon: '⚖️'
    }
  ];

  const tips = [
    {
      title: 'Check the Source',
      description: 'Verify the credibility of the news source. Look for established news organizations with editorial standards and transparency about their reporting process.',
      icon: Eye,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Cross-Reference Multiple Sources',
      description: 'Compare the story across different reputable news outlets. Legitimate news is typically reported by multiple independent sources.',
      icon: Users,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Examine Publication Date & Context',
      description: 'Check when the article was published and if it\'s being shared out of context. Old news can be misleading when presented as current events.',
      icon: Clock,
      color: 'from-purple-600 to-violet-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-12" data-aos="fade-right">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Newspaper className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Fake News Detection</h1>
              <p className="text-xl text-gray-300">Protect yourself from misinformation with AI-powered analysis and expert tools</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 mb-8" data-aos="fade-up">
            <p className="text-gray-300 leading-relaxed text-lg">
              In today's digital age, misinformation spreads faster than ever. Our advanced AI system analyzes news content 
              for authenticity markers, source credibility, and manipulation patterns. Combine our technology with proven 
              fact-checking tools and manual verification techniques to stay informed and protected.
            </p>
          </div>
        </div>

        {/* AI Analysis Tool */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mr-3">
              <Search className="h-5 w-5 text-white" />
            </div>
            AI-Powered Analysis
          </h2>
          
          <div className="mb-6">
            <label htmlFor="news-text" className="block text-sm font-medium text-gray-300 mb-2">
              Paste news article or headline to analyze
            </label>
            <textarea
              id="news-text"
              rows={8}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none transition-all duration-300"
              placeholder="Enter the news article text, headline, or URL you want to verify..."
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
            />
          </div>
          
          <button
            onClick={analyzeNews}
            disabled={!newsText.trim() || isAnalyzing}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-[1.02] disabled:hover:scale-100"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Analyze News</span>
              </>
            )}
          </button>
          
          {result && (
            <div className="mt-6 p-6 rounded-lg border border-gray-600/50 bg-gray-700/30" data-aos="fade-up">
              <div className={`flex items-center space-x-3 mb-4 ${result.isReal ? 'text-green-400' : 'text-red-400'}`}>
                {result.isReal ? (
                  <CheckCircle className="h-7 w-7" />
                ) : (
                  <AlertTriangle className="h-7 w-7" />
                )}
                <h3 className="text-xl font-semibold">
                  {result.isReal ? 'Likely Authentic' : 'Potentially Fake'}
                </h3>
              </div>
              
              <p className="text-gray-300 mb-4 text-lg">
                Confidence: <span className="font-semibold text-white">{result.confidence}%</span>
              </p>
              
              <div>
                <h4 className="text-white font-medium mb-3">Analysis Details:</h4>
                <ul className="space-y-2">
                  {result.reasons.map((reason, index) => (
                    <li key={index} className="text-gray-300 flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${result.isReal ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* External Tools Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center" data-aos="fade-up">
            Recommended Fact-Checking Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 font-medium transition-colors group-hover:text-red-300"
                >
                  <span>Visit Tool</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Manual Tips Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center" data-aos="fade-up">
            Manual Verification Tips
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tip.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tip.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl border border-red-500/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Vigilant, Stay Informed</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Combine AI-powered detection with manual verification techniques and trusted fact-checking resources 
              to build a comprehensive defense against misinformation.
            </p>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore More Tools</span>
              <ArrowLeft className="h-5 w-5 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FakeNews;