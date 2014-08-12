define(
  [
    'react',
    './CommonHelpers',
    'components/modals/CancelConfirmModal.react',
    'components/modals/InstanceDeleteBody.react'
  ],
  function (React, CommonHelpers, CancelConfirmModal, InstanceDeleteBody) {

    return {

      terminate: function(payload, options){
        if(!options.onConfirm) throw new Error("Must supply options.onConfirm callback");

        var instance = payload.instance;

        var modal = CancelConfirmModal({
          header: "Are you sure you want to terminate this instance?",
          confirmButtonMessage: "Yes, terminate this instance",
          body: InstanceDeleteBody.build(instance),
          onConfirm: options.onConfirm,
          onCancel: CommonHelpers.onCancel,
          handleHidden: CommonHelpers.onCancel
        });

        CommonHelpers.renderComponent(modal);
      }

    };

  });
