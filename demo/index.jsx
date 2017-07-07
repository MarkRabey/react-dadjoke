/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import DadJoke from 'DadJoke';
import {
  Jumbotron,
  PageHeader,
  Panel
} from 'react-bootstrap';

import './main.scss';

class Demo extends React.Component {
  render() {
    const docs = '//github.com/Opentrace/react-dadjoke';

    return (
      <div className="demo">
        <Jumbotron>
          <div className="container">
            <h1>React Dad Joke</h1>
            <p>Add the most hilarious jokes to your app or web site!</p>
          </div>
        </Jumbotron>

        <div className="container">
          <div>
            <PageHeader>
              Display as text
            </PageHeader>
            <Panel header={ <span><code>&lt;DadJoke /&gt;</code></span> }>
              <DadJoke />
            </Panel>
          </div>

          <div>
            <PageHeader>
              Display as image
            </PageHeader>
            <Panel header={ <span><code>&lt;DadJoke img /&gt;</code></span> }>
              <DadJoke img />
            </Panel>
          </div>

          <div>
            <PageHeader>
              Display with refresh button
            </PageHeader>
            <Panel header={ <span><code>&lt;DadJoke refreshButton /&gt;</code></span> }>
              <DadJoke refreshButton refreshButtonClassName="btn btn-primary" />
            </Panel>
          </div>

          <div>
            <PageHeader>
              Display a specific joke
            </PageHeader>
            <Panel header={ <span><code>&lt;DadJoke jokeID="haahVKZDtrc" /&gt;</code></span> }>
              <DadJoke jokeID="haahVKZDtrc" />
            </Panel>
          </div>

          <div>
            <PageHeader>
              Optional Props
            </PageHeader>
            <ul>
              <li>
                <code>className</code><span className="text-muted">(string)</span> adds to wrapping <code>div</code> or <code>img</code>.
                <strong>Default: </strong><code>.dad-joke</code>
              </li>

              <li>
                <code>jokeID</code><span className="text-muted">(string)</span> specify a joke to display
              </li>
              
              <li>
                <code>img</code><span className="text-muted">(boolean)</span> display an image instead of text
              </li>
              
              <li>
                <code>refreshButton</code><span className="text-muted">(boolean)</span> display a refresh button
              </li>

              <li>
                <code>refreshButtonClassName</code>
                <span className="text-muted">(string)</span> adds classes(es) to the <code>button</code>.
                <strong>Default: </strong><code>.dad-joke__refresh-button</code>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('content'));
