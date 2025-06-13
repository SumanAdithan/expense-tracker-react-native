import { colors } from '@constants';
import React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { ScreenWrapperProps } from 'types';

const { height } = Dimensions.get('window');

export const ScreenWrapper = ({ style, children }: ScreenWrapperProps) => {
    let paddingTop = Platform.OS == 'ios' ? height * 0.06 : 50;

    return (
        <View style={[{ paddingTop, flex: 1, backgroundColor: colors.neutral900 }, style]}>
            <StatusBar barStyle={'light-content'} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({});
