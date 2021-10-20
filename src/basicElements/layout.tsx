import React from 'react';
import theme from './theme';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { WebshopPicture } from './picture-component';
export interface MyProps extends React.HTMLProps<any> {
}
const useStyles = makeStyles((theme: any) => ({
    bg: {
        display: 'none',
        [theme.breakpoints.up(1400)]: {
            display: 'block'
        },
        position: 'absolute',
        top: 0,
        left: 0,
        'filter': 'blur(20px)',
        '-webkit-filter': 'blur(20px)',
        width: '100%',
        transform: 'scale(1.1)'
    },
    bgDiv: {
        height: '100%',
        zIndex: 0,
        position: 'relative',
        overflow: 'hidden'
    },
    root: {
        [theme.breakpoints.up(1400)]: {
            left: '50%',
            marginLeft: '-50%',
            marginRight: '-50%',
            maxWidth: '100%',
            position: 'relative',
            right: '50%',
            width: '100%'
        }
    },
    image: {
        maxWidth: '100%',
        width: '1400px',
        marginBottom: '-5px',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: 20,
        marginTop: '-7%',
        [theme.breakpoints.up(1400)]: {
            marginBottom: '-5px',
            height: 'auto',
            width: '1400px',
            maxWidth: '100%',
            marginTop: '-100px',
        },
        [theme.breakpoints.down(1000)]: {
            marginTop: '0px',
            marginBottom: '-5px',
            height: 'auto',
            width: '100%',
            maxWidth: '100%',
        }
    },
    imageDiv: {
        display: 'flex',
        justifyContent: 'center',
        transform: 'translate(0%, -100%)'
    },
    itemDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    magicBox: {
        [theme.breakpoints.down(1000)]: {
            height: '0px',
            marginTop: '0px',
        },
        width: '100%',
        zIndex: 2,
        position: 'relative',
        marginTop: '-49px',
        backgroundColor: theme.palette.background,
        height: '50px',
    }
}));

export const Layout: React.FunctionComponent<MyProps> = (props: MyProps) => {
    const classes = useStyles();
    return <React.Fragment>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <SnackbarProvider maxSnack={3}>
                <div className={classes.root}>
                <div className={classes.itemDiv}>
                <div style={{ width: '100%', zIndex: 1, position: 'relative'}}>
                    <div className={classes.bgDiv}>
                        <WebshopPicture className={classes.bg} picture={{webPUrl: '/csakszoveg.webp', jpegOrPngUrl: '/csakszoveg.jpg', alt: 'header', title: 'header'}}/>
                    </div>
                    <div className={classes.imageDiv}>
                        <WebshopPicture className={classes.image} picture={{webPUrl: '/csakszoveg.webp', jpegOrPngUrl: '/csakszoveg.jpg', alt: 'header', title: 'header'}}/>
                    </div>
                </div>
                </div>
                </div>
                <div className={classes.magicBox}>
                </div>
                <Container style={{ paddingLeft: 0, paddingRight: 0, zIndex: 3, position: 'relative', paddingBottom: '50px', maxWidth: '1200px' }}>
                    <div>
                        {props.children}
                    </div>
                </Container>
            </SnackbarProvider>
        </ThemeProvider>
    </React.Fragment>;
};
