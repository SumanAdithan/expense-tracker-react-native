import { colors, radius } from '@constants';
import { verticalScale } from '@utils';
import { useRouter } from 'expo-router';
import { CaretLeft } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { BackButtonProps } from 'types';

export const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.back()} style={[styles.button, style]}>
            <CaretLeft size={verticalScale(iconSize)} color={colors.white} weight='bold' />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.neutral600,
        alignSelf: 'flex-start',
        borderRadius: radius._12,
        padding: 5,
    },
});
