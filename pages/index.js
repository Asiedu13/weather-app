import Head from 'next/head';
import Link from 'next/link'

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
              <button onClick={()=> saveWeather(city, country_code, today, Math.round(weatherInfo.main.temp),weatherInfo.weather[0].description )}className='w-[140px] h-[50px] rounded-lg bg-green-500 hover:bg-green-400'>Timestamp</button>
             <Link href='/history'> 
             <button className='w-[140px] h-[50px] rounded-lg bg-red-500 focus:bg-red-400 hover:bg-red-400'>My History</button>
             </Link>
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

  const api_key = '71d9bea5ed7a76c4ac386e9ec05a4f74';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${api_key}&units=metric`;
  const weatherRequest = await fetch(url);
  const weatherInfo = await weatherRequest.json();
  
  return {props: {city, country_code, weatherInfo}}
}


const saveWeather = (city, code, date, temperature, description) => {
  let hours = new Date().getHours().toString().padStart(2, '0');
  let mins = new Date().getMinutes().toString().padStart(2, '0');
  let seconds = new Date().getSeconds().toString().padStart(2, '0');;
  console.log(hours)
  let time = `${hours}:${mins}:${seconds}`
  let data = {
    city,
    code,
    date,
    time: time,
    temperature,
    description,
  }

  let existingData = localStorage.getItem('weatherHistory')
  existingData = JSON.parse(existingData)

  if (existingData == null) {
    existingData = []
    existingData.push(data)
    localStorage.setItem('weatherHistory', JSON.stringify(existingData))
  } else {
    existingData.push(data)
    localStorage.setItem('weatherHistory', JSON.stringify(existingData))
  }
}