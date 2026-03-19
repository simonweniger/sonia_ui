import {Label, Slider} from "../../../src";
import React from "react";

export function SliderDemo() {
  return (
    <div className="w-[256px] px-1">
      <Slider
        className="w-full max-w-xs"
        defaultValue={[250]}
        max={500}
        min={0}
        step={10}
      >
        <Label>Price</Label>
        <Slider.Output />
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb index={0} />
        </Slider.Track>
      </Slider>
    </div>
  );
}
