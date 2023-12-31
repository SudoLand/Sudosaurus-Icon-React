/**
 * @author WMXPY
 * @description In Line
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { SudosaurusIconInLine, SudosaurusIconInLineProps } from "../src";

export default {
    title: "Icon with in-line Style",
    component: SudosaurusIconInLine,
} as Meta<typeof SudosaurusIconInLine>;

const Template: StoryFn<typeof SudosaurusIconInLine> = (
    args: SudosaurusIconInLineProps,
) => {

    return (<SudosaurusIconInLine
        {...args}
    />);
};

export const Primary = Template.bind({});

Primary.args = {

    size: 256,

    digest: false,

    selectable: false,

    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.6)",

    fontFamily: "monospace",
    fontWeight: 900,
    fontStyle: "normal",

    fullWidth: false,
    fullHeight: false,
};
