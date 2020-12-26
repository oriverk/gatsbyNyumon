import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import NOT_FOUND_IMG from '../../static/404.jpg'
import '../styles/404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" description="ページが見つかりません。" />
    <div className='not-found-message'>
      <h1>404 Not Found</h1>
      <Link to='/'>トップページ</Link>
    </div>
    <img src={NOT_FOUND_IMG} className='not-found-image' alt='not-found' />
  </Layout>
)

export default NotFoundPage
