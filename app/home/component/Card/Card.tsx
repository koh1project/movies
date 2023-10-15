import {
  DocumentCard,
  DocumentCardActions,
  DocumentCardPreview,
  DocumentCardTitle,
  ImageFit,
  Stack,
  Text,
  getTheme,
} from "@fluentui/react";

import { CARD_PREVIEW_IMAGE_SIZE_HEIGHT, CARD_PREVIEW_IMAGE_SIZE_WIDTH } from "../../const";

export type CardProps = {
  title: string;
  imagePath: string;
  releaseDate: string;
  id: number;
};

export const Card: React.FC<CardProps> = ({ title, releaseDate, id, imagePath }) => {
  const theme = getTheme();

  return (
    <DocumentCard
      style={{
        boxShadow: theme.effects.elevation16,
        maxWidth: 300,
      }}
      onClickHref={`https://www.themoviedb.org/movie/${id}`}
      onClickTarget="_blank"
      role="button"
      tabIndex={0}
    >
      <DocumentCardPreview
        previewImages={[
          {
            previewImageSrc: imagePath,
            imageFit: ImageFit.centerContain,
            width: CARD_PREVIEW_IMAGE_SIZE_WIDTH,
            height: CARD_PREVIEW_IMAGE_SIZE_HEIGHT,
          },
        ]}
      />
      <DocumentCardTitle title={title} />
      <Stack
        horizontal
        horizontalAlign="space-between"
        tokens={{
          childrenGap: 10,
          padding: "0 16px",
        }}
      >
        <Text as={"p"} block={false}>
          Released {releaseDate}
        </Text>
        <DocumentCardActions
          actions={[
            {
              iconProps: {
                iconName: id % 2 === 1 ? "FavoriteStar" : "FavoriteStarFill",
              },
              onClick: (ev: any) => {
                console.log("Add to favorites was clicked");
              },
              ariaLabel: "Add to favorites",
            },
          ]}
        />
      </Stack>
    </DocumentCard>
  );
};
