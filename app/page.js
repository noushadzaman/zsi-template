import About from "@/components/home/About";

import QuickPriceCheck from "@/components/home/QuickPriceCheck";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>

      <section className="mt-[50px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px]">
        <QuickPriceCheck />
      </section>
      <section className="mt-[60px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px] bg-[#da9100]">
        <About />
      </section>
      <section className="mt-[60px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px]">
        <Services />
      </section>
     
    </>
  );
}
