import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQData } from "@/lib/constants"
import Intro from "../Intro"

const FAQ = () => {

    return (
        <section className="max-w-[1320px] mx-auto mt-[100px] space-y-5">
            <Intro title="Frequently Asked Questions for RPC Limo Service" />
            <Accordion defaultValue={FAQData[0].id} type="single" collapsible>
                {
                    FAQData.map(item => <AccordionItem
                        key={item.id}
                        value={item.id}>
                        <AccordionTrigger>
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>)
                }
            </Accordion>
        </section>
    )
}

export default FAQ