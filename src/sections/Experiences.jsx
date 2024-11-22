import { BsSuitcaseLg } from "react-icons/bs";
import inmetro from "../assets/img/inmetro.jpg"
import ifpa from "../assets/img/if.png"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

export function Experiences() {
    return (
        <section>
            <div className="flex items-center gap-3 text-base sm:text-lg md:text-xl" >
                <BsSuitcaseLg />
                <h2>Experiências</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="border-t relative">
                        <div className="w-full flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-base">Estágiario de Ti</h3>
                                <p className="text-xs capitalize text-zinc-200">out 2024 - present</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg overflow-hidden">
                                    <img src={inmetro} alt={`logo do ${inmetro}`} className="w-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <spam>Inmetro</spam>
                                    <span className="font-normal text-zinc-200">Presencial</span>
                                </div>
                            </div>
                        </div>
                        <p className="absolute bottom-[13px] left-6 text-zinc-500 hover:text-zinc-50 duration-200 transition-colors">Experiências passadas</p>
                    </AccordionTrigger>

                    <AccordionContent>
                        <div className="w-full flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-base">Monitor do Laborátorio de Informática</h3>
                                <p className="text-xs capitalize text-zinc-200">mar 2022 - out 2022</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-50 rounded-lg overflow-hidden mt-1">
                                    <img src={ifpa} alt={`logo do ${ifpa}`} />
                                </div>
                                <div className="flex flex-col">
                                    <spam className="text-xs text-blue-600">Inmetro</spam>
                                    <span className="text-xs text-zinc-200">Presencial</span>
                                </div>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}