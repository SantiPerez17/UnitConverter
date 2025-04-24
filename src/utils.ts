import { Unit } from "./types/types";

export function isValidUnit(unit: string | null): unit is Unit {
    return unit === "Length" || unit === "Weight" || unit === "Temperature";
  }