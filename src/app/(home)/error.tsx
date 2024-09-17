"use client";
interface ErrorProps{
    error: Error;
    reset: () => void;
}
export default function Error({error, reset}: ErrorProps){
    return (
      <div className={"w-full h-[80vh] flex flex-col justify-center items-center text-5xl "}>
          <div>
              <h1>😭</h1>
          </div>
          <div className={"py-16"}>
              <p>Ha ocurrido un error</p>
          </div>
          <button className={"bg-pink-500 rounded shadow-md shadow  p-2 text-3xl"} onClick={reset}>Reintentar</button>
      </div>
    );
}