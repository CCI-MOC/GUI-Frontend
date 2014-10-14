define(
  [
    'react'
  ],
  function (React) {

    function onCancel(){
      // Important! We need to un-mount the component so it un-registers from Stores and
      // also so that we can relaunch it again later.
      React.unmountComponentAtNode(document.getElementById('modal'));
    }

    return {

      renderModal: function(modal, cb){
        modal.props.onConfirm = cb;
        modal.props.onCancel = onCancel;
        modal.props.handleHidden = onCancel;

        React.renderComponent(modal, document.getElementById('modal'));
      }

    }

  });
