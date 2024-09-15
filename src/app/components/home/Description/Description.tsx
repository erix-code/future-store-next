import Image from "next/image";
export default function Description() {
    const blurImage = "data:image/webp;base64,UklGRjIEAABXRUJQVlA4WAoAAAAgAAAAyQAAZAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggRAIAABAWAJ0BKsoAZQA+MRiKRCIhopA0fCgDBLO3cBuecUzqKh33Qcm8EB2hSXtdfnStCRGL+zcAtuSET6UlYwr5czK1zjHMF7X//lHRQAxXMNYnD797Pz3gZUEy09lv///ujaOWUhBexK2D0GLGN/3gSCvkD9/8FOSzf7jyzYPGH3kLneKeh42zQ0yJflhovQF//8rBt83833keiGCoSz7mFA/tL0//LH8Ov8BA6nA9o+UUsuqgCjChCDCAAP78SSKDL/6u+2Pztar//Fof2NfzD4hGzEQxqc+kJErg/eHyozPfIl0pk5P6oiWruP7fmPJETiar1T1kr3Ev6eXvjVoo6RIBnZn+Vzo+oHi6JdWtODAqCgGcOVliDvuQUofrI4MaTGpRzLfFPnICh8+t3uyLhIe+lFmFdiKpEEfRSwA/zS4kSz/fyaldhcqIKzjcjn4RBz07qvS3AenTI5k22EbYOuBmkGvMPGQGqQ4C1Q80nqRRpGJGxA1HK3HY1lCOYiGV6Lcj2GSB5taBSsFIBYN41e2s+z0uJQxZyC3jmyuVtpFWT0jw5VRxGY+itbWpvn442joBSx/igWoQE8KwtZ6e9FHR5mrUNA3JGbLHZ43SuLxtcNSLv5URKexL3ln49WGSw78ss3GFWExSO5b+5SOVabrqTq/mNB2Vs7qsAnBov0gUBsqm3dtmEXeQlmoQwgzQk6loWynhlTqQQb52hIPKEiXuqgB2BLR91bR2ysKpVXXxppDihPG6LZRr2tpOjDCLSnogAAA=";
    return (
        <section className={"flex justify-center"}>
            <div className={"grid md:grid-cols-2 pt-32 w-9/12 lg:w-8/12   md:gap-x-24 grid-cols-1"}>
                <Image priority={false} quality={100}
                       placeholder={"blur"} blurDataURL={blurImage}
                       src={"/images/description.jpeg"} width={500} height={300} alt={"Product marketplace"} className={"object-cover w-full h-5/6 xl:h-3/6 rounded shadow-light-shadow col-span-1"}>
                </Image>
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