import React from 'react';

class Contact_button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isModalOpen: false};
    }

    handleClickLesson() {
        this.setState({isModalOpen: true});
    }
    
    handleClickClose() {
        this.setState({isModalOpen:false});
    }

    render() {
        let modal;
        if (this.state.isModalOpen) {
            modal = (
              <div className='modal'>
                <div className='modal-inner'>
                  <div className='modal-introduction'>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.introduction}</p>
                  </div>
                  {/* onClickイベントを追加 */}
                  <button
                    className='modal-close-btn'
                    onClick={() => {this.handleClickClose()}}
                  >
                    とじる
                  </button>
                </div>
              </div>
            );
        }

        return (
            <div className='lesson-card'>
              <div
                className='lesson-item'
                onClick={() => {this.handleClickLesson()}}
              >
                <p>{this.props.name}</p>
              </div>
              {modal}
            </div>
        );
    }
}

export default Contact_button;
