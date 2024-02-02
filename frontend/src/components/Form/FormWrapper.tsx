"use client";

import { useState } from "react";
import { Join } from "../Join/Join";
import { Create } from "../Create/Create";

export function FormWrapper() {
  const [selectedRoom, setSelectedRoom] = useState<"join" | "create">("join");
  const handleSelectRoom = (room: "join" | "create") => {
    setSelectedRoom(room);
  };
  return (
    <div className="w-full">
      <div className="flex items-center text-center">
        <span
          className={`w-1/2 p-4  cursor-pointer ${
            selectedRoom === "join" && "rounded-t-lg text-primary bg-secondary"
          }`}
          onClick={() => handleSelectRoom("join")}
        >
          Ingressar
        </span>
        <span
          className={`w-1/2 p-4 cursor-pointer ${
            selectedRoom === "create" &&
            "rounded-t-lg text-primary bg-secondary"
          }`}
          onClick={() => handleSelectRoom("create")}
        >
          Nova Reunião
        </span>
      </div>
      <div className="bg-secondary rounded-b-lg space-y-8 p-10">
        <RoomSelector selectedRoom={selectedRoom} />
      </div>
    </div>
  );
}

const RoomSelector = ({
  selectedRoom,
}: {
  selectedRoom: "join" | "create";
}) => {
  switch (selectedRoom) {
    case "join":
      return <Join />;
    case "create":
      return <Create />;
    default:
      <Join />;
  }
};
