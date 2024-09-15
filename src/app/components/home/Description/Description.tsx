export default function Description() {
    return (
        <section className={"flex justify-center"}>
            <div className={"grid md:grid-cols-2 pt-32 w-9/12 lg:w-8/12   md:gap-x-24 grid-cols-1"}>
                <img src="/images/description.jpeg" className={"object-cover w-full h-5/6 xl:h-3/6 rounded shadow-light-shadow col-span-1"} alt="Products Marketplace"
                     />
                <div className={"col-span-1"}>
                    <h2 className={"text-4xl font-semibold pt-2 lg:pb-14"}> Bring the future today</h2>
                    <p className={"text-justify lg:text-xl xl:text-3xl"}>
                        Future World: Your Gateway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.
                    </p>
                </div>
            </div>
        </section>
    )
}