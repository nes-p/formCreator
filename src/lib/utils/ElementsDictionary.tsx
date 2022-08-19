import { CheckBoxField } from "../../components/checkbox-field/CheckboxField";
import { DateField } from "../../components/date-field/DateField";
import { NumberField } from "../../components/number-field/NumberField";
import { RadioField } from "../../components/radio-field/RadioField";
import { TextAreaField } from "../../components/text-area/TextArea";
import { TextField } from "../../components/text-field/TextField";

export const elementsDictionary = new Map();
elementsDictionary.set('numberfield', NumberField );
elementsDictionary.set('textfield', TextField);
elementsDictionary.set('textarea', TextAreaField);
elementsDictionary.set('checkbox', CheckBoxField);
elementsDictionary.set('datefield', DateField);
elementsDictionary.set('radio buttons', RadioField);
