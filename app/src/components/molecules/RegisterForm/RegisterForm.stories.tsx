import React, { ComponentProps } from "react";
import { Story } from "@storybook/react/types-6-0";

import RegisterForm from "./RegisterForm";

const storyDetails = {
    title: "RegisterForm",
    component: RegisterForm,
};
export default storyDetails;

const Template: Story<ComponentProps<typeof RegisterForm>> = (args) => {
    return <RegisterForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
