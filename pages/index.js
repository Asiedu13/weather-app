import Head from 'next/head';
import Image from 'next/image'
export default function Home({city, country_code}) {
  
  const dateString = new Date().toDateString(' ').split(' ')
  const today = `${dateString[2]} ${dateString[1]} ${dateString[3]}`
  
  return (
    <>
      <Head>
        <title>Home | Weather App </title>
      </Head>
      <main className='w-screen h-screen flex flex-row justify-center items-center border-dotted border-2 p-4 '>
        {/* Location and Date */}
        <section className="w-[fit-content] h-1/2">
              <section className='py-4'>
                <h1 className='text-7xl font-bold pb-5 '> {city}, {country_code}</h1>
                <p> {today}</p>
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

export async function getServerSideProps() {
  const locationFetching = await fetch('https://api.geoapify.com/v1/ipinfo?apiKey=3f5109a61213408d95d762e8dbe73a0f')
  const location = await locationFetching.json()
  const city = location.city.name;
  const country_code = location.country.iso_code
  
  return {props: {city, country_code}}
}