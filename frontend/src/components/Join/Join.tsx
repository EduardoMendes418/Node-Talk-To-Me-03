"use client";
import { FormEvent, useRef } from "react";
import Button from "../Button/Button";
import { Input } from "../Input/Input";

export function Join() {
  const name = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);

  const handlerJoinRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      name.current &&
      name.current.value !== "" &&
      id.current &&
      id.current.value !== ""
    ) {
      sessionStorage.setItem("username", name.current.value);
      const roomId = id.current.value;
      window.location.href = `/room/${roomId}`;
    }
  };

  return (
    <>
      <form onClick={(e) => handlerJoinRoom(e)} className="space-y-8">
        <Input
          placeholder="Digite o código da reunião"
          type="text"
          ref={name}
        />
        <Input placeholder="Digite o código da reunião" type="text" ref={id} />
        <Button title="Entrar" type="submit" />
      </form>
    </>
  );
}
