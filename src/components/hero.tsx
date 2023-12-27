import { hero } from '@/data';

import { Typewriter } from './typewriter';

export const Hero = () => {
    
    const speed = 30;
    const delay = 200;
    const duration = 1000;
    const line1Delay = delay + hero.line1.length * speed + duration;
    const line2Delay = line1Delay + hero.line2.length * speed + duration;


  

    return (
        <section className='home hero'>
            <div className="container">
                <h1>
                    <Typewriter text={hero.line1} speed={speed} delay={delay} />
                    <Typewriter text={hero.line2} speed={speed} delay={line1Delay} lingerDuration={0} />
                    <Typewriter text={hero.line3} speed={speed} delay={line2Delay} lingerDuration={0} />
                </h1>
            </div>
        </section>
    );
};