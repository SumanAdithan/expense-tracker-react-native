import { colors, radius } from '@constants';
import { verticalScale } from '@utils';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CustomButtonProps } from 'types';
import { Loading } from './Loading';

export const Button = ({ style, onPress, loading = false, children }: CustomButtonProps) => {
    if (loading) {
        return (
            <View style={[styles.button, style, { backgroundColor: 'transparent' }]}>
                <Loading />
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: radius._17,
        borderCurve: 'continuous',
        height: verticalScale(52),
        justifyContent: 'center',
        alignItems: 'center',
    },
});
