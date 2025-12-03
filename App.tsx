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
  CalendarCheck
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
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full relative overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} opacity-10 rounded-bl-[3rem] -mr-4 -mt-4`}></div>
    
    <div className="flex items-center gap-4 mb-4 relative z-10">
      <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
        <Icon size={24} className={barColor.replace('bg-', 'text-')} /> 
      </div>
      <div>
        <h4 className="font-bold text-lg text-brand-brown">{name}</h4>
        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">{type}</span>
      </div>
    </div>
    
    <div className="flex-grow">
      <p className="text-sm text-gray-600 mb-2 italic">"{habits}"</p>
      <p className="text-xs text-gray-400 mb-4">{spend}</p>
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-100 bg-gray-50 -mx-6 -mb-6 p-6">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-500 font-medium">Est. Pts/Yr</span>
        <span className="font-bold text-brand-brown">{points}</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-3">
        <div 
          className={`h-full ${barColor}`} 
          style={{ width: progress }}
        ></div>
      </div>
      <div className="flex justify-between items-center">
         <span className="text-xs text-gray-400 uppercase tracking-wide">Status</span>
         <span className={`text-sm font-black ${barColor.replace('bg-', 'text-')}`}>{status}</span>
      </div>
    </div>
  </motion.div>
);

const FinanceRow = ({ label, type, items, icon: Icon, color }: any) => (
  <div className="flex gap-4 items-start p-4 border-b border-gray-100 last:border-0">
    <div className={`p-2 rounded-lg ${color} bg-opacity-10 mt-1`}>
       <Icon size={18} className={color.replace('bg-', 'text-')} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-bold text-brand-brown">{label}</h4>
        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded ${color} bg-opacity-10 ${color.replace('bg-', 'text-')}`}>{type}</span>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
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
      <Section className="bg-white">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
          <div className="relative h-[400px] bg-white rounded-3xl p-8 shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
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
      </Section>

      {/* 6. Tiers & Multipliers */}
      <Section className="bg-brand-bgAlt">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-brown font-serif">Three Tiers of Loyalty</h2>
          <p className="text-xl text-gray-500 mt-4">Designed to drive aspiration and consistency.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
            {[
                { name: "Cub", pts: "10", sub: "Entry Level", color: "bg-gray-100", border: "border-gray-200", icon: "🐻" },
                { name: "Brown Bear", pts: "12.5", sub: "Mid Tier", color: "bg-orange-50", border: "border-orange-200", icon: "🐻", highlight: true },
                { name: "Grizzly", pts: "15", sub: "VIP Status", color: "bg-brand-brown text-white", border: "border-brand-brown", icon: "👑" }
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
                    <div className="mb-6">
                        <span className="text-4xl font-black">{tier.pts}</span>
                        <span className="text-lg opacity-80"> pts / $1</span>
                    </div>
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
               Thresholds: <span className="font-bold text-brand-brown bg-brand-brown/10 px-2 py-0.5 rounded mx-1">10,000 pts</span> for Brown Bear, 
               <span className="font-bold text-brand-brown bg-brand-brown/10 px-2 py-0.5 rounded mx-1">25,000 pts</span> for Grizzly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
             <PersonaCard 
               name="Joe"
               type="The Minimalist"
               icon={Beer}
               color="bg-gray-400"
               barColor="bg-gray-400"
               habits="Grabs a 6-pack once a month."
               spend="$360/year"
               points="3,600"
               status="Cub Forever"
               progress="14%"
             />
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
               name="Ted"
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
               name="Victoria"
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

        {/* Multipliers Section */}
        <div className="mt-24">
            <h3 className="text-2xl font-bold text-brand-brown mb-8 text-center">Smart Multipliers</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: "App Usage", val: "12 pts/$1", desc: "Drives digital adoption & data capture." },
                    { title: "Private Label", val: "15 pts/$1", desc: "Higher margins, supports local." },
                    { title: "New Releases", val: "3x Points", desc: "Moves inventory fast in first 30 days." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center"
                    >
                        <h4 className="text-gray-500 font-bold uppercase text-xs tracking-wider mb-2">{item.title}</h4>
                        <div className="text-3xl font-black text-brand-red mb-2">{item.val}</div>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                    </motion.div>
                ))}
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

      {/* 7. NEW CRM Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left: Strategy */}
             <div>
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

      {/* 8. The Platform (Alpine IQ) */}
      <Section dark className="bg-brand-dark">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">The Engine: Alpine IQ</h2>
                    <p className="text-xl text-gray-400 max-w-2xl">The Den is built on proven technology, not hope.</p>
                </div>
                <div className="flex gap-4">
                    <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
                        <span className="block text-2xl font-bold text-brand-green">1,000+</span>
                        <span className="text-xs text-gray-400">Retailers</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-xl border border-white/10">
                        <span className="block text-2xl font-bold text-brand-green">28%</span>
                        <span className="text-xs text-gray-400">Freq. Lift</span>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PlatformCard 
                    icon={Database} 
                    title="Deep Integration" 
                    desc="Direct POS connection with Stellar. Real-time points accrual and instant redemption at checkout." 
                />
                <PlatformCard 
                    icon={Smartphone} 
                    title="Native Mobile" 
                    desc="Full iOS and Android apps. Not a web wrapper. Real native experiences with offline support." 
                />
                <PlatformCard 
                    icon={BarChart3} 
                    title="Analytics Suite" 
                    desc="Member-level purchase history, cohort analysis, and predictive modeling." 
                />
                <PlatformCard 
                    icon={Zap} 
                    title="Marketing Auto" 
                    desc="Triggered campaigns and segmented messaging to engage members without manual work." 
                />
                <PlatformCard 
                    icon={ShieldCheck} 
                    title="Enterprise Grade" 
                    desc="PIPA compliant, SOC 2 certified, encrypted data. Role-based access control." 
                />
                <PlatformCard 
                    icon={Wine} 
                    title="Industry Specific" 
                    desc="Built specifically for regulated industries like cannabis and liquor." 
                />
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
                            icon={Database} 
                            color="bg-brand-brown" 
                        />
                        <FinanceRow 
                            label="Points Liability" 
                            type="Variable (COGS)" 
                            items={["1-2% of Revenue", "Breakage Estimates"]} 
                            icon={PieChart} 
                            color="bg-brand-red" 
                        />
                         <FinanceRow 
                            label="Marketing" 
                            type="Launch Only" 
                            items={["In-store Signage", "Digital Ads"]} 
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
                            icon={ArrowUpRight} 
                            color="bg-brand-green" 
                        />
                        <FinanceRow 
                            label="Vendor Funding" 
                            type="New Stream" 
                            items={["Digital Trade Mktg", "Sponsored Boosts"]} 
                            icon={DollarSign} 
                            color="bg-blue-500" 
                        />
                         <FinanceRow 
                            label="Efficiency" 
                            type="Savings" 
                            items={["Reduced Mass Media", "Inventory Optimization"]} 
                            icon={BarChart3} 
                            color="bg-purple-500" 
                        />
                     </div>
                 </motion.div>
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
                        Even with conservative estimates on enrollment (40%), the lift in frequency combined with vendor-funded campaigns projects a positive ROI within year one.
                     </p>
                 </div>
                 <div className="relative z-10 text-center md:text-right">
                     <div className="text-4xl md:text-5xl font-black text-brand-green mb-1">Year 1</div>
                     <div className="text-sm font-bold uppercase tracking-widest text-white/50">Break Even Target</div>
                 </div>
             </motion.div>
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

      <footer className="bg-brand-brown text-white/40 py-12 text-center">
        <p className="font-serif">The Den Loyalty Program • Cascadia • 2025</p>
      </footer>
    </div>
  );
}