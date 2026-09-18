import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-in" className="mt-4 text-lg text-primary">
        Go to SignIn
      </Link>

      <Link href="/">Go back</Link>
    </View>
  )
}

export default SignIn