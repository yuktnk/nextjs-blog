import Head from 'next/head'
import Layout from '../../components/layout'
import Date from '../../components/date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'


// 1, ページをrenderingするcomponent
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

// 2, getStaticPaths
export const getStaticPaths: GetStaticPaths = async() => {
// export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,          // 事前にビルドするパス対象を指定するための配列
    fallback: false // 事前ビルドしたパス以外にアクセスしたときの動作を決めるもの（falseの場合は404ページを表示）
  }
}

// 3, getStaticProps
export const getStaticProps: GetStaticProps = async ({params}) => {
// export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}


// The page file must contain :
// 1, A React component to render this page
// 2, getStaticPaths which returns an array of possible values for id
// 3, getStaticProps which fetches necessary data for the post with id