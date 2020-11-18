import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import Navbar from "./Navbar";

const storyDetails = {
    title: "Organisms/AppNavbar",
    component: Navbar,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof Navbar>> = (args) => {
    return <Navbar {...args} />;
};

export const PrimaryNavbarWithMenuIcon = Template.bind({});
PrimaryNavbarWithMenuIcon.args = {};
