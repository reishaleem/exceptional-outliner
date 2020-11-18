import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import AvatarDropdown from "./AvatarDropdown";

const storyDetails = {
    title: "Molecules/AvatarDropdown",
    component: AvatarDropdown,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof AvatarDropdown>> = (args) => {
    return <AvatarDropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
