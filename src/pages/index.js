import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import PostLink from "../components/post-link"

// import Image from "../components/image"
// import SEO from "../components/seo"

const Home = () => (
  <Layout>
    <Hero />
    <PostLink />
    <PostLink />
    <PostLink />
  </Layout>
)

export default Home
