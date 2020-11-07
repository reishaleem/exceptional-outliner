import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import Navbar from "./Navbar";

const storyDetails = {
    title: "PublicNavbar",
    component: Navbar,
};
export default storyDetails;

const Template: Story<ComponentProps<typeof Navbar>> = (args) => {
    return <Navbar {...args} />;
};

// The default public navbar, with no additional args
export const Default = Template.bind({});
Default.args = {};
