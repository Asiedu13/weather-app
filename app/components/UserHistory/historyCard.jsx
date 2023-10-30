"use client"
export default function HistoryCard( props ) {
  return (
    <section className="rounded-sm bg-neutral-50 text-neutral-950 w-[inherit] h-[210px] mb-4">
      {/* Time */}
      <div className="flex flex-col h-28  justify-center p-5">
        <h2 className="uppercase text-neutral-800 font-semibold text-xl">
          {" "}
          {props.data.city}, {props.data.code} - {props.data.date}
        </h2>
        <p>{props.data.time}</p>
      </div>
      <hr />
      {/* Weather Stats */}
      <div className="p-5 h-20 flex flex-col justify-between">
        <p className="pb-4">Temperature: {props.data.temperature}&deg;C</p>
        <p>Condition: {props.data.description}</p>
      </div>
    </section>
  );
}
