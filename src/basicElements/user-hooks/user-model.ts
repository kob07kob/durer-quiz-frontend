import jwtDecode from 'jwt-decode';
import { serverUrl } from '../../constants';
import { CurrentUser, JwtPayload } from './types';

const LOCAL_STORAGE_JWT_KEY = 'kjqAEKeFkMpOvOZrzcvp';

export class UserModel {

    private userCache: { token: string, decodedToken: JwtPayload } | null= null;

    private static isTokenExpired(decodeToken: any): boolean {
        return new Date().getTime() / 1000 > decodeToken.exp;
    }

    private static decodeToken(token: string): JwtPayload {
        return jwtDecode(token) as JwtPayload;
    }

    private async saveToken(token: string) {
        localStorage.setItem(LOCAL_STORAGE_JWT_KEY, token);

        const payload = UserModel.decodeToken(token);

        this.userCache = {
            token: token,
            decodedToken: payload,
        };
    }

    getToken(): string | null {
        if (typeof localStorage === 'undefined') {
            return null;
        }

        const token = localStorage.getItem(LOCAL_STORAGE_JWT_KEY);

        if (!token) {
            return null;
        }

        return token;
    }

    async getCurrentUser(): Promise<CurrentUser | null> {
        const token = this.getToken();

        if (!token) {
            return null;
        }

        if (this.userCache) {
            if (token === this.userCache.token && !UserModel.isTokenExpired(this.userCache.decodedToken)) {
                return {
                    email: this.userCache.decodedToken.email,
                    categoryUuid: this.userCache.decodedToken.category.uuid,
                    categoryName: this.userCache.decodedToken.category.name,
                };
            }

            this.userCache = null;
        }

        const payload = UserModel.decodeToken(token);

        /*if (UserModel.isTokenExpired(payload)) {
            localStorage.removeItem(LOCAL_STORAGE_JWT_KEY);
            return null;
        }*/

        this.userCache = {
            token: token,
            decodedToken: payload,
        };

        return {
            email: payload.email,
            categoryUuid: payload.category.uuid,
            categoryName: payload.category.name,
        };
    }

    isUserLoggedIn(): boolean {
        const token = this.getToken();

        if (!token) {
            return false;
        }

        return !UserModel.isTokenExpired(token);
    }

    logout() {
        this.userCache = null;
        localStorage.removeItem(LOCAL_STORAGE_JWT_KEY);
    }

    async login(email: string, password: string): Promise<string|null> {
        const loginResult = await fetch(`${serverUrl}/login/team`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                method: 'email-password',
                email: email,
                password: password,
            }),
            
        });
        if (!loginResult.ok) {
            const errorMessage = (await loginResult.json() as any)?.error;
            return errorMessage==='Unauthorized'? 'Hibás email/jelszó': 'Valami hiba történt!';
        }
        const access_token =await loginResult.text();
         //const access_token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJjYXRlZ29yeSI6eyJuYW1lIjoiT3ZvZGFzIGthdGVnb3JpYSIsInV1aWQiOiIxNTU1YjFlMy1mNzA2LTRkYjgtOTlhNC05ZDY4M2I0M2NlNDIifSwiZW1haWwiOiJ0b21pQGNzaWxsaW5nLmNvbSIsImV4cCI6MTYwNTE0NDI5NSwiaWF0IjoxNjA1MTM4ODk1LCJpc3MiOiJodHRwczovL3ZhbHRvLmR1cmVyaW5mby5odS8iLCJqdGkiOiJYRU1GaHQ5VWZlRlRTQ0lCOXBmZGp3IiwibmJmIjoxNjA1MTM4ODk1LCJzdWIiOiJiZDVhN2U4NS02ZDY5LTQ3MTgtYWZmZi1lNTAwNDk5ODJkMTIifQ.SM8pps10Z62WLgr3ar0fHsoH1OHwZiy5fYJVgLnZkJ4WoUOmE0_0lpr9sJdy9ifTi59xnjJjnAk4h-GH0BrCpdbuOF0dL5nAkWysFRnVWt6c0rHPL6ZCE_M87gnvrIzLBwN0kmqnpZ5vc0W8bXXccwNIU94siibFWBv9wDgllXdg8q7ZQek5wpu30BsCYHsr0VA8zSco8rGwJscfqimHt93qkrXzQ0vpvxplBYsQauIQINHNhkR9_xO0uZ3EX-PtHKh0moyCvsJfZ8Tjdf6MTZuNODCr5ejE_us5htw_4dcFDzgQUxv5hPsIyiqmQsbMXlsMFjPgJ68rnuW8S0kxD0bD8oPixb1AOg5SJvYl-OvdgsnbRfS3J0SlqthnRM867yWn0tNXFAR-MK8UmdzOxfjcyT36M0Wn4UL0juNRM-QEHVbFvA8byfhE3lodYLLvNOwusc_bh9db_Y3o-WdPOP278E1RpRuutgBwLhcA22ciCGhgEvxSdsKbNkbCSXLO3PVBHy4yu6pfcTOXZQekgwGno82u3tm1cPrsj8N6CuISayVNmV9F9iX6_ByyngEwpANT15o9OPrUz2tHJ6NWzxEnFjr39mV4xKt8Z-ONJ-smzhzTPxaVpWit5erP0xGXBBln6xE5GjQetNtpFYbNFSS-4SrU5FDNnOT8IinjUS0';//this.jwtService.sign(payload, { expiresIn: '1 days' });

        //const { access_token } = ;//await loginResult.json();

        await this.saveToken(access_token);

        return null;
    }

    async loginOtt(email: string, token: string): Promise<string|null> {
        const loginResult = await fetch(`${serverUrl}/login/team`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                method: 'one-time-token',
                email: email,
                token: token,
            }),
            
        });
        if (!loginResult.ok) {
            const errorMessage = (await loginResult.json() as any)?.error;
            return errorMessage==='Unauthorized'? 'Hibás email': (errorMessage === 'Token not found'? 'Nem létező token':'Valami hiba történt!');
        }
        const access_token =await loginResult.text();
         //const access_token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJjYXRlZ29yeSI6eyJuYW1lIjoiT3ZvZGFzIGthdGVnb3JpYSIsInV1aWQiOiIxNTU1YjFlMy1mNzA2LTRkYjgtOTlhNC05ZDY4M2I0M2NlNDIifSwiZW1haWwiOiJ0b21pQGNzaWxsaW5nLmNvbSIsImV4cCI6MTYwNTE0NDI5NSwiaWF0IjoxNjA1MTM4ODk1LCJpc3MiOiJodHRwczovL3ZhbHRvLmR1cmVyaW5mby5odS8iLCJqdGkiOiJYRU1GaHQ5VWZlRlRTQ0lCOXBmZGp3IiwibmJmIjoxNjA1MTM4ODk1LCJzdWIiOiJiZDVhN2U4NS02ZDY5LTQ3MTgtYWZmZi1lNTAwNDk5ODJkMTIifQ.SM8pps10Z62WLgr3ar0fHsoH1OHwZiy5fYJVgLnZkJ4WoUOmE0_0lpr9sJdy9ifTi59xnjJjnAk4h-GH0BrCpdbuOF0dL5nAkWysFRnVWt6c0rHPL6ZCE_M87gnvrIzLBwN0kmqnpZ5vc0W8bXXccwNIU94siibFWBv9wDgllXdg8q7ZQek5wpu30BsCYHsr0VA8zSco8rGwJscfqimHt93qkrXzQ0vpvxplBYsQauIQINHNhkR9_xO0uZ3EX-PtHKh0moyCvsJfZ8Tjdf6MTZuNODCr5ejE_us5htw_4dcFDzgQUxv5hPsIyiqmQsbMXlsMFjPgJ68rnuW8S0kxD0bD8oPixb1AOg5SJvYl-OvdgsnbRfS3J0SlqthnRM867yWn0tNXFAR-MK8UmdzOxfjcyT36M0Wn4UL0juNRM-QEHVbFvA8byfhE3lodYLLvNOwusc_bh9db_Y3o-WdPOP278E1RpRuutgBwLhcA22ciCGhgEvxSdsKbNkbCSXLO3PVBHy4yu6pfcTOXZQekgwGno82u3tm1cPrsj8N6CuISayVNmV9F9iX6_ByyngEwpANT15o9OPrUz2tHJ6NWzxEnFjr39mV4xKt8Z-ONJ-smzhzTPxaVpWit5erP0xGXBBln6xE5GjQetNtpFYbNFSS-4SrU5FDNnOT8IinjUS0';//this.jwtService.sign(payload, { expiresIn: '1 days' });

        //const { access_token } = ;//await loginResult.json();

        await this.saveToken(access_token);

        return null;
    }

    private static wasListenerAddedYet = false;

    addListener(setUser: (user: CurrentUser | null) => void) {
        if (typeof window !== 'undefined' && !UserModel.wasListenerAddedYet) {
            UserModel.wasListenerAddedYet = true;
            let previousValue:CurrentUser | null = null;
            window.addEventListener('storage', async event => {
                if (event?.key !== LOCAL_STORAGE_JWT_KEY) {
                    return;
                }

                const value = await this.getCurrentUser();

                if (previousValue !== value) {
                    setUser(value);
                    previousValue = value;
                }
            });
        }
    }
}

