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

export const withoutLink = Template.bind({});
withoutLink.args = {
    title: "Title that is not a link",
};

export const withLink = Template.bind({});
withLink.args = {
    link: true,
    to: "#",
    title: "Title that is a link",
};
