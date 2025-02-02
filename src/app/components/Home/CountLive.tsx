"use client";
import { useEffect, useState } from "react";

const CounterData = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}: {
  end: number | string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startValue = 0;
    const endValue =
      typeof end === "string" ? parseInt(end.replace(/[^0-9]/g, "")) : end;
    const stepTime = duration / endValue;

    let currentCount = startValue;
    const timer = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount >= endValue) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

const CountLive = () => {
  const LiveData = [
    {
      value: "20",
      prefix: ">",
      label: "Years of Experience",
    },
    {
      value: "40",
      suffix: "+",
      label: "Financial Institutions",
    },
    {
      value: "200",
      prefix: ">",
      suffix: "m",
      label: "Customers Each",
    },
  ];
  return (
    <div className="py-16 px-4">
      <h2 className="text-center text-base font-bold text-[#007bff] mb-12">
        TRUSTED BY THE BEST
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-3 gap-5">
        {LiveData.map((live, index) => (
          <div
            key={index}
            className="text-center flex flex-col lg:flex-col md:flex-row sm:flex-row gap-10 justify-center items-center mx-auto  
sm:border-b-2 md:border-b-2 sm:border-dashed md:border-dashed border-gray-200 pb-5 lg:border-0"
          >
            <div className="text-[#007bff] text-5xl font-bold mb-4">
              <CounterData
                end={live?.value}
                prefix={live?.prefix || ""}
                suffix={live?.suffix || ""}
              />
            </div>
            <div className="text-gray-600 text-lg">{live?.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountLive;
