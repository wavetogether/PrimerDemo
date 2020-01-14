import * as React from 'react';
import PrimaryButton from "./PrimaryButton";
import {storiesOf} from "@storybook/react-native";
import {boolean, withKnobs, text} from "@storybook/addon-knobs";
import {defaultBackground} from "../storybook-decorators/DefaultBackground";


storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(defaultBackground)
    .add('Primary Button', () => <PrimaryButton
        isSmall={boolean("isSmall", false)}>
        {text("children", "Primary Button")}
    </PrimaryButton>);
