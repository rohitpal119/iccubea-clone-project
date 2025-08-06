import { useEffect, useState } from "react";
import campusBackground from "@/assets/campus-background.jpg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-08-22T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${campusBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 w-full">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-black/70 backdrop-blur-sm p-8 lg:p-12 rounded-lg">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
              9th International Conference on Control Communication,<br />
              Computing & Automation (ICCUBEA-2025)
            </h1>
            
            <div className="mt-8">
              <h2 className="text-xl lg:text-2xl mb-4 text-gray-300">Conference Date</h2>
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-8">
                22<sup>nd</sup> & 23<sup>rd</sup> August 2025
              </h3>
              
              <div className="flex justify-center gap-4 lg:gap-6 flex-wrap max-w-md mx-auto">
                <div className="bg-primary text-primary-foreground p-4 lg:p-6 rounded-lg flex-1 min-w-[90px]">
                  <div className="text-2xl lg:text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm lg:text-base uppercase tracking-wide">Days</div>
                </div>
                <div className="bg-primary text-primary-foreground p-4 lg:p-6 rounded-lg flex-1 min-w-[90px]">
                  <div className="text-2xl lg:text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm lg:text-base uppercase tracking-wide">Hours</div>
                </div>
                <div className="bg-primary text-primary-foreground p-4 lg:p-6 rounded-lg flex-1 min-w-[90px]">
                  <div className="text-2xl lg:text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm lg:text-base uppercase tracking-wide">Minutes</div>
                </div>
                <div className="bg-primary text-primary-foreground p-4 lg:p-6 rounded-lg flex-1 min-w-[90px]">
                  <div className="text-2xl lg:text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm lg:text-base uppercase tracking-wide">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;