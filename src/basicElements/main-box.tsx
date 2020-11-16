import { makeStyles } from "@material-ui/core";
import React from "react";

export interface MyProps extends React.HTMLProps<any> {
    mainTitle: string;
    subTitle?: string;
}


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: '-120px',
        overflow: 'hidden',
        [theme.breakpoints.down(1000)]: {
            marginTop: '-5px',
            paddingLeft: '7px',
            paddingRight: '7px',
        }
    },
    header: {
        backgroundColor: theme.palette.primary.main,
        padding: '30px 60px',
        borderRadius: '30px 30px 0px 0px',
        color: theme.palette.primary.contrastText,
    },
    contentDiv: {
        backgroundColor: theme.palette.secondary.main,
        padding: '30px 15px 0px 15px',
        borderRadius: '0px 0px 30px 30px',
        color: theme.palette.secondary.contrastText,
    },
    mainTitle: {
        fontSize: '30px',
    },
    subTitle: {
        fontSize: '20px',
    }
}));

export const MainBox: React.FunctionComponent<MyProps> = (props: MyProps) => {
    const classes = useStyles();

    return <div className={classes.root}>
            <div className={classes.header}>
                <div className={classes.mainTitle}>{props.mainTitle}</div>
                <div className={classes.subTitle}>{props.subTitle}</div>
            </div>
            <div className={classes.contentDiv}>
                {props.children}
            </div>
        </div>
}