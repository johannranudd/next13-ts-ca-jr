"use client";
import Image from "next/image";
import { useState } from "react";
export default function ModalComponent({ title, imageUrl }: any) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <div
        role="button"
        onClick={() => setModalIsOpen(!modalIsOpen)}
        className={`group absolute top-0 left-0 z-40 h-full w-full grid place-items-center hover:bg-[#000000bb]`}
      >
        <p className="text-primary opacity-0 group-hover:opacity-100">
          View Image
        </p>
        {modalIsOpen && (
          <div className="bg-[#000000cc] w-screen h-screen fixed top-0 left-0">
            <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 h-[80%] w-[95%] max-w-[700px]">
              <Image
                src={imageUrl}
                alt={`image of ${title}`}
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
