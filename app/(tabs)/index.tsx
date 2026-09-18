import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import {styled} from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
 
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 text-lg text-primary">
        Go to Onboarding
      </Link>

      <Link href="/(auth)/sign-in" className="mt-4 text-lg text-primary">
        Go to Sign In
      </Link>

      <Link href="/(auth)/sign-up" className="mt-4 text-lg text-primary">
        Go to Sign Up
      </Link>

      <Link href="/subscriptions/spotify" className="mt-4 text-lg text-primary">
        Spotify
      </Link>

      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" },
      }}></Link>
    </SafeAreaView>
  );
}