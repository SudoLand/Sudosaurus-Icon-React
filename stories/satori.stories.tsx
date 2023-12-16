/**
 * @author WMXPY
 * @description Satori
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { SudosaurusIconSatori, SudosaurusIconSatoriProps } from "../src";

export default {
    title: "Satori",
} as Meta<typeof SudosaurusIconSatori>;

const Template: StoryFn<typeof SudosaurusIconSatori> = (
    args: SudosaurusIconSatoriProps,
) => {

    return (<SudosaurusIconSatori
        {...args}
    />);
};

export const Primary = Template.bind({});

Primary.args = {

    size: 256,

    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.6)",

    fullWidth: false,
    fullHeight: false,

    fontWeight: 900,

    fontFamily: "monospace",
};
