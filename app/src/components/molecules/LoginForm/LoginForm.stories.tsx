import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import LoginForm from "./LoginForm";

const storyDetails = {
    title: "Molecules/LoginForm",
    component: LoginForm,
};
export default storyDetails;

const Template: Story<ComponentProps<typeof LoginForm>> = (args) => {
    return <LoginForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
