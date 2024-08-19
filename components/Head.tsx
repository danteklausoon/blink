import Head from 'next/head';
import { TagsHead } from "../Types/Head"

const HeadContainer = ({title,description,tagurl,tagimage}:TagsHead) => {
    return (
        <Head>

            <title>{title}</title>

            <meta name="robots" content="index, follow" />
            
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={tagurl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={tagimage} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={tagurl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={tagimage} />

        </Head>
    );
}

export default HeadContainer;