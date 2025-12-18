import "react-native";

declare module "react-native" {
  interface TextProps {
    className?: string | undefined;
  }

  // TODO: We can add more RN prop interfaces as needed
}
