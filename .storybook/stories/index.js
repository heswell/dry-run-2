import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Grid from '../../packages/test-grid/src/grid';
import Layout from '../../packages/test-layout/src/layout';
import {TestReactComponent} from '../../packages/test-babel/src/es6Component';

storiesOf('Grid', module)
.add('Test div', () => {
  return (
    <div height={400} width={500} style={{width: 200, height: 50, backgroundColor:'red'}}/>
  );
})
.add('Test Grid', () => {
  return (
    <Grid />
  );
})
.add('Test Layout', () => {
  return (
    <Layout >
      <Grid />
      <TestReactComponent />
    </Layout>  
  );
})
