import ProductCard from "./ProductCard";
import emailMarketing from "../../assets/images/emailMarketing.jpg";

function ListCard() {
  return (
    <>
      <div className="flex flex-col gap-4 mt-6 mb-8">
        <ProductCard
          title="Email Marketing"
          level="Beginner"
          duration="1h 30min"
          img={emailMarketing}
        />
        <ProductCard
          title="SEO"
          level="Beginner"
          duration="1h 30min"
          img={emailMarketing}
        />
        <ProductCard
          title="Google Ads"
          level="Beginner"
          duration="1h 30min"
          img={emailMarketing}
          paramUrl="/education/lesson"
        />
        <ProductCard
          title="CRM"
          level="Beginner"
          duration="1h 30min"
          img={emailMarketing}
        />
        <ProductCard
          title="Graphic Design"
          level="Beginner"
          duration="1h 30min"
          img={emailMarketing}
        />
      </div>
    </>
  );
}

export default ListCard;
