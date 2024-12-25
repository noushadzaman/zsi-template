import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import ClientTestimonial from "@/components/home/testimonial/ClientTestimonial";
import Fleet from "@/components/home/Fleet/Fleet";
import QuickPriceCheck from "@/components/home/QuickPriceCheck";
import Services from "@/components/home/Services";
import Video from "@/components/home/Video";
import FAQ from "@/components/home/FAQ/FAQ";
import LocationPicker from "@/components/home/test/LocationPicker";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
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
      <section className="mt-[60px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px]">
        <ClientTestimonial />
      </section>
      <section className="mt-[60px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px]">
        <Video />
      </section>
      <section className="mt-[60px] mb-[50px] px-[22px] md:px-[30px] lg:px-[50px] xl:px-[70px]">
        <FAQ />
        <LocationPicker />
      </section>
    </div>
  );
}
