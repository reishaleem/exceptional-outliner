import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import Drawer from "./Drawer";

const storyDetails = {
    title: "Organisms/MainDrawer",
    component: Drawer,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof Drawer>> = (args) => {
    return <Drawer {...args} />;
};

export const MainDrawer = Template.bind({});
MainDrawer.args = {
    open: true,
};
