import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Database, 
  Smartphone, 
  Award, 
  CheckCircle2, 
  Zap, 
  Map, 
  Wine,
  ShieldCheck,
  BarChart3,
  MessageSquare,
  Coins,
  ArrowRightLeft,
  Bell,
  Mail,
  Calendar,
  Beer,
  Crown,
  Gift,
  User,
  DollarSign,
  PieChart,
  ArrowUpRight,
  Minus,
  Plus,
  Briefcase,
  Rocket,
  CreditCard,
  Heart,
  Sparkles,
  Plane,
  Ticket,
  Lock,
  CalendarCheck,
  XCircle,
  Library
} from 'lucide-react';

import { Section } from './components/Section';
import { RevenueChart } from './components/RevenueChart';
import { PhoneMockup } from './components/PhoneMockup';

// --- Sub-components for specific sections ---

const StatBox = ({ value, label, subtext, delay = 0 }: { value: string, label: string, subtext: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-8 rounded-3xl border-l-8 border-brand-red shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="text-5xl md:text-7xl font-black text-brand-red mb-2 tracking-tighter">{value}</div>
    <div className="text-xl md:text-2xl font-bold text-brand-brown mb-4 font-serif">{label}</div>
    <div className="text-gray-500 leading-relaxed">{subtext}</div>
  </motion.div>
);

const FeatureItem = ({ icon: Icon, title, desc, delay = 0 }: { icon: any, title: string, desc: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex gap-4 items-start group"
  >
    <div className="p-3 bg-brand-red/10 rounded-xl group-hover:bg-brand-red/20 transition-colors"
    >
      <Icon className="w-6 h-6 text-brand-red" />
    </div>
    <div>
      <h4 className="text-xl font-bold text-brand-brown mb-1">{title}</h4>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const PlatformCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -5, backgroundColor: '#262626' }}
    className="bg-[#2a2a2a] p-6 rounded-2xl border border-white/5 transition-all"
  >
    <Icon className="w-10 h-10 text-brand-green mb-4" />
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const NotificationCard = ({ icon: Icon, title, message, time, delay }: { icon: any, title: string, message: string, time: string, delay: number }) => (
  <motion.div
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: "spring", stiffness: 100 }}
    className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex gap-4 items-start max-w-sm ml-auto relative z-10"
  >
    <div className="bg-brand-red rounded-xl p-2 shrink-0">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-baseline mb-1">
        <h5 className="font-bold text-gray-900 text-sm">{title}</h5>
        <span className="text-[10px] text-gray-400 font-medium uppercase">{time}</span>
      </div>
      <p className="text-sm text-gray-600 leading-snug">{message}</p>
    </div>
  </motion.div>
);

const PersonaCard = ({ name, type, icon: Icon, spend, habits, points, status, color, barColor, progress }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 md:p-10 rounded-2xl border border-brand-brown/10 shadow-md flex flex-col h-full min-h-[420px] relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} opacity-10 rounded-bl-[3rem] -mr-4 -mt-4`}></div>
    
    <div className="flex items-center gap-4 mb-5 relative z-10">
      <div className={`p-4 rounded-full ${color} bg-opacity-10`}>
        <Icon size={28} className={barColor.replace('bg-', 'text-')} /> 
      </div>
      <div>
        <h4 className="font-bold text-xl text-brand-brown">{name}</h4>
        <span className="text-sm font-bold uppercase tracking-wider text-brand-red/70">{type}</span>
      </div>
    </div>
    
    <div className="flex-grow">
      <p className="text-base text-brand-brown mb-3 italic leading-relaxed">"{habits}"</p>
      <p className="text-sm text-brand-brown/80 mb-5">{spend}</p>
    </div>
    
    <div className="mt-4 pt-5 border-t border-gray-100 bg-gray-50 -mx-8 -mb-8 md:-mx-10 md:-mb-10 p-8 md:p-10">
      <div className="flex justify-between text-base mb-2">
        <span className="text-brand-brown font-semibold">Est. Pts/Yr</span>
        <span className="font-black text-brand-brown text-lg">{points}</span>
      </div>
      <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden mb-4">
        <div 
          className={`h-full ${barColor}`} 
          style={{ width: progress }}
        ></div>
      </div>
      <div className="flex justify-between items-center">
         <span className="text-sm text-brand-brown/70 uppercase tracking-wide">Status</span>
         <span className={`text-base font-black ${barColor.replace('bg-', 'text-')}`}>{status}</span>
      </div>
    </div>
  </motion.div>
);

const FinanceRow = ({ label, type, items, icon: Icon, color, amount }: any) => (
  <div className="flex gap-4 items-start p-4 border-b border-gray-100 last:border-0">
    <div className={`p-2 rounded-lg ${color} bg-opacity-10 mt-1`}>
       <Icon size={18} className={color.replace('bg-', 'text-')} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-3">
          <h4 className="font-bold text-brand-brown">{label}</h4>
          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${color} bg-opacity-10 ${color.replace('bg-', 'text-')}`}>{type}</span>
        </div>
        {amount && <span className="text-base md:text-lg font-black text-brand-brown">{amount}</span>}
      </div>
      <div className="flex flex-wrap gap-2 mt-2 items-center">
         {items.map((item: string, i: number) => (
             <span key={i} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">{item}</span>
         ))}
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ title, subtitle, icon: Icon, type, image }: any) => (
    <motion.div 
        whileHover={{ y: -10 }}
        className="group relative h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer shadow-xl"
    >
        {/* Background Image/Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${image} opacity-90 transition-transform duration-700 group-hover:scale-110`}></div>
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
        
        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                    <Icon className="text-white" size={24} />
                </div>
                <span className="bg-brand-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                    {type}
                </span>
            </div>
            
            <div>
                <h3 className="text-3xl font-black mb-2 leading-tight">{title}</h3>
                <p className="text-white/80 font-medium leading-relaxed">{subtitle}</p>
                
                <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Unlock Experience <ArrowRight size={16} />
                </div>
            </div>
        </div>
    </motion.div>
);

export default function App() {
  const [showLoyalSlide, setShowLoyalSlide] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans text-gray-900 bg-brand-cream selection:bg-brand-red selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-red origin-left z-50"
        style={{ scaleX }}
      />

      {/* 1. Intro Section */}
      <Section className="bg-white" showWatermark={false}>
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-8 right-8">
              <img src="/logo.png" alt="Cascadia logo" className="w-20 md:w-28 drop-shadow" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-brand-brown mb-6 tracking-tight leading-[0.9]">
              The Den:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">
                A Loyalty Story
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-500 font-serif italic max-w-2xl">
              How a smart rewards program transforms Cascadia's business from transactional to relational.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* 2. The Persona (Sarah) */}
      <Section className="bg-brand-bgAlt">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-8 font-serif">Let's talk about Sarah.</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                She visits Cascadia <span className="font-bold text-brand-red bg-brand-red/10 px-1 rounded">2.3 times a month</span>. 
                She spends about <span className="font-bold text-brand-red bg-brand-red/10 px-1 rounded">$37.75</span>.
              </p>
              <p>
                She prefers Cascadia, but she isn't loyal. She's habitual. If she's across town, she'll go elsewhere.
                She buys what she knows: easy weekday wines and vodka sodas.
              </p>
              <div className="border-l-4 border-brand-brown pl-6 py-2 mt-8">
                <p className="text-xl font-bold text-brand-brown italic">
                  "Without connection, Sarah is just one competitor promotion away from disappearing."
                </p>
              </div>
            </div>
          </div>
          <div 
            className="relative h-[400px] bg-white rounded-3xl p-8 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500 cursor-pointer"
            onClick={() => setShowLoyalSlide(v => !v)}
            role="button"
            aria-label="Toggle loyal scenario"
          >
             <div className="absolute top-4 right-4 bg-gray-100 rounded-full p-2">
                <Users className="text-gray-400" />
             </div>
             <div className="h-full flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-brand-brown/10 rounded-full flex items-center justify-center mb-6 text-4xl">👩‍💼</div>
                <h3 className="text-2xl font-bold text-brand-brown">The "Habitual" Shopper</h3>
                <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                    <div className="bg-gray-50 p-3 rounded-xl">
                        <div className="text-2xl font-bold text-brand-brown">2.3</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide">Visits/Mo</div>
                    </div>
                  <div className="bg-gray-50 p-3 rounded-xl">
                      <div className="text-2xl font-bold text-brand-brown">$37</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Basket Size</div>
                  </div>
               </div>
             </div>
             <motion.div 
                initial={{ x: 80, opacity: 0 }} 
                animate={showLoyalSlide ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 140 }}
                className="absolute -bottom-6 left-4 right-4 bg-brand-brown text-white rounded-2xl shadow-2xl p-4 flex items-center gap-4"
             >
                <div className="bg-white/20 rounded-xl p-3">
                  <TrendingUp className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm uppercase tracking-widest text-white/70 font-bold">When Loyal</div>
                  <div className="text-lg font-black leading-tight">3.0 visits/mo • $45 basket • +30% CLV</div>
                </div>
             </motion.div>
          </div>
        </div>

      </Section>

      {/* 3. The Opportunity */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6 font-serif">The Opportunity</h2>
          <p className="text-xl text-gray-500">
            Small behavioral shifts lead to massive revenue outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <StatBox 
            value="+0.7"
            label="Additional Visits"
            subtext="Moving from 2.3 to 3 visits per month represents a 30% increase in frequency."
            delay={0.1}
          />
          <RevenueChart />
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-brand-brown">
                <span className="text-brand-red">30% increase</span> in customer lifetime value.
            </p>
        </div>
      </Section>

      {/* 4. The Solution (App Showcase) */}
      <Section className="bg-brand-bgAlt overflow-visible">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-3 bg-brand-brown/10 text-brand-brown px-5 py-2.5 rounded-full text-base md:text-lg font-black uppercase tracking-wider shadow-sm border border-brand-brown/20">
              <Rocket size={18} /> Phase 1: Launch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif">
              More than a card.<br/>A digital companion.
            </h2>
            <p className="text-lg text-gray-600">
              The Den isn't just about points. It's a native mobile app that surfaces personalized recommendations, 
              tracks progress, and celebrates milestones.
            </p>
            
            <div className="space-y-6 mt-8">
              <FeatureItem 
                icon={Smartphone} 
                title="Instant Barcode" 
                desc="One tap to scan at checkout. No phone numbers." 
                delay={0.2}
              />
              <FeatureItem 
                icon={Zap} 
                title="Real-Time Balance" 
                desc="Watch points accumulate and tiers unlock instantly." 
                delay={0.3}
              />
              <FeatureItem 
                icon={Award} 
                title="Gamification" 
                desc="Challenges, badges, and streaks make shopping an experience." 
                delay={0.4}
              />
               <FeatureItem 
                icon={MessageSquare} 
                title="Personalized Nudges" 
                desc="Push notifications for new releases based on purchase history." 
                delay={0.5}
              />
            </div>
            
            <div className="pt-8">
                <div className="inline-flex items-center gap-2 bg-brand-brown text-white px-6 py-3 rounded-full font-bold">
                    Available Day 1 on App Store & Google Play
                </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center perspective-1000">
            <motion.div
                initial={{ rotateY: 15, y: 50 }}
                whileInView={{ rotateY: 0, y: 0 }}
                transition={{ duration: 1, type: "spring" }}
            >
                <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 5. The Mechanics (Earn & Burn) */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
              <div className="flex justify-start mb-4">
                <div className="inline-flex items-center gap-3 bg-brand-brown/10 text-brand-brown px-5 py-2.5 rounded-full text-base md:text-lg font-black uppercase tracking-wider shadow-sm border border-brand-brown/20">
                  <Rocket size={18} /> Phase 1: Launch
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif mb-4">The Mechanics</h2>
              <p className="text-xl text-gray-500">Simple to understand. Rewarding to engage.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
              {/* Earning Side */}
              <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-brand-brown flex items-center gap-3">
                      <div className="p-2 bg-brand-green/10 rounded-lg text-brand-green"><TrendingUp size={24} /></div>
                      Ways to Earn
                  </h3>
                  
                  <div className="grid gap-4">
                      <motion.div whileHover={{ scale: 1.02 }} className="flex justify-between items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                          <div>
                              <p className="font-bold text-lg text-brand-brown">Regular Purchases</p>
                              <p className="text-gray-500 text-sm">In-store or online</p>
                          </div>
                          <div className="text-right">
                              <span className="text-3xl font-black text-brand-brown">10</span>
                              <span className="text-sm font-medium text-gray-400 block uppercase tracking-wider">pts / $1</span>
                          </div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="flex justify-between items-center p-6 bg-brand-bgAlt rounded-2xl border border-brand-brown/10 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-1 bg-brand-red text-[10px] text-white font-bold uppercase rounded-bl-lg">App Bonus</div>
                          <div>
                              <p className="font-bold text-lg text-brand-brown">App Purchases</p>
                              <p className="text-gray-500 text-sm">Mobile orders & scan-to-pay</p>
                          </div>
                          <div className="text-right">
                              <span className="text-3xl font-black text-brand-red">12</span>
                              <span className="text-sm font-medium text-brand-red/60 block uppercase tracking-wider">pts / $1</span>
                          </div>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.02 }} className="flex justify-between items-center p-6 bg-brand-brown text-white rounded-2xl shadow-xl">
                          <div>
                              <p className="font-bold text-lg">Private Label & Local</p>
                              <p className="text-white/60 text-sm">Cascadia branded & BC products</p>
                          </div>
                          <div className="text-right">
                              <span className="text-3xl font-black text-brand-green">15</span>
                              <span className="text-sm font-medium text-white/60 block uppercase tracking-wider">pts / $1</span>
                          </div>
                      </motion.div>
                  </div>

                  <div className="bg-brand-cream p-6 rounded-2xl border border-dashed border-brand-brown/20">
                      <h4 className="font-bold text-brand-brown mb-4 flex items-center gap-2"><Zap size={18} className="text-orange-500"/> Bonus Multipliers</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>Double Points Days</div>
                          <div className="flex items-center gap-2 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>3x on New Releases</div>
                          <div className="flex items-center gap-2 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>5x Birthday Bonus</div>
                          <div className="flex items-center gap-2 text-gray-600"><div className="w-1.5 h-1.5 rounded-full bg-brand-red"></div>Challenges (+500 pts)</div>
                      </div>
                  </div>
              </div>

              {/* Redemption Side */}
              <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-brand-brown flex items-center gap-3">
                      <div className="p-2 bg-brand-red/10 rounded-lg text-brand-red"><Coins size={24} /></div>
                      Redeeming
                  </h3>

                  <div className="h-full bg-brand-brown rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center relative overflow-hidden shadow-2xl min-h-[400px]">
                      {/* Background Pattern */}
                      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      </div>

                      <div className="relative z-10">
                          <div className="text-lg text-white/60 font-medium mb-2 uppercase tracking-widest">Exchange Rate</div>
                          
                          <div className="flex items-center justify-center gap-4 md:gap-8 my-8">
                              <div>
                                  <span className="text-4xl md:text-5xl font-black block">1000</span>
                                  <span className="text-sm opacity-60 uppercase tracking-wider">Points</span>
                              </div>
                              <ArrowRightLeft className="text-brand-green w-8 h-8 md:w-12 md:h-12" />
                              <div>
                                  <span className="text-4xl md:text-5xl font-black block text-brand-green">$1.00</span>
                                  <span className="text-sm opacity-60 uppercase tracking-wider">Off</span>
                              </div>
                          </div>

                          <p className="max-w-xs mx-auto text-white/80 leading-relaxed mb-8">
                              Redeem instantly at checkout for any dollar amount. No complex tiers, no blackout dates.
                          </p>

                          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                              <p className="text-sm font-medium">
                                  <span className="text-brand-green">💡 Pro Tip:</span> Save points for "Redemption Events" where points are worth 20% more.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        {/* Multipliers Section */}
        <div className="mt-24">
            <h3 className="text-2xl font-bold text-brand-brown mb-8 text-left">Smart Multipliers</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "App Usage", val: "12 pts/$1", desc: "Drives digital adoption & data capture." },
                    { title: "Private Label", val: "15 pts/$1", desc: "Higher margins, supports local." },
                    { title: "New Releases", val: "3x Points", desc: "Moves inventory fast in first 30 days." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-brand-bgAlt p-6 rounded-lg overflow-hidden border border-brand-brown/10 shadow-sm text-center"
                    >
                        <h4 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">{item.title}</h4>
                        <div className="text-3xl font-black text-brand-red mb-2">{item.val}</div>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </Section>

      {/* 6. Tiers & Multipliers */}
      <Section className="bg-brand-bgAlt">
        <div className="text-center mb-16">
          <div className="flex justify-start mb-4">
            <div className="inline-flex items-center gap-3 bg-brand-brown/10 text-brand-brown px-5 py-2.5 rounded-full text-base md:text-lg font-black uppercase tracking-wider shadow-sm border border-brand-brown/20">
              <Rocket size={18} /> Phase 1: Launch
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif">Three Tiers of Loyalty</h2>
          <p className="text-xl text-gray-500 mt-4">Designed to drive aspiration and consistency.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
            {[
                { name: "Cub", pts: "10", sub: "Entry Level", range: "0–9,999 pts (annual reset)", spend: "Level up at ~$1,000 spend", color: "bg-gray-100", border: "border-gray-200", icon: "🐻" },
                { name: "Brown Bear", pts: "12.5", sub: "Mid Tier", range: "10,000–29,999 pts (annual reset)", spend: "Earned at ~$1,000 spend", color: "bg-orange-50", border: "border-orange-200", icon: "🐻", highlight: true },
                { name: "Grizzly", pts: "15", sub: "VIP Status", range: "30,000+ pts (annual reset)", spend: "Earned at ~$3,000 spend", color: "bg-brand-brown text-white", border: "border-brand-brown", icon: "👑" }
            ].map((tier, idx) => (
                <motion.div 
                    key={tier.name}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-8 rounded-3xl border-2 ${tier.border} ${tier.highlight ? 'ring-4 ring-brand-red/20 shadow-2xl scale-105 z-10' : 'shadow-lg'} ${tier.color === 'bg-brand-brown text-white' ? 'bg-brand-brown text-white' : 'bg-white'}`}
                >
                    <div className="text-4xl mb-4">{tier.icon}</div>
                    <h3 className={`text-2xl font-bold mb-2 ${tier.color.includes('text-white') ? 'text-white' : 'text-brand-brown'}`}>{tier.name}</h3>
                    <p className={`text-sm uppercase tracking-wider font-bold mb-6 opacity-70`}>{tier.sub}</p>
                    <div className="mb-4">
                        <span className="text-4xl font-black">{tier.pts}</span>
                        <span className="text-lg opacity-80"> pts / $1 spent</span>
                    </div>
                    <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${tier.color.includes('text-white') ? 'text-white/80' : 'text-brand-brown/70'}`}>{tier.range}</p>
                    <p className={`text-sm font-semibold mb-4 ${tier.color.includes('text-white') ? 'text-white/80' : 'text-gray-700'}`}>{tier.spend}</p>
                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-2 items-center"><CheckCircle2 size={16} /> Birthday Rewards</li>
                        <li className="flex gap-2 items-center"><CheckCircle2 size={16} /> Member Sales</li>
                        {idx > 0 && <li className="flex gap-2 items-center"><CheckCircle2 size={16} /> Premium Glassware</li>}
                        {idx > 1 && <li className="flex gap-2 items-center"><CheckCircle2 size={16} /> Concierge Service</li>}
                    </ul>
                </motion.div>
            ))}
        </div>

        {/* Path to Status Section */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-brand-brown font-serif mb-4">Who sits where?</h3>
            <p className="text-gray-500">
               Annual reset. Cub: 0–9,999 pts. Brown Bear: 10,000–29,999 pts (~$1,000 spend). Grizzly: 30,000+ pts (~$3,000 spend).
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
             <PersonaCard 
               name="Sarah"
               type="The Growth Target"
               icon={User}
               color="bg-brand-red"
               barColor="bg-brand-red"
               habits="Regular. $37.75 per visit."
               spend="$1,040/year"
               points="10,400"
               status="Unlocks Brown Bear in Dec"
               progress="42%"
             />
             <PersonaCard 
               name="Priya"
               type="The Enthusiast"
               icon={Gift}
               color="bg-orange-500"
               barColor="bg-orange-500"
               habits="Tuesdays & Saturdays. Premium wines."
               spend="$2,200/year"
               points="24,200"
               status="Solid Brown Bear"
               progress="96%"
             />
             <PersonaCard 
               name="Alejandro"
               type="The Collector"
               icon={Crown}
               color="bg-brand-brown"
               barColor="bg-brand-brown"
               habits="Cellar stocking & corporate gifts."
               spend="$5,000+/year"
               points="50,000+"
               status="Grizzly Elite"
               progress="100%"
             />
          </div>
        </div>

      </Section>

      {/* Competitor Comparison */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif mt-4">How Others Play</h2>
            <p className="text-lg text-gray-600 mt-2">Competitor loyalty landscape (Island): earn, value, redemption.</p>
          </div>

          <div className="bg-white rounded-3xl border border-brand-brown/10 shadow-lg p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-base md:text-lg text-brand-brown min-w-[1000px]">
                <thead>
                  <tr className="text-sm uppercase tracking-wider text-gray-500">
                    <th className="text-center py-3 px-3 bg-brand-bgAlt text-brand-brown font-bold shadow-sm border border-gray-200">Benchmark</th>
                    <th className="text-center py-3 px-3 bg-brand-brown text-white shadow-lg border-2 border-brand-red/30">Cascadia</th>
                    <th className="text-center py-3 px-3 bg-brand-bgAlt text-brand-brown border border-gray-100">Liquor Plus</th>
                    <th className="text-center py-3 px-3 bg-brand-bgAlt text-brand-brown border border-gray-100">Voyage</th>
                    <th className="text-center py-3 px-3 bg-brand-bgAlt text-brand-brown border border-gray-100">Liquor Co. 1977</th>
                    <th className="text-center py-3 px-3 bg-brand-bgAlt text-brand-brown border border-gray-100">Mid-Island Co-op</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: "Base Earn", benchmark: ["≥2% earn", "Transparent value"], cols: [true, false, false, false, false], detail: ["~1–1.5% base (10–15 pts)", "~1% gift card", "Not posted", "Annual dividend", "Annual dividend"] },
                    { feature: "Redemption", benchmark: ["Instant $ off", "No minimum"], cols: [true, false, false, false, false], detail: ["No minimum", "500 pts gift card", "At participating stores", "Annual payout", "Annual payout"] },
                    { feature: "Native App", benchmark: ["Native app", "Scan / digital card"], cols: [true, true, true, false, false], detail: ["iOS/Android, scan-to-pay", "App barcode", "App card", "Co-op number", "Co-op number"] },
                    { feature: "Reward Tiers", benchmark: ["Tiers + experiential", "Multipliers"], cols: [true, false, false, false, false], detail: ["Tier bonuses + Vault", "Giveaways/contests"] },
                    { feature: "Member Perks", benchmark: ["Personalized offers", "Clear perks"], cols: [true, false, false, false, false], detail: ["Experiential rewards", "Monthly contests", "Promos"] },
                  ].map((row, i) => (
                    <tr key={i} className="align-top">
                      <td className="py-4 px-3 text-center bg-brand-bgAlt">
                        <div className="inline-flex flex-col items-start gap-1 text-left">
                          <div className="text-lg md:text-xl font-black text-brand-brown">{row.feature}</div>
                          <div className="text-sm font-semibold text-brand-brown">{row.benchmark[0]}</div>
                        </div>
                      </td>
                      {row.cols.map((hasIt, j) => (
                        <td key={j} className={`py-4 px-3 text-center ${j === 0 ? 'bg-brand-red/5 border border-brand-red/20 shadow-sm' : 'bg-brand-bgAlt/70'}`}>
                          <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-bold shadow-sm ${hasIt ? 'bg-brand-green/25 text-brand-green border border-brand-green/50' : 'bg-brand-red/20 text-brand-red border border-brand-red/40'}`}>
                            {hasIt ? 'Lead' : 'Gap'}
                          </div>
                          <div className="text-sm text-gray-700 mt-2">{row.detail[j]}</div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. NEW CRM Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left: Strategy */}
             <div>
               <div className="inline-flex items-center gap-3 bg-brand-brown/10 text-brand-brown px-5 py-2.5 rounded-full text-base md:text-lg font-black uppercase tracking-wider shadow-sm border border-brand-brown/20 mb-4">
                 <Rocket size={18} /> Phase 1: Launch
               </div>
                <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif mb-6">The Engagement Engine</h2>
                <p className="text-xl text-gray-500 mb-12">
                   How we nudge Sarah from passive collection to active engagement using <span className="text-brand-red font-bold">lifecycle marketing</span>.
                </p>

                <div className="space-y-10">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-brown/5 flex items-center justify-center shrink-0">
                            <Calendar className="text-brand-brown" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-brown mb-2">Frequency Drivers</h4>
                            <p className="text-gray-500 leading-relaxed">
                                Automated "Win-back" campaigns trigger if Sarah hasn't visited in 21 days.
                                <br/><span className="text-sm font-bold text-brand-red mt-1 block">Goal: Incremental Visits</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-brown/5 flex items-center justify-center shrink-0">
                            <TrendingUp className="text-brand-brown" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-brown mb-2">Basket Builders</h4>
                            <p className="text-gray-500 leading-relaxed">
                                "You're 200 pts away from the next tier." Targeted offers to increase cart size.
                                <br/><span className="text-sm font-bold text-brand-red mt-1 block">Goal: Higher Spend</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-brand-brown/5 flex items-center justify-center shrink-0">
                            <Wine className="text-brand-brown" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-brand-brown mb-2">Smart Affinity</h4>
                            <p className="text-gray-500 leading-relaxed">
                                Sarah buys Pinot Noir. We notify her when the new vintage drops.
                                <br/><span className="text-sm font-bold text-brand-red mt-1 block">Goal: Emotional Connection</span>
                            </p>
                        </div>
                    </div>
                </div>
             </div>

             {/* Right: Visual Mockups */}
             <div className="relative">
                 {/* Decorative Circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-bgAlt rounded-full -z-10 blur-3xl opacity-50"></div>
                 
                 <div className="flex flex-col gap-6">
                     <NotificationCard 
                        icon={Bell}
                        title="We Miss You, Sarah!"
                        message="It's been a while. Come in this week for 2x points on all Rosé wines. 🍷"
                        time="Just now"
                        delay={0.2}
                     />
                     <NotificationCard 
                        icon={TrendingUp}
                        title="Almost There..."
                        message="You are only $12 away from unlocking a $10 reward voucher!"
                        time="2h ago"
                        delay={0.4}
                     />
                     <NotificationCard 
                        icon={Mail}
                        title="Exclusive Access"
                        message="The 2024 Joie Farm Pinot is here. As a Brown Bear member, you get first dibs."
                        time="Yesterday"
                        delay={0.6}
                     />
                 </div>
                 
                 <div className="mt-8 text-center">
                     <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Real-time Push & SMS</p>
                 </div>
            </div>

         </div>
        </div>
      </Section>

      {/* NEW SECTION: CRM Overview */}
      <Section className="bg-brand-cream">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-brand-brown/10 text-brand-brown px-5 py-2.5 rounded-full text-base md:text-lg font-black uppercase tracking-wider shadow-sm border border-brand-brown/20 mb-4">
              <Rocket size={18} /> CRM 101
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif mb-4">What is CRM?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Customer Relationship Management is the system that unifies shopper data, automates outreach, and measures impact. 
              It connects POS, app, email, and SMS so every touchpoint is contextual—not generic blasts.
            </p>
            <div className="space-y-4">
              <FeatureItem 
                icon={Database}
                title="Single Customer View"
                desc="Purchases, preferences, and status live in one profile to drive precise targeting."
              />
              <FeatureItem 
                icon={Bell}
                title="Automated Journeys"
                desc="Win-back, low-stock alerts, and tier nudges trigger based on behavior—no manual lists."
              />
              <FeatureItem 
                icon={BarChart3}
                title="Measured Sales Lift"
                desc="Every campaign is tied to revenue, visit frequency, and basket size so we fund what works."
              />
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-2xl border border-brand-brown/10 p-8 space-y-6">
            <h3 className="text-2xl font-bold text-brand-brown flex items-center gap-3">
              <TrendingUp className="text-brand-red" /> How CRM Drives Sales
            </h3>
            <div className="space-y-4">
              {[
                { label: "Frequency", detail: "Win-back journeys bring lapsed guests back 7–14 days sooner." },
                { label: "Basket", detail: "Affinity offers surface higher-margin items Sarah already likes." },
                { label: "Mix Shift", detail: "Private label and local products get prioritized in recommendations." },
                { label: "Breakage Control", detail: "Offers throttle based on liability and inventory positions." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center font-black">{i + 1}</div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-wider text-brand-brown">{item.label}</div>
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-brand-brown text-white rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2 className="text-brand-green" />
              <p className="text-sm leading-relaxed">
                Net: CRM is the engine behind loyalty. It scales personalized selling while proving the revenue lift.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7b. Engagement Performance */}
      <Section className="bg-brand-bgAlt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-brand-brown/10 text-brand-brown px-5 py-2.5 rounded-full text-base font-black uppercase tracking-wider shadow-sm border border-brand-brown/20">
              <TrendingUp size={18} /> What's Working Now
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif mt-4">Engagement Performance</h2>
            <p className="text-lg text-gray-600 mt-3">Opens, clicks, conversions over the last 90 days.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-brand-red/10 text-brand-red"><Bell size={20} /></div>
                <span className="text-sm font-bold uppercase tracking-wider text-gray-500">SMS</span>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-3xl font-black text-brand-brown">71% open</p>
                <p className="text-xl font-black text-brand-brown">19% click</p>
                <p className="text-lg font-semibold text-brand-green">7.8% convert</p>
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">90-day rolling avg</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-brand-brown/10 text-brand-brown"><Smartphone size={20} /></div>
                <span className="text-sm font-bold uppercase tracking-wider text-gray-500">In-App Push</span>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-3xl font-black text-brand-brown">84% open</p>
                <p className="text-xl font-black text-brand-brown">22% click</p>
                <p className="text-lg font-semibold text-brand-green">9.1% convert</p>
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">90-day rolling avg</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green"><ArrowUpRight size={20} /></div>
                <span className="text-sm font-bold uppercase tracking-wider text-gray-500">Email (Benchmark)</span>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-3xl font-black text-brand-brown">42% open</p>
                <p className="text-xl font-black text-brand-brown">8% click</p>
                <p className="text-lg font-semibold text-brand-green">2.4% convert</p>
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">90-day rolling avg</p>
            </motion.div>
          </div>
          <p className="text-xs text-gray-500 text-center mt-6">
            Illustrative placeholders — swap in your last 90-day platform metrics (Alpine IQ/email/push) when available.
          </p>
        </div>
      </Section>

      {/* 8. The Platform (Alpine IQ) */}
      <Section dark className="bg-brand-dark">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div className="space-y-3">
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">Why Alpine IQ?</h2>
                    <p className="text-xl text-gray-300 max-w-3xl">Alpine IQ is the glue that ties Cascadia's POS  app, and marketing together to increase repeat visits and build baskets.</p>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-4">
                    <div className="bg-white/10 backdrop-blur px-5 py-3 rounded-xl border border-white/10 text-center">
                        <span className="block text-2xl font-black text-brand-green">4,000+</span>
                        <span className="text-xs text-gray-300">AIQ storefronts</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur px-5 py-3 rounded-xl border border-white/10 text-center">
                        <span className="block text-2xl font-black text-brand-green">15% ↑</span>
                        <span className="text-xs text-gray-300">Avg. transaction (clients)</span>
                    </div>
                </div>
            </div>
            <p className="text-[10px] text-gray-400 mb-8">Benchmarks reported by AIQ across partner programs.</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: "Deep Integration",
                  line1: "Real-time POS sync across stores",
                  line2: "Instant earn/redeem; no till lag"
                },
                {
                  icon: Smartphone,
                  title: "Native Mobile",
                  line1: "iOS/Android app, barcode + scan-to-pay",
                  line2: "Drives digital IDs and baskets"
                },
                {
                  icon: BarChart3,
                  title: "Analytics Suite",
                  line1: "SKU-level cohorts and predictive alerts",
                  line2: "Target high-margin and local picks"
                },
                {
                  icon: Zap,
                  title: "Marketing Auto",
                  line1: "Journeys for win-back, tiers, launches",
                  line2: "Less blasting; more repeat trips"
                },
                {
                  icon: ShieldCheck,
                  title: "Enterprise Grade",
                  line1: "PIPA/PCI aware, roles, audit trails",
                  line2: "Protects guest data and ops risk"
                },
                {
                  icon: Wine,
                  title: "Industry Specific",
                  line1: "Built for regulated alcohol/cannabis",
                  line2: "Ready to extend to cannabis + VBG"
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-[#2a2a2a] p-6 rounded-2xl border border-white/10 shadow-sm">
                  <card.icon className="w-10 h-10 text-brand-green mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{card.line1}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">{card.line2}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-brand-brown/60 to-brand-red/50 border border-white/20 rounded-3xl p-5 md:p-6 shadow-xl text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <span className="text-sm font-bold uppercase tracking-wider text-white/80">Why Now</span>
                <div className="grid sm:grid-cols-3 gap-3 md:gap-4 w-full">
                  <div className="px-4 py-3 bg-white/10 rounded-2xl border border-white/20 text-sm md:text-base font-semibold shadow-sm">POS + app go live Q1 — align CRM</div>
                  <div className="px-4 py-3 bg-white/10 rounded-2xl border border-white/20 text-sm md:text-base font-semibold shadow-sm">Capture early IDs before spring promos</div>
                  <div className="px-4 py-3 bg-white/10 rounded-2xl border border-white/20 text-sm md:text-base font-semibold shadow-sm">Delay = lost repeat visits</div>
                </div>
              </div>
            </div>
        </div>
      </Section>

      {/* 9. NEW Financial Model Section */}
      <Section className="bg-brand-bgAlt">
         <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif mb-4">The Financial Model</h2>
                 <p className="text-xl text-gray-500">Mapping the investment against projected returns.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mb-8">
                 {/* Cost Column */}
                 <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
                 >
                     <div className="bg-brand-red/5 p-6 border-b border-brand-red/10 flex justify-between items-center">
                         <h3 className="text-2xl font-bold text-brand-brown flex items-center gap-3">
                            <div className="bg-brand-red rounded-full p-1"><Minus className="text-white" size={16}/></div>
                            The Investment
                         </h3>
                         <Briefcase className="text-brand-red opacity-20" size={32} />
                     </div>
                     <div className="p-2">
                        <FinanceRow 
                            label="Tech Stack" 
                            type="Fixed Cost" 
                            items={["Implementation Fee", "Annual SaaS License"]} 
                            amount="$3,000/mo"
                            icon={Database} 
                            color="bg-brand-brown" 
                        />
                        <FinanceRow 
                            label="Points Liability" 
                            type="Variable (COGS)" 
                            items={["0.3% of Revenue", "Breakage Estimates"]} 
                            amount="0.3% of Revenue"
                            icon={PieChart} 
                            color="bg-brand-red" 
                        />
                         <FinanceRow 
                            label="Marketing" 
                            type="Launch Only" 
                            items={["In-store Signage", "Digital Ads"]} 
                            amount="$30,000"
                            icon={Smartphone} 
                            color="bg-orange-500" 
                        />
                     </div>
                 </motion.div>

                 {/* Benefit Column */}
                 <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
                 >
                     <div className="bg-brand-green/5 p-6 border-b border-brand-green/10 flex justify-between items-center">
                         <h3 className="text-2xl font-bold text-brand-brown flex items-center gap-3">
                            <div className="bg-brand-green rounded-full p-1"><Plus className="text-white" size={16}/></div>
                            The Returns
                         </h3>
                         <TrendingUp className="text-brand-green opacity-20" size={32} />
                     </div>
                     <div className="p-2">
                        <FinanceRow 
                            label="Revenue Lift" 
                            type="Projected" 
                            items={["Increased Frequency", "Basket Size Growth"]} 
                            amount="3.0% • $1.8m"
                            icon={ArrowUpRight} 
                            color="bg-brand-green" 
                        />
                        <FinanceRow 
                            label="LTV Increase" 
                            type="New Stream" 
                            items={["Digital Trade Mktg", "Sponsored Boosts"]} 
                            icon={DollarSign} 
                            color="bg-blue-500" 
                        />
                         <FinanceRow 
                            label="Reduction in Discount" 
                            type="Savings" 
                            items={["Reduced Mass Media", "Inventory Optimization"]} 
                            amount="1.2%"
                            icon={BarChart3} 
                            color="bg-purple-500" 
                        />
                     </div>
                 </motion.div>
             </div>

             {/* Performance Table */}
             <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h4 className="text-2xl font-bold text-brand-brown">Additional Sales Sensitivity</h4>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-base text-brand-brown">
                        <thead>
                            <tr className="border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                                <th className="py-2 pr-4">Participation</th>
                                <th className="py-2 pr-4 text-center" colSpan={4}>Additional Sales from Frequency Increase</th>
                            </tr>
                            <tr className="border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                                <th className="py-2 pr-4"></th>
                                <th className="py-2 pr-4 text-center">5%</th>
                                <th className="py-2 pr-4 text-center bg-brand-brown/20 rounded-md font-bold text-brand-brown">10%</th>
                                <th className="py-2 pr-4 text-center">15%</th>
                                <th className="py-2 pr-4 text-center">20%</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                              { participation: "10%", values: ["$300k", "$600k", "$900k", "$1.2m"] },
                              { participation: "20%", values: ["$600k", "$1.2m", "$1.8m", "$2.4m"] },
                              { participation: "30%", values: ["$900k", "$1.8m", "$2.7m", "$3.5m"] },
                              { participation: "40%", values: ["$1.2m", "$2.4m", "$3.6m", "$4.8m"] },
                            ].map((row, idx) => (
                              <tr key={idx} className={row.participation === "30%" ? "bg-brand-red/10" : ""}>
                                  <td className="py-2.5 pr-4 font-semibold">{row.participation}</td>
                                  {row.values.map((val, i) => (
                                    <td 
                                      key={i} 
                                      className={`py-2.5 pr-4 text-center font-semibold text-brand-brown ${i === 1 ? 'bg-brand-brown/20 rounded-md font-bold' : ''}`}
                                    >
                                      {val}
                                    </td>
                                  ))}
                              </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
             </div>

             {/* Summary Box */}
             <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="bg-brand-brown text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
             >
                 {/* Background Graphic */}
                 <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-[-20deg] transform translate-x-12"></div>

                <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2 text-white/90">Projected Outcome</h4>
                    <p className="text-white/60 max-w-lg text-sm leading-relaxed">
                        Even with conservative estimates on enrollment (30%), the lift in frequency projects a positive ROI within year one.
                    </p>
                </div>
                <div className="relative z-10 text-center md:text-right">
                    <div className="text-4xl md:text-5xl font-black text-brand-green mb-1">Year 1</div>
                    <div className="text-sm font-bold uppercase tracking-widest text-white/50">Break Even Target: 1.2%</div>
                </div>
            </motion.div>
         </div>
      </Section>

      {/* Launch Plan Highlights - Slide 1 */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif">8-week Launch Plan</h2>
            <p className="text-lg text-gray-600 mt-2">From awareness to repeat visits. Clear playbook. Clear ROI.</p>
          </div>

          {/* Hero timeline */}
          <div className="relative mb-10">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-brand-brown/20 rounded-full pointer-events-none"></div>
            <div className="grid md:grid-cols-4 gap-6 relative">
              {[
                { phase: "Awareness", weeks: "W1–2", goal: "Introduce The Den", tactics: ["Teaser social/email", "Transit/print live", "In-store QR/signage"], kpi: "Impressions + QR scans", color: "from-brand-red/20 to-orange-400/15" },
                { phase: "Enrollment", weeks: "W3–4", goal: "Drive signups", tactics: ["Bonus points offer", "Meta/Google push", "POS prompts"], kpi: "X signups/store/week", color: "from-orange-400/20 to-yellow-300/15" },
                { phase: "Engagement", weeks: "W5–6", goal: "Build habit", tactics: ["2x Tuesdays", "Local Producer bonus", "MMS/social reminders"], kpi: "Repeat visits vs baseline", color: "from-brand-green/20 to-emerald-300/15" },
                { phase: "Retention", weeks: "W7–8", goal: "Keep active", tactics: ["Win-back SMS/email", "Tier nudges", "Curated picks"], kpi: "Active members + basket", color: "from-blue-500/20 to-cyan-300/15" },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="hidden md:block absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-brown border-2 border-white shadow-md"></div>
                  <div className={`rounded-2xl border border-brand-brown/15 p-7 shadow-md bg-gradient-to-br ${item.color}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold uppercase tracking-wider text-brand-brown/80">{item.weeks}</span>
                      <span className="text-lg font-bold text-brand-brown">{item.phase}</span>
                    </div>
                    <p className="text-xl md:text-2xl font-black text-brand-brown mb-4 leading-snug">{item.goal}</p>
                    <ul className="text-lg md:text-xl text-gray-800 space-y-2 mb-4">
                      {item.tactics.map((t, idx) => <li key={idx}>• {t}</li>)}
                    </ul>
                    <p className="text-lg md:text-xl font-bold text-brand-brown">KPI: {item.kpi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comms cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-bgAlt rounded-3xl border border-gray-100 p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-brand-brown mb-3">Internal Communications</h3>
              <ul className="space-y-2 text-base text-gray-700">
                <li>• Week -2 toolkit + FAQ to store managers</li>
                <li>• In store training roadshow</li>
                <li>• Daily POS accuracy checks at till</li>
                <li>• Weekly KPI email to leadership</li>
              </ul>
            </div>
            <div className="bg-brand-bgAlt rounded-3xl border border-gray-100 p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-brand-brown mb-3">External Cadence</h3>
              <ul className="space-y-2 text-base text-gray-700">
                <li>• Awareness: Teaser social/email, transit/print, in-store QR</li>
                <li>• Enrollment: Bonus points, Meta/Google, POS prompts</li>
                <li>• Engagement: 2x Tuesdays, Local Producer bonus, MMS/social</li>
                <li>• Retention: Win-back SMS/email, tier nudges, curated picks</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Launch Plan Highlights - Slide 2 */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-brown font-serif">Launch Investment & Success Targets</h2>
            <p className="text-lg text-gray-600 mt-1">Budget framed for decision; targets set for Week 8.</p>
          </div>

          {/* Budget summary */}
          <div className="bg-brand-bgAlt rounded-3xl border border-gray-100 p-8 shadow-lg mb-10">
            <h3 className="text-2xl font-bold text-brand-brown mb-6">Budget Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { label: "Moderate", total: "$34,000", lift: "1.64% lift to breakeven" },
                { label: "Comprehensive", total: "$47,500", lift: "1.72% lift to breakeven" },
              ].map((b, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-200 p-7 shadow-lg flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-base font-bold uppercase tracking-wider text-gray-500">{b.label}</span>
                    <span className="text-2xl font-black text-brand-brown">{b.total}</span>
                  </div>
                  <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-gradient-to-r from-brand-brown to-brand-red" style={{ width: i === 0 ? '42%' : '60%' }}></div>
                  </div>
                  <p className="text-base text-gray-800 mb-1">{b.lift}</p>
                  <div className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">Channel mix</div>
                  <div className="grid grid-cols-2 gap-3 text-base text-gray-900">
                    <span className="bg-brand-bgAlt px-4 py-3 rounded-xl border border-gray-200 text-center">Digital Paid</span>
                    <span className="bg-brand-bgAlt px-4 py-3 rounded-xl border border-gray-200 text-center">Traditional</span>
                    <span className="bg-brand-bgAlt px-4 py-3 rounded-xl border border-gray-200 text-center">In-Store</span>
                    <span className="bg-brand-bgAlt px-4 py-3 rounded-xl border border-gray-200 text-center">Owned</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">Detailed channel costs remain in appendix.</p>
          </div>

          {/* Success targets */}
          <div className="bg-brand-brown text-white rounded-3xl p-7 shadow-lg mb-8">
            <h3 className="text-xl font-bold mb-3">Success Targets by Week 12</h3>
            <div className="grid md:grid-cols-3 gap-3 text-base">
              <div>• X signups/store/week (placeholder)</div>
              <div>• +20% member repeat vs baseline</div>
              <div>• Basket +Y% for members (placeholder)</div>
              <div>• Member IDs at till ≥Z% (placeholder)</div>
              <div>• POS accuracy ≥99.5%</div>
              <div>• Repeat visits and QR scans trending up</div>
            </div>
          </div>

          {/* Creative placeholders */}
          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
            <div className="bg-brand-bgAlt border border-dashed border-gray-300 rounded-xl px-4 py-3">Teaser social tile</div>
            <div className="bg-brand-bgAlt border border-dashed border-gray-300 rounded-xl px-4 py-3">In-store QR tent</div>
            <div className="bg-brand-bgAlt border border-dashed border-gray-300 rounded-xl px-4 py-3">Contest promo tile</div>
          </div>
        </div>
      </Section>

      {/* 10. Timeline & Phase 2 */}
      <Section className="bg-brand-cream">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-brand-brown mb-12 text-center font-serif">The Roadmap</h2>
            <div className="space-y-8 relative before:absolute before:left-8 md:before:left-1/2 before:top-0 before:h-full before:w-0.5 before:bg-brand-brown/20 mb-32">
                {[
                    { date: "Nov-Dec 2025", title: "Design & Build", desc: "Alpine IQ config, App Dev, POS Integration" },
                    { date: "Jan-Feb 2026", title: "Test & Train", desc: "QA, Staff Training, Pilot Stores" },
                    { date: "Feb 2026", title: "Launch", desc: "Chain-wide rollout, Marketing Blitz" },
                    { date: "May 2026", title: "Measure", desc: "90-day review & optimization" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1 w-full md:w-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100 relative z-10">
                            <span className="text-brand-red font-bold text-sm tracking-wider uppercase mb-1 block">{item.date}</span>
                            <h3 className="text-xl font-bold text-brand-brown">{item.title}</h3>
                            <p className="text-gray-500 mt-2">{item.desc}</p>
                        </div>
                        <div className="w-4 h-4 bg-brand-brown rounded-full border-4 border-brand-cream z-10 absolute left-[30px] md:left-1/2 md:-ml-2 shadow-sm"></div>
                        <div className="flex-1 hidden md:block"></div>
                    </motion.div>
                ))}
            </div>

            {/* Phase 2 Section */}
            <div className="mt-32">
                <div className="text-center mb-12">
                     <div className="inline-flex items-center gap-2 bg-brand-brown/5 text-brand-brown px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                        <Rocket size={16} /> Coming 2027
                     </div>
                     <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif">Phase 2: Future Horizons</h2>
                     <p className="text-xl text-gray-500 mt-4 max-w-2xl mx-auto">
                        Loyalty is a journey, not a destination. Once the foundation is laid, we expand the ecosystem.
                     </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Subscription */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-gradient-to-br from-gray-900 to-brand-brown text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Crown size={100} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                                <CreditCard className="text-yellow-400" /> 
                            </div>
                            <h3 className="text-2xl font-bold mb-2">The Den Reserve</h3>
                            <p className="text-white/70 mb-6">A paid subscription layer ($99/yr) offering free delivery, unlimited 5% discount, and first access to allocated spirits.</p>
                        </div>
                    </motion.div>

                    {/* Community */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-brand-green/30 transition-colors"
                    >
                        <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6 text-brand-green">
                            <Heart size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-brown mb-2">Community Pour</h3>
                        <p className="text-gray-500">Allowing members to donate points to local charities. Cascadia matches the donation. Turns consumption into community support.</p>
                    </motion.div>

                    {/* AI/Tech */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group hover:border-blue-500/30 transition-colors"
                    >
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-500">
                            <Sparkles size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-brown mb-2">AI Sommelier</h3>
                        <p className="text-gray-500">Using the purchase data to build a "Taste Profile" for every user, offering hyper-personalized recommendations via the app.</p>
                    </motion.div>
                </div>
            </div>
        </div>
      </Section>

      {/* NEW SECTION: Experience Vault (Experiential Rewards) */}
      <Section dark className="bg-brand-brown">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                  <span className="bg-white/10 text-brand-cream px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                      Beyond the Discount
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">The Experience Vault</h2>
                  <p className="text-xl text-white/60 max-w-2xl mx-auto">
                      Points can buy money off, but status buys access. 
                      This is the "secret sauce" that drives emotional loyalty for our top-tier members.
                  </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                  <ExperienceCard 
                      type="The Access"
                      title="Meet the Maker"
                      subtitle="Private, after-hours tasting events with visiting winemakers and master distillers. Intimate, educational, and strictly invite-only."
                      icon={Ticket}
                      image="from-black to-red-900"
                  />
                  <ExperienceCard 
                      type="The Adventure"
                      title="Harvest Tours"
                      subtitle="Annual weekend retreats to partner vineyards in the Okanagan. Members can redeem points for travel packages or exclusive entry."
                      icon={Plane}
                      image="from-black to-green-900"
                  />
                  <ExperienceCard 
                      type="The Acquisition"
                      title="Vault Access"
                      subtitle="First right of refusal on allocated spirits (Pappy, Macallan 25). No line-ups, no bots. Just Grizzly status privileges."
                      icon={Lock}
                      image="from-black to-yellow-900"
                  />
              </div>

              <div className="mt-12 text-center text-white/40 text-sm font-medium flex justify-center items-center gap-2">
                  <CalendarCheck size={16} />
                  <span>Events calendar rotates quarterly</span>
              </div>
          </div>
      </Section>

      <footer className="bg-brand-brown text-white/60 py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 flex items-center justify-center">
          <img src="/logo-footer.png" alt="Cascadia footer logo" className="w-32 md:w-40" />
        </div>
        <p className="font-serif relative z-10">The Den Loyalty Program • Cascadia • 2025</p>
      </footer>
    </div>
  );
}
