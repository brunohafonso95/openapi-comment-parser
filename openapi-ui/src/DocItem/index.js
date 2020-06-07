import React from 'react';

import ApiDemoPanel from 'ApiDemoPanel';
import ParamsTable from 'ParamsTable';
import StatusCodesTable from 'StatusCodesTable';

import styles from './styles.module.css';

function DocItem({ item }) {
  return (
    <div id={item.hashId} className="row">
      <div className="col">
        <div className={styles.docItemContainer}>
          <article>
            <div className="markdown">
              <h2>{item.summary}</h2>
              <p>{item.description}</p>
              <ParamsTable parameters={item.parameters} type="path" />
              <ParamsTable parameters={item.parameters} type="query" />
              <ParamsTable parameters={item.parameters} type="header" />
              <ParamsTable parameters={item.parameters} type="cookie" />

              <StatusCodesTable responses={item.responses} />
            </div>
          </article>
        </div>
      </div>
      <div className="col col--5">
        <ApiDemoPanel item={item} />
      </div>
    </div>
  );
}

export default DocItem;
