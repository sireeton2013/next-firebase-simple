import React from 'react'
import Head from 'next/head'
import Register from '../components/register'

const Index = props => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
    </Head>

    <div className="container">
      <h1>SIT CRAFT Camp Registration</h1>
      <Register></Register>
    </div>
  </div>
)

export default Index
