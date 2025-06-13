import { colors } from '@constants';
import { verticalScale } from '@utils';
import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { TypoProps } from 'types';

export const Typo = ({ size, color = colors.text, fontWeight = '400', children, style, textProps = {} }: TypoProps) => {
    const textStyle: TextStyle = {
        fontSize: size ? verticalScale(size) : verticalScale(18),
        color,
        fontWeight,
    };
    return (
        <Text style={[textStyle, style]} {...textProps}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({});
