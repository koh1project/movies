"use client";

import {
  DocumentCard,
  DocumentCardActions,
  DocumentCardPreview,
  DocumentCardTitle,
  ImageFit,
  Stack,
  Text,
  getTheme,
  initializeIcons,
} from "@fluentui/react";

const theme = getTheme();

export default function Home() {
  initializeIcons();
  return (
    <main>
      <Stack>
        <DocumentCard
          style={{ boxShadow: theme.effects.elevation16 }}
          onClickHref="https://www.themoviedb.org/movie/337404-cruella"
          onClickTarget="_blank"
          role="button"
          tabIndex={0}>
          <DocumentCardPreview
            previewImages={[
              {
                previewImageSrc:
                  "https://www.themoviedb.org/t/p/w220_and_h330_face/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
                imageFit: ImageFit.centerContain,
                width: 318,
                height: 196,
              },
            ]}
          />
          <DocumentCardTitle title="Create Next App" shouldTruncate />
          <Stack horizontal horizontalAlign="space-between" tokens={{ childrenGap: 10 }}>
            <Text as={"p"} block={false}>
              Released {new Date().toLocaleDateString()}
            </Text>
            <DocumentCardActions
              actions={[
                {
                  iconProps: {
                    iconName: Math.random() > 0.3 ? "FavoriteStar" : "FavoriteStarFill",
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
      </Stack>
    </main>
  );
}
