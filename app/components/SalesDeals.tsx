'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SalesDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 24,
    minutes: 350,
    seconds: 96
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
      } else if (timeLeft.days > 0) {
        setTimeLeft({ ...timeLeft, days: timeLeft.days - 1, hours: 23, minutes: 59, seconds: 59 });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Avatar placeholders
  const avatarColors = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  return (
    <section id="deals" className="py-16 bg-white text-black text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center">
            <h2 className="text-7xl font-bold mb-0 text-black">Hurrah!</h2>
            <h3 className="text-7xl font-bold mb-10 text-black">Deals-2025<br />Starting<br />Soon</h3>
            
            <div className="mt-8">
              <div className="flex flex-col items-start">
                <h4 className="text-7xl font-bold text-black mb-1 text-left">125k+</h4>
                
                <div className="flex items-start">
                  <div className="flex -space-x-2 mr-4 mt-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((num, index) => (
                      <div 
                        key={num}
                        className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold overflow-hidden"
                        style={{ backgroundColor: avatarColors[index % avatarColors.length] }}
                      >
                        <Image 
                          src={`/images/avatar${num}.jpg`} 
                          alt={`Customer ${num}`} 
                          width={40} 
                          height={40}
                          className="object-cover"
                          onError={(e) => {
                            // If image fails to load, show initials instead
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              parent.innerText = `U${num}`;
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="-mt-10">
                    <p className="text-sm text-black text-left">
                      Customer already grabbed the deals another<br />
                      20k registered for taking the deals so dont be late and<br />
                      hits the website for taking advanced opportunity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-4xl font-bold mb-2 text-black">48 Hours</h3>
              <h4 className="text-5xl font-bold text-blue-500 mb-4">Flash Sale</h4>
              <p className="text-lg mb-6 text-black">
                <span className="font-bold">25% off</span> Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has
              </p>
              
              {/* Countdown Timer */}
              <div className="flex justify-center space-x-4 my-8">
                <div className="bg-blue-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">01</span>
                  <span className="text-sm">Days</span>
                </div>
                <div className="bg-blue-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">24</span>
                  <span className="text-sm">Hours</span>
                </div>
                <div className="bg-blue-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">350</span>
                  <span className="text-sm">Minutes</span>
                </div>
                <div className="bg-blue-500 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">96</span>
                  <span className="text-sm">Seconds</span>
                </div>
              </div>
              <p className="text-xl font-bold mb-4 text-black">The time is ending soon so dont late</p>
              <p className="text-black mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the.
              </p>
              
              <div className="text-center">
                <Link href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold inline-block text-lg">
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesDeals; 