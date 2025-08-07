import { useEffect, useState } from "react";
const campusBackground = "/images/banner1.jpg"; // Update path if needed


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
    const targetDate = new Date("2026-06-26T00:00:00");

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
      <div className="relative z-10 text-center text-white px-4">
        <div className="bg-black/70 backdrop-blur-sm p-8 rounded-lg max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            4th International Conference on Innovative Trends in Engineering and Technology (ICITET-2026).
          </h1>
          
          <div className="mt-8">
            <h2 className="text-xl mb-2 text-gray-300">Conference Date</h2>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              17<sup>th</sup> to 19<sup>th</sup> June 2026
            </h3>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="bg-primary text-primary-foreground p-4 rounded-lg min-w-[80px]">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-sm uppercase">Days</div>
              </div>
              <div className="bg-primary text-primary-foreground p-4 rounded-lg min-w-[80px]">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm uppercase">Hours</div>
              </div>
              <div className="bg-primary text-primary-foreground p-4 rounded-lg min-w-[80px]">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm uppercase">Minutes</div>
              </div>
              <div className="bg-primary text-primary-foreground p-4 rounded-lg min-w-[80px]">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm uppercase">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
