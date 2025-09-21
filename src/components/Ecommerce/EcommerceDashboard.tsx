import { ecommerceMetrics } from "../../constants";
import EcommerceCard from "./EcommerceCard";

const EcommerceDashboard: React.FC = () => (
  <section aria-labelledby="ecommerce-section" className="grid w-full grid-cols-2 gap-6">
    {/* <h2 id="ecommerce-section" className="col-span-2 mb-4 text-xl font-bold">
      eCommerce
    </h2> */}
    {ecommerceMetrics.map((metric) => (
      <EcommerceCard key={metric.title} {...metric} />
    ))}
  </section>
);

export default EcommerceDashboard;
