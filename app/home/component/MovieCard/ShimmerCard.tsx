import { Shimmer, ShimmerElementType, getTheme } from "@fluentui/react";

export const ShimmerCard: React.FC = () => {
  const theme = getTheme();
  return (
    <Shimmer
      shimmerElements={[{ height: 400, type: ShimmerElementType.line, width: 300 }]}
      style={{
        boxShadow: theme.effects.elevation8,
        width: 300,
        height: 400,
      }}
    />
  );
};
