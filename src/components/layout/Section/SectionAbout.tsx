import { aboutTopics } from "../../../constants/AboutData.tsx";
import GlowingCard from "../../UI/GlowingCard.tsx";
import GlowingText from "../../UI/GlowingText.tsx";

export default function SectionAbout() {
    return (
        <div className='flex flex-col items-center p-4 pt-16'>
            <GlowingText text='ABOUT ME' />
            <div className='my-12 grid w-full grid-cols-1 place-items-center items-stretch gap-4 lg:my-24 lg:grid-cols-2 lg:gap-16'>
                {aboutTopics.map((topic, idx) => (
                    <GlowingCard
                        key={topic.title}
                        topic={topic}
                        sideOnRight={idx % 2 === 1}
                    />
                ))}
            </div>
        </div>
    );
}
