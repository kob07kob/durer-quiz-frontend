import jwtDecode from 'jwt-decode';
import { CurrentUser, JwtPayload } from './types';

const LOCAL_STORAGE_JWT_KEY = 'kjqAEKeFkMpOvOZrzcvp';

export class UserModel {

    private userCache: { token: string, decodedToken: JwtPayload | string, user: CurrentUser } | null= null;

    private static isTokenExpired(decodeToken: any): boolean {
        return new Date().getTime() / 1000 > decodeToken.exp;
    }

    private static decodeToken(token: string): JwtPayload |string {
        return token;//jwtDecode(token) as JwtPayload;
    }

    private async saveToken(token: string) {
        localStorage.setItem(LOCAL_STORAGE_JWT_KEY, token);

        const payload = {
            id: 1,
            email: 'proba@durer.hu',
            name: 'Próba János',
            exp: 0
        };
        //UserModel.decodeToken(token);

        const user = await this.fetchUserData();

        this.userCache = {
            token: token,
            decodedToken: payload,
            user
        };
    }

    private async fetchUserData(): Promise<CurrentUser> {
        return {
            name: 'Próba János',
            email: 'proba@durer.hu',
            id: 1,
        }
        //const userResult 
        //fetch
        /*if (!userResult.ok) {
            return null;
        }

        return await userResult.json() as CurrentUser;*/
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
                return this.userCache.user;
            }

            this.userCache = null;
        }

        const payload = UserModel.decodeToken(token);

        if (UserModel.isTokenExpired(payload)) {
            localStorage.removeItem(LOCAL_STORAGE_JWT_KEY);
            return null;
        }

        const user = await this.fetchUserData();

        this.userCache = {
            token: token,
            decodedToken: payload,
            user
        };

        return user;
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
        if(email !== 'proba@durer.hu') return 'Nem létező email';
        if(password !== 'legjobbjelszo') return 'hibás jelszó';
        /*const loginResult = await fetch(`${ApiConnectionParameters.ApiUrl}/auth/local-login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (!loginResult.ok) {
            return (await loginResult.json() as any)?.message || 'Valami hiba történt!';
        }*/
         const access_token = 'asdasdasd';//this.jwtService.sign(payload, { expiresIn: '1 days' });

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

