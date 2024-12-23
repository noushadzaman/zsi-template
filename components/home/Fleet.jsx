import { fleetData } from "@/lib/constants";
import Intro from "./Intro"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageCarousel from "./ImageCarousel";
import ItemInfo from "./ItemInfo";

const Fleet = () => {
    return (
        <section className="max-w-[1320px] mx-auto">
            <Intro
                title={"Discover Our Fleet"}
                description={"Embark on a journey of luxury and sophistication as you discover our exquisite fleet of vehicles designed to redefine your travel experience. Each vehicle in our fleet is a testament to our commitment to elegance, comfort, and reliability. Here's a glimpse into the diverse offerings that await you."}
            />

            <Tabs defaultValue={fleetData[0].value} className="mt-[60px]">
                <TabsList className="flex flex-col md:flex-row md:flex-wrap">
                    {
                        fleetData.map(item => (
                            <TabsTrigger
                                key={item.id}
                                value={item.value}
                            >{item.title}</TabsTrigger>
                        ))
                    }
                </TabsList>

                {
                    fleetData.map(item => (
                        <TabsContent className="bg-[#da9100] p-[15px]" key={item.id} value={item.value}>
                            <ImageCarousel images={item.imges} />
                            <ItemInfo item={item} />
                        </TabsContent>
                    ))
                }

            </Tabs>
        </section>
    )
}

export default Fleet