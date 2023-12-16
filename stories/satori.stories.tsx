/**
 * @author WMXPY
 * @description Satori
 * @override Story
 */

import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";

export default {
    title: "Action Bar",
} as Meta<any>;

const Template: StoryFn<any> = (args: any) => {

    return (<div
        {...args}
    ></div>);
};

export const Primary = Template.bind({});

Primary.args = {
    children: "Content",
};
