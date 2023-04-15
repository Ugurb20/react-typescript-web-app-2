import React from "react";
import { Story, Meta } from "@storybook/react";
import TextInputFormField, {
  TextInputFormFieldProps,
} from "./index";

export default {
  title: "Components/Inputs/TextInputFormField",
  component: TextInputFormField,
}

const Template: Story<TextInputFormFieldProps> = (args) => (
  <TextInputFormField {...args} />
);
export const Default = Template.bind({});
Default.args = {
  label: "Input",
  initialValue: "Initial value",
  onChanged: (value) => console.log(value),
}

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Input",
  initialValue: "Initial value",
  onChanged: (value) => console.log(value),
  disabled: true,
};

export const Password = Template.bind({});
Password.args = {
  label: "Input",
  initialValue: "Initial value",
  onChanged: (value) => console.log(value),
  type: "password",

};

export const Error = Template.bind({});
Error.args = {
  label: "Input",
  initialValue: "Initial value",
  onChanged: (value) => console.log(value),
  errorMessage: "Error message",
};

export const AlphabeticValidator = Template.bind({});
AlphabeticValidator.args = {
  label: "Input",
  initialValue: "Initial value",
  onChanged: (value) => console.log(value),
  validator: (value) => /^[a-zA-Z]+$/.test(value),
}

export const NumericValidator = Template.bind({});
NumericValidator.args = {
  label: "Input",
  initialValue: "Initial value",
  onChanged: (value) => console.log(value),
  validator: (value) => /^[0-9]+$/.test(value),
};

