import React from "react";
import ArrowRise from "../../assets/Dashboard/ArrowRise";

interface EcommerceCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  background?: string;
  testId?: string;
}

const EcommerceCard: React.FC<EcommerceCardProps> = ({
  title,
  value,
  change,
  isPositive,
  background = "bg-gray-50",
  testId
}) => (
  <section
    className={`flex flex-col justify-center rounded-[2rem] px-6 py-8 ${background}`}
    aria-label={`${title} Card`}
    data-testid={testId}
  >
    <h3 className="pb-2 text-lg font-semibold text-gray-700" data-testid={`${testId}-title`}>
      {title}
    </h3>
    <div className="flex justify-between" data-testid={`${testId}-content`}>
      <span className="text-3xl font-bold text-black" data-testid={`${testId}-value`}>
        {value}
      </span>
      <div className="mt-2 flex items-center space-x-2" data-testid={`${testId}-change`}>
        <span className={`text-sm font-medium`}>{change}</span>
        <span aria-label="trend" className={`${!isPositive && "rotate-180"}`}>
          <ArrowRise />
        </span>
      </div>
    </div>
  </section>
);

export default EcommerceCard;
