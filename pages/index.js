import Head from 'next/head';
import Image from 'next/image'

export default function Home({city, country_code, weatherInfo}) {  
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
                <span className='text-3xl font-semibold'>{Math.round(weatherInfo.main.temp)}</span> <sup>&deg;C</sup>
                <p className='text-blue-400 uppercase'>{weatherInfo.weather[0].description}</p>
              </div>
              {/* Clouds */}
              <div>
                <img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt='clouds' width={100} height={100} />
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

export function myImageLoader({ src, width, quality }) {
  return `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`
}

export async function getServerSideProps() {
  const locationFetching = await fetch('https://api.geoapify.com/v1/ipinfo?apiKey=3f5109a61213408d95d762e8dbe73a0f')
  const location = await locationFetching.json()
  const city = location.city.name;
  const country_code = location.country.iso_code

  const api_key = '71d9bea5ed7a76c4ac386e9ec05a4f74';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${api_key}&units=metric`;
  const weatherRequest = await fetch(url);
  const weatherInfo = await weatherRequest.json();
  
  return {props: {city, country_code, weatherInfo}}
}