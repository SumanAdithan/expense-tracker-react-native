import { auth, firestore } from '@config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, UserType } from 'types';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserType>(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (firebaseUser) => {
            console.log('firebase user:', user);
        });
    }, []);

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return { success: true };
        } catch (err: any) {
            let message = err.message;
            return { success: false, message };
        }
    };

    const register = async (email: string, password: string, name: string) => {
        try {
            let response = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(firestore, 'users', response?.user?.uid), {
                name,
                email,
                uid: response?.user?.uid,
            });
            return { success: true };
        } catch (err: any) {
            let message = err.message;
            return { success: false, message };
        }
    };

    const updateUserData = async (uid: string) => {
        try {
            const docRef = doc(firestore, 'users', uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                const userData: UserType = {
                    uid: data?.uid,
                    email: data.email || null,
                    name: data.name || null,
                    image: data.image || null,
                };
                setUser({ ...userData });
            }
        } catch (err: any) {
            let message = err.message;
            console.log('error: ', err);
        }
    };

    const contextValue: AuthContextType = {
        user,
        setUser,
        login,
        register,
        updateUserData,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be wrapped inside AuthProvider');
    }
    return context;
};
