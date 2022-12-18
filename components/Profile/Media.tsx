import Image from "next/image";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import dataContext from "../../Helper/dataContext";

export default function Media() {
  const traveller: any = useContext(dataContext);
  const { data } = traveller;
  console.log(data)
  return (
    <section className="w-full grid grid-cols-5 gap-4 py-4">
      {data.media
        ? data.media.map((medium: string) => {
            return (
              <div className="relative w-full aspect-square">
                <div className="bg-white absolute bottom-0 right-0 z-20 py-2 px-2">
                  <ImCross className="text-3xl text-red-500" />
                </div>
                <Image
                  src={medium}
                  alt="media"
                  fill={true}
                  className="object-cover rounded-lg"
                />
              </div>
            );
          })
        : "No media found"}
    </section>
  );
}
