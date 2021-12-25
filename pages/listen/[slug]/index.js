import Head from 'next/head'
import {Fragment} from "react";
import Layout from "../../../components/Layout";
import BlogPostDetails from "../../../components/blog/BlogPostDetails";

export default function PodcastShowDetailsPage() {
    return (
        <Fragment>
            <Head>
                <title>Morabica Blog Post Details</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <PodcastShowDetailsPage />
            </Layout>
        </Fragment>
    )
}
