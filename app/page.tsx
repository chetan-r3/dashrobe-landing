import Image from "next/image";

const DEFAULT_TICKER_ITEMS = [
  "TRY AND BUY",
  "VIDEO CALL",
  "QUICK DELIVERY",
  "BUY ON EMI",
] as const;

async function getTickerItems(): Promise<string[]> {
  // Server-only: replace with await fetch(...) / DB / CMS when needed
  return [...DEFAULT_TICKER_ITEMS];
}

export default async function Home() {
  const tickerItems = await getTickerItems();

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="absolute inset-0 w-screen z-50 h-fit">
        <div className="bg-[#220e92] h-14 lg:h-20 flex items-center justify-center">
          <div className="anim-raster-wrap flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Dashrobe Logo"
              width={500}
              height={40}
              priority
              className="object-contain h-8 lg:h-12 w-auto"
            />
          </div>
        </div>

        {/* Ticker */}
        <div className="clip-motion-safe overflow-hidden bg-[#FFC100]">
          <div className="flex w-max animate-marquee items-center pointer-events-none antialiased">
            {/* Enough repeats so track width ≥ viewport; -50% loop needs an even count of identical segments */}
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-5 lg:gap-6 pl-6 whitespace-nowrap"
                >
                  {tickerItems.map((item, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-5 lg:gap-6 justify-center h-8 lg:h-10"
                    >
                      <span className="ticker-sticker" aria-hidden />
                      <span className="lg:text-xl font-semibold">{item}</span>
                    </span>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section
        className="
        clip-motion-safe max-w-screen overflow-hidden
        flex justify-between items-center
        w-full
        px-6
        pb-6
        pt-10
        lg:p-0
        lg:pl-[100px]
        flex-col lg:flex-row
        gap-10
      "
      >
        {/* Left */}
        <div className="basis-1/2 lg:w-1/2 h-full self-center flex flex-col gap-2 lg:gap-6 justify-center mt-[88px] lg:mt-0">
          <div className="flex items-center justify-center w-[188px] lg:w-[250px] h-[32px] lg:h-[40px] border-[1px] rounded-full text-[18px] lg:text-[24px] font-extrabold tracking-[-0.33px] uppercase text-[#220e92] border-[#220e92] bg-[#EDF1FF] shimmer">
            LAUNCHING SOON
          </div>

          <h1 className="mt-[15px] lg:mt-[20px] font-extrabold uppercase text-[32px] lg:text-[68px] leading-[35px] lg:leading-[72px] tracking-[-0.33px]">
            YOUR WARDROBE,
            <br />
            GOING TO GET
            <br />
            <span className="text-[#220e92]">DELIVERED</span>
          </h1>

          <p
            className="
              mt-[15vpx]
              text-[#71717A]
              font-normal
              text-base
              leading-6
              lg:tracking-[-0.33px]
              max-w-[330px] lg:max-w-[600px]
              lg:text-2xl
              lg:leading-[1.33em]
              lg:mt-[20px]
            "
          >
            Clothes from the best local boutiques and brands around you — at
            your door in under{" "}
            <span className="text-[#FFC100] font-bold">60 minutes</span>. No
            more waiting weeks for what you want to wear tonight.
          </p>
        </div>

        {/* Right */}
        <div className="clip-motion-safe basis-1/2 lg:flex-none w-fit h-full ml-auto overflow-hidden">
          {/* MOBILE LAYOUT */}
          <div className="grid grid-cols-2 grid-rows-[1fr_1fr] gap-[16px] h-fit lg:hidden">
            <img
              src="/img5.jpg"
              className="w-full aspect-[156/164] object-cover"
            />
            <img
              src="/img4.jpg"
              className="w-full aspect-[156/164] object-cover"
            />
            <img
              src="/img3.jpg"
              className="col-span-2 w-full aspect-[328/164] object-cover"
            />
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="overflow-hidden hidden lg:visible lg:grid lg:grid-cols-2 lg:gap-6 h-screen">
            <div className="flex flex-col animate-image-scroll pointer-events-none">
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img1.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img2.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img1.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img2.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
            </div>

            <div className="flex flex-col animate-image-scroll-reverse pointer-events-none">
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img3.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img4.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img5.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img3.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img4.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
              <span className="my-3 block w-[268px] h-full overflow-hidden">
                <img
                  src="/img5.jpg"
                  alt=""
                  width={268}
                  height={520}
                  decoding="sync"
                  loading="eager"
                  className="anim-raster h-full w-full object-cover"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}