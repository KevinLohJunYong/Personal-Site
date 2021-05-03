import React from 'react';
import Layout from '@theme/Layout';

function name() {
  return (
    <Layout title="My name">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '30px',
        }}>
            <p>
           <strong> Kevin Loh Jun Yong </strong>
        </p>
      </div>
    </Layout>
  );
}

export default name;