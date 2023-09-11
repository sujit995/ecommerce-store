import { createClient } from "next-sanity";


export const client = createClient({
    projectId: 'bs2lu9gp',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2023-01-01",
    token: "skFp1y8YP7ONzncdtPNkZlPB4V69Qs1UiWVKO8vR4XUNLqU2QdtHk0g2ENpGFKa5v61tNxVLZWDPPqnHDPXFyObB28IloyLaZD5mR1Dcwf6TrfXPlETjhXOQUo1tqi66ne1CfpZDmLg4S0Lpc7OXFym50s4fdgwHGVdNvsd9AMGHdpYzJGTQ"
})