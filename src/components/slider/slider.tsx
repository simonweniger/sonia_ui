"use client";

import type {CSSProperties, ComponentPropsWithRef} from "react";

import {Slider as ChakraSlider, chakra} from "@chakra-ui/react";
import React from "react";

/* Half the thumb width — used to extend the fill to the thumb edge */
const THUMB_HALF = 8;

/* -------------------------------------------------------------------------------------------------
 * Slider Root
 * -----------------------------------------------------------------------------------------------*/
interface SliderRootProps extends ComponentPropsWithRef<typeof ChakraSlider.Root> {}

const SliderRoot = ({children, thumbSize = {width: 16, height: 16}, ...props}: SliderRootProps) => {
  return (
    <ChakraSlider.Root data-slot="slider" thumbSize={thumbSize} {...props}>
      {children}
    </ChakraSlider.Root>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Slider Output (ValueText)
 * -----------------------------------------------------------------------------------------------*/
interface SliderOutputProps extends ComponentPropsWithRef<typeof ChakraSlider.ValueText> {}

const SliderOutput = ({children, ...props}: SliderOutputProps) => {
  return (
    <ChakraSlider.ValueText data-slot="slider-output" {...props}>
      {children}
    </ChakraSlider.ValueText>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Slider Track
 *
 * Renders Chakra's Control + Track structure internally while keeping
 * the original SoniaUI API where Fill and Thumb are children of Track.
 * Separates Fill (into Control directly) from Thumb (as sibling in Control).
 * -----------------------------------------------------------------------------------------------*/
interface SliderTrackProps extends ComponentPropsWithRef<typeof ChakraSlider.Track> {}

const SliderTrack = ({children, ...props}: SliderTrackProps) => {
  const overlays: React.ReactNode[] = [];
  const thumbs: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && (child.type === SliderFill || child.type === SliderSteps)) {
      overlays.push(child);
    } else {
      thumbs.push(child);
    }
  });

  return (
    <ChakraSlider.Control data-slot="slider-control">
      <ChakraSlider.Track data-slot="slider-track" {...props} />
      {overlays}
      {thumbs}
    </ChakraSlider.Control>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Slider Fill
 *
 * Custom fill element that uses Zag's --slider-thumb-offset-N CSS variables
 * (corrected for thumbAlignment="contain") instead of Ark's Range which uses
 * raw percentages. This ensures the fill always extends seamlessly to the thumb.
 *
 * Original SoniaUI did the same: computed fill from getThumbPercent() (corrected).
 * -----------------------------------------------------------------------------------------------*/
interface SliderFillProps extends ComponentPropsWithRef<"div"> {}

const SliderFill = ({style, ...props}: SliderFillProps) => {
  return (
    <ChakraSlider.Context>
      {(api) => {
        const isRange = api.value.length > 1;

        const fillStyle: CSSProperties = isRange
          ? {
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              height: "var(--slider-track-height, 4px)",
              left: `calc(var(--slider-thumb-offset-0) - ${THUMB_HALF}px)`,
              right: `calc(100% - var(--slider-thumb-offset-${api.value.length - 1}) - ${THUMB_HALF}px)`,
            }
          : {
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              height: "var(--slider-track-height, 4px)",
              left: 0,
              width: `calc(var(--slider-thumb-offset-0) + ${THUMB_HALF}px)`,
            };

        return (
          <chakra.div
            bg="accent"
            borderRadius="full"
            data-slot="slider-fill"
            pointerEvents="none"
            style={{...fillStyle, ...style}}
            {...props}
          />
        );
      }}
    </ChakraSlider.Context>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Slider Thumb
 * -----------------------------------------------------------------------------------------------*/
interface SliderThumbProps extends ComponentPropsWithRef<typeof ChakraSlider.Thumb> {}

const SliderThumb = ({children, ...props}: SliderThumbProps) => {
  return (
    <ChakraSlider.Thumb data-slot="slider-thumb" {...props}>
      {children}
    </ChakraSlider.Thumb>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Slider Steps
 *
 * Renders evenly-spaced step indicator lines inside the track.
 * Pass `count` for the number of segments (e.g. count={10} renders 11 tick marks).
 * Lines inside the filled region use accent.fg; others use a muted color.
 * -----------------------------------------------------------------------------------------------*/
interface SliderStepsProps extends ComponentPropsWithRef<"div"> {
  count: number;
}

const SliderSteps = ({count, ...props}: SliderStepsProps) => {
  return (
    <ChakraSlider.Context>
      {(api) => {
        if (count < 2) return null;

        const thumbCount = api.value.length;
        const fillStart = thumbCount > 1 ? api.getThumbPercent(0) : 0;
        const fillEnd = api.getThumbPercent(thumbCount - 1);

        const marks: React.ReactNode[] = [];

        /* Skip first (0%) and last (100%) — only render inner ticks */
        for (let i = 1; i < count; i++) {
          const pct = (i / count) * 100;
          const fraction = pct / 100;
          const isFilled = fraction >= fillStart && fraction <= fillEnd;

          marks.push(
            <chakra.div
              key={i}
              bg={isFilled ? "accent.fg" : "fg"}
              borderRadius="full"
              height="30%"
              opacity={isFilled ? 0.4 : 0.12}
              position="absolute"
              style={{left: `${pct}%`}}
              top="50%"
              transform="translate(-50%, -50%)"
              width="1.5px"
            />,
          );
        }

        return (
          <chakra.div
            data-slot="slider-steps"
            inset="0"
            pointerEvents="none"
            position="absolute"
            zIndex="1"
            {...props}
          >
            {marks}
          </chakra.div>
        );
      }}
    </ChakraSlider.Context>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Slider Marks
 * -----------------------------------------------------------------------------------------------*/
interface SliderMarksProps extends ComponentPropsWithRef<typeof ChakraSlider.MarkerGroup> {}

const SliderMarks = ({children, ...props}: SliderMarksProps) => {
  return (
    <ChakraSlider.MarkerGroup data-slot="slider-marks" {...props}>
      {children}
    </ChakraSlider.MarkerGroup>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Exports
 * -----------------------------------------------------------------------------------------------*/
export {SliderRoot, SliderOutput, SliderTrack, SliderFill, SliderThumb, SliderSteps, SliderMarks};

export type {
  SliderRootProps,
  SliderOutputProps,
  SliderTrackProps,
  SliderFillProps,
  SliderThumbProps,
  SliderStepsProps,
  SliderMarksProps,
};
