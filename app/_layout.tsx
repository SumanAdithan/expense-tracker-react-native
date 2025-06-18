import { colors } from '@constants';
import { AuthProvider } from '@context';
import { Stack } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';

const StackLayout = () => {
    useEffect(() => {
        SystemUI.setBackgroundColorAsync(colors.neutral900);
    }, []);

    return <Stack screenOptions={{ headerShown: false }} />;
};

export default function RootLayout() {
    return (
        <AuthProvider>
            <StackLayout />
        </AuthProvider>
    );
}
