import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  // Title of my component
  title: 'UI/Label',
  // component My Label
  component: MyLabel,
  // UI controls
  argTypes: {
    color: { control: 'select', options: ["primary", "secondary", "tertiary"] },
    myColor: { control: 'color' }
  }
} as ComponentMeta<typeof MyLabel>

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

// Bind the Template to break up the reference of the objects
export const Basic = Template.bind({});
Basic.args = {
  label: 'Basic Label',
  size: 'normal',
  allCaps: false // Capitalize all the world
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'normal',
  myColor: '#ff0303'
}
