import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { styles } from "./button.styles";
import { colors } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

type IconProps = TablerIconProps & {
  icon: React.ComponentType<TablerIconProps>;
};

function Button({ style, children, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      activeOpacity={0.8}
      style={[styles.container, style]}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Title({ children, style }: TextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

function Icon({
  icon: Icon,
  size = 24,
  color = colors.gray[100],
  ...rest
}: IconProps) {
  return <Icon size={size} color={color} {...rest} />;
}

Button.Title = Title;
Button.Icon = Icon;

export { Button };
