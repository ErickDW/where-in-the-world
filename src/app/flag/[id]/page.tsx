

import './flag.css';
// import { FlagsMock } from '@/utils/mocks';
import { flagsInterface } from '@/utils/interfaces';
import FlagInfo from './components/flagInfo';

async function loadFlag(id: string) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`);
    const data: flagsInterface[] = await res.json();
    return data[0];
}

async function FlagApp({ params }: any) {
    const data: flagsInterface = await loadFlag(params.id);
    return (
        <>
            <div className='flex justify-center'>
                <section className='flex flex-col gap-8 mt-0 md:mt-10 md:gap-16 items-start'>
                    <FlagInfo data={data} />
                </section>
            </div>

        </>
    )
}

export default FlagApp;