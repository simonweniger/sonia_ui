"use client";

import type {ComponentPropsWithRef} from "react";

import {chakra} from "@chakra-ui/react";
import React from "react";

/* -------------------------------------------------------------------------------------------------
 * Form Root
 * -----------------------------------------------------------------------------------------------*/
interface FormRootProps extends ComponentPropsWithRef<"form"> {}

const FormRoot = ({...props}: FormRootProps) => {
  return <chakra.form {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {FormRoot};

export type {FormRootProps};
