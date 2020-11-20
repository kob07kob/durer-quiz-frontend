import { makeStyles } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { getSubmissions } from "./backend-calls";
import { Submission } from "./backend-types";
import { MainBox } from "./main-box";
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
        marginTop: '75px',
        marginLeft: '75px',
    },
    empty: {
        height: '75px',
    }
}));
export interface Props {
    endsAt: moment.Moment;
    teamName: string;
}

export const ResultPage:React.FunctionComponent<Props> = (props:Props) => {
    const classes = useStyles();
    const [submissions, setSubmissions] = useState([] as Submission[]);
    const subMap:Map<string, {point:number, submitted_at: string}> = new Map();
    for(let i = 0 ; i<submissions.length; i++){
        const element = subMap.get(submissions[i].exercise_uuid);
        if(!element) {
            subMap.set(submissions[i].exercise_uuid, {point: submissions[i].points_earned, submitted_at: submissions[i].submitted_at});
        } else {
            if(moment(element.submitted_at).isBefore(moment(submissions[i].submitted_at))){
                subMap.set(submissions[i].exercise_uuid, {point: submissions[i].points_earned, submitted_at: submissions[i].submitted_at});
            }
        }
    }
    const table:{point:number, submitted_at: string}[] = [];
    let sum = 0;
    subMap.forEach(data=>{
        sum += data.point;
        table.push(data);
    });
    table.sort((a,b)=>{
        if(moment(a.submitted_at).isAfter(moment(b.submitted_at))) return 1;
        return 0;
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
        <table className={classes.table}>
            <tr>
                <td>Feladat</td>
                {table.map((data, idx)=><td className={moment(data.submitted_at).isAfter(props.endsAt)?classes.red:''}>
                    {idx+1}.{moment(data.submitted_at).isAfter(props.endsAt)?<span className={classes.late}>Időn túli megoldás</span>:''}
                </td>)}
            </tr>
            <tr>
                <td>Pontszám</td>
                {table.map((data, idx)=><td>
                    {data.point}
                </td>)}
            </tr>
        </table>
        <div className={classes.redInfo}>
             A piros sorszámmal jelölt feladatok időn túl lettek leadva
        </div>
        <div className={classes.sum}>
             Összpontszám: {sum}
        </div>
        <div className={classes.empty}>
        </div>
    </MainBox>;
}