import Head from 'next/head';
import Image from 'next/image'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Weather App </title>
      </Head>
      <main className='w-screen h-screen flex flex-row justify-center items-center border-dotted border-2 '>
        {/* Location and Date */}
        <section className="w-[fit-content] h-1/2">
              <section className='py-4'>
                <h1 className='text-7xl font-bold pb-5 '>Lagos, NG</h1>
                <p>4 May, 2023</p>
              </section>

        {/* Temperature reading and cloud adjust */}
            <section className='flex flex-row justify-between items-center '>
              <div className=''>
                <span className='text-3xl font-semibold'>36</span> <sup>&deg;C</sup>
                <p className='text-blue-400'>Broken Clouds</p>
              </div>
              {/* Clouds */}
              <div>
                <Image src='/1.png' alt='clouds' width={100} height={100} />
              </div>
            </section>
              {/* Buttons */}
            <section className='flex justify-between items-center pt-3'>
              <button className='w-[140px] h-[50px] rounded-lg bg-green-500 hover:bg-green-400'>Timestamp</button>
              <button className='w-[140px] h-[50px] rounded-lg bg-red-500 hover:bg-red-400'>My History</button>
            </section>
        </section>
   </main>
    </>
  )
}
