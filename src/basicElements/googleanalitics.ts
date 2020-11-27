import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

/* eslint-disable-next-line */
export interface GoogleAnalyticsProps {
    identifier: string,
    //affiliation: string,
}

export const GoogleAnalytics = (props: GoogleAnalyticsProps) => {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // @ts-ignore
            if (!window?.GA_INITIALIZED) {
                initGA(props.identifier);
                // @ts-ignore
                window.GA_INITIALIZED = true;
            }
            /*
            // @ts-ignore
            if (!window?.affiliation) {
                // @ts-ignore
                window.affiliation = props.affiliation;
            }*/
            logPageView();
        }
    })

    return null;
};

export default GoogleAnalytics;

const initGA = (identifier: string) => {
    ReactGA.initialize(identifier);
    ReactGA.pageview(window?.location?.pathname);
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};