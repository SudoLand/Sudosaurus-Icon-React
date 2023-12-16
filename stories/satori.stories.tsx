/**
 * @author WMXPY
 * @description Satori
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { SudosaurusIconSatori } from "../src";

export default {
    title: "Satori",
} as Meta<typeof SudosaurusIconSatori>;

const Template: StoryFn<typeof SudosaurusIconSatori> = (args: any) => {

    return (<SudosaurusIconSatori
        {...args}
    />);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
