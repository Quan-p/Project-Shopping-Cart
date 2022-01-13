import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import { ShoppingCartOutlined } from '@material-ui/icons';
import '../css/Cart.css'
 
const Cart = () => {
  const [openPanel, setOpenPanel] = useState(false);
  return (
    <div>
      <div>
        <button onClick={() => setOpenPanel(true)}>
            <ShoppingCartOutlined />
        </button>
      </div>
      <SlidingPanel
        type={'left'}
        isOpen={openPanel}
        size={20}
      >
        <div>
          <div>My Panel Content</div>
          <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </SlidingPanel>
    </div>
  );
};
 
export default Cart;