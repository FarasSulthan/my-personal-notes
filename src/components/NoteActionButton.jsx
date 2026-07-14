import React from 'react';

function NoteActionButton({ variant, onClick, children }) {
  const classNameMap = {
    delete: 'note-item__delete-button',
    archive: 'note-item__archive-button',
  };

  const testIdMap = {
    delete: 'note-item-delete-button',
    archive: 'note-item-archive-button',
  };

  return (
    <button
      className={classNameMap[variant]}
      type="button"
      onClick={onClick}
      data-testid={testIdMap[variant]}
    >
      {children}
    </button>
  );
}

export default NoteActionButton;
