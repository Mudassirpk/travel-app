import Image from "next/image";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import dataContext from "../../Helper/dataContext";

export default function Media() {
  const traveller: any = useContext(dataContext);
  const { data } = traveller;
  return (
    <section className="w-full grid grid-cols-5 gap-4 py-4">
      {data.media
        ? data.media.map((medium: string) => {
            return (
              <div className="relative w-full aspect-square hover:border hover:border-blue-900 cursor-pointer">
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
