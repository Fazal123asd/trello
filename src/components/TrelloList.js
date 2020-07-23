import React from 'react'
import TrilloCards from './TrilloCards'
import TrelloActionButton from './TrelloActionButton'

export default ({ title, cards }) => {
    const styles = {
        container: {
            background: 'grey',
            borderRadius: 3,
            width: 300,
            height: '100%',
            padding: 8,
            marginRight: 5
            
        }
    }

    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(({id, text}) => <TrilloCards key={id} 
            text={text} />)}
            <TrelloActionButton/>
        </div>

    )
}