// import { Request } from "@egovernments/digit-ui-libraries/src/services/atoms/Utils/Request";
import axios from "axios";
import React from "react";


export const ApiService =  {
    api : axios.create({baseURL: 'http://103.166.62.118:80'}),
    headers: { 'content-type': 'application/json',
    'Authorization' : 'Basic ZWdvdi11c2VyLWNsaWVudDo=',
    'Referrer Policy' : 'no-referrer',
    'mode': 'no-cors'

            },
    postcall: (url, data) => {
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res => this.setState({success: res.ok}))
        // .catch(err => this.setState({success: false}));
        delete ApiService.api.defaults.headers.post["Referer"];
        delete ApiService.api.defaults.headers.post["Referer Policy"];
        const resp = ApiService.api.post(url, { transformRequest: [(data, headers) => {
   delete headers.post.Referer;

   return data 
}] }, ApiService.headers).
        then(
            resp => {
                debugger;
                console.log(resp)
            }
            ).
        catch(
            err => {
                debugger;
                console.log(err)
            }
            );
        
    },

    // createForm: (url, data) => {        
    //     Digit.Request({method:'POST', url, data, headers:ApiService.headers}).then((result, err) => {
    //         debugger;
    //         console.log(result);
    //         console.log(err);
    //     }).catch((e) => {
    //         debugger;
    //         console.log(e);
    //     })
    // }
}