import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am driven to see genius be realized. I am inspired by crafting a
          better reality through the fusion of ideas, collaboration, and hard
          work. I have strong opinions, but try to hold them loosely. I desire
          to continually improve.
        </p>
        <p>
          I believe that the best software is built by people for people. I see
          software development as an artistic endeavor rooted in engineering
          sensibility. I hold that code can be an artistic medium.
        </p>
        <p>
          I have demonstrated success across all levels of a technical
          organization. I have built exceptional teams and led them to deliver
          excellent software products. I have designed elegant, flexible, and
          scalable architectures and have authored the solid, clean code to make
          those designs a reality.
        </p>
        <p>
          I am an executive, technical leader, architect, and developer. I
          strive to be a catalyst for the success of every person and project I
          touch.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
