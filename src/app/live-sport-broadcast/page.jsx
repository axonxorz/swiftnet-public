import React from "react";
import style from "../styles/styles.module.css";
import styles from "../styles/styles";
import Image from "next/image";
import stream from "../../assets/stream.webp";

const page = () => {
  const sports = [
    {
      id: 1,
      category: "Ice Hockey",
      teams:
        "Calgary Flames™, Edmonton Oilers™, Toronto Maple Leafs™, Montreal Canadiens™, Vancouver Canucks™",
      broadcaster: "Sportsnet™",
      streamingServices: "Sportsnet NOW™, NHL Live™",
    },
    {
      id: 2,
      category: "Canadian Football",
      teams:
        "Edmonton Elks™, Calgary Stampeders™ (Alberta), Saskatchewan Roughriders™ (Saskatchewan)",
      broadcaster: "TSN™",
      streamingServices: "TSN Direct™",
    },
    {
      id: 3,
      category: "Basketball",
      teams: "Toronto Raptors™",
      broadcaster: "TSN™, Sportsnet™",
      streamingServices: "TSN Direct™, Sportsnet NOW™, NBA League Pass™",
    },
  ];
  return (
    <div className="pt-20">
      <div className={`${style.liveSportBroadcast} h-[50vh] md:h-[70vh]`}></div>
      <div className={`${styles.width}`}>
        <div className="md:w-3/5 m-auto">
          <div>
            <h2 className={`${styles.heading} mt-5 mb-3`}>
              Enjoy Live Sports Broadcasts
            </h2>
            <p className={`${styles.paragraph} mb-7`}>
              Swift-Net.ca is your go-to solution for streaming your favorite
              Canadian sports. With our high-speed, reliable internet service,
              you can watch popular sports from Alberta, Saskatchewan, and
              across Canada without interruptions, including the most popular
              sports, teams, broadcasters, and streaming services in Alberta and
              Saskatchewan.
            </p>
          </div>

          <div>
            <p className="text-sm md:text-base tracking-[-0.02em] text-primary bg-[#F1FAFF] px-3 py-1 border-[1px] border-solid border-primary rounded-xl">
              Please note that the trademarks mentioned belong to their
              respective owners, and none of these businesses endorse
              Swift-Net.ca's services.{" "}
            </p>

            <p className={`${styles.paragraph} my-4`}>
              We provide a high-quality internet service that allows you to
              enjoy all online video stream content including content from
              Canada’s favorite sports teams and broadcasters. Here are some
              local favorites:
            </p>
          </div>

          <div className="my-6 flex flex-col gap-5 md:gap-0">
            {sports.map((sport) => (
              <div
                key={sport.id}
                className="flex flex-col md:flex-row justify-between gap-1 md:gap-10"
              >
                <div className="basis-1/5">
                  <h6 className="text-sm md:text-base tracking-[-0.02em] font-semibold">
                    {sport.category}
                  </h6>
                </div>

                <div className="flex flex-col gap-3 basis-[78%]">
                  <div>
                    <span className="text-[#4B5563] text-sm">Teams</span>
                    <p className={`${styles.paragraph}`}>{sport.teams}</p>
                  </div>

                  <div>
                    <span className="text-[#4B5563] text-sm">Broadcaster</span>
                    <p className={`${styles.paragraph}`}>{sport.broadcaster}</p>
                  </div>

                  <div>
                    <span className="text-[#4B5563] text-sm">
                      Streaming Services
                    </span>
                    <p className={`${styles.paragraph}`}>
                      {sport.streamingServices}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <Image src={stream} alt="" className="w-full" />
            <div>
              <span
                className={`${styles.paragraph} font-semibold mt-4 mb-1 block`}
              >
                Unique Advantages for Live Sports Video Streaming
              </span>
              <p className={`${styles.paragraph}`}>
                Our internet service is designed to provide the best possible
                live video streaming experience, making it ideal for watching
                live sports events. With our fast, reliable connection, you can
                enjoy your favorite games without worrying about buffering or
                lag. Our service supports multiple simultaneous streams,
                ensuring that everyone in your household can watch their
                preferred sports without any interruptions. <br /> <br />
                Swift-Net.ca is the perfect choice for sports enthusiasts who
                want to stream their favorite games seamlessly. Our high-speed,
                reliable internet service allows you to watch popular sports
                events from Alberta, Saskatchewan, and across the world without
                any interruptions. Choose Swift-Net.ca for an unparalleled
                sports streaming experience. <br /> <br />
                *Please note that the sports teams and broadcasters mentioned on
                this website are for informational purposes only and should not
                be considered as an endorsement of our services by the
                respective teams, broadcasters, or their affiliated
                organizations. All trademarks and logos belong to their
                respective owners. Our aim is to provide a high-quality internet
                service that allows you to enjoy their games seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
