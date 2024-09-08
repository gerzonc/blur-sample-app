import { FlashList, type FlashListProps } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  type AnimatedProps
} from "react-native-reanimated";
import Header from "../components/header";

const DATA: Entry[] = [
  {
    id: 1,
    title: "Reflecting on a Productive Day",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Completed all tasks on my to-do list. Felt a great sense of accomplishment. Excited about the progress made on the project.",
    date: "2023-06-01"
  },
  {
    id: 2,
    title: "Morning Thoughts and Goals",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Woke up feeling refreshed. Set intentions for the day: exercise, work on thesis, call mom. Hoping for a focused and balanced day.",
    date: "2023-06-02"
  },
  {
    id: 3,
    title: "Overcoming a Challenge at Work",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Faced a difficult problem with the new software. After hours of troubleshooting, found a solution. Feeling proud of my perseverance.",
    date: "2023-06-03"
  },
  {
    id: 4,
    title: "Gratitude List for Today",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "1. Supportive family 2. Good health 3. Beautiful weather 4. Delicious home-cooked meal 5. Exciting new book to read",
    date: "2023-06-04"
  },
  {
    id: 5,
    title: "Exploring a New Hobby",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Started learning to play the guitar today. Fingers hurt but enjoyed the process. Looking forward to practicing more tomorrow.",
    date: "2023-06-05"
  },
  {
    id: 6,
    title: "Memorable Moment with Friends",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Surprise birthday party for Sarah. The look on her face was priceless. Grateful for such wonderful friends and joyful moments.",
    date: "2023-06-06"
  },
  {
    id: 7,
    title: "Personal Growth Reflection",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Noticed I'm handling stress better lately. Meditation is helping. Proud of the progress I've made in managing my emotions.",
    date: "2023-06-07"
  },
  {
    id: 8,
    title: "Planning for the Weekend",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Excited about the upcoming hiking trip. Need to prepare gear and snacks. Looking forward to disconnecting and enjoying nature.",
    date: "2023-06-08"
  },
  {
    id: 9,
    title: "Thoughts on a Book I'm Reading",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Halfway through '1984' by George Orwell. Fascinated by the dystopian world. Reflection on the importance of individual thought and freedom.",
    date: "2023-06-09"
  },
  {
    id: 10,
    title: "Reflections on My Fitness Journey",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Completed a 5K run today. Improved my time by 2 minutes. Feeling stronger and more confident in my physical abilities.",
    date: "2023-06-10"
  },
  {
    id: 11,
    title: "Dream Journal Entry",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Vivid dream about flying over a cityscape. Felt a sense of freedom and exhilaration. Woke up feeling inspired and energized.",
    date: "2023-06-11"
  },
  {
    id: 12,
    title: "Celebrating a Personal Achievement",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Finally finished my novel's first draft! Months of hard work paid off. Excited to start the editing process next week.",
    date: "2023-06-12"
  },
  {
    id: 13,
    title: "Dealing with Stress and Anxiety",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Felt overwhelmed with work deadlines. Practiced deep breathing and took a walk. Reminder to take breaks and prioritize self-care.",
    date: "2023-06-13"
  },
  {
    id: 14,
    title: "My Goals for the Coming Month",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "1. Read two books 2. Exercise 3 times a week 3. Learn basic Spanish 4. Declutter home office 5. Plan summer vacation",
    date: "2023-06-14"
  },
  {
    id: 15,
    title: "Favorite Memory from Today",
    image: "https://avatarfiles.alphacoders.com/351/351906.jpg",
    text: "Surprise video call from my sister. Laughed about old childhood memories. Reminder of the importance of family connections.",
    date: "2023-06-15"
  }
];

const AnimatedList = Animated.createAnimatedComponent(
  FlashList
) as typeof Animated.createAnimatedComponent extends (component: any) => infer R
  ? R & React.ComponentClass<AnimatedProps<FlashListProps<object>>>
  : never;

export default function App() {
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const renderItem = (_) => (
    <View
      style={{
        backgroundColor: "red",
        height: 90,
        width: "100%",
        borderRadius: 8,
        marginVertical: 12
      }}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style="light" animated />
      <Header title="Home" scrollY={scrollY} onPress={() => {}} />
      <View style={{ flex: 1 }}>
        <AnimatedList
          data={DATA}
          estimatedItemSize={90}
          renderItem={renderItem}
          onScroll={onScroll}
          scrollEventThrottle={16}
          automaticallyAdjustContentInsets
          removeClippedSubviews
          scrollIndicatorInsets={{
            top: 110
          }}
          automaticallyAdjustsScrollIndicatorInsets
          automaticallyAdjustKeyboardInsets
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.contentContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 80,
    paddingHorizontal: 16,
    paddingTop: 100
  }
});
