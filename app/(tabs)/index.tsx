import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-7xl font-sans-extrabold">
        Home
      </Text>
      {/* <Text className="text-7xl font-bold">
        Home
      </Text> */}
      <Link href="/onboarding" className="mt-4 p-4 font-sans-bold rounded text-white text-lg bg-primary">
        Go to Onboarding
      </Link>

      <Link href="/(auth)/sign-in" className="mt-4 p-4 font-sans-bold rounded text-white text-lg bg-primary">
        Go to Sign In
      </Link>

      <Link href="/(auth)/sign-up" className="mt-4 p-4 font-sans-bold rounded text-white text-lg bg-primary">
        Go to Sign Up
      </Link>

      {/* <Link href="/subscriptions/spotify" className="mt-4 text-lg text-primary">
        Spotify
      </Link>

      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" },
      }}>
        claude max subscription
      </Link> */}
    </SafeAreaView>
  );
}