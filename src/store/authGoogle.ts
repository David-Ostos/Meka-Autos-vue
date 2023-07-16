import { GoogleAuth } from "@codetrix-studio/capacitor-google-auth";
import { defineStore } from "pinia";

const useAuthGoogleStore= defineStore('authGoogle',{
    state: () =>{
        return{
            token: null as string | null, /* serverAuthCode */
            email: null as string | null,
            fristName: null as string | null, /* givenName */
            lastName: null as string | null, /* familyName */
            imageUrl: null as string | null, 
            baseURl: 'http://127.0.0.1:8000/api',
        }
    },
    actions: {
        async logInGoogle() {
            const response = await GoogleAuth.signIn();
            

            console.log(response)
            console.log(response.serverAuthCode)
            console.log(response.email)
            console.log(response.familyName)
            console.log(response.givenName)
            console.log(response.imageUrl)
            },
            
            async verifications(email: string) {
                const uriRegister = `${this.baseURl}/auth/register`
                const rawResponse = await fetch(uriRegister, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        Accept: 'application/json'
                    },


            })

        }
    }
})

export default useAuthGoogleStore;