import { makeStyles } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getSubmissions } from "./backend-calls";
import { Submission } from "./backend-types";
import { MainBox } from "./main-box";
import { MyButton } from "./mybutton";
import { useAuthHeader } from "./user-hooks/user-hooks";
const useStyles = makeStyles(theme => ({
    late: {
        color: '#d50000',
        fontSize: '11px',
        [theme.breakpoints.down(1200)]:{
            display: 'none',
        }
    },
    red: {
        color: '#d50000',
    },
    redInfo:{
        display: 'none',
        color: '#d50000',
        fontSize: '11px',
        [theme.breakpoints.down(1200)]:{
            display: 'block',
        }
    },
    grat: {
        fontSize: '18px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    table: {
        marginTop: '20px',
        marginLeft:'10px',
        borderCollapse: 'collapse',
        fontSize: '18px',
        ['& td']:{
            borderStyle: 'solid',
            borderColor: '#000',
            borderWidth: '1px',
            textAlign: 'center',
            padding: '5px',
            minWidth: '40px',
            [theme.breakpoints.down(800)]:{
                minWidth: '0px',
                padding: '0px',
            }
        },
        [theme.breakpoints.down(1200)]:{
            width: '100%',
            marginLeft:'0px',
        },

        [theme.breakpoints.down(800)]:{
            fontSize: '11px',
        }
    },
    sum: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '35px',
        marginLeft: '55px',
    },
    empty: {
        height: '25px',
    },
    button: {
        marginTop: '10px',
        width: '250px'
    },
    buttonContainer: {
        width:'100%',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',

    },
    firstry: {
        backgroundColor: '#3fc523',
    },
    scondtry: {
        backgroundColor: '#9beb53',
    },
    thirdtry: {
        backgroundColor: '#d5eb42',
    },
    errortry: {
        backgroundColor: '#ee5555',
    },
    colorsContainer:{
        marginTop: '25px',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        ['& div']: {
            width: '40px',
            height: '40px',
            marginRight: '7px',
        },
        ['& span']: {
            marginRight: '25px'
        }
    },
    tableContainer:{
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
    }
}));
export interface Props {
    endsAt: moment.Moment;
    teamName: string;
    setInfo: (val:boolean)=>any;
}

export const ResultPage:React.FunctionComponent<Props> = (props:Props) => {
    const classes = useStyles();
    const [submissions, setSubmissions] = useState([] as Submission[]);
    const subMap:Map<string, {point:number, submitted_at: string, lastTry: number}> = new Map();
    for(let i = 0 ; i<submissions.length; i++){
        const element = subMap.get(submissions[i].exercise_uuid);
        if(!element) {
            subMap.set(submissions[i].exercise_uuid, 
                {point: submissions[i].points_earned, submitted_at: submissions[i].submitted_at, lastTry: submissions[i].sequence});
        } else {
            if(moment(element.submitted_at).isBefore(moment(submissions[i].submitted_at))){
                subMap.set(submissions[i].exercise_uuid,
                     {point: submissions[i].points_earned, submitted_at: submissions[i].submitted_at, lastTry: submissions[i].sequence});
            }
        }
    }
    const table:{point:number, submitted_at: string, lastTry: number}[] = [];
    let sum = 0;
    subMap.forEach(data=>{
        sum += data.point;
        table.push(data);
    });
    table.sort((a,b)=>{
        if(moment(a.submitted_at).isAfter(moment(b.submitted_at))) return 1;
        return -1;
    });
    const auth = useAuthHeader();
    useEffect(()=>{
        getSubmissions(auth).then(subs=>{
            if(subs != null){
                setSubmissions(subs);
            }
        }).catch(err=>{
            console.log(err);
        });
    }, [])
    return <MainBox mainTitle={'Eredmények'} subTitle={props.teamName}>
        <div className={classes.grat}>Gratulálunk a verseny befejezéséhez</div>
        <div className={classes.tableContainer}>
        <table className={classes.table}>
            <tr>
                <td>Feladat</td>
                {table.map((data, idx)=><td className={moment(data.submitted_at).isAfter(props.endsAt)?classes.red:''}>
                    {idx+1}.{moment(data.submitted_at).isAfter(props.endsAt)?<span className={classes.late}>Időn túli megoldás</span>:''}
                </td>)}
            </tr>
            <tr>
                <td>Pontszám</td>
                {table.map((data, idx)=>{
                    let className = classes.errortry;
                    if(data.point>0){
                        switch(data.lastTry){
                            case 0: 
                                className = classes.firstry; break;
                            case 1: 
                                className = classes.scondtry; break;
                            case 2: 
                                className = classes.thirdtry; break;
                        }
                    }
                return <td className={className}>
                    {data.point}
                </td>})}
            </tr>
        </table>
        <div className={classes.redInfo}>
             A piros sorszámmal jelölt feladatok időn túl lettek leadva
        </div>
        <div className={classes.colorsContainer}>
            <div className={classes.firstry}></div>
            <span>1. próbálkozás</span>
            <div className={classes.scondtry}></div>
            <span>2. próbálkozás</span>
            <div className={classes.thirdtry}></div>
            <span>3. próbálkozás</span>
            <div className={classes.errortry}></div>
            <span>hibás válasz</span>
        </div>
        </div>
        <div className={classes.sum}>
             Összpontszám: {sum}
        </div>
        <div className={classes.buttonContainer}>
            <MyButton className={classes.button} type='button' label={'Szuper!'}  onClick={()=>{props.setInfo(true)}}/>
        </div>
        <div className={classes.empty}>
        </div>
    </MainBox>;
}