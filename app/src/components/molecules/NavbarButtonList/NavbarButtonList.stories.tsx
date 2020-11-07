import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import NavbarButtonList from "./NavbarButtonList";

const storyDetails = {
    title: "NavbarButtonList",
    component: NavbarButtonList,
};
export default storyDetails;

const Template: Story<ComponentProps<typeof NavbarButtonList>> = (args) => {
    return <NavbarButtonList {...args} />;
};

// The default NavbarButtonList, with just a list of names and no additional args
export const Default = Template.bind({});
Default.args = {
    names: ["Test1", "Test2"],
    refs: ["/testPath1", "/testPath2"],
};
