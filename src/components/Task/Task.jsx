import React from 'react';
import PropTypes from 'prop-types'

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span
                    className="checkbox-custom"
                    onClick={() => onArchiveTask(id)}
                    id={`archiveTask-${id}`}
                    aria-label={`archiveTask-${id}`}
                />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="Input title" style={{background: 'red'}} />
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
                    </a>
                )}
            </div>
        </div>
    );
}

Task.propTypes = {
    /** Composition of the Task */
    task: PropTypes.shape({
    /** Id of the Task */
    id: PropTypes.string.isRequired,
    /** Title of the Task */
       title: PropTypes.string.isRequired,
    /** Current state of the Task */
       state: PropTypes.string.isRequired,
    }),
    /** Event to change the Task to archived */
    onArchiveTask: PropTypes.func,
    /** Event to change the Task to pinned */
     onPinTask: PropTypes.func,
};