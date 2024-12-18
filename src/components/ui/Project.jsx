// Components
import { Card, CardContent } from "../ui/card"

// Icons
import { MdArrowOutward } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";


export function Project({ title, link, img, github }) {
    return (
        <Card >
            <CardContent className='bg-transparent'>
                <div className="w-full rounded-lg overflow-hidden group relative">
                    <img href={link} className="object-fill transform transition-transform duration-500 group-hover:scale-110 group-hover:z-10" src={img} alt={title} />
                    <a className="w-full h-full absolute flex items-center justify-center top-0 left-0 opacity-0 bg-black group-hover:opacity-50 transition-opacity" href={link} target="_blank">
                        <MdArrowOutward className="text-white text-2xl z-50" />
                    </a>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <h3 className="text-base capitalize ">{title}</h3>
                    <div className="flex gap-2 text-[10px]">
                        <a href={github} target="_blank" className="tracking-wider bg-zinc-900 hover:bg-zinc-800 px-2 py-1 rounded-lg uppercase font-medium transition-colors duration-600 flex items-center gap-2">
                            <FiGithub className="text-zinc-400 text-sm"/>
                            Github
                        </a>
                        <a href={link} target="_blank" className="tracking-wider bg-zinc-900 hover:bg-zinc-800 px-2 py-1 rounded-lg uppercase font-medium transition-colors duration-600 flex items-center gap-2">
                            <CiGlobe className="text-blue-500 text-sm mb-[2px]"/>
                            Deploy
                        </a>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}