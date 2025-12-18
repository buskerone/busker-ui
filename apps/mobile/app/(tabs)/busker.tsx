import React, { useState } from "react";
import { ScrollView, View, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@buskerone/ui-mobile";
import { color, typography, type TextTone, type TextVariant } from "@buskerone/tokens";
import { useColorMode, useTheme } from "@buskerone/primitives";

const TEXT_VARIANTS = Object.keys(typography.textVariant) as TextVariant[];
const TEXT_TONES = Object.keys(color.light.text) as TextTone[];

export default function BuskerShowcaseScreen() {
  const { mode, toggleMode } = useColorMode();
  const theme = useTheme();

  const [variant, setVariant] = useState<TextVariant>("body.md");
  const [tone, setTone] = useState<TextTone>("default");

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.color.bg.canvas }]}>
      <SafeAreaView style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brand}>
            <View style={styles.brandIcon}>
              <Text variant="heading.h1" tone="brand">
                B
              </Text>
            </View>
            <View>
              <Text variant="body.sm">busker-ui</Text>
              <Text variant="body.sm" tone="muted">
                Component Library
              </Text>
            </View>
          </View>

          <Pressable style={styles.toggleButton} onPress={toggleMode}>
            <Text variant="body.sm" tone="muted">
              {mode === "light" ? "Switch to dark" : "Switch to light"}
            </Text>
          </Pressable>
        </View>

        {/* Playground */}
        <View style={styles.section}>
          <Text variant="heading.h1" style={styles.sectionTitle}>
            Typography Playground
          </Text>
          <Text variant="body.md" tone="muted" style={styles.sectionSubtitle}>
            Experiment with text variants and tones in real-time.
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.controls}>
            <Text variant="body.sm" tone="muted" style={styles.label}>
              Variant
            </Text>
            <View style={styles.chipRow}>
              {TEXT_VARIANTS.map((v) => (
                <Pressable
                  key={v}
                  onPress={() => setVariant(v)}
                  style={[styles.chip, variant === v && styles.chipSelected]}
                >
                  <Text variant="body.sm" tone={variant === v ? "brand" : "default"}>
                    {v}
                  </Text>
                </Pressable>
              ))}
            </View>

            <Text variant="body.sm" tone="muted" style={[styles.label, styles.toneLabel]}>
              Tone
            </Text>
            <View style={styles.chipRow}>
              {TEXT_TONES.map((t) => (
                <Pressable
                  key={t}
                  onPress={() => setTone(t)}
                  style={[styles.chip, tone === t && styles.chipSelected]}
                >
                  <Text variant="body.sm" tone={tone === t ? "brand" : "default"}>
                    {t}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={styles.preview}>
            <Text variant="body.sm" tone="muted" style={styles.previewLabel}>
              Live Preview
            </Text>
            <Text variant={variant} tone={tone}>
              This demonstrates how the selected variant and tone render on mobile.
            </Text>
          </View>
        </View>

        {/* Typography scale */}
        <View style={styles.section}>
          <Text variant="heading.h1" style={styles.sectionTitle}>
            Typography Scale
          </Text>
          <Text variant="body.md" tone="muted" style={styles.sectionSubtitle}>
            A complete type scale designed for hierarchy and readability.
          </Text>
        </View>

        <View style={styles.grid}>
          {TEXT_VARIANTS.map((v) => (
            <View key={v} style={styles.gridCard}>
              <Text variant="body.sm" tone="muted" style={styles.gridLabel}>
                {v}
              </Text>
              <Text variant={v}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </View>
          ))}
        </View>

        {/* Tones */}
        <View style={styles.section}>
          <Text variant="heading.h1" style={styles.sectionTitle}>
            Text Tones
          </Text>
          <Text variant="body.md" tone="muted" style={styles.sectionSubtitle}>
            Apply semantic meaning with tones. Each tone adapts to your theme automatically.
          </Text>
        </View>

        <View style={styles.grid}>
          {TEXT_TONES.map((t) => (
            <View key={t} style={styles.gridCard}>
              <Text variant="body.sm" tone="muted" style={styles.gridLabel}>
                {t}
              </Text>
              <Text variant="heading.h1" tone={t} style={styles.toneHeading}>
                Sample heading
              </Text>
              <Text variant="body.md" tone={t}>
                This demonstrates how the {t} tone appears in your interface.
              </Text>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 24,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  brandIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
  },
  toggleButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },
  section: {
    gap: 4,
  },
  sectionTitle: {
    marginBottom: 4,
  },
  sectionSubtitle: {
    maxWidth: 360,
  },
  card: {
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 16,
    flexDirection: "column",
    gap: 16,
  },
  controls: {
    gap: 8,
  },
  label: {
    marginBottom: 4,
  },
  toneLabel: {
    marginTop: 8,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },
  chipSelected: {
    borderWidth: 1.5,
  },
  preview: {
    padding: 12,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
  previewLabel: {
    marginBottom: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  gridCard: {
    flexBasis: "48%",
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 12,
    gap: 8,
  },
  gridLabel: {
    marginBottom: 4,
  },
  toneHeading: {
    marginBottom: 4,
  },
});
