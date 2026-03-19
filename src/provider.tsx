"use client";

import type {ReactNode} from "react";

import {ChakraProvider} from "@chakra-ui/react";

import {system} from "./theme";

interface SoniaProviderProps {
  children: ReactNode;
}

export const SoniaProvider = ({children}: SoniaProviderProps) => {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
};
