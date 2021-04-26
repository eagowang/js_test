import React from 'react';
import './index.less';

export default function Index() {
  return (
    <div class='container'>
      <div className='header'>页头</div>
      <div className='main'>
        <p>第一行</p>
        <p>第二行</p>
        <p>第三行</p>
      </div>
      <div className='footer'>页脚</div>
    </div>
  );
}
