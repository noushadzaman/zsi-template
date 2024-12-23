import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Fleet from "@/components/home/Fleet";
import QuickPriceCheck from "@/components/home/QuickPriceCheck";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="mt-[50px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px]">
        <QuickPriceCheck />
      </section>
      <section className="mt-[60px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px] bg-[#da9100]">
        <About />
      </section>
      <section className="mt-[60px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px]">
        <Services />
      </section>
      <section className="mt-[60px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px]">
        <Fleet />
      </section>
    </>
  );
}
