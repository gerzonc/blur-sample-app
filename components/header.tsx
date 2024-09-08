import { BlurView } from "@react-native-community/blur";
import Constants from "expo-constants";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import type { PressableProps } from "react-native";
import Animated, {
  type SharedValue,
  Extrapolation,
  interpolate,
  useAnimatedStyle
} from "react-native-reanimated";

const HEADER_HEIGHT = 96;
const MIN_HEADER_HEIGHT = 44;
const SPACING = 10;
const HEADER_FONT_SIZE = 40;
const HEADER_MIN_FONT_SIZE = 22;

const { width } = Dimensions.get("window");

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

interface HeaderProps {
  title: string;
  scrollY: SharedValue<number>;
  onPress: PressableProps["onPress"];
}

const Header = ({ title, scrollY, onPress }: HeaderProps) => {
  const textStylez = useAnimatedStyle(() => {
    const fontSize = interpolate(
      scrollY.value,
      [-100, 0],
      [HEADER_FONT_SIZE, HEADER_MIN_FONT_SIZE],
      Extrapolation.CLAMP
    );
    return {
      fontSize
    };
  });

  const headerContainerStyle = useAnimatedStyle(() => {
    return {
      paddingTop: interpolate(
        scrollY.value,
        [-60, 40],
        [HEADER_HEIGHT, MIN_HEADER_HEIGHT],
        Extrapolation.CLAMP
      )
    };
  });

  return (
    <Animated.View
      style={{
        zIndex: 2
      }}
    >
      <AnimatedBlurView
        style={[
          {
            position: "absolute",
            left: 0,
            right: 0,
            padding: SPACING,
            paddingTop: Constants.statusBarHeight
          },
          headerContainerStyle
        ]}
      >
        <Animated.View
          style={{
            paddingHorizontal: SPACING / 2
          }}
        >
          <Animated.Text
            style={[
              {
                color: "white",
                fontSize: 54,
                width: "100%"
              },
              textStylez
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {title}
          </Animated.Text>
        </Animated.View>
        <View style={styles.separator} />
      </AnimatedBlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  separator: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0
  }
});

export default Header;
