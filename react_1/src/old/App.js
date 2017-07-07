import React from 'react';
import './App.css'

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="modalbox">
        <div className="modalbox-header">
          <span className="modalbox-title">Page setup</span>
          <a className="modalbox-close">
            <svg width="1024" height="1024" viewBox="0 0 1024 1024">
              <g className="transform-group">
                <g transform="translate(0, 25.375) scale(1, -1) scale(0.03125, 0.03125)">
                  <path d="M573.989475 312.942837l288.898365 279.702021c14.022629 13.587739 14.022629 35.617094 0 49.206846-14.020551 13.587739-36.757056 13.587739-50.780724 0L523.185891 362.128539 234.265705 641.852712c-14.023668 13.587739-36.760173 13.587739-50.780724 0-14.022629-13.589753-14.022629-35.620114 0-49.206846l288.898365-279.702021L183.484981 33.240816c-14.022629-13.587739-14.022629-35.617094 0-49.206846 14.020551-13.587739 36.757056-13.587739 50.780724 0l288.920186 279.724172 288.920186-279.724172c14.023668-13.587739 36.760173-13.587739 50.780724 0 14.022629 13.589753 14.022629 35.620114 0 49.206846L573.989475 312.942837z" fill="#737383">

                  </path>
                  </g>
                  </g>
            </svg>
          </a>
        </div>

        <div className="modelsub-title"><label>Paper size</label></div>
        

        <div className="modalbox-body">
          <div className="modalbox-button" id="conformBtn">OK</div>
          <div className="modalbox-button" id="cancelBtn">Cancel</div>
          <div className="modalbox-button" id="setDefalt">Set as default</div>
        </div>
      </div>
    );
  }
}
export default ShoppingList;