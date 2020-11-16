import { CurrentUser } from "./types";
import { UserModel } from "./user-model";
import { useRecoilState } from 'recoil';
import { currentUserAtom } from './user-atom';

const userModel = new UserModel();

export const useCurrentUser = (): CurrentUser|null => {
    const [user, setUser] = useRecoilState(currentUserAtom);

    return user;
};

export const useLogin = () => {
    const [user, setUser] = useRecoilState(currentUserAtom);

    return async (email: string, password: string) => {
        const loginErrors = await userModel.login(email, password);

        if (!loginErrors) {
            const user = await userModel.getCurrentUser();
            setUser(user);
        }

        return loginErrors;
    };
};

export const useLoginOtt = () => {
    const [user, setUser] = useRecoilState(currentUserAtom);

    return async (email: string, token: string) => {
        const loginErrors = await userModel.loginOtt(email, token);

        if (!loginErrors) {
            const user = await userModel.getCurrentUser();
            setUser(user);
        }

        return loginErrors;
    };
};

export const useLogout = () => {
    const [user, setUser] = useRecoilState(currentUserAtom);
    return () => {
        userModel.logout();
        setUser(null);
    };
};

export const useAuthHeader = (): { Authorization: string } => {
    // this is only here, to refresh the token, whenever the user changes
    const [user, setUser] = useRecoilState(currentUserAtom);

    const token = userModel.getToken();
    return {
        'Authorization': `Bearer ${token}`
    };
};