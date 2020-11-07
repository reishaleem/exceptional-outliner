import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import NavbarButtonList from "./NavbarButtonList";

const storyDetails = {
    title: "NavbarButtonList",
    component: NavbarButtonList,
    decorators: [
        (getStory: any) => (
            <MemoryRouter>
                <div style={{ width: "100%" }}>{getStory()}</div>
            </MemoryRouter>
        ),
    ],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof NavbarButtonList>> = (args) => {
    return <NavbarButtonList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
    buttonNames: ["Test1", "Test2"],
    buttonDestinations: ["/testPath1", "/testPath2"],
    align: "left",
};
