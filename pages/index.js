import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I like to write, code, and be outside.</p>
        <p>This is the first draft backbone of my blog site.</p>
      </section>
    </Layout>
  );
}
