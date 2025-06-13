import { colors } from '@constants';
import { Stack } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';

export default function RootLayout() {
    useEffect(() => {
        SystemUI.setBackgroundColorAsync(colors.neutral900);
    }, []);

    return <Stack screenOptions={{ headerShown: false }} />;
}
