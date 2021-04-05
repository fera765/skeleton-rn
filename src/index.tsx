import React, { useState } from 'react';

import { Animated } from 'react-native';

interface ISkeleton {
  duration?: number;
  background?: string[];
  style?: [];
}

const Skeleton: React.FC<ISkeleton> = ({
  background = ['#e6e6ed', '#dddddd', '#eeeeee', '#e6e6ed', '#e6e6ed'],
  duration = 3000,
  style = [],
  children,
}) => {
  const [animation] = useState(new Animated.Value(0));

  Animated.loop(
    Animated.timing(animation, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }),
  ).start();

  const inputRange = Array(background.length)
    .fill(0)
    .map((e, i) => i / background.length);
  const interṕolatedValue = animation.interpolate({
    inputRange,
    outputRange: background,
  });

  return (
    <Animated.View
      style={[
        style,
        {
          backgroundColor: interṕolatedValue,
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};
export default Skeleton;
