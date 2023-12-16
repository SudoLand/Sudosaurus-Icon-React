/**
 * @author WMXPY
 * @description Tailwind
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { SudosaurusIconTailwind, SudosaurusIconTailwindProps } from "../src";

export default {
    title: "Icon with tailwind Style",
    component: SudosaurusIconTailwind,
} as Meta<typeof SudosaurusIconTailwind>;

const Template: StoryFn<typeof SudosaurusIconTailwind> = (
    args: SudosaurusIconTailwindProps,
) => {

    return (<SudosaurusIconTailwind
        {...args}
    />);
};

export const Primary = Template.bind({});

Primary.args = {

    size: 256,

    className: "",
    itemClassName: "",

    foregroundColorClassName: "text-black dark:text-white",
    backgroundColorClassName: "bg-black dark:bg-white",

    digest: false,

    selectable: false,

    fontFamily: "monospace",
    fontWeight: 900,
    fontStyle: "normal",

    fullWidth: false,
    fullHeight: false,
};
