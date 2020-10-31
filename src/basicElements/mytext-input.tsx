import { makeStyles, TextField } from "@material-ui/core";
import React from "react";

export interface MyProps extends React.HTMLProps<any> {
    labelWhere: LabelType;
}

export enum LabelType{
    Inline, Above
}


const useStyles = makeStyles(theme => ({
    inlineInput: {
        width: '100%',
        marginLeft: '15px',
        marginRight: '15px',
        '& .MuiOutlinedInput-root': {
            height: '60px',
            borderRadius: '34px'
        }
    },
    aboveInput: {
        width: '100%',
        '& .MuiOutlinedInput-root': {
            height: '40px',
            borderRadius: '30px'
        }
    },
    label: {
        fontSize: '18px',
        fontWeight: 'bold',
    }
}))

export const MyTextInput: React.FunctionComponent<MyProps> = (props: MyProps) => {
    const classes = useStyles();
    const inlineStyle = {display: 'flex', flexFlow: 'row', alignItems: 'center'}
    const aboveStyle = {display: 'flex', flexFlow: 'column'}
    const {labelWhere,label, color, size, ref,className, ...otherProps} = props;

    return <div className={className} style={labelWhere===LabelType.Inline?inlineStyle:aboveStyle}>
        <div style={labelWhere===LabelType.Above?{marginLeft: '30px'}:{}} className={classes.label}>{label}</div>
        <TextField {...otherProps} variant='outlined' label='' className={labelWhere===LabelType.Inline?classes.inlineInput:classes.aboveInput}/>
    </div>
}