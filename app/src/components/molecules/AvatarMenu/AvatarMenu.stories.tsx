import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import AvatarMenu from "./AvatarMenu";

const storyDetails = {
    title: "Molecules/AvatarMenu",
    component: AvatarMenu,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof AvatarMenu>> = (args) => {
    return <AvatarMenu {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
