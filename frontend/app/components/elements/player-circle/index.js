import React from 'react';

const PlayerCircle = ({name, level}) => {

    return <div className="player-circle">
        <div className="player-circle__container">
            <div className="player-circle__name">
                {name}
            </div>
            <div className="player-circle__text">
                <span>Level - {level}</span>
            </div>
        </div>
    </div>
};

export default PlayerCircle;
