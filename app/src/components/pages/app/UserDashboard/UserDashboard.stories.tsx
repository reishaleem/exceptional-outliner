import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import UserDashboard from "./UserDashboard";

const storyDetails = {
    title: "Pages/UserDashboard",
    component: UserDashboard,
    decorators: [(getStory: any) => <MemoryRouter>{getStory()}</MemoryRouter>],
};
export default storyDetails;

const Template: Story<ComponentProps<typeof UserDashboard>> = (args) => {
    return <UserDashboard {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
