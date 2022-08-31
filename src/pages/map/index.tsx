import React from 'react'
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Map() {
  return (
    <Layout>
      <img src={useBaseUrl("/img/map.jpg")} alt="map" />
    </Layout>
  )
}
