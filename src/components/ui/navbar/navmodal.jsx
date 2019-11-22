import React, { Component } from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

export default class NavModal extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };
  render() {
    return (
      <div className="modal-container" data-aos="fade-in">
        <div data-aos="fade-right" className="modal-container-overlay">
          <Menu
            mode="inline"
          >
            <SubMenu>
              <Menu.Item>Option 1</Menu.Item>
              <Menu.Item>Option 2</Menu.Item>
              <Menu.Item>Option 3</Menu.Item>
              <Menu.Item>Option 4</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="modal-container-close" onClick={() => this.props.onClose()}>

        </div>
      </div>
    )
  }
}
