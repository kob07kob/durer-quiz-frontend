import { Button, makeStyles } from "@material-ui/core";
import React from "react";

export interface MyProps{
    label: string;
    type: "button" | "reset" | "submit" | undefined;
    className?: string;
    onClick?: (event:any)=>any;
    disabled?: boolean;
}

const useStyles = makeStyles(theme => ({
    root: {
        '&.MuiButton-contained': {
            height: '60px',
            borderRadius: '34px',
            fontSize: '18px',
        }
    },
}))

export const MyButton: React.FunctionComponent<MyProps> = (props: MyProps) => {
    const classes = useStyles();
    return <Button disabled={!!props.disabled} onClick={(event)=>{if(props.onClick) props.onClick(event)}} color='primary' className={`${classes.root} ${props.className}`} variant='contained' type={props.type}>{props.label}</Button>
}