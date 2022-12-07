// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ImageComponent } from '../app/image/image.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
    title: 'Example/Image Component',
    component: ImageComponent,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ImageComponent> = (args: ImageComponent) => ({
    component: ImageComponent,
    props: args,
});

export const NoImageCaption = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
NoImageCaption.args = {
    figCaptionTxt: '',
};

export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
    figCaptionTxt: 'The French Quarter or White Town area in Pondicherry is filled with...',
};

export const WithZeroOpacity = Template.bind({});
WithZeroOpacity.args = {
    imgOpacity: 1
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
    imgOpacity: 0.5
};
