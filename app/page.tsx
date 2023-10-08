"use client";

import { Image, Link, Stack, Text } from "@fluentui/react";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Text block> Get started by editing&nbsp;</Text>
        <Stack>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text>By</Text>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
            />
          </Link>
        </Stack>
      </div>

      <Stack className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} />
      </Stack>

      <div className={styles.grid}>
        <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text as={"h2"}>
            Docs <span>-&gt;</span>
          </Text>
          <Text>Find in-depth information about Next.js features and API.</Text>
        </Link>

        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text as={"h2"}>
            Learn <span>-&gt;</span>
          </Text>
          <Text>Learn about Next.js in an interactive course with&nbsp;quizzes!</Text>
        </Link>

        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text as={"h2"}>
            Templates <span>-&gt;</span>
          </Text>
          <Text>Explore the Next.js 13 playground.</Text>
        </Link>

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text as={"h2"}>
            Deploy <span>-&gt;</span>
          </Text>
          <Text>Instantly deploy your Next.js site to a shareable URL with Vercel.</Text>
        </Link>
      </div>
    </main>
  );
}
