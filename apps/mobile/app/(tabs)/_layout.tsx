import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorMode } from "@buskerone/primitives";
import { color } from "@buskerone/tokens";

export default function TabLayout() {
  const { mode: colorScheme } = useColorMode();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: color[colorScheme].text.default,
        tabBarStyle: {
          backgroundColor: color[colorScheme].bg.canvas,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="busker"
        options={{
          title: "Busker UI",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paintbrush.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
