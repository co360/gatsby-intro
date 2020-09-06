import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layouts';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello Toronto!</p>
    <Link to="/about/">Learn About Me &rarr;</Link>
  </Layout>
);
