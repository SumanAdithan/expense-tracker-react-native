import { splashImage } from '@assets';
import { colors } from '@constants';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const index = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/(auth)/welcome');
        }, 2000);
    }, []);
    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode='contain' source={splashImage} />
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.neutral900,
    },
    logo: {
        height: '20%',
        aspectRatio: 1,
    },
});
