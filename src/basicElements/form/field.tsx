import React, { CSSProperties } from 'react';
import { Field as FormikField } from 'formik';

export interface FieldProps {
    name: string;
    label?: string | any;
    componentLabel?: string | any;
    component: React.FunctionComponent<any>;
    choices?: any[];
    className?: string;
    style?: CSSProperties;
    componentStyle?: CSSProperties;
    type?: string;
    placeholder?: string;
    labelColor?: 'primary' | 'secondary' | 'default';
    onChange?: (e: React.ChangeEvent<any>) => void;
    onBlur?: (e: any) => void;
    value?: string;
    helperTextType?: HelperTextType;
    disabled?: boolean;
    otherProps?: any;
    setHasBlured?: () => void;
}

export enum HelperTextType {
    default, noBackground, floating,
}

export const Field: React.FunctionComponent<FieldProps> = (props: FieldProps) => {
    const [hasBlured, setHasBlured] = React.useState(false);
    return <div className={props.className} style={props.style}>
        <FormikField name={props.name}>
            {({
                  field,
                  form,
                  meta
              }: any) => (
                <div>
                    {React.createElement(props.component, {
                        name: props.name,
                        label: props.label,
                        error: (!!meta.touched || hasBlured) && !!meta.error,
                        helperText: (!!meta.touched || hasBlured) && meta.error,
                        placeholder: props.placeholder,
                        onChange: (e: any) => {
                            if (props.onChange) props.onChange(e);
                            field.onChange(e);
                        },
                        type: props.type,
                        value: field.value,
                        disabled: props.disabled,
                        style: props.componentStyle,
                        onBlur: () => {
                            if (!hasBlured)
                                setHasBlured(true);
                            if (typeof props.setHasBlured === 'function')
                                props?.setHasBlured()
                        },
                        ...props.otherProps
                    })}
                </div>
            )}
        </FormikField>
    </div>;
};

export default Field;
