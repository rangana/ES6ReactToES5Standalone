import React from 'react'
import Player from './Player'

class PlayerWrapper extends React.Component {
    render() {
        return (
            <div>
                <h3>before player</h3>
                <Player />
                <h3>after player</h3>
            </div>
        )
    }


}

export default PlayerWrapper