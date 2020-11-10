import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import NavbarTitle from "./NavbarTitle";

const storyDetails = {
    title: "Atoms/NavbarTitle",
    component: NavbarTitle,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof NavbarTitle>> = (args) => {
    return <NavbarTitle {...args} />;
};

export const WithoutLink = Template.bind({});
WithoutLink.args = {
    title: "Title that is not a link",
};

export const WithLink = Template.bind({});
WithLink.args = {
    title: "Title that is a link",
    destination: "/",
};
