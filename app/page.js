"use client";
import { useState, useEffect } from "react";
import { useDisableRightClick } from "../hooks/useDisableRightClick";

export default function IndexPage() {
  useDisableRightClick();

  return (
    <main>
      <h1>10A</h1>
      <a href="puisi">Puisi</a>
    </main>
  );
}