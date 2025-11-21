import React from 'react';
import { Github, ArrowRight, Cpu, Terminal, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-white">
      {/* Background Elements - Subtle Light Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-brand-50/80 blur-3xl opacity-60" />
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-slate-50/80 blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-gray-600 uppercase bg-gray-100 rounded-full border border-gray-200">
                Embedded Software Engineer
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-gray-900 tracking-tight">
                Hello, <br />
                I'm Ming Shen.
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                I engineer robust systems at the hardware-software interface. Specializing in embedded Linux, kernel development, C, and C++ to power the devices of tomorrow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-8 font-medium text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <Github className="mr-2 h-5 w-5" />
                  <span>Visit Github</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a 
                  href="mailto:your-email@example.com"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-200 bg-white px-8 font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Visual/Abstract Art */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center"
            >
              {/* Decorative blob behind card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-blue-100 rounded-[3rem] rotate-3 opacity-60 blur-2xl"></div>
              
              {/* Light Theme Code Card */}
              <div className="relative w-full bg-white rounded-2xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden group">
                <div className="space-y-4">
                   <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-xs text-gray-400 font-mono">system_core.c</div>
                   </div>
                   
                   {/* C Code Snippet */}
                   <div className="space-y-3 font-mono text-sm leading-relaxed">
                      <div className="flex gap-2">
                        <span className="text-purple-600 font-semibold">struct</span>
                        <span className="text-blue-600">Engineer</span>
                        <span className="text-gray-900">ming</span>
                        <span className="text-gray-500">=</span>
                        <span className="text-gray-900">{'{'}</span>
                      </div>
                      <div className="pl-6 flex gap-2">
                         <span className="text-gray-500">.focus</span>
                         <span className="text-gray-500">=</span>
                         <span className="text-green-600">"Linux Kernel"</span>,
                      </div>
                      <div className="pl-6 flex gap-2">
                         <span className="text-gray-500">.stack</span>
                         <span className="text-gray-500">=</span>
                         <span className="text-gray-900">{'{'}</span>
                            <span className="text-green-600">"C"</span>,
                            <span className="text-green-600">"C++"</span>,
                            <span className="text-green-600">"Bash"</span>
                         <span className="text-gray-900">{'}'}</span>,
                      </div>
                      <div className="pl-6 flex gap-2">
                         <span className="text-gray-500">.mcu_target</span>
                         <span className="text-gray-500">=</span>
                         <span className="text-green-600">"ARM64"</span>,
                      </div>
                      <div className="pl-6 flex gap-2">
                         <span className="text-gray-500">.optimization</span>
                         <span className="text-gray-500">=</span>
                         <span className="text-amber-600">HIGH_PRIORITY</span>
                      </div>
                      <div className="text-gray-900">{'};'}</div>
                   </div>

                   <div className="mt-10 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3 transition-colors hover:bg-gray-100">
                         <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                            <Cpu size={18} />
                         </div>
                         <div>
                            <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Systems</div>
                            <div className="font-bold text-sm text-gray-900">Embedded</div>
                         </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3 transition-colors hover:bg-gray-100">
                         <div className="p-2 bg-white rounded-lg shadow-sm text-gray-800">
                            <Terminal size={18} />
                         </div>
                         <div>
                            <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Platform</div>
                            <div className="font-bold text-sm text-gray-900">Linux</div>
                         </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3 col-span-2 transition-colors hover:bg-gray-100">
                         <div className="p-2 bg-white rounded-lg shadow-sm text-amber-600">
                            <Zap size={18} />
                         </div>
                         <div>
                            <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Performance</div>
                            <div className="font-bold text-sm text-gray-900">Real-time Optimized</div>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;