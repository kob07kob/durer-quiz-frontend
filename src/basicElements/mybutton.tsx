import { Button, makeStyles, CircularProgress } from "@material-ui/core";
import React from "react";

export interface MyProps{
    label: string;
    type: "button" | "reset" | "submit" | undefined;
    loading?: boolean;
    className?: string;
    onClick?: (event:any)=>any;
    disabled?: boolean;
    color?: string;
}

const useStyles = makeStyles(theme => ({
    root: {
        '&.MuiButton-contained': {
            height: '60px',
            borderRadius: '34px',
            fontSize: '18px',
        },
        '&.MuiButton-contained.Mui-disabled': {
            backgroundColor: '#e0e0e0',
        }
    },
}))

export const MyButton: React.FunctionComponent<MyProps> = (props: MyProps) => {
    const classes = useStyles();
    return <Button disabled={!!props.disabled || props.loading} onClick={(event)=>{if(props.onClick) props.onClick(event)}} color='primary' className={`${classes.root} ${props.className}`} variant='contained' type={props.type} style={props.color?{backgroundColor: props.color}:{}}>
        {props.loading ? <>{props.label}<CircularProgress size={30} style={{marginLeft: '20px'}}/></>  : props.label}
    </Button>
}