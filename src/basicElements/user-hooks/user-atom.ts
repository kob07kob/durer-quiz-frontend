import { atom, useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { UserModel } from './user-model';
import { CurrentUser } from './types';

const RECOIL_KEY_CURRENT_USER = 'current-user';

// TODO User interface
export const currentUserAtom = atom<CurrentUser | null>({
    key: RECOIL_KEY_CURRENT_USER,
    default: null
});

// this component has no visuals, it only mutates the currentUser atom
export const LoadUserOnClientSide = () => {
    const [user, setUser] = useRecoilState(currentUserAtom);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const userModel = new UserModel();

        userModel
            .getCurrentUser()
            .then(user => {
                setUser(user);
            });

        userModel.addListener(setUser);
    }, []);

    return null;
};
