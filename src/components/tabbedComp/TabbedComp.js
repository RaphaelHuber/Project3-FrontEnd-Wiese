import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import './TabbedComp.css';

class TabbedComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'description',
    };
  }

  render() {
    return (
      <div className="tabbedComp-margin1 tabbedComp-size">
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="description" title="Description">
            <div>{this.props.project.description}</div>
          </Tab>
          <Tab eventKey="projectOwner" title="Project Owner">
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non nisi. Amet volutpat consequat mauris nunc congue nisi vitae suscipit. Ante in nibh mauris cursus. Imperdiet dui accumsan sit amet nulla. Aliquam faucibus purus in massa tempor. Neque egestas congue quisque egestas diam in. Adipiscing elit pellentesque habitant morbi tristique senectus. Aliquam etiam erat velit scelerisque in. Hendrerit gravida rutrum quisque non tellus orci ac auctor. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. </div>
          </Tab>
          <Tab eventKey="documents" title="Documents">
            <div>Tincidunt praesent semper feugiat nibh sed pulvinar proin. Vestibulum sed arcu non odio euismod lacinia. Aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod. In hac habitasse platea dictumst. In pellentesque massa placerat duis ultricies lacus sed. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Sed euismod nisi porta lorem mollis aliquam ut. Gravida cum sociis natoque penatibus et magnis.</div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default TabbedComp;