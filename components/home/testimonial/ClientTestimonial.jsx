import EmblaCarousel from "./ClientCarousel"
import Intro from "../Intro"
import { clientData } from "@/lib/constants"

const ClientTestimonial = () => {

    return (
        <section className="max-w-[1320px] mx-auto">
            <Intro
                title={"Our Satisfied Clients"}
                description={"At RPC Limo, our success is measured by the satisfaction of our clients. We take immense pride in building lasting relationships and delivering exceptional service that exceeds expectations. Here's what some of our satisfied clients have to say about their experiences"}
            />
            <EmblaCarousel clientData={clientData}  options={{ loop: true }} />
        </section>
    )
}

export default ClientTestimonial