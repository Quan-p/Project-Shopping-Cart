import React, { useState } from 'react';
import SlidingPane from "react-sliding-pane";
import { ShoppingCartOutlined } from '@material-ui/icons';
import '../css/ShoppingPane.css'
 
const ShoppingPane = (props) => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });
    
    const { cartItems, onAdd } = props;

      return (
        <div>
          <button onClick={() => setState({ isPaneOpen: true })}>
            <ShoppingCartOutlined />
          </button>
          
          <SlidingPane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={state.isPaneOpen}
            title="Cart Items"
            onRequestClose={() => {
              setState({ isPaneOpen: false });
            }}
          >
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item) => (
              <div key={item.id} className={'row'}>
                <div>{item.name}</div>
              </div>
            ))}
            <br />
          </SlidingPane>
        </div>
      );
};
 
export default ShoppingPane;