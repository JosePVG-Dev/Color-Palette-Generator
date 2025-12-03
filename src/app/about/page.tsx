export default function About() {
  const portfolioUrl = 'https://josepvg.dev/';

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] p-8">
      <div className="bg-gradient-to-br from-white/95 to-white/90 rounded-[20px] p-12 max-w-[700px] w-full shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-[10px] border border-white/30">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-[2.5rem] font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            About me
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-500 mx-auto rounded-sm"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <p className="text-xl leading-[1.8] text-gray-700">
              Hello! I'm <strong className="text-purple-600 font-semibold">JosePVG-Dev</strong>, a developer passionate about creating interactive experiences and creative projects.
            </p>

            <p className="text-lg leading-[1.8] text-gray-600">
              This project, <strong className="text-indigo-500 font-semibold">Color Palette Generator</strong>, is one of my first works where I combined 
              creativity with programming to create a unique tool for generating beautiful color palettes and gradients.
            </p>

            <p className="text-lg leading-[1.8] text-gray-600">
              I love exploring new technologies, building modern web applications, and sharing my knowledge 
              with the developer community.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-4">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-500 text-white no-underline rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_4px_15px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(124,58,237,0.5)] active:translate-y-0"
            >
              <span>View my portfolio</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

