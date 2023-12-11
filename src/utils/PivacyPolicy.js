import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PrivacyPolicy = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.content}>
        {/* Your privacy policy content goes here */}
        This is the privacy policy text.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default PrivacyPolicy;
