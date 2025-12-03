import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Gift, Zap, Star, Menu } from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative flex flex-col">
        {/* Dynamic Island Area */}
        <div className="absolute top-0 w-full h-8 bg-black z-20 flex justify-center">
            <div className="w-24 h-6 bg-black rounded-b-xl"></div>
        </div>

        {/* App Header */}
        <div className="bg-gradient-to-br from-brand-red to-[#a81c1c] pt-12 pb-6 px-6 text-white shadow-lg z-10">
          <div className="flex justify-between items-center mb-4">
            <span className="font-black tracking-tighter text-lg flex items-center gap-1">
              🐻 THE DEN
            </span>
            <Menu className="w-6 h-6" />
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 inline-flex items-center gap-2">
            <Star className="w-4 h-4 fill-white" />
            <span className="font-bold text-sm">12,450 pts</span>
          </div>
        </div>

        {/* App Body */}
        <div className="flex-1 overflow-hidden bg-gray-50 p-4 flex flex-col gap-4">
          
          {/* Progress Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="flex justify-between items-end mb-2">
              <span className="text-brand-brown font-extrabold text-sm tracking-wide">BROWN BEAR</span>
              <span className="text-xs text-gray-500 font-medium">Mid-Tier</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
              <motion.div 
                className="h-full bg-gradient-to-r from-brand-red to-orange-500"
                initial={{ width: 0 }}
                whileInView={{ width: '65%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
            <p className="text-xs text-gray-400">7,550 pts to Grizzly Status</p>
          </motion.div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-orange-50 p-3 rounded-xl border border-orange-100 flex flex-col items-center text-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    <Zap size={16} />
                </div>
                <span className="text-xs font-bold text-brand-brown">Boosts</span>
             </div>
             <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 flex flex-col items-center text-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Gift size={16} />
                </div>
                <span className="text-xs font-bold text-brand-brown">Rewards</span>
             </div>
          </div>

          {/* Feed */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">For You</h4>
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-3 rounded-xl border-l-4 border-brand-red shadow-sm flex items-start gap-3"
            >
              <div className="bg-brand-red/10 p-2 rounded-full">
                <Gift className="w-4 h-4 text-brand-red" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Birthday Bonus!</p>
                <p className="text-xs text-gray-500">5x points active for 24h</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-3 rounded-xl border-l-4 border-blue-500 shadow-sm flex items-start gap-3"
            >
              <div className="bg-blue-50 p-2 rounded-full">
                <MapPin className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">Nearby: Caddy Bay</p>
                <p className="text-xs text-gray-500">Open until 10:00 PM</p>
              </div>
            </motion.div>
          </div>

        </div>
        
        {/* Tab Bar */}
        <div className="bg-white border-t p-4 flex justify-around items-center pb-6">
            <div className="w-6 h-6 rounded-full bg-brand-brown"></div>
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};