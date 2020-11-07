import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import NavbarTitle from "./NavbarTitle";

const storyDetails = {
    title: "NavbarTitle",
    component: NavbarTitle,
};
export default storyDetails;

const Template: Story<ComponentProps<typeof NavbarTitle>> = (args) => {
    return <NavbarTitle {...args} />;
};

// The default brand, with no additional args
export const Default = Template.bind({});
Default.args = {
    title: "Default brand",
};
